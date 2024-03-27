window.onload = () => {
  /* 
  슬라이드 구현(버튼 / 오토)
  1. 버튼 슬라이드 구현
  -버튼을 누르면 해당 방향으로 슬라이드가 이동
  -슬라이드의 마지막 슬라이드가 되면 처음으로 돌아가는게 
  아니라 무한 루프 되는 슬라이드 구현

  2. 자동 슬라이드 구현

  */

  //선택자 설정
  const bgSlider = document.querySelector("#slider");

  const slider = document.querySelector("#slider2");
  //let sliderW = slider.offsetWidth;
  //console.log(sliderW);

  //버튼
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  //스피드
  const speed = 1000; // 슬라이드 진행되는 속도
  let enableClick = true;
  let timer; //오토슬라이드 변수
  let nextTimer;
  // 버튼을 클릭했을때 취소된 자동 슬라이드를 setTimeOut으로 재생시킬 변수

  init(bgSlider, slider); // 기본 설정 함수
  autoSlide();

  function init(...items) {
    console.log(items);
    items.forEach((el) => {
      const itemSize = el.querySelectorAll("li").length;
      //console.log(itemSize);
      const itemUl = el.querySelector("ul");
      //console.log(itemUl);
      const itemLi = itemUl.querySelectorAll("li");
      //console.log(itemLi);

      itemUl.style.width = `${100 * itemSize}%`;
      itemUl.style.height = `100%`;
      itemUl.style.marginLeft = `-100%`;

      itemLi.forEach((el) => {
        el.style.width = `${100 / itemSize}%`;
        el.style.height = `100%`;
        el.style.float = "left";
      });
      itemUl.insertBefore(itemLi[itemSize - 1], itemUl.firstChild);
    });
  }
  //init은 끝

  //next 버튼 로직 slider, slider2 같이 구현
  nextBtn.addEventListener("click", () => {
    if (enableClick) {
      clearInterval(timer);
      onNextSlide(bgSlider);
      onNextSlide(slider);
      enableClick = false;
      nextTimer = setTimeout(() => {
        autoSlide();
      }, 2000);
    }
  });

  function onNextSlide(el) {
    const itemUl = el.querySelector("ul");
    const itemLiW = itemUl.querySelector("li").offsetWidth;
    console.log(itemLiW);

    itemUl.style.transition = `margin-left ${speed}ms`;
    itemUl.style.marginLeft = `-${itemLiW * 2}px`;

    setTimeout(() => {
      itemUl.appendChild(itemUl.querySelector(`li:first-of-type`));
      itemUl.style.marginLeft = `-${itemLiW}px`;
      itemUl.style.transition = "";
      enableClick = true;
    }, speed);
  }

  //prve 버튼 로직 slider, slider2 같이 구현
  prevBtn.addEventListener("click", () => {
    if (enableClick) {
      clearTimeout(nextTimer);
      clearInterval(timer);
      onPrevSlide(bgSlider);
      onPrevSlide(slider);
      enableClick = false;
      nextTimer = setTimeout(() => {
        autoSlide();
      }, 2000);
    }
  });

  function onPrevSlide(el) {
    const itemUl = el.querySelector("ul");
    itemUl.style.transition = `margin-left ${speed}ms`;

    const itemLiW = itemUl.querySelector("li").offsetWidth;
    itemUl.style.marginLeft = `0px`;

    setTimeout(() => {
      itemUl.prepend(itemUl.querySelector(`li:last-child`));
      itemUl.style.marginLeft = `-${itemLiW}px`;
      itemUl.style.transition = "";
      enableClick = true;
    }, speed);
  }

  function autoSlide() {
    timer = setInterval(() => {
      onNextSlide(bgSlider);
      onNextSlide(slider);
    }, 3000);
  }

  //아이템 사이즈  설정
  // const sliderUl = slider.querySelector("ul");
  // const sliderLi = slider.querySelectorAll("li");
  // const itemSize = slider.querySelectorAll("li").length; // li의 갯수 파악
  // //console.log(itemSize); // 3

  // sliderUl.style.width = `${100 * itemSize}%`; //li의 갯수많큼 ul의 크기를 설정
  // //console.log(sliderUl);
  // sliderUl.style.height = `100%`;
  // sliderUl.style.marginLeft = `-100%`;

  // sliderLi.forEach((el) => {
  //   //li는 복수이기 때문에 반복문으로 설정해줘야함
  //   el.style.width = `${100 / itemSize}%`;
  //   el.style.float = "left";
  //   el.style.height = `100%`;
  // });

  // sliderUl.insertBefore(sliderLi[itemSize - 1], sliderUl.firstChild);

  // //next 버튼 이벤트 주기
  // nextBtn.addEventListener("click", () => {
  //   sliderUl.style.transition = `margin-left ${speed}ms`;
  //   const itemW = sliderUl.querySelector("li").offsetWidth;
  //   console.log(itemW);
  //   sliderUl.style.marginLeft = `-${itemW * 2}px`;

  //   setTimeout(() => {
  //     sliderUl.appendChild(sliderUl.querySelector(`li:first-of-type`));
  //     sliderUl.style.marginLeft = `-${itemW}px`;
  //     sliderUl.style.transition = "";
  //   }, speed);
  // });

  // //prev 버튼 이벤트 주기
  // prevBtn.addEventListener("click", () => {
  //   sliderUl.style.transition = `margin-left ${speed}ms`;
  //   const itemW = sliderUl.querySelector("li").offsetWidth;
  //   sliderUl.style.marginLeft = `0px`;

  //   setTimeout(() => {
  //     sliderUl.prepend(sliderUl.querySelector(`li:last-child`));
  //     sliderUl.style.marginLeft = `-${itemW}px`;
  //     sliderUl.style.transition = "";
  //   }, speed);
  // });
};
