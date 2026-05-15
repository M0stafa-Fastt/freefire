"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const DB = {
  ff: { title: "فري فاير", themeRaw: "#FF7B00", icon: "🔥" },
  pubg: { title: "ببجي موبايل", themeRaw: "#00C8FF", icon: "🪖" },
  tiktok: { title: "تيك توك", themeRaw: "#FF0066", icon: "🎵" },
  vr: { title: "فايكنج رايز", themeRaw: "#A200FF", icon: "⚔️" }
};

const ITEMS = {
  ff: [
    { cat: "شحن عن طريق الحساب 📲", amt: "100 جوهرة", price: "50" },
    { cat: "شحن عن طريق الحساب 📲", amt: "200 جوهرة", price: "100" },
    { cat: "شحن عن طريق الحساب 📲", amt: "300 جوهرة", price: "140" },
    { cat: "شحن عن طريق الحساب 📲", amt: "520 جوهرة", price: "220" },
    { cat: "شحن عن طريق الحساب 📲", amt: "1060 جوهرة", price: "410" },
    { cat: "شحن عن طريق الحساب 📲", amt: "2180 جوهرة", price: "800" },
    { cat: "شحن عن طريق الحساب 📲", amt: "5600 جوهرة", price: "1900" },
    { cat: "شحن عن طريق الحساب 📲", amt: "عضوية أسبوعية", price: "90" },
    { cat: "شحن عن طريق الحساب 📲", amt: "عضوية الشهرية", price: "410" },
    { cat: "شحن عن طريق ID 🆔", amt: "100 جوهرة", price: "60" },
    { cat: "شحن عن طريق ID 🆔", amt: "210 جوهرة", price: "115" },
    { cat: "شحن عن طريق ID 🆔", amt: "310 جوهرة", price: "165" },
    { cat: "شحن عن طريق ID 🆔", amt: "520 جوهرة", price: "265" },
    { cat: "شحن عن طريق ID 🆔", amt: "1060 جوهرة", price: "525" },
    { cat: "شحن عن طريق ID 🆔", amt: "عضوية أسبوعية ID", price: "135" },
    { cat: "شحن عن طريق ID 🆔", amt: "عضوية الشهرية ID", price: "570" }
  ],
  pubg: [
    { cat: "شحن عن طريق ID 🪖", amt: "60 شدة", price: "60" },
    { cat: "شحن عن طريق ID 🪖", amt: "325 شدة", price: "230" },
    { cat: "شحن عن طريق ID 🪖", amt: "660 شدة", price: "440" },
    { cat: "شحن عن طريق ID 🪖", amt: "1800 شدة", price: "1120" },
    { cat: "شحن عن طريق ID 🪖", amt: "3850 شدة", price: "2200" }
  ],
  tiktok: [
    { cat: "شحن كوينز تيك توك 🎵", amt: "500 كوين", price: "320" },
    { cat: "شحن كوينز تيك توك 🎵", amt: "1000 كوين", price: "600" },
    { cat: "شحن كوينز تيك توك 🎵", amt: "2000 كوين", price: "1180" },
    { cat: "شحن كوينز تيك توك 🎵", amt: "3000 كوين", price: "1830" },
    { cat: "شحن كوينز تيك توك 🎵", amt: "4000 كوين", price: "2350" }
  ],
  vr: [
    { cat: "التوثيق 🔓", amt: "500 كريستالة", price: "250" },
    { cat: "التوثيق 🔓", amt: "1000 كريستالة", price: "490" },
    { cat: "التوثيق 🔓", amt: "2000 كريستالة", price: "980" },
    { cat: "التوثيق 🔓", amt: "5000 كريستالة", price: "2450" },
    { cat: "التوثيق 🔓", amt: "10000 كريستالة", price: "4850" },
    { cat: "التوثيق عبر الـ ID 🆔", amt: "500 كريستالة", price: "290" },
    { cat: "التوثيق عبر الـ ID 🆔", amt: "1000 كريستالة", price: "580" },
    { cat: "التوثيق عبر الـ ID 🆔", amt: "2000 كريستالة", price: "1150" },
    { cat: "التوثيق عبر الـ ID 🆔", amt: "عضوية أسبوعية", price: "125" },
    { cat: "التوثيق عبر الـ ID 🆔", amt: "عضوية شهرية", price: "1150" }
  ]
};

