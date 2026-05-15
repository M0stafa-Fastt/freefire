"use client";

import Link from "next/link";
import { useCallback } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { Zap, Shield, Gem } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const GAMES = [
  { key: "ff", title: "فري فاير", icon: "/image/ff.jpg", color: "#00D1FF" },
  { key: "pubg", title: "ببجي موبايل", icon: "/image/pubg.jpg", color: "#00C8FF" },
  { key: "tiktok", title: "تيك توك", icon: "/image/vr.jpg", color: "#FF0066" },
  { key: "vr", title: "فايكنج رايز", icon: "/image/tiktok.jpg", color: "#A200FF" },
];

const TRUST = [
  { Icon: Zap, title: "أسرع شحن", color: "#00C8FF" },
  { Icon: Shield, title: "أمان كامل", color: "#00FF88" },
  { Icon: Gem, title: "أفضل الأسعار", color: "#A855F7" },
];

export default function Home() {
  const rotateXVal = useMotionValue(0);
  const rotateYVal = useMotionValue(0);
  const glareXVal = useMotionValue(50);
  const glareYVal = useMotionValue(50);

  const sp = { stiffness: 40, damping: 25, mass: 1.5 };
  const rotateX = useSpring(rotateXVal, sp);
  const rotateY = useSpring(rotateYVal, sp);
  const glareX = useSpring(glareXVal, { stiffness: 80, damping: 30 });
  const glareY = useSpring(glareYVal, { stiffness: 80, damping: 30 });
  const glareStyle = useMotionTemplate`radial-gradient(600px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.12), transparent 50%)`;

  const onMove = useCallback((e: React.MouseEvent) => {
    const nx = e.clientX / window.innerWidth;
    const ny = e.clientY / window.innerHeight;
    rotateXVal.set((ny - 0.5) * -10);
    rotateYVal.set((nx - 0.5) * 10);
    glareXVal.set(nx * 100);
    glareYVal.set(ny * 100);
  }, [rotateXVal, rotateYVal, glareXVal, glareYVal]);

  const onLeave = useCallback(() => {
    rotateXVal.set(0); rotateYVal.set(0);
    glareXVal.set(50); glareYVal.set(50);
  }, [rotateXVal, rotateYVal, glareXVal, glareYVal]);

  return (
    <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>

      {/* ======== HERO ======== */}
      <section style={{
        position: 'relative', width: '100%', minHeight: 'calc(100vh - 80px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>
            SMART <span style={{ color: 'var(--accent-primary)' }}>STORE</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
            البوابة الأسرع والأكثر أماناً لشحن ألعابك.
          </p>
          <Link href="/recharge" className="hero-btn">
            ابدأ الشحن الآن
          </Link>
        </div>
      </section>

      {/* ======== FEATURED GAMES ======== */}
      <section style={{ padding: '4rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textAlign: 'center', marginBottom: '3rem' }}>الألعاب الأكثر طلباً</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {GAMES.map((game) => (
            <TiltCard key={game.key}>
              <Link href="/recharge">
                <img src={game.icon} alt={game.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{game.title}</h3>
              </Link>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ======== TRUST SECTION ======== */}
      <section style={{ padding: '6rem 5%', maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.5px', lineHeight: 1.4 }}>
            ليه ممكن تسيب الكل وتشحن من <span style={{ color: 'var(--accent-primary)' }}>SMART</span>؟
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.8rem' }}>
          {TRUST.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }} className="trust-card">
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `linear-gradient(135deg, ${item.color}22, ${item.color}08)`, border: `1px solid ${item.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }}>
                <item.Icon size={24} color={item.color} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 900 }}>{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======== BOTTOM CTA ======== */}
      <section style={{ padding: '4rem 5% 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="cta-banner">
          <div style={{ position: 'absolute', width: '500px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(0,200,255,0.08) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '1.2rem' }}>مستعد تكسر الأرقام؟</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 600, maxWidth: '460px', margin: '0 auto 2.5rem' }}>ابدأ شحن حسابك دلوقتي واستمتع بأسرع وأرخص خدمة شحن.</p>
            <Link href="/recharge" className="hero-btn">
              <span>اشحن دلوقتي</span><span style={{ fontSize: '1.3rem' }}>←</span>
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
