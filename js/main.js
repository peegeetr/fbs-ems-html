var trigger = document.querySelector(".nav-trigger");
var mobileNav = document.querySelector(".side-nav");

trigger.addEventListener("click", function(event) {
  event.preventDefault();
  mobileNav.classList.toggle("show");
});

const btnTrigger = document.querySelector(".btnTrigger");
const notification = document.querySelector(".small-notif-notification");
const close = document.querySelector(".small-notif-close");

if (btnTrigger) {
  btnTrigger.addEventListener("click", e => {
    e.preventDefault();
    // console.log(btnTrigger);
    if (!notification.classList.contains("small-notif-show")) {
      notification.classList.add("small-notif-show");
      setTimeout(() => {
        notification.classList.remove("small-notif-show");
      }, 10000);
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}

if (close) {
  close.addEventListener("click", e => {
    e.preventDefault();
    notification.classList.remove("small-notif-show");
  });
}

//Mon Edit apr 1
const icoMore = document.querySelectorAll(".ico-more");
const moreInfo = document.querySelectorAll(".more-info");

icoMore.forEach(ico => {
  ico.addEventListener("click", () => {
    if (ico.nextElementSibling.classList.contains("more-info-open")) {
      ico.nextElementSibling.classList.remove("more-info-open");
    } else {
      ico.nextElementSibling.classList.add("more-info-open");
    }
  });
});

window.addEventListener("click", e => {
  if (e.target.classList.contains("main-content")) {
    removeOpen();
  }
});

function removeOpen() {
  moreInfo.forEach(more => {
    more.classList.remove("more-info-open");
  });
}
