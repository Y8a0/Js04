function checkSign(n,n1,n2){
    if(n<0){
        console.log("Negatif");
    }
    if(n1>0){
        console.log("Positif");
    }
    if(n2>=0){
        console.log("Positif");
    }
    return n, n1, n2;
}
checkSign(-5, 1, 0);
module.exports = checkSign;
