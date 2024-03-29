window.onload = () => {
  /*
  메인메뉴에 상호작용(click, hover)이 일어나면 서브메뉴가 내려오는 로직
  모든 서브메뉴가 아닌 해당하는 메인메뉴에 있는 서브메뉴만 내려오도록 해주기
  전체 메인메뉴를 벗어나게 되면 서브메뉴가 닫히도록

  그외에 체크할 부분
  포커스 이벤트에 대한 로직 - 필수적은 아니지만 접근성을 준수하기 위해서는 
  포커스 이벤트까지 들어가 주는게 좋다.
  */

  //menuEvent();
  menuEventFocus();
};

function menuEvent() {
  const mainMenu = document.querySelectorAll(".gnb > li > a");
  const subMenu = document.querySelectorAll(".submenu");
  const gnb = document.querySelector(".gnb");

  mainMenu.forEach((el) => {
    el.addEventListener("mouseenter", onMouseEnter);
    //mouseenter = 마우스가 영역에 들어왔을때 실행하는 이벤트
    //mouseleave = 마우스가 영역에서 빠져나갔을때
  });
  function onMouseEnter() {
    subMenu.forEach((el) => {
      el.classList.remove("on");
    });
    //const thisSubMenu = this.children[1];
    const thisSubMenu = this.nextElementSibling; // 나를 기준 다음 형제 요소 찾는 메서드
    console.log(thisSubMenu);
    if (thisSubMenu) {
      thisSubMenu.classList.add("on");
    }
  }

  gnb.addEventListener("mouseleave", onMouseLeave);

  function onMouseLeave() {
    subMenu.forEach((el) => {
      el.classList.remove("on");
    });
  }
}

function menuEventFocus() {
  const gnb = document.querySelector(".gnb");
  const mainMenu = document.querySelectorAll(".gnb > li > a");
  const subMenu = document.querySelectorAll(".submenu");
  let lastFocusMenu = null; // 마지막으로 포커스 된 요소를 저장하는 변수

  //이벤트
  mainMenu.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      const thisSubMenu = el.nextElementSibling;
      //console.log(thisSubMenu);
      onSubMenu(thisSubMenu, el);
    });
    el.addEventListener("focus", () => {
      const thisSubMenu = el.nextElementSibling;
      onSubMenu(thisSubMenu, el);
    });
  });

  gnb.addEventListener("mouseleave", closeSubMenu);
  gnb.addEventListener("focusout", (e) => {
    console.log(e);
    if (!gnb.contains(e.relatedTarget)) {
      closeSubMenu();
    }
  });
  //focusout은 기본적으로 이벤트 버블링을 발생시키는 요소
  //gnb내에 모든 요소가 포커스에서 벗어나는 경우로 조건을 설정해야 한다.

  // 함수 정리
  function onSubMenu(subMenuItem, focusItem) {
    if (lastFocusMenu !== focusItem) {
      closeSubMenu();
      if (subMenuItem) {
        subMenuItem.classList.add("on");
        focusItem.classList.add("focused");
        lastFocusMenu = focusItem;
      }
    }
    // subMenu.forEach((el) => {
    //   el.classList.remove("on");
    // });
    // console.log(subMenuItem);
    // if (subMenuItem) {
    //   subMenuItem.classList.add("on");
    // }
  }

  function closeSubMenu() {
    subMenu.forEach((el) => {
      el.classList.remove("on");
    });
    mainMenu.forEach((el) => {
      el.classList.remove("focused");
    });
    lastFocusMenu = null;
  }
}
