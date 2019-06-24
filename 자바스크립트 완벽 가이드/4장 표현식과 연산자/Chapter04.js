

/* 4.1 기본 표현식 */

1.23        // 숫자 리터럴
"hello"     // 문자열 리터럴
/pattern/   //정규 표현식 리터럴

true        // boolean true 값으로 평가된다.
false       // boolean false 값으로 평가된다.
null        // null 값으로 평가된다.
this        // '현재' 객체로 평가된다.

i           // 변수 i의 값으로 평가된다.
sum         // 변수 sum의 값으로 평가된다.
undefined   // undefined는 전역 변수로 null처럼 키워드가 아니다.


/* 4.2 객체와 배열의 초기화 표현식 */

[]          // 빈 배열, 대괄호 안에 표현식이 없으면 원소가 없음을 말한다.
[1+2, 3+4]  // 두 개의 원소를 가진 배열. 첫 번째는 3, 두 번째는 7이다.

var matrix = [[1,2,3], [4,5,6,], [7,8,9]];

var sparseArray = [1,,,,5];

var p = { x:2.3, y:-1.2};   // 두 개의 프로퍼티를 가진 객체
var q = {};                 // 프로퍼티가 없는 빈 객체
q.x = 2.3; q.y = -1.2;      // 객체 q와 p는 같은 프로퍼티를 갖는다.

var restangle = { upperLeft: { x: 2, y: 2 },
                  lowerRight: { x: 4, y: 5 } };

var side = 1;
var square = { "upperLeft" : { x: p.x, y: p.y },
               "lowerRight" : { x: p.x + side, y: p.y + side } };


/* 4.3 함수 정의 표현식 */

// 이 함수는 전달된 값을 제곱하여 반환한다.
var square = function(x) { return x * x; }


/* 4.4 프로퍼티 접근 표현식 */

표현식 . 식별자
표현식 [ 표현식 ]

var o = {x:1, y:{z:3}}; // 간단한 객체 리터럴 예제
var a = [o,4,[5,6]];    //객체를 포함한 간단한 배열 리터럴 예제
o.x                     // 1: 표현식 o의 프로퍼티 x의 값
o.y.z                   // 3: 표현식 o.y의 프로퍼티 z의 값
o["x"]                  // 1: 객체 o의 프로퍼티 x의 값
a[1]                    // 4: 표현식 a의 인덱스 1 위치에 있는 원소 값
a[2]["1"]               // 6: 표현식 a[2]의 인덱스 1 위치에 있는 원소 값
a[0].x                  // 1: 표현식 a[0]의 프로퍼티 x의 값


/* 4.5 호출 표현식 */

f(0)                    // f는 함수 표현식이다. 여기서 '0'은 인자 표현식이다.
Math.max(x,y,z)         // Math.max는 함수고, x,y,z가 호출 인자다.
a.sort()                // a.sort는 함수고, 호출 인자가 없다.


/* 4.6 객체 생성 표현식 */

new Object()
new PointerEvent(2,3)

new Object
new Date

/* 4.7.5 연산자 우선순위 */

w = x + y*z;

w = (x + y)*z;

typeof moveBy.functions[x](y)


/* 4.7.6 연산자 결합 방향 */

w = x - y - z;

w = ((x - y) - z);

x = ~-y;
w = x = y = z;
q = a?b:c?d:e?f:g;

x = ~(-y);
w = (x = (y = z));
q = a?b:(c?d:(e?f:g));


/* 4.8.1 덧셈 연산자 + */

1 + 2                   // => '3'
"hello" + " " + "there" // => 'hello there'
"1" + "2"               // => '12'

1+ 2                    // => 3: 덧셈
"1" + "2"               // => '12': 이어붙이기
"1" + 2                 // => '12': 숫자를 문자열로 바꾼 후 이어붙이기
1 + {?}                 // => "1[object Object]": 객체를 문자열로 바꾼 후 이어붙이기
true + true             // => 2: boolean 값을 숫자로 바꾼 후 더하기
2 + null                // => 2: null 값을 0으로 바꾼 후 더하기
2 + undefined           // => NaN: undefined를 NaN으로 바꾼 후 더하기

1 + 2 + " blind mice";  // => '3 blind mice'
1 + (2 + " blind mice");// => '12 blind mice'


/* 4.8.2 단항 산술 연산자 */

var i = 1, j = ++i;     // i와 j 모두 2이다.
var i = 1, j = i++;     // i는 2이고, j는 1이다.


/* 4.9.2 비교 연산자 */

1+ 2            // 덧셈. 결과는 3
"1" + "2"       // 결과는 '12'
"1" + 2         // 2가 문자열로 변환되고, 결과는 '12'
11 < 3          // 숫자 비교. 결과는 false
"11" < "3"      // 숫자 비교. '11'이 숫자 11로 변환되고, 결과는 false.
"11" < 3        // 숫자 비교. 결과는 false
"one" < 3       // 숫자 비교. 'one'이 NaN으로 변환되고, 결과는 false.


/* 4.9.3 in 연산자 */

var point = { x:1, y:1 }; // 객체 정의
"x" in point              // => true: 프로퍼티 x가 있다.
"z" in point              // => false: 프로퍼티 z가 있다.
"toString" in point       // => true: 상속된 프로퍼티
var data = [7,8,9];       // 원소가 0, 1, 2 위치에 차례로 7, 8, 9
"0" in data               // => true: 배열에 0번째 원소가 있기 때문
1 in data                 // => true: 배열에 1번째 원소가 있기 때문
3 in data                 // => false: 배열에 3번째 원소가 없기 때문


/* 4.9.4 instanceof 연산자 */

