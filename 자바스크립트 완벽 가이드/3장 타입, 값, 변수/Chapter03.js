/*
Chapter03.js
3장 타입, 값, 변수
*/

a.sort();   // sort(a)의 객체 지향 버전

/*
--------------------------------------------------
    3.1.1 정수 리터럴
--------------------------------------------------
*/

0xff    // 15*16 + 15 = 255 (base 10) 십진수 255
0xCAFE911
0377    // 3*64 + 7*8 + 7 = 255 (base 10) 십진수 255

/*
--------------------------------------------------
    3.1.2 부동소수점 리터럴
--------------------------------------------------
*/

// [''digits''][.''digits''][(E|e)[(+|-)]''digits'']

3.14
2345.789
.333333333333333333
6.02e23         // 6.02 x 10^23(10의 23승)
1.4738223E-32   // 1.4738223 x 10^-32(//10의 -32승)

/*
--------------------------------------------------
    3.1.3 산술 연산
--------------------------------------------------
*/

Math.pow(2,53)              // => 9007199254740992: 2의 53승
Math.round(.6)              // => 1.0: 반올림
Math.ceil(.6)               // => 1.0: 올림
Math.floor(.6)              // => 0.0: 내림
Math.abs(-5)                // => 5: 절대 값
Math.max(x,y,z)             // 가장 큰 인자를 반환한다.
Math.min(x,y,z)             // 가장 작은 인자를 반환한다.
Math.random()               // 0과 1.0 사이에 임의의 수 x를 반환한다.
Math.PI                     // π: 원주율
Math.E                      // e: 자연 로그 상수
Math.sprt(3)                // 3의 제곱근
Math.pow(3, 3)              // 3의 세제곱
Math.sin(0)                 // 삼각함수(Math.cos, Math.atan 등)
Math.log(10)                // 자연 로그 10
Math.log(100)/Math.LN10     // 밑이 10인 로그 100
Math.log(512)/Math.LN2      // 밑이 2인 로그 512
Math.exp(3)                 // Math.E의 3 거듭제곱


Infinity                    // 읽고 쓰기 가능한 변수로 Infinity로 초기화된다.
Number.POSITIVE_INFINITY    // Infinity와 같은 값이지만 읽기 전용이다.
1/0                         // Infinity와 같은 값이다.
Number.MAX_VALUE + 1        // 역시 Infinity로 평가된다.
Number.NEGATIVE_INFINITY    // 이 표현은 음의 무한대다.
-Infinity
-1/0
-Number.MAX_VALUE - 1
NaN                         // 읽고 쓰기 가능한 변수로 NaN으로 초기화된다.
Number.Nan                  // NaN과 같은 값을 갖지만 읽기 전용 프로퍼티다.
0/0                         // NaN으로 평가한다.
Number.MIN_VALUE/2          // 언더플로: 0으로 간주한다.
-Number.MIN_VALUE/2         // 음의 0으로 간주한다.
-1/Infinity                 // 이것 또한 음의 0으로 간주한다.
-0


var zero = 0;       // 일반적인 0
var negz = -0;      // 음의 0
zero === negz       // => true: 0과 음의 0은 같다.
1/zero === 1/negz   // => false: 무한대와 음의 무한대는 같지 않다.


/*
--------------------------------------------------
    3.1.4 이진 부동소수점과 반올림 오류
--------------------------------------------------
*/

var x = .3 - .2;    // 0.3 - 0.2
var y = .2 - .1;    // 0.2 - 0.1
x == y              // => false: 두 값은 같지 않다.
x == .1             // => false: 0.3 - 0.2는 0.1이 아니다.
y == .1             // => true: 0.2 - 0.1은 0.1과 같다.

/*
--------------------------------------------------
    3.1.5 날짜와 시간
--------------------------------------------------
*/

var then = new Date(2010, 0, 1);                // 2010년 1월 1일
var later = new Date(2010, 0, 1, 17, 10, 30);   // 2010년 1월 1일,
                                                // 오후 5시 10분 30초
var now = new Date();       // 현재 날짜와 시간
var elapsed = now - then;   // 밀리초로 날짜 계산

later.getFullYear();        // => 2010
later.getMonth()            // => 0: 월은 0부터 시작한다.
later.getDate()             // => 1: 일은 1로 시작한다.
later.getDay()              // => 5: 요일. 0은 일요일, 5는 금요일
later.getHours()            // => 17: 오후 5시
later.getUTCHours()         // 시간대에 의존한 UTC 시간
later.toString()            // => "Fri Jan 01 2010 17:10:30 GMT-0800 (PST)"
later.toUICString()         // => "Sat, 02 Jan 2010 01:10:30 GMT"
later.toLocaleDateString()  // => "01/01/2010"
later.toLocaleTimeString()  // => "05:10:30 PM"
later.toIS0String()         // => "2010-01-02T01:10:30.000Z";
                            // ECMAScript 5에서만 지원한다.

