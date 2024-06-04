/*
정적 타입 검사
-컴파일 시점에서 변수와 함수의 타입을 검사해서 타입 오류를 미리 발견하는 방법
*/
var age = 30;
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
function text02(name) {
    return "hi " + name;
}
console.log(text01("kim"));
console.log(text02("park"));
//인터페이스를 사용한 예시 -- 클래스
//implements = typescript에서 클래스가 특정 인터페이스를 준수하도록 선언하는 키워드
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, jobPosition) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobPosition = jobPosition;
    }
    return Employee;
}());
var employee01 = new Employee("홍", "길동", "개발자");
console.log("employee01 : ", employee01);
