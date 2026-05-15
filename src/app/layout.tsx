import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMART | أسرع شحن ألعاب",
  description: "البوابة الرقمية الأولى لشحن الألعاب في مصر بطريقة آمنة وسريعة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="cyber-ambient">
          <div className="glow-sphere top-right"></div>
          <div className="glow-sphere bottom-left"></div>
        </div>
        
        {/* Global Navigation */}
        <nav style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.5rem 6%', position: 'sticky', top: 0, zIndex: 100,
          background: 'rgba(5, 7, 10, 0.8)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
          <Link href="/" style={{
            fontFamily: 'var(--font-en)', fontSize: '1.8rem', fontWeight: 900,
            letterSpacing: '2px', display: 'flex', alignItems: 'baseline', gap: '4px'
          }}>
            SMART<span style={{ width: '8px', height: '8px', background: 'var(--accent-electric)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px var(--accent-electric)' }}></span>
          </Link>
          <Link href="/" className="nav-btn">
            الرئيسية
          </Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