/*
--------------------------------------------------
    3.2 텍스트
--------------------------------------------------
*/

var p = "π";    // π는 한 글자로, 16비트 코드 포인트는 0x03c0이다. 
var e = "e";    // e는 한 글자로, 17비트 코드 포인트 0x1d452이다.
p.length        // => 1: p는 한 개의 16비트 값으로 이루어진다.
e.length        // => 2: UTF-16으로 인코딩된 e는 두 개의 16비트 값으로 이루어진다.
                // "\ud835\udc52"

/*
--------------------------------------------------
    3.2.1 문자열 리터럴
--------------------------------------------------
*/

""          // 빈 문자열: 문자가 없다.
'testing'
"3.14"
'name="myform"'
"0'Reilly의 책을 더 좋아하지 않습니까?"
"이 문자열은\n 두 줄이다."
"π는 원지름에 대한 둘레의 비율이다."


"two\nlines"    // 한 줄이 두 줄로 표현되는 한 문자열
// "one\           // 세 줄로 표현된 한 줄 문자열. ECMAScript 5에서만 가능하다.
// long\
// line"

/* <button onclick="alert('Thank you')">Click Me</button> */

/*
--------------------------------------------------
    3.2.3 문자열 다루기
--------------------------------------------------
*/

msg = "Hello, " + "world";  // 문자열을 합친다. "Hello, world"
greeting = "Welcome to my blog," + " " + name;

var s = "hello, world"  // 'hello world'를 사용한다
s.charAt(0)             // => "h": 첫 번째 문자
s.charAt(s.length-1)    // => "d": 마지막 문자
s.substring(1,4)        // => "ell": 두 번째, 세 번째, 네 번째 문자
s.slice(1,4)            // => "ell": 두 번째, 세 번째, 네 번째 문자
s.slice(-3)             // => "rld": 마지막 세 문자
s.indexOf("l")          // => 2: 문자 l이 위치한 첫 번째 위치
s.lastIndexOf("l")      // => 10: 문자 l이 위치한 마지막 위치
s.indexOf("l", 3)       // => 3: 세 번째 문자 이후, 문자 "l"이 등장하는 첫 위치
s.split(", ")           // => ["hello", "world"] 부분 문자열로 나눈다.
s.replace("h", "H")     // => "Hello, world": 문자열에서 h를 H로 바꾼다.
s.toUpperCase()         // => "HELLO, WORLD"


s = "hello, world";
s[0]            // => "h"
s[s.length-1]   // => "d"

/*
--------------------------------------------------
    3.2.4 패턴 매칭
--------------------------------------------------
*/

/^HTML/             // HTML로 시작하는 문자열
/[1-9][0-9]*/       // 0 아닌 숫자로 시작하는 숫자
/\bjavascript\b/i   // 대소문자 구별 없이 javascript와 일치하는 문자열


var text = "testing: 1, 2, 3";  // 간단한 문자열
var pattern = /\d+/g            // 하나 이상의 모든 숫자와 일치
pattern.test(test)              // => true: 일치하는 문자열이 존재
text.search(patten)             // => 9: 첫 번째로 매치하는 문자열의 위치
text.match(pattern)             // => ["1", "2", "3"]: 일치된 항목의 배열
text.replace(pattern, "#");     // => "testing: #, #, #"
text.split(/\D+/);          // => ["", "1", "2", "3"]: 숫자가 아닌 문자(열)를 기준으로 분할


/*
--------------------------------------------------
    3.6 래퍼(wrapper) 객체
--------------------------------------------------
*/

var s = "hello world";                              // 문자열
var word = s.substring(s.indexOf(" ")+1, s.length); // 분자열 프로퍼티 사용


var s = "test"; // 이 문자열을 사용한다.
s.len = 4;      // 문자열 프로퍼티에 값을 할당한다.
var t = s.len;  // 프로퍼티를 참조하라.

var s = "test", n = 1, b = true;    // 문자열, 숫자, boolean 값
var s = new String(s);              // String 객체
var N = new Number(n);              // Number 객체
var B = new Boolean(b);             // Boolean 객체

/*
--------------------------------------------------
    3.7 변경 불가능한 원시 타입 값과 변경 가능 객체 참조
--------------------------------------------------
*/

var s = "hello";    // "hello" 문자열을 사용한다.
s.toUpperCase();    // "HELLO"을 반환한다, 하지만 s는 변경되지 않는다.
s                   // => "hello"; 원래의 문자열은 바뀌지 않았다.


