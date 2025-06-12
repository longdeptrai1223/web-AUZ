# 🔗 Hướng Dẫn Cập Nhật Links - AUZ Website

## 📋 Tổng quan

Trang web AUZ đã được thiết kế với hệ thống link placeholder thông minh. Tất cả các liên kết được quản lý tập trung trong file `links-config.js`. Khi bạn có các liên kết thật, chỉ cần cập nhật file này.

## 🎯 Cách cập nhật Links

### Bước 1: Mở file `links-config.js`

File này chứa tất cả các liên kết được chia thành các nhóm:

```javascript
const AUZ_LINKS = {
    app: { ... },           // Links tải ứng dụng
    social: { ... },        // Links mạng xã hội
    website: { ... },       // Links website chính thức
    support: { ... },       // Links hỗ trợ
    legal: { ... },         // Links pháp lý
    demo: { ... }           // Links demo/GitHub
};
```

### Bước 2: Thay thế URLs

Tìm dòng có comment `⚠️ CẦN CẬP NHẬT` và thay thế bằng liên kết thật:

#### 📱 **Download App Links:**
```javascript
app: {
    googlePlay: "https://play.google.com/store/apps/details?id=YOUR_REAL_APP_ID",
    appStore: "https://apps.apple.com/app/YOUR_REAL_APP_NAME/idREAL_APP_ID",
    apkDirect: "https://your-domain.com/download/auz-network.apk"
}
```

#### 🌐 **Social Media Links:**
```javascript
social: {
    telegram: "https://t.me/YOUR_REAL_TELEGRAM_CHANNEL",
    discord: "https://discord.gg/YOUR_REAL_DISCORD_INVITE",
    twitter: "https://twitter.com/YOUR_REAL_TWITTER_HANDLE",
    reddit: "https://reddit.com/r/YOUR_REAL_SUBREDDIT",
    medium: "https://medium.com/@YOUR_REAL_MEDIUM_ACCOUNT",
    youtube: "https://youtube.com/@YOUR_REAL_YOUTUBE_CHANNEL"
}
```

#### 🏢 **Website Links:**
```javascript
website: {
    main: "https://your-real-domain.com",
    blog: "https://blog.your-real-domain.com",
    docs: "https://docs.your-real-domain.com",
    whitepaper: "https://your-real-domain.com/whitepaper.pdf",
    explorer: "https://explorer.your-real-blockchain.com"
}
```

#### 📞 **Support Links:**
```javascript
support: {
    email: "mailto:your-real-email@domain.com",
    supportEmail: "mailto:support@your-real-domain.com",
    technicalSupport: "https://support.your-real-domain.com",
    bugReport: "https://github.com/YOUR_REAL_GITHUB_REPO/issues"
}
```

## 🗂️ Danh sách đầy đủ các vị trí có Links

### 📲 **Download App Buttons** (4 vị trí)
1. **Hero Section** - 2 buttons chính
2. **How-to Section** - 2 buttons trong bước 1
3. **Download Section** - 2 buttons lớn cuối trang

### 🤝 **Community Links** (12 vị trí)
1. **Community Section** - 6 cards lớn
2. **Footer Links** - 4 links text
3. **Footer Social** - 6 icons nhỏ

### ⚖️ **Legal Links** (3 vị trí)
1. **Footer Legal Section** - Privacy, Terms, Cookies

### 📧 **Contact Links** (3 vị trí)
1. **Footer Contact Section** - Email, Support, Bug Report

## 🎨 Visual Preview các vị trí Links

```
┌─────────────────────────────────────────┐
│ 🏠 NAVIGATION BAR                       │
│ [Logo] AUZ [Menu Items...]              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 🦸 HERO SECTION                         │
│ "AUZ: Nắm Giữ Tương Lai..."             │
│ [📱 Tải ứng dụng] [ℹ️ Tìm hiểu thêm]    │
│ [100% Miễn phí] [24/7 Claim] [0 Phí]   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 🛠️ HOW-TO SECTION                       │
│ Bước 1: Tải Ứng Dụng                   │
│ [📱 Google Play] [🍎 App Store]         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 👥 COMMUNITY SECTION                    │
│ [📱 Telegram] [💬 Discord] [🐦 Twitter] │
│ [🤖 Reddit] [📝 Medium] [📺 YouTube]    │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 📱 DOWNLOAD APP SECTION                 │
│ [📱 Tải trên Google Play]               │
│ [🍎 Tải trên App Store]                 │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 🦶 FOOTER SECTION                       │
│ Links: Community | Legal | Contact      │
│ Social Icons: 📱💬🐦🤖📝📺             │
└─────────────────────────────────────────┘
```

## ⚡ Quick Update Checklist

Sau khi có liên kết thật, cập nhật theo thứ tự ưu tiên:

### 🔥 **Priority 1 - Essential Links:**
- [ ] Google Play Store URL
- [ ] Apple App Store URL  
- [ ] Main Telegram Channel
- [ ] Official Discord Server
- [ ] Primary Twitter Account

### 🔗 **Priority 2 - Important Links:**
- [ ] Reddit Community
- [ ] Medium Blog
- [ ] YouTube Channel
- [ ] Support Email
- [ ] Main Website

### 📄 **Priority 3 - Legal & Others:**
- [ ] Privacy Policy
- [ ] Terms of Service
- [ ] Cookie Policy
- [ ] Technical Support
- [ ] Bug Report System

## 🧪 Test sau khi cập nhật

1. **Mở file `index.html`** trong browser
2. **Click test tất cả buttons** để đảm bảo links hoạt động
3. **Kiểm tra mobile responsive** - test trên điện thoại
4. **Verify external links** mở đúng trong tab mới

## ⚠️ Lưu ý quan trọng

- **Luôn test links** trước khi deploy
- **Backup file cũ** trước khi thay đổi
- **Kiểm tra typos** trong URLs
- **Đảm bảo HTTPS** cho tất cả links
- **Mobile-friendly** - test trên điện thoại

## 🔄 Auto-update Process

File `links-config.js` sẽ tự động:
- ✅ Apply các links vào HTML khi trang load
- ✅ Set `target="_blank"` cho external links  
- ✅ Add `rel="noopener noreferrer"` cho security
- ✅ Handle email links correctly

## 📱 Example: Cập nhật Real Links

```javascript
// TRƯỚC (placeholder):
telegram: "https://t.me/AUZOfficial", // ⚠️ CẦN CẬP NHẬT

// SAU (real link):
telegram: "https://t.me/auz_network_official", // ✅ LINK THẬT
```

---

**💡 Tip:** Sau khi cập nhật, save file và refresh browser. Tất cả links sẽ tự động được áp dụng! 