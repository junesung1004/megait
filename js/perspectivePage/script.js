window.onload = () => {
  /*
  1.스크롤 이벤트로 한번에 스크롤되는 값을 알아내기
  2.전체 문서의 길이에서 스크롤된 값을 퍼센테이지로 변환
  */

  // 윈도우 맨위 스크롤 위치를 나타냄
  const progressBar = document.querySelector(".progressBar");
  const imgs = document.querySelectorAll(".parallax_image");
  const imgNum = imgs.length;
  console.log(imgNum);

  let scrollTop = 0; // 스크롤이 처음 시작할 위치

  window.addEventListener("scroll", onScroll);

  function onScroll() {
    scrollTop = document.documentElement.scrollTop; //문서에서 스크롤이 된 길이를 구하는 메서드
    //console.log(scrollTop);
    let documentH = document.body.clientHeight;
    //console.log(documentH);
    let winH = window.innerHeight; // 화면의 크기 구하는 메서드
    //console.log(winH);

    const percent = Math.floor((scrollTop / (documentH - winH)) * 100);
    console.log(percent);

    progressBar.style.width = `${percent}%`;
    imgs.forEach((el, idx) => {
      const transZ = scrollTop / (imgNum * (imgNum - idx));
      el.style.transform = `perspective(3000px) translateZ(${transZ}px)`;
    });
  }
};
