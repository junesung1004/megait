//함수 작성법
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//자바스크립트
function addJs(num1, num2) {
    return num1 + num2;
}
console.log(addJs(5, 10));
//타입스크립트
function addTs(num1, num2) {
    return num1 + num2;
}
console.log(addTs(5, 10));
//타입스크립트에서는 매개변수와 반환값의 타입을 명시하여 안정성을 올린다.
//자바스크립트 버전
function mergeJs(obj01, obj02) {
    return __assign(__assign({}, obj01), obj02);
}
console.log(mergeJs({ name: "park" }, { age: 40 }));
//타입스크립트 버전(제네릭)
//T, U 는 제네릭타입 변수 함수, 클래스, 인터페이스 등에서 여러 다른 타입에서 재사용 될 수 있게 해줌
//타입의 사용 종류에 따라 매개변수를 추가하거나 줄일 수 있다.
//변수타입 종류 : T(일반타입), K(키값의 타입), V(value), E(요소타입), U(또 다른 타입)
//타입의 선언은 소문자로 시작해도 상관 없지만 대문자로 시작하는 것이 관례
function mergeTs(obj01, obj02) {
    return __assign(__assign({}, obj01), obj02);
}
var obj01 = { name: "kim" };
var obj02 = { age: 30 };
console.log(mergeTs(obj01, obj02));
//하나의 제네릭 타입으로 여러 타입 변경하기
function items(item) {
    return [item];
}
console.log(items("text"));
console.log(items(12345));
//any버전
function itemAny(item) {
    return item;
}
console.log(itemAny(10));
console.log(itemAny("10"));
//any와 제네릭타입의 차이는 결과값은 같지만 안정성의 차이(타입의 검사를 진행하냐 안하냐의 차이)
//선택 옵션 변수
//변수명 뒤에 ?가 붙게 되면 필수값이 아닌 선택값으로 변경
//선택적 변수는 함수 호출시에 상황에 따라 생략할수도 있는 값이며, 생략하는 경우 undefined를 출력
// function nameItem(firstName: string, lastName?: string): void {
//   console.log(firstName, lastName);
// }
//변수값에 기본값을 적용하면 호출할때 값이 생략되어도 undefined가 아닌 기본값을 출력
function nameItem(firstName, lastName) {
    if (lastName === void 0) { lastName = "길동"; }
    console.log(firstName, lastName);
}
nameItem("이", "순신");
nameItem("홍");
// 비동기 데이터 통신
function fetchData(url) {
    return new Promise(function (resolve) {
        // resolve를 사용하여 프로미스를 완료합니다.
        setTimeout(function () {
            resolve("data" + url); // resolve를 호출하여 프로미스를 완료합니다.
        }, 1000);
    });
}
fetchData("https://api.example.com").then(function (data) {
    console.log(data);
});
