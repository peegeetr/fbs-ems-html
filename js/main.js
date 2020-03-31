var trigger = document.querySelector('.nav-trigger');
var mobileNav = document.querySelector('.side-nav');

trigger.addEventListener('click', function(event) {
  event.preventDefault();
  mobileNav.classList.toggle('show');
});

const btnTrigger = document.querySelector('.btnTrigger');
const notification = document.querySelector('.small-notif-notification');
const close = document.querySelector('.small-notif-close');

btnTrigger.addEventListener('click', e => {
  e.preventDefault();
  // console.log(btnTrigger);
  if (!notification.classList.contains('small-notif-show')) {
    notification.classList.add('small-notif-show');
    setTimeout(() => {
      notification.classList.remove('small-notif-show');
    }, 10000);
  }
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

close.addEventListener('click', e => {
  e.preventDefault();
  notification.classList.remove('small-notif-show');
});
