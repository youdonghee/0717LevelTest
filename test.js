// 2. 소수 구하기
function isPrime(n) {
  if (31 % n == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isPrime(31)); //true
console.log(isPrime(10)); //false

// 3. 소인수 분해
function primeFactor(n) {
  let a = []
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      if (i !== 1 && i !== n) {
        a.push(i)
      }
    }
  }
  return a;
}

console.log(primeFactor(10));

// 4. 십진수를 이진수로 변환하기
function base10ToString(n) {

  function base10ToString(n) {
    
  }
}

console.log(base10ToString("4번",100)); //1100100

// 5. 배열 출력하기
function swap(strArr, idx1, idx2) {
  
}
function permute(strArr, begin, end) {
  
}
function permuteArray(strArr) {
  let a = strArr;
  console.log(a);
}
permuteArray(["1","2","3"]);

// 6. 거꾸로 읽어도 같은 문자열 인가?
function isPalindromeRecursive(word) {
  // 자르고 뒤집어서
  let word1 = [...word].reverse();

  // 원본
  let befinPos = word;

  // 뒤집은 문자열
  let endPos = word1.join('');

  return isPalindromeRecursiveHelper(word,befinPos,endPos)
}
function isPalindromeRecursiveHelper(word, beginPos, endPos) {
  // console.log(word, beginPos, endPos);
  if (beginPos === endPos) {
    return true;
  }else{
    return false;
  }
}
console.log(isPalindromeRecursive("appleelppa")); //true
console.log(isPalindromeRecursive("appleelpaa")); //false

// 공통항목 찾기
function commonElements(kArray) {
  let a = kArray[0];
  let b = kArray[1];
  let c = kArray[2];
  let ab = a.filter(i => b.includes(i));
  // console.log(a);
  let abc = ab.filter(i => c.includes(i));
  console.log(abc);
  // let [a] = kArray.slice(0,1);
  // let b = [...a];
  // console.log("aa",b);
}
console.log(commonElements([[1,2,3],[1,2,3,4],[1,2]])); // [1,2]
console.log(commonElements([[1,2,3,3],[3,4,5],[2,3,4,7,8]])); // [3]