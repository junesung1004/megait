/* 
class로 스크립트를 생성할때 특징
1.직접적인 연결이 아니기 때문에 window.onload로 시작할 필요는 없다.

*/

class BasicSlider {
  //class함수는 일반함수와 구별하기 위해 대문자로 시작
  constructor(item, opt) {
    this.init(item, opt); // 기본값을 정의한 함수
    this.bindingEvent(); // 이벤트를 정의한 함수
  }

  init(item, opt) {
    //init은 보통 초기설정을 진행하는 곳으로 선택자선언, 변수 선언, 기본값
    //설정 등을 정리한다.
    //class 내부에서는 function 생략
    let itemSelector = {
      panel: this.panel,
      btns: this.btns,
      slideSpeed: this.speed,
    };

    this.opt = Object.assign({}, itemSelector, opt);
    //선택자 객체에서 나열이 가능한 속성을 복사해서 객체로 전환해주는 작업

    this.slider = document.querySelector(item); // 슬라이더 전체 영역
    this.panel = this.slider.querySelector(this.opt.panel); // 사용자가 지정한 slider안에 있는 panal을 지정 여러개의 같은 class를 생성할 경우 중첩되는 것을 막기 위해
    this.panelItem = this.panel.querySelectorAll("li");

    this.btns = this.slider.querySelector(this.opt.btns);
    this.btnsItem = this.btns.querySelectorAll("li");

    this.btnsArr = Array.from(this.btnsItem); // 버튼 노드리스트 배열로 다시 저장
    this.speed = this.opt.speed;
    this.enableClick = true;
    this.timer;
  }
  // init

  bindingEvent() {
    this.btnsItem.forEach((el) => {
      el.addEventListener("click", () => {
        let activeIndex = this.btnsArr.indexOf(el);
        let canvasWidth = parseInt(getComputedStyle(this.slider).width);

        if (this.enableClick) {
          this.activeSlide(activeIndex, this.btnsItem);
          this.activeSlide(activeIndex, this.panelItem);
          this.animate(this.panel, {
            prop: "left",
            val: -canvasWidth * activeIndex,
            duration: this.speed,
          });
          if (this.opt.callback) {
            this.opt.callback(activeIndex + 1);
          }
          this.enableClick = false;
        }
      });
    });
  }
  activeSlide(idx, item) {
    for (let i of item) {
      i.classList.remove("on");
    }
    item[idx].classList.add("on");
  }

  animate(el, opt) {
    let startActive = performance.now();
    let currentVal;
    let self = this;

    if (opt.prop === "opacity") {
      currentVal = parseFloat(getComputedStyle(el)[opt.prop]);
    } else {
      currentVal = parseInt(getComputedStyle(el)[opt.prop]);
    }
    if (currentVal !== opt.val) {
      requestAnimationFrame(run);
    }
    function run(time) {
      //run은 특정 함수 내부에 있는 내장 함수이기 때문에 function을 생략할 수 없음.
      let lastTime = time - startActive;
      let progress = lastTime / opt.duration;
      /* 
      this의 값이 undefined가 뜨는 이유는
      내부 함수에서는 this를 받아올 경우 인스턴스를 받아오지 못한다.
      변수에 this를 담을 경우 this의 값이 참조한 위치에서 고정되었기 
      때문에 같은 인스턴스를 참조하게 된다.
      */

      if (progress < 0) {
        progress = 0;
      }
      if (progress > 1) {
        progress = 1;
      }
      if (progress < 1) {
        self.timer = requestAnimationFrame(run);
      } else {
        cancelAnimationFrame(self.timer);
        self.enableClick = true;
      }

      let result = currentVal + (opt.val - currentVal) * progress;
      if (opt.prop === "opacity") {
        el.style[opt.prop] = result;
      } else {
        el.style[opt.prop] = result + "px";
      }
    }
  }
}
