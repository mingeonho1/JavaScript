import { checkAnswer } from "../../common.js";

/**
 * ยฉ DEV SSO ๐ป
 * Current date: 2023-03-14
 * **/

/** ๋ฌธ์  ์ค๋ช
์ ์ num1, num2๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, num1๋ฅผ num2๋ก ๋๋ ๋๋จธ์ง๋ฅผ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์. **/

function solution(num1, num2) {
  return num1 % num2;
}

function main() {
  const num1 = 3;
  const num2 = 2;
  const result = 1;

  checkAnswer(result == solution(num1, num2));
}

main();
