/*
assertion
타입 단언
*/

//타입 단언 선언 방법
//as문법을 사용하는 방법
let someValue: any = "text";
let strValue: number = (someValue as string).length;
console.log(strValue);

//꺽쇠 문법을 사용하는 방법
let strValue01: number = (<string>someValue).length;

//함수에서 사용하는 방법
function valueFn(): any {
  return "text";
}

let value = valueFn();
let strValue02 = (value as string).length;
console.log(strValue02);

//dom요소에 접근시 타입 단언
const inputItem = document.querySelector("input")!;
//inputItem.value = "hello";
//document.querySelector는 요소를 반환하거나 혹은 null값을 반환
//! 연산자를 사용하여 null이 아님을 단언하고 있음
//선택된 요소가 실제로 존재하지 않을 경우, 이후 해당 요소를 사용하려 할때 오류

const inputItem01 = document.querySelector("input");
if (inputItem01) {
  (inputItem01 as HTMLInputElement).value = "hello";
} else {
  console.log("입력요소가 존재하지 않습니다.");
}

//함수에서 반환값 처리
function getnumbers(): number[] | null {
  return null;
}
//const numberItem = getnumbers()!;
//numberItem.push(4); //null에는 push메서드를 사용할 수 없음.
//console.log(numberItem);

const numberItem = getnumbers();
if (numberItem) {
  numberItem.push(4);
} else {
  console.log("null은 배열이 아니라 push 메서드 사용을 할 수 없습니다.");
}
