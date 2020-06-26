// The prime 41, can be written as the sum of six consecutive primes:

// 41 = 2 + 3 + 5 + 7 + 11 + 13
// This is the longest sum of consecutive primes that adds to a prime below one - hundred.

// The longest sum of consecutive primes below one - thousand that adds to a prime, contains 21 terms, and is equal to 953.

// Which prime, below one - million, can be written as the sum of the most consecutive primes ?
function isPrime(n){
    if (n == 2) return true;
    if(n%2==0 || n ==1) return false;
    for(let i = 3; i<=Math.sqrt(n);i+=2){
        if (n%i==0){
            return false;
        }
    }
    return true;
}
function findNumSeq(n, seqArr){
    let i = 0 ; 
    let maxCount=0;
    while(n>seqArr[i]){
        // console.log("i",i);
        let sum =0, count =0;
        let j=i;
        while(n>sum){
            sum+=seqArr[j];
            count++;
            j++;
            if(sum==n && count>maxCount){
                maxCount=count;
                
            }
        }
        // console.log("i",i,sum,count);
        i++;
    }
    return maxCount;
}
let arr = [];
start = window.performance.now();
for (let i =0; i < 1000000; i++) {
    if(isPrime(i)) arr.push(i);
}
let max =0,maxElement=-1;

console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
         let temp = findNumSeq(arr[i],arr);
         if (temp > max){
             max = temp;
             maxElement=arr[i];
         }
        
}
console.log(max,maxElement);
end = window.performance.now();
console.log( (end - start));

//console.log()
// 78498
// 543 997651
// 45467.86500001326
