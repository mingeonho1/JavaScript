import { checkAnswer } from "../../common.js";

/**
 * Β© DEV SSO π»
 * Current date: 2023-03-14
 * **/

/** λ¬Έμ  μ€λͺ
μ μ num1κ³Ό num2κ° λ§€κ°λ³μλ‘ μ£Όμ΄μ§ λ, num1μ num2λ‘ λλ κ°μ 1,000μ κ³±ν ν μ μ λΆλΆμ return νλλ‘ soltuion ν¨μλ₯Ό μμ±ν΄μ£ΌμΈμ. **/

function solution(num1, num2) {
  return parseInt((num1 / num2) * 1000);
}

function main() {
  const num1 = 3;
  const num2 = 2;
  const result = 1500;

  checkAnswer(result == solution(num1, num2));
}

main();
