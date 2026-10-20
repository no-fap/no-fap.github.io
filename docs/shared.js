import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const app = initializeApp({
  apiKey: "AIzaSyDT_eCcjjwc9k9dBjFUIOLcW3kJuWWzjq8",
  authDomain: "no-fap-addiction-remover.firebaseapp.com",
  projectId: "no-fap-addiction-remover",
  storageBucket: "no-fap-addiction-remover.firebasestorage.app",
  messagingSenderId: "534202646830",
  appId: "1:534202646830:web:04c0098a3ed15ed1d4fabf"
});

export const auth = getAuth(app), db = getFirestore(app);
export const $ = id => document.getElementById(id);
export const hideLoader = (ms = 400) => setTimeout(() => $('global-loader')?.classList.add('hidden'), ms);

// Local-device date string (YYYY-MM-DD)
export const dateStr = (d = new Date()) => new Date(d - d.getTimezoneOffset() * 6e4).toISOString().split('T')[0];

const SUN_SVG = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
const MOON_SVG = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

export function initTheme(btn) {
  const html = document.documentElement;
  const set = t => {
    html.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t); } catch {}
    if (btn) {
      btn.innerHTML = t === 'dark' ? SUN_SVG : MOON_SVG;
      btn.setAttribute('title', t === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    }
  };
  let t = 'dark';
  try { t = localStorage.getItem('theme') || 'dark'; } catch {}
  set(t);
  btn?.addEventListener('click', () => set(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
}

export const loaderHTML = '<div id="global-loader" class="glass-loader"><div class="loader-spinner"></div><h2 class="loader-text">Loading...</h2></div>';
