/*
타입 추론

타입스크립트의 타입 추론은 변수나 함수의 초기값을 통해 해당 변수나 함수의 타입을 자동으로 결정하는 방식
즉 타입을 미리 정하는 것이 아니라 주어진 값을 기반으로 타입스크립트가 타입을 추론하여 결정하는 방식
-불필요한 타입의 선언을 최소화하고 가독성을 높일 수 있다.

*/
//ex01
//함수에서 매개변수에 대한 기본값을 통한 추론 방식
function print(message) {
    if (message === void 0) { message = "hello"; }
    console.log(message);
}
print("hi");
//print(1234);
//print함수는 매개변수 message의 기본값으로 'hello'를 가지므로 타입스크립트는 message의 타입을 스트링으로 간주
//ex02
function add(x, y) {
    if (x === void 0) { x = 1; }
    if (y === void 0) { y = 2; }
    return x + y;
}
var sum = add(5, 10);
var sum01 = add("5", "10");
console.log(sum);
console.log(sum01);
//배열타입에서 추론
var numbers = [1, 2, 3];
//배열의 요소들은 모두 숫자 이므로 타입스크립트는 이 배열을 숫자형으로 추론
numbers.push(4);
numbers.push("a"); // Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(numbers);
//객체 타입에서 추론
var person = {
    name: "park", // 문자열
    age: 40, // 숫자열
};
//person 객체의 속성은 문자열, 숫자열
console.log(person.name, person.age);
