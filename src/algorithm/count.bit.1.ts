// 数字二进制的 1 的个数

function countOnesInBinary(number) {
  let count = 0;
  while (number > 0) {
    count += number & 1;
    number >>= 1;
  }
  return count;
}

function countOnesInBinary2(number) {
  const binaryString = number.toString(2);
  let count = 0;
  for(const ){
    // xxx
  }
  return count;
}

function countOnesInBinary3(number) {
  let count = 0;
  while(number > 0){
    number /= 2
    count += 1
  }
  return count;
}

console.log(countOnesInBinary(6));
console.log(countOnesInBinary2(6));
