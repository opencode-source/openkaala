var swiper1 = new Swiper(".storySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 12,
    spaceBetween: 10,
    freeMode: true,
  });

  var swiper2 = new Swiper(".homeSlider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper3 = new Swiper(".amazingSlider", {
    spaceBetween: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 8,
    freeMode: true
  });

  var swiper4 = new Swiper(".adSlider", {
    spaceBetween: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 9,
    freeMode: true
  });

  var swiper5 = new Swiper(".mostSellSlider", {
    spaceBetween: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    freeMode: true
  });



// ---------------- Scroll to Top ----------------------
const scrollToTop = document.querySelector("#scroll-to-top");
scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})



// ---------------- Support Section ----------------------
const contactList = document.querySelector("#contact-list");
const contactBtn = document.querySelector("#contact-btn");

const contactBtnImg1 = document.querySelector("#contact-btn-img-1");
const contactBtnImg2 = document.querySelector("#contact-btn-img-2");


contactBtn.addEventListener('click', () => {
  contactList.classList.toggle("support-hidden");
  
  if(contactList.classList.contains("support-hidden")) {
    contactList.style.display = 'none';
    contactBtnImg1.classList.remove("contact-btn-hidden");
    contactBtnImg2.classList.add("contact-btn-hidden");
    
  } else {
    contactList.style.display = 'flex';
    contactBtnImg1.classList.add("contact-btn-hidden");
    contactBtnImg2.classList.remove("contact-btn-hidden");
  }
})