"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
function App() {
    // function 함수(x: number | string) :void{
    //   if (x의 타입이 숫자면) {
    //     console.log(x + 1);
    //   }
    // }
    function 출력(x) {
        if (x === undefined) {
            return "이름이 없습니다.";
        }
        else {
            return "안녕하세요" + x;
        }
    }
    function 자릿수(x) {
        console.log(x.toString());
        return x.toString().length;
    }
    function 결혼가능하냐(income, haveHouse, charm) {
        var incomeScore = income;
        var houseScore = haveHouse ? 500 : 0;
        var charmScore = charm === "상" ? 100 : 0;
        var totalScore = incomeScore + houseScore + charmScore;
        if (totalScore >= 600) {
            return "결혼가능";
        }
    }
    console.log(결혼가능하냐(100, true, "상"));
    var user = "kim";
    var age = undefined;
    var married = false;
    var 철수 = [user, age, married];
    var 학교 = {
        score: [100, 97, 84],
        teacher: "Phil",
        friend: "John",
    };
    학교.score[4] = false;
    학교.friend = ["Lee", 학교.teacher];
    var 이름 = "HanJoo Lee";
    var 나이 = 30;
    var 출생지역 = "부산";
    var 노래정보 = { title: "one love", singer: "MC THE MAX" };
    var 회원들 = ["kim", "park", "lee", 1];
    var 오브젝트 = { a: 123 };
    var project = {
        member: ["kim", "lee"],
        days: 15,
        started: false,
    };
    var 회원들2 = { member1: "kim", member2: "lee" };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "App", children: [(0, jsx_runtime_1.jsxs)("div", { children: ["1\uBC88\uC219\uC81C(input: \"\uC774\uD55C\uC8FC\"): ", 출력("이한주")] }), (0, jsx_runtime_1.jsxs)("div", { children: ["1\uBC88\uC219\uC81C(input: none): ", 출력()] }), (0, jsx_runtime_1.jsxs)("div", { children: ["2\uBC88\uC219\uC81C(input: \"213\"): ", 자릿수(213)] }), (0, jsx_runtime_1.jsxs)("div", { children: ["2\uBC88\uC219\uC81C(input: 213): ", 자릿수(213)] })] }));
}
exports.default = App;
