const btnSidebar = document.querySelector("#btnSidebar");
const headerSidebarOverlay = document.querySelector(".header-sidebar-overlay");
const headerSidebar = document.querySelector(".header-sidebar");
const btnCloseSidebar = document.querySelector(".header-button-mobile-close");
const headerMobileNavLink = document.querySelectorAll(
  ".header-mobile-nav__link"
);

function handleOpen(e) {
  if (!e.target) return;

  document.body.style.overflow = "hidden";
  headerSidebarOverlay.classList.add("active");
  headerSidebar.classList.add("active");
}

function handleClose(e) {
  if (!e.target) return;
  document.body.style.overflow = "auto";
  headerSidebarOverlay.classList.remove("active");
  headerSidebar.classList.remove("active");
}

function handleClick(e) {
  if (e.target.className === headerMobileNavLink[0].className) {
    document.body.style.overflow = "auto";
    headerSidebarOverlay.classList.remove("active");
    headerSidebar.classList.remove("active");
  }

  return;
}

btnSidebar.addEventListener("click", handleOpen);
btnCloseSidebar.addEventListener("click", handleClose);
headerSidebar.addEventListener("click", handleClick);
headerSidebarOverlay.addEventListener("click", handleClose);