var o = { x:1 };    // 객체를 선언한다.
o.x = 2;            // 프로퍼티의 값을 변경함으로써 객체를 변경한다.
o.y = 3;            // 다시 새로운 프로퍼티를 추가하는 것으로 객체를 변경한다.
var a = [1,2,3]     // 배열은 타입이 고정되어 있지 않다.
a[0] = 0;           // 하나의 배열 원소 값을 바꾼다.
a[3] = 4;           // 새로운 하나의 배열 원소를 추가한다.


var o = {x:1}, p = {x:1};   // 같은 프로퍼티를 가지고 있는 두 객체
o === p                     // => false: 같지 않은 다른 두 객체
var a = [ ], b = [ ];       // 두 개의 빈 배열 a와 b를 선언
a === b                     // => false: 두 배열 a와 b는 같지 않다.


var a = []; // 변수 a는 빈 배열을 참조한다.
var b = a;  // 변수 b는 a와 같은 배열을 참조한다.
b[0] = 1;   // 변수 b가 참조하는 배열을 변경한다.
a[0]        // => 1: 변수 a를 통해서도 바뀐 점을 볼 수 있다.
a === b     // => true: 변수 a와 b는 한 객체를 참조하기 때문에 a와 b는 같다.


var a = ['a','b','c'];              // 복사하고자 하는 배열
var b = [];                         // 복사해 넣을 배열
for(var i = 0; i < a.length; i++) { // 배열 a의 각 인덱스
    b[i] = a[i];                    // a의 원소를 b로 복사한다.
}


function equalArrays(a,b) {
    if (a.length != b.length) return false; // 크기가 같은 배열은 같지 않다.
    for (var i = 0; i < a.length; i++)      // 모든 원소를 순회한다.
        if (a[i] !== b[i]) return false;    // 일부 원소가 서로 다르다면,
                                            // 두 배열은 같지 않다.
    return true;    // 서로 다른 원소가 없다면 두 배열은 같다.
}


/*
--------------------------------------------------
    3.8 타입 변환
--------------------------------------------------
*/

10 + " objects"     // => "10 objects". 숫자 10은 문자열로 변환된다.
"7" * "4"           // => 28: 두 문자열은 숫자로 변환된다.
var n = 1 - "x";    // => NaN: 문자열 "x"는 숫자로 변환할 수 없다.
n + " objects"      // => "NaN objects": NaN은 문자열 "NaN"으로 변환된다.


/*
--------------------------------------------------
    3.8.1 변환과 동치
--------------------------------------------------
*/

null == undefined   // 이 두 값은 같다고 판단된다.
"0" == 0            // 비교하기 전에 숫자로 변환한다.
0 == false          // boolean은 비교하기 전에 숫자로 변환한다.
"0" == false        // 두 피연산자는 비교하기 전에 숫자로 변환한다.


/*
--------------------------------------------------
    3.8.2 명시적 변환
--------------------------------------------------
*/

Number("3")     // => 3
String(false)   // => "false" false.toString()도 마찬가지다.
Boolean([ ])    // => true
Object(3)       // => new Number(3)


x + ""  // String(x)와 같다
+x      // Number(x)와 같다. 결과는 x-0이다.
!!x     // Boolean(x)와 같다. 두 개의 !를 주목하라


var n = 17;
binary_string = n.toString(2);      // "10001"로 평가된다
octal_string = "0" + n.toString(8); // "021"로 평가된다
hex_string = "0x" + n.toString(16); // "0x11"로 평가된다


var n = 123456.789;
n.toFixed(0);       // "123457"
n.toFixed(2);       // "123456.79"
n.toFixed(5);       // "123456.78900"
n.toExponential(1); // "1.2e+5"
n.toExponential(3); // "1.235e+5"
n.toPrecision(4);   // "1.235e+5"
n.toPrecision(7);   // "123456.8"
n.toPrecision(10);  // "123456.7890"


parseInt("3 blind mice")    // => 3
parseInt(" 3.14 meters")    // => 3.14
parseInt("-12.34")          // => -12
parseInt("0xFF")            // => 255
parseInt("0xff")            // => 255
parseInt("-0xFF")           // => -255
parseFloat(".1")            // => 0.1
parseInt("0.1")             // => 0
parseInt(".1")              // => NaN: 정수는 "."로 시작할 수 없다
parseInt("$72.47")          // => NaN: 숫자는 "$"로 시작할 수 없다


parseInt("11", 2);          // => 3 (1*2 + 1)
parseInt("ff", 16);         // => 255 (15*16 + 15)
parseInt("zz", 36);         // => 1295 (35*36 + 35)
parseInt("077", 8);         // => 63 (7*8 + 7)
parseInt("077", 10);        // => 77 (7*10 + 7)


