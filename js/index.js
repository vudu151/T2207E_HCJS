//---Nhấn click thì hiện ra bảng phần class="toast"
const clickbutton = document.querySelector('#text')
clickbutton.addEventListener("click",function (){
    document.querySelector('.container').style.display="flex"
})
//---Hết phần nhấn click

//Hiệu ứng chạy số
function animationNumber(finalNumber,delay,startNumber=0,callback){
    let currentNumber=startNumber
    const interval = window.setInterval(updateNumber,delay)
    function updateNumber(){
        if(currentNumber>=finalNumber){
            clearInterval(interval)
        }else{
            currentNumber++
            callback(currentNumber)
        }
    }
}
document.addEventListener('DOMContentLoaded',function (){
    animationNumber(1000000,1,0,function (number){
        const formattedNumber=number.toLocaleString()
        document.getElementById('number').innerText=formattedNumber
    })
})
//--Hết phần hiệu ứng chạy

//---Phần index 2 html
const clickmail=document.querySelector('.icon')
clickmail.addEventListener("click",function (){
    window.location.href="index2.html"
})