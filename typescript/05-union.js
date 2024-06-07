/*
유니온 타입
여러 타입중에 하나일수도 있음을 나타내기 위해 사용되며 or조건문을 사용한다.
각 타입에 따라 처리를 다르게 할 수 있음

장점
-가독성 : 코드의 의미가 정확해짐
-유지보수성 : 값의 변경이 필요할때  정의된 type만 수정해주면 된다.
-일관성 유지
-타입의 안정성 : 잘못된 값을 할당하는 것을 방지

단점
-복잡성 증가 : 간단한 값의 경우 타입의 정의가 오히려 코드가 복잡해지게 하는 원인
-작은 프로젝트나 단순한 값의 경우 타입 정의가 오히려 불편할수도 있다
*/
function move(direction) {
    console.log(direction);
}
move("top");
// move("abc"); // Argument of type '"abc"' is not assignable to parameter of type 'Direction'.
//간단한 값의 타입의 정의는 불필요
var TextSize = 16;
function createText(size) {
    console.log("".concat(size));
}
createText(TextSize);
function createFontSize(size) {
    console.log("".concat(size));
}
var title = 12;
var subTitle = 24;
createFontSize(title);
createFontSize(subTitle);
function fetchData() {
    return {
        state: "success",
        result: {
            data: "데이터를 성공적으로 받아왔습니다.",
        },
    };
}
function printNetworkState(state) {
    switch (state.state) {
        case "loading":
            console.log("...loading");
            break;
        case "success":
            console.log("".concat(state.result.data));
            break;
        case "error":
            console.log("".concat(state.error));
    }
}
var network = fetchData();
printNetworkState(network);
