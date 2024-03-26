window.onload = () => {
  mainSlider();
};

function mainSlider() {
  /* 
  1. navi 안에 있는 li를 클릭하면 해당하는 순번에 panel의 li가 작동되는 슬라이드 방식
  2. 슬라이드가 이동되면서 circle의 이미지도 회전하는 방식
  */

  //슬라이더
  const slider = document.querySelector("#slider");
  const panel = document.querySelector(".panel");
  const panelItem = panel.querySelectorAll("li");

  //navi
  const btns = document.querySelectorAll(".navi > li");
  const btnsArr = Array.from(btns);

  //circle
  const circle = document.querySelector("#circle");

  const speed = 1000; // 슬라이드 진행 시간

  let timer;

  console.log(btns);
  console.log(btnsArr);

  //이벤트
  btns.forEach((el) => {
    el.addEventListener("click", () => {
      let activeIdx = btnsArr.indexOf(el);
      let canvasWidth = parseInt(getComputedStyle(slider).width);

      //console.log(canvasWidth);
      //getComputedStyle = 전달받은 속성의 값을 반환

      //console.log(activeIdx);
      //querySelectorAll로 반환된 객체는 배열 형태의 nodeList로 저장된다.
      //btns는 배열이 아닌 상태이므로 indexOf를 사용할 수 없다.

      activeSlide(activeIdx, btns);
      activeSlide(activeIdx, panelItem);

      /*
      슬라이드를 움직이는 방법
      1.제이쿼리 animate function 사용
      2.라이브러리 

      3.좌표값과 transition을 같이 병행해서 사용(setInterval)
      - 슬라이드를 실행하지 않고 있어도 내부에서는 계속 실행을 해주고 있기
      때문에 메모리 저하가 일어날 수 있다.
      -간단한 이벤트를 사용할때는 괜찮지만 복잡한 로직이 병행하는 경우
      애니메이션이 끊기거나 부자연스러운 행동이 나올 수 있다.
      -setInterval의 경우 백그라운드에서 지속적으로 실행하기 때문에
      메모리 누적의 원인이 생긴다.

      4.requestAnimationFrame
      -브러우저가 애니메이션을 호출할때에만 함수를 실행
      -1초당 60프레임을 호출(디스플레이 주사율에 차이)
      -브라우저의 호출 주기와 연동되어 있어서 끊김이 없고 성능면으로 더 우수
      */

      circle.className = "";
      circle.classList.add(`rot${activeIdx + 1}`);

      animate(panel, {
        prop: "left",
        val: -canvasWidth * activeIdx,
        duration: speed,
      });
    });
  });

  //슬라이더가 넘어가는 애니메이션 설정 함수
  function animate(el, opt) {
    let startActive = performance.now(); //애니메이션이 호출되는 시간
    //Date.now()로 대체로 가능하지만 기준점도 조금 다르고
    //performance.now()이 더 정확하다고 한다.

    let currentVal; // 변동되는 속성을 담아줄 변수

    if (opt.prop === "opacity") {
      currentVal = parseFloat(getComputedStyle(el)[opt.prop]);
      console.log(currentVal);
    } else {
      currentVal = parseInt(getComputedStyle(el)[opt.prop]);
      console.log(currentVal);
    }
    console.log(currentVal);

    /* 
    옵션으로 받아오는 prop의 값이 opacity라면 소숫점을 포함한 숫자를 출력
    아니라면 소숫점을 제외한 정수만 출력  
    */
    if (currentVal !== opt.val) {
      requestAnimationFrame(run);
      /*
      currentVal의 값이 opt.val의 값에 도달하지 못했다면 애니메이션을
      실행하도록 ex)현재 slider의 위치가 0이고 클릭한 버튼의 위치가
      3800이라면 값이 서로 맞지 않으므로 if의 조건이 만족되기 때문에
      run이 실행됨
      */
    }

    function run(time) {
      let lastTime = time - startActive;
      let progress = lastTime / opt.duration;
      //progress의 값이 1이 되면 애니메이션이 종료 되도록 진행시간을 남은
      //시간에 나눔
      //console.log(time);
      //console.log(progress);
      if (progress < 0) {
        progress = 0;
        //0이라면 멈춤 상태이기 때문에 0으로 고정
      }
      if (progress > 1) {
        progress = 1;
        //1보다 값이 더 커지지 못하도록 1보다 커질 경우 1로 고정
      }
      if (progress < 1) {
        timer = requestAnimationFrame(run);
      } else {
        //requestAnimationFrame를 종료시키는 메서드
        cancelAnimationFrame(timer);
      }

      let result = currentVal + (opt.val - currentVal) * progress;

      if (opt.prop === "opacity") {
        el.style[opt.prop] = result;
      } else {
        el.style[opt.prop] = result + "px";
      }
    }
  }

  function activeSlide(idx, el) {
    for (let i of el) {
      i.classList.remove("on");
    }
    el[idx].classList.add("on");
  }
}
