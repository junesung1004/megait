/*
원시형 타입 : number, strig, boolean, symbol, null, undefined, void, never

객체형 타입 : function, array
*/

//number
let num: number = 9;
console.log(num);

//string
let str: string = "hi";
console.log(str);

//boolean
let boal: boolean = false;
console.log(boal);

//void : 함수에서 반환 타입을 명시할 때 사용, = 해당 함수가 값을 반환하지 않음을 의미
//반환값이 없거나 반환되는 값을 무시할 때 사용
function logMessage(message: string): void {
  console.log(message);
}
logMessage("안뇽 나는 준성이얌");
//void의 경우 타입으로 사용하는 것은 권장하지 않고 주로 함수의 반환 타입으로만 사용하도록 권장하고 있다.
//안좋은 예시
let unVoid: void = undefined;

//never
//절대적으로 값이 반환되지 않는 함수의 반환타입을 명시할때 = 무한루프 & 정상적인 함수의 종료가 안될때를 의미
function errorText(message: string): never {
  throw new Error(message);
}
try {
  errorText("에러가 발생했습니다.");
} catch (err) {
  console.error(err.message);
}

//null : 값이 없음을 의미
let text1: null; //null로만 타입을 지정하면 타입검사를 진행할때 명확한 타입을 알 수 없기에 사용을 지향하도록 한다.
let text2: null | string; //값을 비워야 할때는 or연산자를 이용해서 이방법을 권장한다.
text1 = null;
text2 = "kim";

//undefiend
let age: undefined;
let age1: undefined | number;

//any : 어떤 타입의 값도 될 수 있다. (타입검사를 하지 않는다.)
let anything: any = 10;
anything = "kim";
console.log(anything);
// console.log(anything.toFixed(2));

//unknown = 어떤 타입의 값도 될 수 있음(타입검사를 함)
//타입검사를 진행해서 변수의 타입을 좁혀서 사용
let un01: unknown = "0";
un01 = "kim";

if (typeof un01 === "string") {
  console.log(un01.toUpperCase());
}

//object
//오브젝트 타입은 객체타입을 나타내며 모든 비원시 타입을 포함한다.
//오브젝트 또한 범위가 너무 넓고 구체적이지 않기 때문에 불안정하여 사용을 지향한다. (any, unknown, null, undefined, object)
let obj: object; // 권장하지 않은 오브젝트 타입 선언

function obj01(obj: object) {
  console.log(obj);
}

obj01({ name: "kim" });
