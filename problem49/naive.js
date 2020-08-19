function isPrime(n) {
    if (n == 2) return true;
    if (n % 2 == 0 || n == 1) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
function hoanvi(n) {
    let arr = [];
    let permutation = (a, size) => {
        if (size == 1) {
            arr.push(a);
            console.log(a);
        }
        for (let i = 0; i < size; i++) {
            permutation(a, size - 1);
            if (size % 2 == 1) {
                [a[0], a[size - 1]] = [a[size - 1], a[0]];
            }
            else {
                [a[i], a[size - 1]] = [a[size - 1], a[i]];
            }
        }

    }
    permutation(n, n.length);

    return arr;
}

function check(n){
    console.log("incheck ");
    let temp = n.map(element => 
        Number( element.join("") ) );
    temp = temp.filter(element => isPrime(element)).sort();
    
    for(let i = 0 ; i < temp.length-2;i++){
        for(let j =i+1 ; j < temp.length-1;j++){
            for(let k = j+1; k<temp.length;k++){
                if(temp[i]+temp[k]==2*temp[j])
                console.log(temp[i],temp[j],temp[k]);
            }
        }
    }

}
for(let i = 1e3 ; i<1e4;i++ ){
    if(isPrime(i))
    {
        check(hoanvi(i.toString().split("")));
    }
}
