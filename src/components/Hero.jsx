import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-[70vh] w-[120vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.25),rgba(59,130,246,0.2),rgba(251,146,60,0.1)_70%)] blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:py-24 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:px-8">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Live AI automations for modern teams
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Automate. Optimize. Scale.
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Taskmation builds end‑to‑end AI systems that take work off your plate: AI chatbots, voice calling agents, and custom workflow automations that plug directly into your stack.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a id="demo" href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90">
              Book a demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10">
              Explore solutions
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-white/60">
            <div>
              <span className="font-semibold text-white">24/7</span> AI agents
            </div>
            <div>
              <span className="font-semibold text-white">Days</span> to launch
            </div>
            <div>
              <span className="font-semibold text-white">ROI</span> within weeks
            </div>
          </div>
        </div>

        <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0" />
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
