// ==========================================
// AUZ Website - Links Configuration
// ==========================================
// Thay thế các URL này bằng liên kết thật khi có sẵn

const AUZ_LINKS = {
    // Download App Links
    app: {
        googlePlay: "https://play.google.com/store/apps/details?id=com.auz.network", // ⚠️ CẦN CẬP NHẬT
        appStore: "https://apps.apple.com/app/auz-network/id123456789", // ⚠️ CẦN CẬP NHẬT
        apkDirect: "https://download.auzcoin.com/auz-network.apk" // ⚠️ CẦN CẬP NHẬT
    },

    // Social Media & Community Links
    social: {
        telegram: "https://t.me/AUZOfficial", // ⚠️ CẦN CẬP NHẬT
        discord: "https://discord.gg/AUZCommunity", // ⚠️ CẦN CẬP NHẬT
        twitter: "https://twitter.com/AUZOfficial", // ⚠️ CẦN CẬP NHẬT
        reddit: "https://reddit.com/r/AUZCoin", // ⚠️ CẦN CẬP NHẬT
        medium: "https://medium.com/@AUZOfficial", // ⚠️ CẦN CẬP NHẬT
        youtube: "http://www.youtube.com/@AUZ-g2s", // ⚠️ CẦN CẬP NHẬT
        facebook: "https://www.facebook.com/share/g/153Ns2PoVJ/", // ⚠️ CẦN CẬP NHẬT
        linkedin: "https://linkedin.com/company/auz-network" // ⚠️ CẦN CẬP NHẬT
    },

    // Official Website Links
    website: {
        main: "https://auzcoin.com", // ⚠️ CẦN CẬP NHẬT
        blog: "https://blog.auzcoin.com", // ⚠️ CẦN CẬP NHẬT
        docs: "https://docs.auzcoin.com", // ⚠️ CẦN CẬP NHẬT
        whitepaper: "https://auzcoin.com/whitepaper.pdf", // ⚠️ CẦN CẬP NHẬT
        explorer: "https://explorer.auzchain.com" // ⚠️ CẦN CẬP NHẬT
    },

    // Support & Contact Links
    support: {
        email: "longgat933@gmail.com", // ⚠️ CẦN CẬP NHẬT EMAIL THẬT
        supportEmail: "auzsup00000@gmail.com", // ⚠️ CẦN CẬP NHẬT EMAIL THẬT
        technicalSupport: "auzsup00000@gmail.", // ⚠️ CẦN CẬP NHẬT
        bugReport: "https://github.com/AUZNetwork/issues" // ⚠️ CẦN CẬP NHẬT
    },

    // Demo & GitHub Links (nếu có)
    demo: {
        dex: "https://dex.auzcoin.com", // ⚠️ CẦN CẬP NHẬT
        staking: "https://staking.auzcoin.com", // ⚠️ CẦN CẬP NHẬT
        governance: "https://governance.auzcoin.com", // ⚠️ CẦN CẬP NHẬT
        github: "https://github.com/AUZNetwork" // ⚠️ CẦN CẬP NHẬT
    }
};

// Function để apply các links vào trang web
function applyLinks() {
    // Download App Buttons
    const googlePlayButtons = document.querySelectorAll('[data-link="google-play"]');
    const appStoreButtons = document.querySelectorAll('[data-link="app-store"]');
    
    googlePlayButtons.forEach(btn => {
        btn.href = AUZ_LINKS.app.googlePlay;
        btn.target = "_blank";
        btn.rel = "noopener noreferrer";
    });
    
    appStoreButtons.forEach(btn => {
        btn.href = AUZ_LINKS.app.appStore;
        btn.target = "_blank";
        btn.rel = "noopener noreferrer";
    });

    // Social Media Links
    Object.keys(AUZ_LINKS.social).forEach(platform => {
        const links = document.querySelectorAll(`[data-link="${platform}"]`);
        links.forEach(link => {
            link.href = AUZ_LINKS.social[platform];
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        });
    });

    // Support Links
    Object.keys(AUZ_LINKS.support).forEach(type => {
        const links = document.querySelectorAll(`[data-link="${type}"]`);
        links.forEach(link => {
            link.href = AUZ_LINKS.support[type];
            if (!type.includes('email')) {
                link.target = "_blank";
                link.rel = "noopener noreferrer";
            }
        });
    });

    // Legal Links
    Object.keys(AUZ_LINKS.legal).forEach(type => {
        const links = document.querySelectorAll(`[data-link="${type}"]`);
        links.forEach(link => {
            link.href = AUZ_LINKS.legal[type];
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        });
    });

    // Demo Links
    Object.keys(AUZ_LINKS.demo).forEach(type => {
        const links = document.querySelectorAll(`[data-link="${type}"]`);
        links.forEach(link => {
            link.href = AUZ_LINKS.demo[type];
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        });
    });
}

// Apply links when DOM is loaded
document.addEventListener('DOMContentLoaded', applyLinks);

// Export cho sử dụng ở nơi khác nếu cần
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AUZ_LINKS;
} 
