window.onload = () => {
  menu();
};

// function menu() {
//   const header = document.querySelector(".header");
//   const mainMenu = document.querySelectorAll(".main-menu > li > a");
//   const subMenu = document.querySelectorAll(".sub-menu");

//   const headerH = header.offsetHeight; // 헤더의 초기 높이값을 구해서 서브메뉴의 높이값에 더해서 계산
//   //console.log(headerH)

//   mainMenu.forEach((el) => {
//     el.addEventListener("mouseenter", onMenu);
//     el.addEventListener("focus", onMenu);
//   });

//   header.addEventListener("mouseleave", offMenu);

//   //onMenu
//   function onMenu() {
//     subMenu.forEach((el) => {
//       el.classList.remove("on");
//     });
//     mainMenu.forEach((el) => {
//       el.classList.remove("on");
//     });
//     this.classList.add("on");
//     /*
//     모든 구조에 submenu가 있는 경우라면 nextElenetsSibling으로 찾는것이 더 쉽고
//     안정적이짐나 반대로 구조가 복잡하거나 혹은 일정하지 않은 구조에서는
//     부모요소로 올라가 자식요소에 submenu의 여부를 판단해서 로직을 짜는 것이 더 안정적
//     */
//     const parentLi = this.closest("li");
//     //console.log(parentLi);
//     //closest() 선택자 기준으로 가장 가까운 객체를 반환
//     //console.log(parentLi);
//     const subMenuItem = parentLi.querySelector(".sub-menu");
//     //console.log(subMenuItem)
//     if (subMenuItem) {
//       subMenuItem.classList.add("on");
//       const subMenuItemLi = subMenuItem.querySelectorAll("li");
//       const subMenuItemLiSize = subMenuItemLi.length;
//       //console.log(subMenuItemLiSize)
//       if (subMenuItemLiSize > 0) {
//         const subMenuH = subMenuItemLi[0].offsetHeight;
//         //console.log(subMenuH)
//         const gnbH = subMenuItemLiSize * subMenuH;
//         //console.log(gnbH)
//         header.style.height = `${headerH + gnbH}px`;
//       }
//     } else {
//       offMenu();
//     }
//   }

//   //offMenu
//   function offMenu() {
//     subMenu.forEach((el) => {
//       el.classList.remove("on");
//     });

//     mainMenu.forEach((el) => {
//       el.classList.remove("on");
//     });

//     header.style.height = `${headerH}px`;

//   }
// }

function menu() {
  const header = document.querySelector(".header");
  const mainMenu = document.querySelectorAll(".main-menu > li");
  const mainMenuItem = document.querySelectorAll('.main-menu > li > a')
  const subMenu = document.querySelectorAll(".sub-menu");
  const subMenuLink = document.querySelectorAll('.sub-menu a')
  const headerH = header.offsetHeight;

  mainMenu.forEach((el) => {
    const mainMenuLink = el.querySelector("a");
    //각각의 main-menu에 있는 a태그를 선택
    mainMenuLink.addEventListener("mouseenter", onMenu);
    mainMenuLink.addEventListener("focus", onMenu);

    el.addEventListener('focusout', function(e){
      if(!el.contains(e.relatedTarget)){
        offMenu()
      }
    })

    el.addEventListener("mouseleave", offMenu);
  }); // mainmenu

  subMenuLink.forEach((el)=> {
    el.addEventListener('focus', function(){
      subMenuLink.forEach((link)=> {
        link.classList.remove('on')
      })
      this.classList.add('on')
    })
  })

  function onMenu() {
    offMenu()
    header.classList.add('on')

    mainMenuItem.forEach((el)=> {
      el.classList.remove('on')
    })
    this.classList.add('on')

    const subMenuItem = this.parentNode.querySelector(".sub-menu");
    if (subMenuItem) {
      subMenuItem.classList.add("on");
      headerHeight(subMenuItem);
    }
  }

  function headerHeight(subMenuItem) {
    const subMenuItemLi = subMenuItem.querySelectorAll("li");
    const subMenuItemSize = subMenuItemLi.length;

    if (subMenuItemSize > 0) {
      const subMenuH = subMenuItemLi[0].offsetHeight;
      const gnbH = subMenuItemSize * subMenuH;
      header.style.height = `${headerH + gnbH}px`;
    }
  }

  function offMenu() {
    subMenu.forEach((el) => {
      el.classList.remove("on");
    });

    mainMenuItem.forEach((el)=> {
      el.classList.remove('on')
    })

    header.style.height = `${headerH}px`;
    header.classList.remove('on')
  }
}
