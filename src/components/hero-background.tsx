"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const TOTAL_FRAMES = 569;
const PAD = 4;
const MOBILE_BREAKPOINT = 768;
// Load first few frames immediately for fast first paint, rest in background
const PRIORITY_FRAMES = 10;

const frameUrls = Array.from(
  { length: TOTAL_FRAMES },
  (_, i) => `/frames/frame-${String(i + 1).padStart(PAD, "0")}.jpg`
);

export function HeroBackground() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef(0);
  const currentProgressRef = useRef(0);
  const targetProgressRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }, []);

  // Two-phase loading: priority frames first, then the rest
  useEffect(() => {
    if (isMobile) return;

    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let priorityLoaded = 0;

    // Phase 1: Load priority frames — reveal site as soon as these are ready
    for (let i = 0; i < PRIORITY_FRAMES && i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = frameUrls[i];
      img.onload = () => {
        priorityLoaded++;
        if (priorityLoaded === PRIORITY_FRAMES) {
          imagesRef.current = images;
          setLoaded(true);
          // Phase 2: Load remaining frames in background after reveal
          loadRemainingFrames(images);
        }
      };
      images[i] = img;
    }

    function loadRemainingFrames(imgs: HTMLImageElement[]) {
      // Load in small batches to avoid network congestion
      const BATCH = 20;
      let idx = PRIORITY_FRAMES;

      function loadBatch() {
        const end = Math.min(idx + BATCH, TOTAL_FRAMES);
        for (let i = idx; i < end; i++) {
          const img = new Image();
          img.src = frameUrls[i];
          imgs[i] = img;
        }
        idx = end;
        if (idx < TOTAL_FRAMES) {
          setTimeout(loadBatch, 50);
        }
      }
      loadBatch();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile || !loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let canvasW = 0;
    let canvasH = 0;

    const sizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvasW = Math.round(rect.width * dpr);
      canvasH = Math.round(rect.height * dpr);
      if (canvas.width !== canvasW || canvas.height !== canvasH) {
        canvas.width = canvasW;
        canvas.height = canvasH;
      }
    };

    const drawImage = (img: HTMLImageElement, alpha: number) => {
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const cRatio = canvasW / canvasH;
      let dw, dh, dx, dy;

      if (cRatio > imgRatio) {
        dw = canvasW;
        dh = canvasW / imgRatio;
        dx = 0;
        dy = (canvasH - dh) / 2;
      } else {
        dh = canvasH;
        dw = canvasH * imgRatio;
        dx = (canvasW - dw) / 2;
        dy = 0;
      }

      ctx.globalAlpha = alpha;
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.globalAlpha = 1;
    };

    const drawAtProgress = (p: number) => {
      const exact = p * (TOTAL_FRAMES - 1);
      const a = Math.floor(exact);
      const b = Math.min(a + 1, TOTAL_FRAMES - 1);
      const blend = exact - a;

      const imgA = imagesRef.current[a];
      const imgB = imagesRef.current[b];
      if (!imgA) return;

      drawImage(imgA, 1);
      if (blend > 0.005 && imgB && a !== b) {
        drawImage(imgB, blend);
      }
    };

    sizeCanvas();
    drawAtProgress(0);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      const prev = currentProgressRef.current;
      const target = targetProgressRef.current;
      const diff = Math.abs(target - prev);

      if (diff > 0.00001) {
        const t = diff > 0.05 ? 0.18 : diff > 0.01 ? 0.1 : 0.06;
        currentProgressRef.current = lerp(prev, target, t);
        drawAtProgress(currentProgressRef.current);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const unsubscribe = scrollYProgress.on("change", (v) => {
      targetProgressRef.current = v;
    });

    rafRef.current = requestAnimationFrame(tick);

    const onResize = () => {
      sizeCanvas();
      drawAtProgress(currentProgressRef.current);
    };
    window.addEventListener("resize", onResize);

    return () => {
      unsubscribe();
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [isMobile, loaded, scrollYProgress]);

  // Mobile: static first frame
  if (isMobile) {
    return (
      <div ref={sectionRef} className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${frameUrls[0]})` }}
        />
        <div className="absolute inset-0 bg-background/60 dark:bg-background/70" />
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <canvas ref={canvasRef} className="h-full w-full" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/60 dark:bg-background/70" />
      </motion.div>

      {/* Smooth fade-in once all frames are loaded */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 z-20 bg-gradient-to-br from-primary/15 via-background to-accent/10"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
