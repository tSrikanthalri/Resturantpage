document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  function checkScroll() {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  checkScroll();
  window.addEventListener("scroll", checkScroll);
  const mobileToggle = document.querySelector(".mobile-toggle");
  mobileToggle.addEventListener("click", function () {
    this.classList.toggle("active");
  });
  const menuTabs = document.querySelectorAll(".menu-tab");
  menuTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      menuTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      if (this.getAttribute("href") === "#") return;
      const targetElement = document.querySelector(this.getAttribute("href"));
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
  // --- Dynamic Cart Count Update ---
  const addButtons = document.querySelectorAll(".menu-item-btn");
  let count = 3;
  function setCartCount(newCount) {
    const cartCountSpan = document.querySelector('.cart-count');
    if (cartCountSpan) {
      cartCountSpan.textContent = newCount;
    }
  }
  setCartCount(count); // Set initial cart count
  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      count++;
      setCartCount(count);
      button.style.transform = "scale(1.2)";
      setTimeout(() => {
        button.style.transform = "";
      }, 200);
    });
  });
  // You can now call setCartCount(x) anywhere to update the cart count dynamically
});