/*
--------------------------------------------------
    3.8.3 객체에서 원시 타입으로 변환
--------------------------------------------------
*/

({x:1, y:2}).toString() // => "[object Object]"


[1,2,3].toString()                  // => "1,2,3"
(function(x) { f(x); }).toString()  // => "function(x) {\n f(x);\n"
/\d+/g.toString()               // => "/\\d+/g" 
new Date(2010,0,1).toString()   // => "Fri Jan 01 2010 00:00:00 GMT0800 (PST)"


var d = new Date(2010, 0, 1);   // 2010년 1월 1일, (태평양 시간)
d.valueOf()                     // => 1262332800000


var now = new Date();   // Date 객체 생성
typeof (now + 1)        // => "string": +는 날짜를 문자열로 변환시킨다.
typeof (now - 1)        // => "number": -는 객체에서 숫자로 변환시킨다.
now == now.toString()   // => true: 암시적 그리고 명확한 문자열 반환
now > (now - 1)         // => true: > Date에서 숫자로 변환하라.

/*
--------------------------------------------------
    3.9 변수 선언
--------------------------------------------------
*/

var i;
var sum;

var i, sum;

var message = "hello";
var i = 0. j = 0, k = 0

for(var i = 0; i < 10; i++) console.log(i);
for(var i = 0, j=10; i < 10; i++, j--) console.log(i*j);
for(var p in o) console.log(p);

var i = 10;
i = "ten";

/*
--------------------------------------------------
    3.10 변수의 유효범위
--------------------------------------------------
*/

var scope = "global";       // 전역 변수를 선언한다.
function checkscope() {
    var scope = "local";    // 전역 변수와 같은 이름으로 지역 변수를 선언한다.
    return scope;           // 전역 변수가 아닌 지역 변수를 반환한다.
}
checkscope()                // => "local"


scope = "global";           // var 없이 전역 변수를 선언한다.

function checkscope2() {
    scope = "local";        // 이런! 전역 변수를 바꿔버렸네!
    myscope = "local";      // 암묵적으로 전역 변수를 선언한다.
    return [scope, myscope] // 두 변수의 값을 반환한다.
}

checkscope2()   // => ["local", "local"]: 부작용 발견!
scope           // => "local": 전역 변수가 바뀌었다.
myscope         // => "local": 전역 네임스페이스가 지역 변수로 오염되었다.


var scope = "global scope";             // 전역 변수

function checkscope() {
    var scope = "local scope";          // 지역 변수
        function nested() {
            var scope = "nested scope"; // 함수 안에 포함된 유효범위의 지역 변수
            return scope;               // nested() 안의 변수를 반환한다.
        }
    return nested();    
}
checkscope()                            // => "nested scope"

/*
--------------------------------------------------
    3.10.1 함수 유효범위와 끌어올림(hoisting)
--------------------------------------------------
*/

function test(o) {
    var i = 0;                          // i는 함수 전체에 걸쳐 정의된다.
    if (typeof o == "object") {     
        var j = 0;                      // j는 블록뿐만 아니라
                                        // 함수 전체에 걸쳐 정의된다

            for(var k=0; k < 10; k++) { // k는 반복문 외에도
                                        // 함수 전체에 걸쳐 정의된다.
            console.log(k);             // 숫자 0부터 9까지 출력한다.
        }
        console.log(k);                 // k는 여전히 정의되어 있다.
                                        // 10을 출력한다.
    }
    console.log(j);                     // j는 정의되어 있고,
                                        // 초기화되어 있지 않을 것이다.
}


var scope = "global";
function f() {
    console.log(scope);     // "global"이 아니라 "undefined"를 출력한다.
    var scope = "local";    // 여기서 초기화하지만, 정의는 다른 곳에서 이루어졌다.
    console.log(scope);     // "local"을 출력한다.
}


function f() {
    var scope;              // 지역 변수는 함수 맨 꼭대기에서 선언한다.
    console.log(scope);     // scope 변수는 존재하지만 아직 "undefined" 값이다.
    scope = "local";        // 이제 scope 변수가 초기화되고 제대로 된 값이 있다.
    console.log(scope);     // 여기서는 우리가 기대한 값이 들어 있다.
}

/*
--------------------------------------------------
    3.10.2 프로퍼티로서의 변수
--------------------------------------------------
*/

var truever = 1;        // 올바르게 선언한 전역 변수, 삭제할 수 없다.
fakevar = 2;            // 삭제 가능한 전역 변수
this.fakevar2 = 3;      // 삭제 가능한 전역 변수
delete truever          // => false: 변수는 삭제할 수 없다.
delete fakevar          // => true: 변수는 삭제된다.
delete this.fakevar2    // => true: 변수는 삭제된다.
