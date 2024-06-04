/*
정적 타입 검사
-컴파일 시점에서 변수와 함수의 타입을 검사해서 타입 오류를 미리 발견하는 방법
*/
let age: number = 30;
//age = "hi";

console.log(age); //터미널에서 컴파일시 에러를 출력해주지만 타입검사 자체를 막는 기능은 없기 때문에 출력은 됨

/*
호환성
-타입스크립트는 자바스크립트와 상위 개념으로 기존 자바스크립트 코드와 호환이 가능
-자바스크립트 파일을 그대로 사용할 수도 있으며, 추가적으로 타입스크립트를 도입할 수 있다
*/

function text01(name) {
  return "h1 " + name;
}

function text02(name: string): string {
  return "hi " + name;
}

console.log(text01("kim"));
console.log(text02("park"));

/*
객체 지향 프로그래밍 지원
-타입스크립트는 클래스, 인터페이스, 상속 등 객체 지향 프로그래밍(oop)의 개념을 지원
-oop는 데이터를 객체로 모델링하고, 객체 간의 상호작용을 통해 문제를 해결하는 프로그래밍 방식
*/

//인터페이스의 정의
interface PersonName {
  firstName: string;
  lastName: string;
}

//인터페이스를 사용한 예시 -- 클래스
//implements = typescript에서 클래스가 특정 인터페이스를 준수하도록 선언하는 키워드
class Employee implements PersonName {
  constructor(public firstName: string, public lastName: string, public jobPosition: string) {}
}

let employee01 = new Employee("홍", "길동", "개발자");
console.log("employee01 : ", employee01);
