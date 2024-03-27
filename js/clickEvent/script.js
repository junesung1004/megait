window.onload = () => {
  clickEvent();
};

/*
1. 사용자가 클릭한 위치에서 이미지 생성
2. 이미지는 랜덤으로 생성되어야 함

*/
function clickEvent() {
  const img = document.createElement("div");
  img.id = "click-img"; // 생성된 div에 id 부여
  let timer;

  const onImgShow = (e) => {
    let positionX = e.pageX;
    let positionY = e.pageY;
    // let {pageX : positionX , pageY : positionY} = e
    let randomNum = Math.floor(Math.random() * 5) + 1;

    img.className = "";
    document.body.appendChild(img); // 클릭할때 img 태그 추가
    img.classList.add(`active`, `bg0${randomNum}`);
    img.style.top = `${positionY}px`;
    img.style.left = `${positionX}px`;
    clearTimeout(timer);

    timer = setTimeout(onImgOut, 1500);
  };

  function onImgOut() {
    clearTimeout(timer);
    if (img.parentNode) {
      img.parentNode.removeChild(img);
    }
  }
  document.body.addEventListener("click", onImgShow);
}
