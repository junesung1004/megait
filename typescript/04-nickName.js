/*
타입스크립트 별칭
-타입을 선언할때 별칭을 이용하여 선언
-코드가 간결할 수 있으며, 가독성을 올리는 경우

-별칭을 선언할때에는 대문자로 시작하는것이 관례
*/
var name = "kim"; // let name:string = 'kim'
var age = 30; // let age:number = 30
var classMate = {
    name: "kim",
    age: 30,
};
var code; //code라는 변수를 선언한 값은 무조건 CodeName만 들어올 수 있음
code = "code";
console.log(code);
