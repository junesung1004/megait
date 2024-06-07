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

type Direction = "top" | "bottom" | "left" | "right"; //사용할 여러 타입을 미리 선언(or조건문)
function move(direction: Direction): void {
  console.log(direction);
}

move("top");
// move("abc"); // Argument of type '"abc"' is not assignable to parameter of type 'Direction'.

//간단한 값의 타입의 정의는 불필요
const TextSize: 16 = 16;

function createText(size: 16) {
  console.log(`${size}`);
}

createText(TextSize);

type TextSize01 = 12 | 16 | 24;
function createFontSize(size: TextSize01) {
  console.log(`${size}`);
}
const title: TextSize01 = 12;

const subTitle: TextSize01 = 24;

createFontSize(title);
createFontSize(subTitle);

//ex03
type LoadingState = {
  state: "loading"; // state속성에 문자열 값을 가지는 객체 타입을 정의
  //네이밍은 전달할 속성을 의미할 뿐 다른 네이밍 가능(status)
};

type SuccessState = {
  state: "success";
  result: {
    data: string;
  };
};

type ErrorState = {
  state: "error";
  error: string;
};

type Networkstate = LoadingState | SuccessState | ErrorState;

function fetchData(): Networkstate {
  return {
    state: "success",
    result: {
      data: "데이터를 성공적으로 받아왔습니다.",
    },
  };
}

function printNetworkState(state: Networkstate) {
  switch (state.state) {
    case "loading":
      console.log("...loading");
      break;
    case "success":
      console.log(`${state.result.data}`);
      break;
    case "error":
      console.log(`${state.error}`);
  }
}

const network = fetchData();
printNetworkState(network);
