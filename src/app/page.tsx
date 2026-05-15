"use client";

import Link from "next/link";
import { useCallback } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { Zap, Shield, Gem } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const GAMES = [
  { key: "ff", title: "فري فاير", icon: "🔥", color: "#FF7B00" },
  { key: "pubg", title: "ببجي موبايل", icon: "🪖", color: "#00C8FF" },
  { key: "tiktok", title: "تيك توك", icon: "🎵", color: "#FF0066" },
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

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, -80]);

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
    <main onMouseMove={onMove} onMouseLeave={onLeave}>

      {/* ======== HERO ======== */}
      <motion.section style={{
        opacity: heroOpacity, y: heroY,
        position: 'relative', width: '100%', minHeight: 'calc(100vh - 80px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        perspective: '1200px', overflow: 'hidden'
      }}>
        {/* Ambient glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', width: '900px', height: '900px', background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 55%)', filter: 'blur(130px)', pointerEvents: 'none' }}
        />
        {/* Secondary purple glow */}
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', width: '600px', height: '600px', top: '20%', left: '15%', background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 60%)', filter: 'blur(120px)', pointerEvents: 'none' }}
        />

        {/* 3D SMART CARD */}
        <motion.div style={{
          rotateX, rotateY,
          position: 'absolute', transformStyle: 'preserve-3d', zIndex: 0,
          width: 'clamp(320px, 52vw, 580px)', height: 'clamp(210px, 33vw, 370px)',
        }}>
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '24px',
            background: 'linear-gradient(145deg, rgba(16,22,38,0.92) 0%, rgba(6,9,15,0.96) 100%)',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 100px rgba(0,200,255,0.06), inset 0 1px 0 rgba(255,255,255,0.04)',
            backdropFilter: 'blur(30px)', overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '24px', right: '28px', fontFamily: 'var(--font-en)', fontSize: '0.9rem', fontWeight: 900, color: 'rgba(255,255,255,0.06)', letterSpacing: '3px' }}>SMART™</div>
            <div style={{ position: 'absolute', bottom: '28px', left: '28px', right: '28px', height: '1px', background: 'linear-gradient(90deg, rgba(0,200,255,0.2) 0%, rgba(124,58,237,0.1) 50%, transparent 100%)' }} />
            <div style={{ position: 'absolute', bottom: '46px', left: '28px', width: '50px', height: '34px', border: '1px solid rgba(0,200,255,0.1)', borderRadius: '6px' }} />
            <div style={{ position: 'absolute', bottom: '28px', right: '28px', display: 'flex', gap: '10px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.1)' }}>
              <span>FF</span><span>·</span><span>PUBG</span><span>·</span><span>TT</span><span>·</span><span>VR</span>
            </div>
          </div>
          <motion.div animate={{ translateZ: [20, 40, 20] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: 'absolute', inset: '14%', borderRadius: '16px', border: '1px solid rgba(124,58,237,0.06)', background: 'linear-gradient(135deg, rgba(0,200,255,0.02) 0%, transparent 100%)', transform: 'translateZ(20px)' }} />
          <motion.div animate={{ translateZ: [40, 70, 40], scale: [0.9, 1.1, 0.9] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: 'absolute', width: '6px', height: '6px', top: '50%', left: '50%', marginTop: '-3px', marginLeft: '-3px', background: '#FFF', borderRadius: '50%', boxShadow: '0 0 25px rgba(0,200,255,0.5), 0 0 50px rgba(0,200,255,0.2)', transform: 'translateZ(40px)' }} />
          <motion.div style={{ position: 'absolute', inset: 0, borderRadius: '24px', background: glareStyle, pointerEvents: 'none', zIndex: 10, mixBlendMode: 'overlay' as const }} />
        </motion.div>

        {/* TEXT */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', padding: '0 5%' }}>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(4rem, 10vw, 7.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: '1.2rem', background: 'linear-gradient(180deg, #FFFFFF 30%, #5A6A7E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.9))' }}>
            SMART <span style={{ WebkitTextFillColor: 'var(--accent-primary)', filter: 'drop-shadow(0 0 20px rgba(0,200,255,0.3))' }}>STORE</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: 'rgba(255,255,255,0.7)', fontWeight: 700, lineHeight: 1.7, maxWidth: '460px', margin: '0 auto 2.8rem', textShadow: '0 4px 12px rgba(0,0,0,0.7)' }}>
            البوابة الأسرع والأكثر أماناً لشحن ألعابك.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <Link href="/recharge" className="hero-btn">
              <span>ابدأ الشحن الآن</span><span style={{ fontSize: '1.3rem' }}>←</span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ======== FEATURED GAMES ======== */}
      <section style={{ padding: '8rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 900, letterSpacing: '-1px', marginBottom: '0.8rem' }}>الألعاب الأكثر طلباً</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 600 }}>اختار لعبتك المفضلة وابدأ الشحن في ثواني.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', placeItems: 'center' }}>
          {GAMES.map((game, i) => (
            <motion.div key={game.key} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ height: '280px', width: '100%', maxWidth: '320px' }}>
              <Link href="/recharge" style={{ display: 'block', height: '100%' }}>
                <TiltCard themeColor={game.color}>
                  <div style={{ transform: 'translateZ(30px)', fontSize: '3rem', marginBottom: '0.8rem' }}>{game.icon}</div>
                  <h3 style={{ transform: 'translateZ(20px)', fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-white)' }}>{game.title}</h3>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======== TRUST SECTION ======== */}
      <section style={{ padding: '6rem 5%', maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
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
