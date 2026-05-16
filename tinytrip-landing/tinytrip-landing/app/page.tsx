"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on mouse move
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 18;
      const y = (e.clientY / innerHeight - 0.5) * 12;
      container.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white px-6">
      {/* Background mesh */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        {/* Coral blob */}
        <div
          className="absolute rounded-full animate-pulse2"
          style={{
            width: "520px",
            height: "520px",
            top: "-160px",
            right: "-100px",
            background:
              "radial-gradient(circle, rgba(255,107,107,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Yellow blob */}
        <div
          className="absolute rounded-full animate-pulse2"
          style={{
            width: "420px",
            height: "420px",
            bottom: "-100px",
            left: "-80px",
            background:
              "radial-gradient(circle, rgba(255,184,77,0.11) 0%, transparent 70%)",
            filter: "blur(40px)",
            animationDelay: "1.2s",
          }}
        />
        {/* Mint blob */}
        <div
          className="absolute rounded-full animate-pulse2"
          style={{
            width: "360px",
            height: "360px",
            bottom: "10%",
            right: "5%",
            background:
              "radial-gradient(circle, rgba(76,175,125,0.09) 0%, transparent 70%)",
            filter: "blur(40px)",
            animationDelay: "0.6s",
          }}
        />
        {/* Purple blob */}
        <div
          className="absolute rounded-full animate-pulse2"
          style={{
            width: "300px",
            height: "300px",
            top: "15%",
            left: "5%",
            background:
              "radial-gradient(circle, rgba(139,107,255,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
            animationDelay: "1.8s",
          }}
        />
      </div>

      {/* Scattered sparkles */}
      <Sparkles />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Logo — floats gently */}
        <div
          ref={containerRef}
          className="animate-float mb-2"
          style={{ transition: "transform 0.15s ease-out" }}
        >
          <Image
            src="/logo.png"
            alt="TinyTrip"
            width={480}
            height={320}
            priority
            className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] h-auto select-none"
            style={{ userSelect: "none", WebkitUserDrag: "none" } as React.CSSProperties}
          />
        </div>

        {/* Headline */}
        <h1
          className="font-poppins font-800 text-3xl sm:text-4xl md:text-5xl text-navy leading-tight tracking-tight mb-4 anim-hidden animate-fade-up delay-200"
          style={{
            fontFamily: "var(--font-poppins)",
            fontWeight: 800,
            color: "#14213D",
            letterSpacing: "-0.5px",
          }}
        >
          Big smiles.{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #FF6B6B 0%, #FFB84D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Little adventures.
          </span>{" "}
          Together.
        </h1>

        {/* Subline */}
        <p
          className="anim-hidden animate-fade-up delay-300 mb-10 text-base sm:text-lg"
          style={{
            color: "#637088",
            fontFamily: "var(--font-dm)",
            fontWeight: 400,
            lineHeight: 1.7,
            maxWidth: "400px",
          }}
        >
          Launching soon across Greece.
        </p>

        {/* CTA */}
        <div className="anim-hidden animate-fade-up delay-400">
          <button
            disabled
            className="relative group cursor-default select-none"
            aria-label="Coming soon"
          >
            <span
              className="flex items-center gap-2 px-8 py-4 rounded-full font-poppins font-700 text-base sm:text-lg text-white"
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 700,
                background:
                  "linear-gradient(135deg, #FF6B6B 0%, #FF8E42 50%, #FFB84D 100%)",
                boxShadow:
                  "0 4px 24px rgba(255, 107, 107, 0.35), 0 1px 3px rgba(255,107,107,0.2)",
                letterSpacing: "0.02em",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.7)",
                  animation: "pulse 2s ease-in-out infinite",
                  flexShrink: 0,
                }}
              />
              Coming Soon
            </span>
          </button>
        </div>

        {/* Greece flag note */}
        <p
          className="anim-hidden animate-fade-up delay-500 mt-8 text-sm"
          style={{ color: "#9EAEC2", fontWeight: 500 }}
        >
          🇬🇷 Made with love for Greek families
        </p>
      </div>

      {/* Bottom wordmark / footer */}
      <div
        className="absolute bottom-6 left-0 right-0 flex justify-center anim-hidden animate-fade-in delay-700"
        style={{ color: "#C8D0DC", fontSize: "12px", fontWeight: 500 }}
      >
        © 2025 TinyTrip
      </div>
    </main>
  );
}

/* Scattered sparkle dots */
function Sparkles() {
  const sparkles = [
    { top: "12%", left: "8%", color: "#FFB84D", size: 6, delay: "0s" },
    { top: "18%", left: "88%", color: "#FF6B6B", size: 5, delay: "0.5s" },
    { top: "35%", left: "4%", color: "#4CAF7D", size: 4, delay: "1s" },
    { top: "72%", left: "92%", color: "#8B6BFF", size: 6, delay: "0.3s" },
    { top: "80%", left: "10%", color: "#5B8DEF", size: 5, delay: "0.8s" },
    { top: "55%", left: "95%", color: "#FFB84D", size: 4, delay: "1.4s" },
    { top: "90%", left: "75%", color: "#FF6B6B", size: 5, delay: "0.2s" },
    { top: "8%", left: "55%", color: "#4CAF7D", size: 4, delay: "1.1s" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-pulse2"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: s.color,
            opacity: 0.55,
            animationDelay: s.delay,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
}
