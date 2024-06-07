/*
Enum 열거형 타입
-의미 없는 숫자를 받아오게 되면 0,1,2와 같은 의미없는 숫자대신 목적을 가진 네이밍을 사용하게 되면
코드의 가독성이 향살 될 수 있다.

*/
//javascript 문법
//자바스크립트에는 열거형 문법이 존재하지 않아 Object.freeze를 사용하여 유사한 형태로 구현
//개별적 선언
var APPLE = 0;
var BANANA = 1;
var MELON = 2;
var GRAPE = 3;
//객체로 한번에 선언
var FRUITES_ENUM = Object.freeze({ APPLE: 0, BANANA: 1, MELON: 2, GRAPE: 3 });
//freeze는 객체를 변경할 수 없는 불변으로 변경
/*
const로 선언된 APPLE=0 과 FRUITS_ENUM 에 객체로 선언된 APPLE:0
*/
var fruitName = FRUITES_ENUM.APPLE;
console.log(fruitName);
console.log(FRUITES_ENUM.BANANA);
//타입스크립트 enum 사용
//enum은 양방향 매핑을 지원한다.
var Fruits;
(function (Fruits) {
    Fruits[Fruits["Apple"] = 0] = "Apple";
    Fruits[Fruits["Banana"] = 1] = "Banana";
    Fruits[Fruits["Orange"] = 2] = "Orange";
    Fruits[Fruits["Grape"] = 3] = "Grape";
    Fruits[Fruits["Mango"] = 4] = "Mango";
})(Fruits || (Fruits = {}));
console.log(Fruits.Apple);
var fruitName01 = Fruits[1]; // 배열에서 2번째 있는 순번의 값을 출력
console.log(fruitName01);
var Colors;
(function (Colors) {
    Colors["Red"] = "RED";
    Colors["Green"] = "GREEN";
    Colors["Blue"] = "BLUE";
})(Colors || (Colors = {}));
var colorName = Colors.Green;
console.log(colorName);
var colorNumber = Colors["GREEN"];
console.log(colorNumber);
