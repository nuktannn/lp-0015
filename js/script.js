//drawer
jQuery(function () {
  // ドロワーアイコンをクリックしたときの処理
  jQuery("#js-drawer-icon").on("click", function (e) {
    e.preventDefault();

    // アイコンとコンテンツのクラスを切り替え
    jQuery("#js-drawer-icon").toggleClass("is-checked");
    jQuery("#js-drawer-content").toggleClass("is-checked");
    jQuery(".drawer-bg").toggleClass("is-checked");

    // .header__btn-sp を表示・非表示に切り替え
    if (jQuery("#js-drawer-icon").hasClass("is-checked")) {
      jQuery(".header__btn-sp").hide();
    } else {
      jQuery(".header__btn-sp").show();
    }
  });

  // ドロワー内のリンクをクリックしたらメニューを閉じる
  jQuery("#js-drawer-content [href]").on("click", function (event) {
    jQuery("#js-drawer-icon").trigger("click");
  });
});

// ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  const height = $(".js-header").height();
  $("main").css("margin-top", height);
});

//スムーススクロール
jQuery('a[href^="#"]').on("click", function () {
  var header = jQuery("header").innerHeight();
  var id = jQuery(this).attr("href");
  var position = 0;
  if (id != "#") {
    var position = jQuery(id).offset().top - header;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    300
  );

  return false;
});

//ビューポイント
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  if (width < 390) {
    document.body.style.width = "390px";
  } else {
    document.body.style.width = "100%";
  }
});

//room
const swiper0 = new Swiper("#js-slider-swiper0", {
  loop: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1.24,
      spaceBetween: 16,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },
on: {
  slideChangeTransitionEnd: function () {
    document.querySelectorAll('.swiper-slide2').forEach(slide => {
      slide.classList.remove('swiper-slide2-active');
    });
    const activeSlide = document.querySelector('.swiper-slide-active.swiper-slide2');
    if (activeSlide) {
      activeSlide.classList.add('swiper-slide2-active');
    }
  }
}

});

//slider1
const swiper1 = new Swiper("#js-slider-swiper1", {
  loop: true,
  pagination: {
    el: "#js-slider-pagination",
  },

  navigation: {
    nextEl: "#js-slider-next1",
    prevEl: "#js-slider-prev1",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});

//scrollを促す
window.addEventListener("DOMContentLoaded", function () {
  new ScrollHint(".js-scrollable", {
    scrollHintIconAppendClass: "scroll-hint-icon-white",
    suggestiveShadow: true,
    i18n: {
      scrollable: "スクロールできます",
    },
  });
});

//slider3
const swiper3 = new Swiper("#js-slider3-swiper", {
  loop: true,
  pagination: {
    el: "#js-slider3-pagination",
  },

  navigation: {
    nextEl: "#js-slider3-next",
    prevEl: "#js-slider3-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});

document.querySelectorAll('.js-slider3-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const card = toggle.closest('.slider3-card');
    const content = card.querySelector('.slider3-card__text');
    const icon = toggle.querySelector('.js-slider3-icon');
    
    if (card.classList.contains('open')) {
      content.style.maxHeight = '0px';
      card.classList.remove('open');
      icon.src = './img/slider-btn.png';
      icon.alt = '開くボタン';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      card.classList.add('open');
      icon.src = './img/slider-btn2.png';
      icon.alt = '閉じるボタン';
    }
  });
});

//qa
jQuery(document).ready(function ($) {
  $(".qa__box-a").hide(); // 全部閉じる
  $(".qa__box-icon").removeClass("is-open"); // アイコンも全部閉じる

  $(".qa__box-q").click(function () {
    const $answer = $(this).next(".qa__box-a");
    const $icon = $(this).children(".qa__box-icon");

    $answer.slideToggle();
    $icon.toggleClass("is-open");

    $(".qa__box-a").not($answer).slideUp();
    $(".qa__box-icon").not($icon).removeClass("is-open");
  });
});

