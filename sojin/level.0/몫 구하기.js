import { checkAnswer } from "../../common.js";

/**
 * Β© DEV SSO π»
 * Current date: 2023-03-14
 * **/

/** λ¬Έμ  μ€λͺ
μ μ num1, num2κ° λ§€κ°λ³μλ‘ μ£Όμ΄μ§ λ, num1μ num2λ‘ λλ λͺ«μ return νλλ‘ solution ν¨μλ₯Ό μμ±ν΄μ£ΌμΈμ. **/

function solution(num1, num2) {
  return parseInt(num1 / num2);
}

function main() {
  const num1 = 10;
  const num2 = 5;
  const result = 2;

  checkAnswer(result == solution(num1, num2));
}

main();
