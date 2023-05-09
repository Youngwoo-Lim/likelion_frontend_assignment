// 구구단 출력하기
for (let i = 2; i <= 9; i++) {
    document.write("<h3>" + i + "단</h3>");
    for (let j = 1; j <= 9; j++) {
      document.write(i + " x " + j + " = " + i * j + "<br>");
    }
  }