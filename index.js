let N, M = '';
let sum = 0;

do {
  N = +prompt('Enter integer N');
  if (Number.isInteger(N) && N != '') {
    continue;
  }
  alert ('It is not integer. Try again');
} while (!Number.isInteger(N) || N == '');

do {
  M = +prompt('Enter integer M');
  if (Number.isInteger(M) && M != '') {1
    continue;
  }
  alert ('It is not integer. Try again');
} while (!Number.isInteger(M) || M == '');

isEven = confirm('Skip even numbers?')

const minNum = Math.min(N, M);
const maxNum = Math.max(N, M);

for (let i = minNum; i <= maxNum; i++) {
  if (i % 2 === 0 && isEven) continue;
  sum += i;
}

console.log(sum);
