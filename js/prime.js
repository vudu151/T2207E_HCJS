var x=2;    //snt
var m=0;    //so lan
function checkPrime(x){
    if(x<2){
        return false;
    }else{
        if(x==2||x==3){
            return true;
        }else{
            for(var i=2;i<=x/2;i++){
                if(x%i==0){
                    return false;
                }
            }
            return true;
        }
    }
}
function nextPrime(x){
    for(var i=x+1;true;i++){
        if(checkPrime(i)){
            return i;
        }
    }
}
function countdown(){
    var a =document.getElementById("head");
    a.innerText += " "+x;    //+= day la noi chuoi, con = la thay the so moi
    x= nextPrime(x);
    m++;
    if(m>=10){
        clearInterval(si);
    }
}
var si=setInterval(countdown,1000);
