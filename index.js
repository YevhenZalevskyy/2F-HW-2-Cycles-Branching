let N, M = '';
let sum = 0;

do {
  N = +prompt('Enter integer N');
  if (Number.isInteger(N)) {
    continue;
  }
  alert ('It is not integer. Try again');
} while (!Number.isInteger(N));

do {
  M = +prompt('Enter integer M');
  if (Number.isInteger(M)) {
    if (M <= N) {
      alert (`The number must be greater than ${N}. Try again`)
    }
    continue;
  }
  alert ('It is not integer. Try again');
} while (!Number.isInteger(M) || M <= N);

isEven = confirm('Skip even numbers?')

for (let i = N; i <= M; i++) {
  if (i % 2 === 0 && isEven) continue;
  sum += i;
}

console.log(sum);
