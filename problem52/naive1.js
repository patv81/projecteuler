function hoanvi(n) {
    let arr = [];
    let permutation = (a, size) => {
        if (size == 1) {
            arr.push(a.slice());
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
function countApper(str){
    return str.reduce
}



    

x[0] = 1096770097
x[1] = 1952395366
x[2] = 1600270708
x[3] = 1601398833
x[4] = 1716808014
x[5] = 1734305335
x[6] = 962749284
x[7] = 828584245






password.charAt(0) == 'd' &&
    password.charAt(29) == 'f' &&
    password.charAt(4) == 'r' &&
    password.charAt(2) == '5' &&
    password.charAt(23) == 'r' &&
    password.charAt(3) == 'c' &&
    password.charAt(17) == '4' &&
    password.charAt(1) == '3' &&
    password.charAt(7) == 'b' &&
    password.charAt(10) == '_' &&
    password.charAt(5) == '4' &&
    password.charAt(9) == '3' &&
    password.charAt(11) == 't' &&
    password.charAt(15) == 'c' &&
    password.charAt(8) == 'l' &&
    password.charAt(12) == 'H' &&
    password.charAt(20) == 'c' &&
    password.charAt(14) == '_' &&
    password.charAt(6) == 'm' &&
    password.charAt(24) == '5' &&
    password.charAt(18) == 'r' &&
    password.charAt(13) == '3' &&
    password.charAt(19) == '4' &&
    password.charAt(21) == 'T' &&
    password.charAt(16) == 'H' &&
    password.charAt(27) == '3' &&
    password.charAt(30) == '3' &&
    password.charAt(25) == '_' &&
    password.charAt(22) == '3' &&
    password.charAt(28) == 'e' &&
    password.charAt(26) == '6' &&
    password.charAt(31) == 'a'$$