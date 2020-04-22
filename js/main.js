var trigger = document.querySelector(".nav-trigger");
var mobileNav = document.querySelector(".side-nav");

trigger.addEventListener("click", function (event) {
  event.preventDefault();
  mobileNav.classList.toggle("show");
});

const btnTrigger = document.querySelector(".btnTrigger");
const notification = document.querySelector(".small-notif-notification");
const close = document.querySelector(".small-notif-close");

if (btnTrigger) {
  btnTrigger.addEventListener("click", (e) => {
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
  close.addEventListener("click", (e) => {
    e.preventDefault();
    notification.classList.remove("small-notif-show");
  });
}

//Mon Edit apr 1
const icoMore = document.querySelectorAll(".ico-more");
const moreInfo = document.querySelectorAll(".more-info");

icoMore.forEach((ico) => {
  ico.addEventListener("click", () => {
    if (ico.nextElementSibling.classList.contains("more-info-open")) {
      ico.nextElementSibling.classList.remove("more-info-open");
    } else {
      removeOpen();
      ico.nextElementSibling.classList.add("more-info-open");
    }
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("main-content")) {
    removeOpen();
  }
});

function removeOpen() {
  moreInfo.forEach((more) => {
    more.classList.remove("more-info-open");
  });
}

//Mon Edit apr 2

const icoFilter = document.querySelector("#ico-filter");
const formOvertime = document.querySelector(".form-overtime");
const filterBar = document.querySelector("#filter-bar");
const inputs = document.querySelectorAll(".filter-option input");
const keyword = document.querySelector("#keyword");
const status = document.querySelector("#status");
const date = document.querySelector("#date");
const otStatus = document.querySelector(".ot-status");

if (icoFilter) {
  icoFilter.addEventListener("click", (e) => {
    e.preventDefault();
    icoFilter.nextElementSibling.classList.toggle("open");
  });
}

function removeChecked() {
  inputs.forEach(function (input) {
    input.removeAttribute("checked");
  });
}
function checkInput() {
  if (date.hasAttribute("checked")) {
    filterBar.setAttribute("type", "date");
    filterBar.style.display = "block";
    otStatus.style.display = "none";
  } else if (status.hasAttribute("checked")) {
    filterBar.style.display = "none";
    otStatus.style.display = "block";
  } else if (keyword.hasAttribute("checked")) {
    filterBar.setAttribute("type", "text");
    filterBar.style.display = "block";
    otStatus.style.display = "none";
    filterBar.setAttribute("placeholder", "Type Keyword");
  }
}

selectFilter();
function selectFilter() {
  inputs.forEach(function (input) {
    input.addEventListener("click", () => {
      removeChecked();
      input.setAttribute("checked", "");
      checkInput();
    });
  });
}

//MODAL

//const empTaskAdd = document.querySelector("#emp-task-add");
const modalPopup = document.querySelectorAll(".modal-popup");
const modalNew = document.querySelector(".modal-new");
const modalClose = document.querySelector(".modal-close");

modalPopup.forEach((modal) => {
  modal.addEventListener("click", openModal);
});

if (modalNew) {
  modalNew.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-new")) {
      modalNew.style.display = "none";
      e.stopPropagation();
    }
  });
}

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

function closeModal(e) {
  e.target.parentElement.parentElement.parentElement.parentElement.style.display =
    "none";
}

function openModal(e) {
  e.preventDefault();
  const openModal = document.querySelector(`#modal-${e.target.id}`);
  openModal.style.display = "flex";
}

const openModalIco = document.querySelectorAll(".open-modal-ico");

openModalIco.forEach((modalIco) => {
  modalIco.addEventListener("click", (e) => {
    e.preventDefault();
    modalNew.style.display = "flex";
  });
});

const filterBtn = document.querySelector(".filter-toggle-btn");
const filterForm = document.querySelector('.admin-leave-filter');


filterBtn.addEventListener('click', () =>{
  filterForm.classList.toggle('open-filters')
})


const tableLeave = document.querySelectorAll('.table-leave');
const tabNav = document.querySelectorAll('.table-tabs-nav ul li');


selectTab();
function selectTab(){
  tabNav.forEach((tab) => {
    tab.addEventListener('click', ()=> {
      removeActive();
      tab.classList.add('active-navtab')
      const activeTab = document.querySelector(`#${tab.id}-box`);
      activeTab.classList.add('active-table');
    })
  })
}




function removeActive(){
  tableLeave.forEach((table)=>{
    table.classList.remove('active-table')
  })

  tabNav.forEach((nav)=>{
    nav.classList.remove('active-navtab')
  })
}
