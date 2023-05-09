function calculator(num1, num2, cal) {
    let result;
    switch (cal) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = "잘못된 연산자입니다.";
        break;
    }
    return result;
  }
  
  // 사용자 입력 받아 계산하기
  let num1 = parseInt(prompt("첫 번째 숫자를 입력하세요."));
  let cal = prompt("연산자를 입력하세요.");
  let num2 = parseInt(prompt("두 번째 숫자를 입력하세요."));
  
  // 결과 출력하기
  let result = calculator(num1, num2, cal);
  document.write(num1 + " " + cal + " " + num2 + " = " + result);