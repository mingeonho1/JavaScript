import { checkAnswer } from "../../common.js";

/**
 * ยฉ DEV MING ๐ป
 * Current date: 2023-03-09
 * **/

/** ๋ฌธ์  ์ค๋ช
์ ์ num1๊ณผ num2๊ฐ ์ฃผ์ด์ง ๋,
 num1๊ณผ num2์ ํฉ์ returnํ๋๋ก soltuion ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์. **/

function solution(num1, num2) {
  return num1 + num2;
}

function main() {
  const num1 = 2;
  const num2 = 3;
  const result = 5;

  checkAnswer(solution(num1, num2) == result);
}

main();
