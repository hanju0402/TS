import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { StringDecoder } from "string_decoder";

function App() {
    // function 함수(x: number | string) :void{
    //   if (x의 타입이 숫자면) {
    //     console.log(x + 1);
    //   }
    // }

    function 출력(x?: string): string {
        if (x === undefined) {
            return "이름이 없습니다.";
        } else {
            return "안녕하세요" + x;
        }
    }

    function 자릿수(x: string | number): number {
        console.log(x.toString());
        return x.toString().length;
    }

    function 결혼가능하냐(income: number, haveHouse: boolean, charm: string): string | void {
        let incomeScore: number = income;
        let houseScore: number = haveHouse ? 500 : 0;
        let charmScore: number = charm === "상" ? 100 : 0;
        let totalScore: number = incomeScore + houseScore + charmScore;

        if (totalScore >= 600) {
            return "결혼가능";
        }
    }

    console.log(결혼가능하냐(100, true, "상"));

    type 철수 = [string, number | undefined, boolean];

    let user: string = "kim";
    let age: number | undefined = undefined;
    let married: boolean = false;
    let 철수: 철수 = [user, age, married];

    let 학교: { score: (number | boolean)[]; teacher: string; friend: string | string[] } = {
        score: [100, 97, 84],
        teacher: "Phil",
        friend: "John",
    };

    학교.score[4] = false;
    학교.friend = ["Lee", 학교.teacher];

    type Project = { member: string[]; days: Number; started: boolean };
    let 이름: string = "HanJoo Lee";
    let 나이: number = 30;
    let 출생지역: string = "부산";

    let 노래정보: { title: string; singer: string } = { title: "one love", singer: "MC THE MAX" };

    let 회원들: (string | number)[] = ["kim", "park", "lee", 1];
    let 오브젝트: { a: string | number } = { a: 123 };

    let project: Project = {
        member: ["kim", "lee"],
        days: 15,
        started: false,
    };

    let 회원들2: { member1: string; member2: string } = { member1: "kim", member2: "lee" };
    return (
        <div className="App">
            <div>1번숙제(input: "이한주"): {출력("이한주")}</div>
            <div>1번숙제(input: none): {출력()}</div>
            <div>2번숙제(input: "213"): {자릿수(213)}</div>
            <div>2번숙제(input: 213): {자릿수(213)}</div>

            {/* <div>3번숙제: {결혼가능하냐(99, true, "중")}</div> */}
        </div>
    );
}

export default App;
