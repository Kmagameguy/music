function showBanner() {
  let cookieBanner = document.getElementsByClassName("cookie-banner")[0];
  cookieBanner.style.display = "block";
}

function hideBanner() {
  localStorage.setItem("kmagameguy_isCookieAccepted", "yes");
  let cookieBanner = document.getElementsByClassName("cookie-banner")[0];
  cookieBanner.style.display = "none";
}

function initBanner() {
  let hasUserAuthorizedCookies = localStorage.getItem("kmagameguy_isCookieAccepted");
  if (hasUserAuthorizedCookies === null) {
    localStorage.clear();
    localStorage.setItem("kmagameguy_isCookieAccepted", "no");
    showBanner();
  } else if ( hasUserAuthorizedCookies === "no") {
    showBanner();
  }
}

window.onload = initBanner();
window.hideBanner = hideBanner;
