```
function calculaNota(ex, p1, p2) {
  const notaTotal = (ex * 1 + p1 * 2 + p2 * 3) / 6;
  if (notaTotal >= 9) {
    return "A";
  } else if (notaTotal < 9 && notaTotal >= 7.5) {
    return "B";
  } else if (notaTotal < 7.5 && notaTotal >= 6) {
    return "C";
  } else if (notaTotal < 6) {
    return "D";
  }
}
```
