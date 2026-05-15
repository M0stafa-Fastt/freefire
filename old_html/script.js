// --- Data Structure ---
const db = {
    ff: { title: "فري فاير", id: "ff", themeColor: "var(--theme-border-ff)" },
    pubg: { title: "ببجي موبايل", id: "pubg", themeColor: "var(--theme-border-pubg)"  },
    tiktok: { title: "تيك توك", id: "tiktok", themeColor: "var(--theme-border-tiktok)" },
    vr: { title: "فايكنج رايز", id: "vr", themeColor: "var(--theme-border-vr)" }
};

const dataItems = {
    ff: [
        { cat: "شحن مباشر بالحساب 📲", amt: "100 جوهرة", price: "50" },
        { cat: "شحن مباشر بالحساب 📲", amt: "200 جوهرة", price: "100" },
        { cat: "شحن مباشر بالحساب 📲", amt: "300 جوهرة", price: "140" },
        { cat: "شحن مباشر بالحساب 📲", amt: "520 جوهرة", price: "220" },
        { cat: "شحن مباشر بالحساب 📲", amt: "1060 جوهرة", price: "410" },
        { cat: "شحن مباشر بالحساب 📲", amt: "2180 جوهرة", price: "800" },
        { cat: "شحن مباشر بالحساب 📲", amt: "5600 جوهرة", price: "1900" },
        { cat: "شحن مباشر بالحساب 📲", amt: "عضوية أسبوعية", price: "90" },
        { cat: "شحن مباشر بالحساب 📲", amt: "عضوية شهرية", price: "410" },
        
        { cat: "شحن عبر كود اللعب 🆔", amt: "100 جوهرة", price: "60" },
        { cat: "شحن عبر كود اللعب 🆔", amt: "210 جوهرة", price: "115" },
        { cat: "شحن عبر كود اللعب 🆔", amt: "310 جوهرة", price: "165" },
        { cat: "شحن عبر كود اللعب 🆔", amt: "520 جوهرة", price: "265" },
        { cat: "شحن عبر كود اللعب 🆔", amt: "1060 جوهرة", price: "525" },
        { cat: "شحن عبر كود اللعب 🆔", amt: "عضوية أسبوعية", price: "135" },
        { cat: "شحن عبر كود اللعب 🆔", amt: "عضوية شهرية", price: "570" }
    ],
    pubg: [
        { cat: "شدات حساب PUBG 🪖", amt: "60 شدة", price: "60" },
        { cat: "شدات حساب PUBG 🪖", amt: "325 شدة", price: "230" },
        { cat: "شدات حساب PUBG 🪖", amt: "660 شدة", price: "440" },
        { cat: "شدات حساب PUBG 🪖", amt: "1800 شدة", price: "1120" },
        { cat: "شدات حساب PUBG 🪖", amt: "3850 شدة", price: "2200" }
    ],
    tiktok: [
        { cat: "أرصدة تيك توك كوينز 🎵", amt: "500 كوين", price: "320" },
        { cat: "أرصدة تيك توك كوينز 🎵", amt: "1000 كوين", price: "600" },
        { cat: "أرصدة تيك توك كوينز 🎵", amt: "2000 كوين", price: "1180" },
        { cat: "أرصدة تيك توك كوينز 🎵", amt: "3000 كوين", price: "1830" },
        { cat: "أرصدة تيك توك كوينز 🎵", amt: "4000 كوين", price: "2350" }
    ],
    vr: [
        { cat: "التوثيق بدون ID 🔓", amt: "500 كريستالة", price: "250" },
        { cat: "التوثيق بدون ID 🔓", amt: "1000 كريستالة", price: "490" },
        { cat: "التوثيق بدون ID 🔓", amt: "2000 كريستالة", price: "980" },
        { cat: "التوثيق بدون ID 🔓", amt: "5000 كريستالة", price: "2450" },
        { cat: "التوثيق بدون ID 🔓", amt: "10000 كريستالة", price: "4850" },
        
        { cat: "التوثيق عبر الـ ID 🆔", amt: "500 كريستالة", price: "290" },
        { cat: "التوثيق عبر الـ ID 🆔", amt: "1000 كريستالة", price: "580" },
        { cat: "التوثيق عبر الـ ID 🆔", amt: "2000 كريستالة", price: "1150" },
        { cat: "التوثيق عبر الـ ID 🆔", amt: "عضوية أسبوعية", price: "125" },
        { cat: "التوثيق عبر الـ ID 🆔", amt: "عضوية شهرية", price: "1150" }
    ]
};

const WA_URL = "https://wa.me/message/22H3KNIOLKVIC1";

document.addEventListener("DOMContentLoaded", () => {
    initSmoothRouting();
});

function initSmoothRouting() {
    const viewCategories = document.getElementById("view-categories");
    const viewPricing = document.getElementById("view-pricing");
    const btnBack = document.getElementById("btn-back");
    const renderTarget = document.getElementById("pricing-render-target");
    const iconHeader = document.getElementById("sel-geo-icon");
    
    if (!viewCategories || !viewPricing) return;

    const cards = document.querySelectorAll(".gaming-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const sysId = card.getAttribute("data-game");
            renderPricing(sysId, renderTarget, iconHeader);
            
            // Fast CSS class swap toggle
            viewCategories.classList.remove("active");
            viewCategories.classList.add("hidden");
            
            setTimeout(() => {
                viewPricing.classList.remove("hidden");
                viewPricing.classList.add("active");
            }, 100);
        });
    });

    btnBack.addEventListener("click", () => {
        viewPricing.classList.remove("active");
        viewPricing.classList.add("hidden");
        
        setTimeout(() => {
            viewCategories.classList.remove("hidden");
            viewCategories.classList.add("active");
        }, 100);
    });
}

function renderPricing(sysId, targetNode, iconHeader) {
    const meta = db[sysId];
    const items = dataItems[sysId];
    if (!meta || !items) return;

    document.getElementById("sel-game-title").textContent = meta.title;
    iconHeader.style.background = meta.themeColor;
    
    targetNode.innerHTML = "";

    // Group items by category naturally
    const grouped = {};
    items.forEach(i => {
        if (!grouped[i.cat]) grouped[i.cat] = [];
        grouped[i.cat].push(i);
    });

    let html = "";
    let delayCounter = 0;
    
    Object.keys(grouped).forEach(catName => {
        html += `
            <div class="pricing-section enter-anim" style="animation-delay: ${delayCounter * 0.1}s">
                <h3 class="section-title">${catName}</h3>
                <div class="scan-grid">
        `;
        
        grouped[catName].forEach(pack => {
            html += `
                <div class="price-row">
                    <div class="item-side">${pack.amt}</div>
                    <div class="price-side">
                        <div class="cost-tag">${pack.price} <span>EGP</span></div>
                        <a href="${WA_URL}" target="_blank" class="btn-buy-mini">شراء</a>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
        delayCounter++;
    });

    targetNode.innerHTML = html;
}
