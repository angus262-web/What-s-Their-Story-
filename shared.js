// =============================================
// WHAT'S THEIR STORY? — Shared Components
// =============================================

const SITE_NAME = "What's Their Story?";
const SITE_EMAIL = "hello@whatstheirstory.com"; // UPDATE THIS
const SITE_URL = "https://whatstheirstory.com"; // UPDATE THIS

function renderNav(activePage = '') {
  return `
  <nav>
    <a href="index.html" class="nav-logo">
      <span>🕵️</span> What's Their Story?
    </a>
    <ul class="nav-links">
      <li><a href="index.html" ${activePage==='home'?'style="color:var(--tangerine)"':''}>Home</a></li>
      <li><a href="app.html" ${activePage==='app'?'style="color:var(--tangerine)"':''}>Play Now</a></li>
      <li><a href="contact.html" ${activePage==='contact'?'style="color:var(--tangerine)"':''}>Contact</a></li>
    </ul>
  </nav>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="logo">🕵️ What's Their Story?</div>
          <p>The fun people-watching app for your daily commute. Observe, answer, reveal!</p>
        </div>
        <div class="footer-links">
          <h4>Pages</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="app.html">Play Now</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms of Service</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${year} What's Their Story? All rights reserved.</span>
        <span>Made with ☕ for commuters everywhere</span>
      </div>
    </div>
  </footer>`;
}

function renderCookieBanner() {
  return `
  <div id="cookie-banner">
    <p>🍪 We use cookies to improve your experience and serve personalised ads via Google AdSense. 
       See our <a href="privacy.html">Privacy Policy</a> for details.</p>
    <div class="cookie-btns">
      <button class="btn-decline" onclick="setCookieChoice(false)">Decline</button>
      <button class="btn-accept" onclick="setCookieChoice(true)">Accept All</button>
    </div>
  </div>`;
}

function setCookieChoice(accepted) {
  localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined');
  document.getElementById('cookie-banner').style.transform = 'translateY(100%)';
}

function initCookieBanner() {
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) {
    setTimeout(() => {
      const banner = document.getElementById('cookie-banner');
      if (banner) banner.classList.add('visible');
    }, 1200);
  }
}

// Inject shared components
document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  const cookieEl = document.getElementById('cookie-placeholder');
  const activePage = document.body.dataset.page || '';

  if (navEl) navEl.outerHTML = renderNav(activePage);
  if (footerEl) footerEl.outerHTML = renderFooter();
  if (cookieEl) cookieEl.outerHTML = renderCookieBanner();

  initCookieBanner();
});