export default function RechargeHub() {
  const [selectedGame, setSelectedGame] = useState<keyof typeof DB | null>(null);

  const containerV = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } } };
  const cardV = { hidden: { opacity: 0, y: 20, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 120, damping: 20 } } };

  return (
    <main style={{ padding: '5rem 5% 4rem', maxWidth: '1200px', margin: '0 auto', minHeight: 'calc(100vh - 100px)' }}>
      <AnimatePresence mode="wait">
        {!selectedGame ? (
          <motion.div key="categories"
            initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 900, marginBottom: '0.5rem', letterSpacing: '-1px' }}>اختار اللعبة</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 600 }}>بوابتك السريعة لجميع باقات الشحن.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', placeItems: 'center' }}>
              {(Object.keys(DB) as Array<keyof typeof DB>).map((key) => (
                <div key={key} style={{ height: '280px', width: '100%', maxWidth: '300px' }}>
                  <TiltCard themeColor={DB[key].themeRaw} onClick={() => setSelectedGame(key)}>
                    <div style={{
                      transform: 'translateZ(40px)', fontSize: '3.5rem', marginBottom: '1rem',
                      filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.5))'
                    }}>
                      {DB[key].icon}
                    </div>
                    <h3 style={{ transform: 'translateZ(20px)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--text-white)' }}>{DB[key].title}</h3>
                  </TiltCard>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div key="pricing"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }} className="hub-header-flex">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', order: 2 }}>
                <span style={{ fontSize: '2rem' }}>{DB[selectedGame].icon}</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, lineHeight: 1 }}>{DB[selectedGame].title}</h2>
                <div style={{ width: '10px', height: '36px', borderRadius: '5px', background: DB[selectedGame].themeRaw, boxShadow: `0 0 16px ${DB[selectedGame].themeRaw}40` }} />
              </div>
              <button onClick={() => setSelectedGame(null)} className="back-btn" style={{ order: 1 }}>
                <span style={{ fontSize: '1.1rem' }}>→</span> رجوع للألعاب
              </button>
            </div>

            {/* FROSTED CONTAINER */}
            <div className="frosted-container">
              {/* Ambient Glow */}
              <div style={{
                position: 'absolute', width: '550px', height: '550px',
                top: '5%', left: '50%', transform: 'translateX(-50%)',
                background: `radial-gradient(circle, ${DB[selectedGame].themeRaw}15 0%, transparent 60%)`,
                filter: 'blur(100px)', pointerEvents: 'none', transition: 'background 0.8s ease'
              }} />

              <motion.div variants={containerV} initial="hidden" animate="visible" style={{ position: 'relative', zIndex: 1 }}>
                {Object.entries(
                  ITEMS[selectedGame].reduce((acc, cur) => {
                    if (!acc[cur.cat]) acc[cur.cat] = [];
                    acc[cur.cat].push(cur);
                    return acc;
                  }, {} as Record<string, typeof ITEMS[keyof typeof ITEMS]>)
                ).map(([catName, packs]) => (
                  <div key={catName} style={{ marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.2rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
                      <span style={{ padding: '0.35rem 1rem', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', background: 'rgba(255,255,255,0.02)', fontSize: '0.95rem', whiteSpace: 'nowrap' }}>{catName}</span>
                    </h3>
                    <div className="pricing-grid">
                      {packs.map((pack, i) => (
                        <motion.div key={i} variants={cardV} className="pricing-card">
                          <div className="pack-amount">{pack.amt}</div>
                          <div className="pack-price" style={{ color: DB[selectedGame].themeRaw, textShadow: `0 0 16px ${DB[selectedGame].themeRaw}30` }}>
                            {pack.price}
                            <span className="currency">جنية</span>
                          </div>
                          <a href="https://wa.me/message/22H3KNIOLKVIC1" target="_blank" rel="noreferrer" className="pack-buy"
                            style={{ background: DB[selectedGame].themeRaw, boxShadow: `0 4px 12px ${DB[selectedGame].themeRaw}25` }}>
                            طلب الشحن
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
