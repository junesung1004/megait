window.onload = () => {
  /*
  1. 메인메뉴 호버시 전체 서브메뉴가 내려오도록 설정
  2. 배경 태그 동적으로 생성
  3. 마우스 아웃될때 배경도 같이 삭제 
  */

  menuEvent();
};

function menuEvent() {
  const gnb = document.querySelector(".gnb");
  const mainMenu = document.querySelectorAll(".gnb li a");
  const subMenu = document.querySelectorAll(".submenu-list");
  const bg = document.createElement("div");
  bg.className = "main-bg";
  document.querySelector(".inner").appendChild(bg);

  mainMenu.forEach((el) => {
    //console.log(el);

    el.addEventListener("mouseenter", () => {
      onMenu();
    });
    el.addEventListener("focus", () => {
      onMenu();
    });
  });

  gnb.addEventListener("mouseover", () => {
    offMenu();
  });
  gnb.addEventListener("focusout", (e) => {
    if (!gnb.contains(e.relatedTarget)) {
      offMenu();
    }
  });
  mainMenu.forEach((el) => {
    el.addEventListener("mouseenter", activeMenu);
    el.addEventListener("focus", activeMenu);
  });

  function activeMenu() {
    mainMenu.forEach((el) => {
      el.parentNode.classList.remove("on");
    });
    this.parentNode.classList.add("on");
  }

  function onMenu() {
    subMenu.forEach((el) => {
      el.style.maxHeight = "350px";
      el.style.opacity = "1";
    });
    bg.style.maxHeight = "350px";
    bg.style.opacity = "1";
  }

  function offMenu() {
    subMenu.forEach((el) => {
      el.style.maxHeight = "0px";
      el.style.opacity = "0";
    });
    bg.style.maxHeight = "0px";
    bg.style.opacity = "0";
    mainMenu.forEach((el) => {
      el.parentNode.classList.remove("on");
    });
  }
}
