# 🪙 AUZ - Trang Web Tiền Kỹ Thuật Số

## 📖 Giới thiệu

Trang web chính thức của AUZ - đồng tiền kỹ thuật số miễn phí cho tương lai. AUZ là một hệ sinh thái tài chính phi tập trung (DeFi) tiên tiến, được thiết kế để mọi người đều có thể tham gia mà không cần đầu tư ban đầu.

## ✨ Tính năng

### 🎨 Thiết kế
- **Responsive Design**: Tương thích hoàn hảo với mọi thiết bị
- **Modern UI/UX**: Giao diện hiện đại, thân thiện người dùng
- **Smooth Animations**: Hiệu ứng mượt mà và chuyên nghiệp
- **Optimized Performance**: Tối ưu hóa tốc độ tải trang

### 📱 Các phần chính
- **Hero Section**: Giới thiệu chính về AUZ với thống kê ấn tượng
- **About AUZ**: Giải thích chi tiết về đồng coin và lợi ích
- **How to Get AUZ**: Hướng dẫn 3 bước đơn giản để nhận AUZ
- **Technology**: Công nghệ blockchain đằng sau AUZ
- **Roadmap**: Lộ trình phát triển chi tiết
- **Use Cases**: Các ứng dụng thực tế của AUZ
- **Community**: Liên kết cộng đồng và mạng xã hội
- **Download App**: Kêu gọi tải ứng dụng mobile

## 🚀 Cách sử dụng

### Chạy trực tiếp
1. Mở file `index.html` trong trình duyệt web
2. Trang web sẽ hiển thị với đầy đủ tính năng

### Triển khai lên GitHub Pages
1. Upload toàn bộ files lên repository GitHub của bạn
2. Vào Settings > Pages
3. Chọn source từ main branch
4. Trang web sẽ có sẵn tại `https://username.github.io/repository-name`

### Triển khai lên Netlify
1. Kéo thả folder vào [Netlify Drop](https://app.netlify.com/drop)
2. Hoặc connect với GitHub repository
3. Trang web sẽ được deploy tự động

## 📁 Cấu trúc thư mục

```
auz-website/
├── index.html          # Trang chính
├── style.css           # CSS styling
├── script.js           # JavaScript functionality
├── auz-coin.png        # Logo AUZ coin
└── README.md           # Tài liệu này
```

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc semantic và accessibility
- **CSS3**: 
  - Flexbox & Grid Layout
  - CSS Variables
  - Animations & Transitions
  - Responsive Design
- **JavaScript ES6+**:
  - DOM Manipulation
  - Intersection Observer API
  - Event Listeners
  - Smooth Scrolling
- **Font Awesome**: Icons chuyên nghiệp
- **Google Fonts**: Font Inter hiện đại

## 🎨 Customization

### Thay đổi màu sắc
Chỉnh sửa CSS variables trong file `style.css`:

```css
:root {
    --primary-color: #f59e0b;        /* Màu chính */
    --primary-dark: #d97706;         /* Màu tối */
    --primary-light: #fbbf24;        /* Màu sáng */
    --secondary-color: #1f2937;      /* Màu phụ */
    --accent-color: #3b82f6;         /* Màu nhấn */
}
```

### Thêm nội dung
- Chỉnh sửa text trong file `index.html`
- Thêm sections mới bằng cách copy structure hiện có
- Update navigation menu trong file HTML và JavaScript

### Thay đổi hình ảnh
- Thay thế logo AUZ bằng hình ảnh của bạn
- Update `src` attributes trong HTML
- Đảm bảo tối ưu hóa kích thước file

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px  
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ⚡ Performance

### Tối ưu hóa đã áp dụng:
- CSS minification ready
- Optimized images với compression
- Lazy loading cho images
- Efficient animations với `transform` và `opacity`
- Debounced scroll events

### Để tối ưu thêm:
```bash
# Minify CSS
npx clean-css-cli -o style.min.css style.css

# Minify JavaScript  
npx terser script.js -o script.min.js

# Optimize images
npx imagemin images/* --out-dir=images/optimized
```

## 🔧 Tùy chỉnh nâng cao

### Thêm Google Analytics
Thêm vào `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Thêm Meta Tags cho SEO
```html
<meta name="keywords" content="AUZ, cryptocurrency, DeFi, blockchain, free crypto">
<meta name="author" content="AUZ Team">
<meta property="og:title" content="AUZ - Nắm Giữ Tương Lai Tài Chính">
<meta property="og:description" content="Đồng tiền kỹ thuật số miễn phí cho tương lai">
<meta property="og:image" content="./auz-coin.png">
```

## 🌐 Multi-language Support

Để thêm hỗ trợ đa ngôn ngữ:

1. Tạo thêm các file HTML cho từng ngôn ngữ
2. Sử dụng JavaScript để switch content
3. Hoặc integrate với i18n library

## 📞 Hỗ trợ

Nếu bạn gặp vấn đề hoặc cần hỗ trợ:

- **Email**: info@auzcoin.com
- **Discord**: [AUZ Discord Server](#)
- **Telegram**: [AUZ Official Channel](#)

## 📄 License

Dự án này được phát hành dưới MIT License. Xem file `LICENSE` để biết thêm chi tiết.

## 🤝 Đóng góp

Chúng tôi luôn chào đón các đóng góp! Để contribute:

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 🚀 Deployment Checklist

Trước khi deploy:

- [ ] Test trên multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Kiểm tra responsive trên các devices khác nhau
- [ ] Validate HTML và CSS
- [ ] Test JavaScript functionality
- [ ] Optimize images và assets
- [ ] Setup analytics tracking
- [ ] Configure domain và SSL certificate

## 📈 Roadmap

### v1.1 (Sắp tới)
- [ ] Thêm dark mode
- [ ] Blog section
- [ ] Newsletter signup
- [ ] Language switcher

### v1.2 (Tương lai)
- [ ] CMS integration
- [ ] User authentication
- [ ] Real-time crypto prices
- [ ] Interactive calculator

---

**Được tạo với ❤️ cho cộng đồng AUZ** 