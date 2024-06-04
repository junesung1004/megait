/*
타입스크립트 별칭
-타입을 선언할때 별칭을 이용하여 선언
-코드가 간결할 수 있으며, 가독성을 올리는 경우

-별칭을 선언할때에는 대문자로 시작하는것이 관례
*/

type Text = string; //스트링 타입의 별칭 선언
type Num = number; // 숫자 타입의 별칭 선언
type Student = {
  name: string;
  age: number;
};

let name: Text = "kim"; // let name:string = 'kim'
let age: Num = 30; // let age:number = 30
let classMate: Student = {
  name: "kim",
  age: 30,
};

//문자열 리터럴 타입
//변수나 상수가 특정한 문자열의 값만 가지도록 제한하는 타입 = 특정 값만 허용하고 다른 값은 모두 에러처리
type CodeName = "code"; // CodeName이라는 타입으 생성. 값은 무조건 'code'라는 값만 가질 수 있음
let code: CodeName; //code라는 변수를 선언한 값은 무조건 CodeName만 들어올 수 있음
code = "code";
console.log(code);

//api통신에서 요청하는 타입에 대한 정의
//상태관리
//몇가지 특정한 상황에서 출력하는 값을 정의하고 그 외에는 모두 에러처리를 할 때 유용
