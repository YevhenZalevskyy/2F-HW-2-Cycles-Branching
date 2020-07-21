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
    if (M <= N) {
      alert (`The number must be greater than ${N}. Try again`)
    }
    continue;
  }
  alert ('It is not integer. Try again');
} while (!Number.isInteger(M) || M == '' || M <= N);

isEven = confirm('Skip even numbers?')

for (let i = N; i <= M; i++) {
  if (i % 2 === 0 && isEven) continue;
  sum += i;
}

console.log(sum);
