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
        <nav className="main-nav">
          {/* Right Side: Logo */}
          <div className="nav-side-right">
            <Link href="/" className="logo-link">
              <img src="/logo/main-logo.png" alt="SMART logo" className="nav-logo" />
            </Link>
          </div>
          
          {/* Middle: Channel & Support */}
          <div className="nav-center-actions">
            <a 
              href="https://whatsapp.com/channel/0029VbAszMJHQbS8UXuJO43r" 
              target="_blank" 
              rel="noreferrer" 
              className="nav-action-btn channel-btn"
            >
              <img src="/logo/main-logo.png" alt="" className="btn-small-logo" />
              <span className="btn-text">قناة الرسمية</span>
            </a>

            <a 
              href="https://wa.me/201096247339?text=السلام عليكم، اريد التواصل مع الدعم الفني" 
              target="_blank" 
              rel="noreferrer" 
              className="nav-action-btn support-btn"
            >
              <span className="btn-icon">🛠️</span>
              <span className="btn-text">الدعم الفني</span>
            </a>
          </div>

          {/* Left Side: Home */}
          <div className="nav-side-left">
            <Link href="/" className="nav-action-btn home-btn">
              <span className="btn-icon">🏠</span>
              <span className="btn-text">الرئيسية</span>
            </Link>
          </div>
        </nav>


        {children}

      </body>
    </html>
  );
}
