import { checkAnswer } from "../../common.js";

/**
 * ยฉ DEV SSO ๐ป
 * Current date: 2023-03-14
 * **/

/** ๋ฌธ์  ์ค๋ช
์ ์ num1, num2๊ฐ ๋งค๊ฐ๋ณ์ ์ฃผ์ด์ง๋๋ค. num1๊ณผ num2๋ฅผ ๊ณฑํ ๊ฐ์ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์. **/

function solution(num1, num2) {
  return num1 * num2;
}

function main() {
  const num1 = 3;
  const num2 = 4;
  const result = 12;

  checkAnswer(result == solution(num1, num2));
}

main();
