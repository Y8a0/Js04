function checkEvenOdd(i){
    for(i=1;i<=2;i++){
        if(i%2!=0){
            console.log("Impair");
        }
        else{
            console.log("pair");
        }
    }
    return i;
}
checkEvenOdd(2);
module.exports = checkEvenOdd;
