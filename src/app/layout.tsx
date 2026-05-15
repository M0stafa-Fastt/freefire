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
        <div className="cyber-ambient" style={{ zIndex: -1 }}>
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
            display: 'flex', alignItems: 'center', transition: '0.3s ease'
          }} className="logo-container">
            <img 
              src="/logo/main-logo.png" 
              alt="SMART logo" 
              style={{ height: '50px', width: 'auto', filter: 'drop-shadow(0 0 12px rgba(0,200,255,0.3))' }} 
            />
          </Link>
          <Link href="/" className="nav-btn">
            الرئيسية
          </Link>
        </nav>

        {children}

        {/* Floating Action Buttons */}
        <div className="fab-stack">
          {/* WhatsApp Channel FAB */}
          <a 
            href="https://whatsapp.com/channel/0029VbAszMJHQbS8UXuJO43r" 
            target="_blank" 
            rel="noreferrer"
            className="wa-fab channel-fab"
          >
            <div className="fab-icon-container">
              <img src="/logo/main-logo.png" alt="SMART" className="fab-logo" />
            </div>
            <div className="fab-tooltip">القناه</div>
          </a>

          {/* Technical Support FAB */}
          <a 
            href="https://wa.me/201096247339?text=السلام عليكم، اريد التواصل مع الدعم الفني" 
            target="_blank" 
            rel="noreferrer"
            className="wa-fab support-fab"
          >
            <div className="fab-icon-container">
              <span style={{ fontSize: '1.4rem' }}>🛠️</span>
            </div>
            <div className="fab-tooltip">للدعم الفني</div>
          </a>
        </div>
      </body>
    </html>
  );
}
