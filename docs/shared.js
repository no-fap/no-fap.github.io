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
export const hideLoader = (ms = 400) => setTimeout(() => $('global-loader').classList.add('hidden'), ms);
// Local-device date string (YYYY-MM-DD)
export const dateStr = (d = new Date()) => new Date(d - d.getTimezoneOffset() * 6e4).toISOString().split('T')[0];
export function initTheme(btn) {
  const html = document.documentElement, set = t => { html.setAttribute('data-theme', t); try { localStorage.setItem('theme', t) } catch {} if (btn) btn.textContent = t === 'dark' ? '☀️' : '🌙'; };
  let t = 'dark'; try { t = localStorage.getItem('theme') || 'dark' } catch {}
  set(t); btn?.addEventListener('click', () => set(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
}
export const loaderHTML = '<div id="global-loader" class="glass-loader"><div class="loader-spinner"></div><h2 class="loader-text">Loading...</h2></div>';
