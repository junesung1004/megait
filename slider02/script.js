window.onload = () => {
  let bulletText = ['충남내포신도시2차 대방 엘리시움 더 센트럴(RH5-1BL)','부산에코델타시티1차(31BL)','화성동탄5차 문화복합(18BL)','동탄2신도시 동탄역 대방 엘리시움 더 시그니처(C18BL)']
  const Slider = new Swiper('.swiper-container', {
    slidesPerView : 2, // 한 화면에 보여지는 슬라이드 갯수
    spaceBetween : 50, // 슬라이드 사이의 여백 = flex gap이라고 생각해도 된다.
    loop : true, // 무한 슬라이드 설정
    autoplay : {
      delay : 3000,
    },
    //speed : 1000,
    autoHeight : true, 
    // item마다 높이값이 달라서 따로 받아와야 할때 true로 설정하면 
    // 부모요소의 높이값이 아닌 아이템마다 가지고 있눈 객체들의 높이값으로 변경
    pagination : {
      el : '.swiper-pagination',
      clickable : true, 
      renderBullet : function(i, el){
        //renderBullet : dot생성시 콜백함수
        return `<div class='${el}'>
        <span class='indexNum'>0${i+1}</span>
        <span>${bulletText[i]}</span>
        </div>`
      }
    }
  }) 
}