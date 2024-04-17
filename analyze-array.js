export default function analyzeArray(arr) {
  const sum = arr.reduce((prev, curr) => prev + curr, 0);
  const average = sum / arr.length;

  let min = Infinity;
  let max = -Infinity;
  arr.forEach((num) => {
    if (num < min) min = num;
    if (num > max) max = num;
  });

  const length = arr.length;

  return { average, min, max, length };
}
