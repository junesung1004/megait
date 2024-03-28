
/*

1. 각 섹션의 위치값 알아내기
2. 스크롤 할때마다 섹션 하나만큼의 높이값만큼 이동해주기
3. 해당 섹션이 화면이 들어오게 되면 section과 dot class전달하기
4. navi의 li를 클릭하면 해당 section으로 이동하기

*/
window.onload = ()=>{
    const section = document.querySelectorAll('section');
    const dotList = document.querySelectorAll('#navi > li');

    let posArr = [];//section들의 위치값을 배열로 받아올 변수

    const onResize = () =>{
        posArr = Array.from(section, (el)=>el.offsetTop)
        //offsetTop 요소들의 y축 위치값을 반환
        //console.log(posArr)
    }
    onResize();//로딩될때 resize를 우선적으로 한번 실행
    window.addEventListener('resize', onResize);
    //resize 이벤트 화면의 크기를 사용자가 임의대로 줄이거나 늘리는 행동을 의미함
    //맨처음 로딩되는 화면의 크기는 resize 이벤트에 포함하지 않는다.

    /*기기에 따라 높이값이 다르기 때문에 리사이즈가 될 경우 각 section의 높이값이
    달라지기 때문에 resize이벤트가 진행된 후 각 section의 위치값을 받아 
    새로 배열로 정렬 */

    window.addEventListener('scroll', onScroll);

    section.forEach((el, idx)=>{
        el.addEventListener('wheel',scrollAction);
    })
    dotList.forEach((el)=>{
        el.addEventListener('click', onMove);
    })

    function onMove(){
        const index = Array.from(dotList).indexOf(this);
        //console.log(index)
        moveScroll(index)   
    }
    
    function scrollAction(e){
        //console.log(idx)
        //console.log(e)
        const deltaY = e.deltaY || e.detail || -e.wheelDelta;
        /*마우스 휠 이벤트는 각 이벤트명마다 값이 다르기 때문에 기준점을 잡아주는게
            편하다.
            -는 휠을 위로 했을때
            +는 휠을 아래로 했을때 
            0을 기준으로 잡으면 된다. */
        if(deltaY < 0){
            if([...section].indexOf(this) !== 0){
                const index = [...section].indexOf(this);   
                moveScroll(index -1)  
            }
        }else{
            if([...section].indexOf(this) !== section.length -1){
                const index = [...section].indexOf(this);
                moveScroll(index +1)
            }
        }
        // return false;
    }//scrollAction

    function moveScroll(idx){
        //스크롤시 애니메이션을 적용해서 부드럽게 해당 위치로 이동시켜주는 함수
        
        const targetPos = posArr[idx];//scrollAction에서 전달받은 index를 posArr에 전달
        //console.log(idx)
        //console.log(targetPos)
        const currentPos = document.documentElement.scrollTop;//현재 위치값 알아내기
        const distance = targetPos - currentPos; //716 *0.2
        const duration = 500;
        //console.log(distance)
        
        let start;
        //console.log(start)
    
        function step(time){//
            if(!start){start = time};
            //console.log(start)
            const progress = time - start;//현재 진행상태 /현재 흐르는 시간 - 호출된 시간 
            //console.log(progress)
            const percent = Math.min(progress / duration, 1);
            //진행상태를 퍼센트로 변환해서 애니메이션으로 변환
            //0~ 1사이의 값을 출력하며 duration 500이고 progress 250이 경과하는 지점은
            //0.5만큼 진행된 것으로 의미
            //1을 초과하는 경우 최소값은 1을 반환하므로 진행상태가 100%를 초과하지
            //못하게 하는 목적도 있음

            /*
            time = 현재 시간을 담는 변수 페이지가 로드된 후 시간을 밀리초로 저장
            window.requestAnimationFram가 요청될때마다 새로운 time을 제공

            start = 애니메이션이 동작이 시작된 시간을 저장
            최초 window.requestAnimationFrame(step)가 실행된 시점의 콜백함수를
            time에 저장
            애니메이션의 동작시간을 계산하는데 사용
            현재 호출된 시간에서 

            
            */
            window.scrollTo(0,currentPos + distance * percent);
            if(progress < duration){
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step)
        
        //scrollTo(x,y,motion) 해당위치로 스크롤을 이동
    }

    function onScroll(){
        const scrollTop = document.documentElement.scrollTop;
        //console.log(scrollTop);

        section.forEach((el,idx)=>{
            //console.log(el)
            if(scrollTop >= posArr[idx] - window.innerHeight /2){
               section.forEach((item)=>{
                item.classList.remove('on');
               })
               dotList.forEach((item)=>{
                item.children[0].classList.remove('on')
               })
               el.classList.add('on');
               dotList[idx].children[0].classList.add('on');
            }
        })

    }



}