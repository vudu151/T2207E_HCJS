var obj = {
    name: "Du",
    age: 20,
    boyFriends: ['Vũ Minh Đức','Vũ Hoàng Anh'],
    tel: "0868889256",
    eat: function (){
        console.log(this.name+" dang an mi tom");
    }
};
console.log(obj.tel);
obj.eat();
obj.name = "Huy";
obj.eat();

var a = document.getElementById("abc");
console.log(a.innerText);
var x=15;
function changeText(){
  //  a.innerText = "Xin chào các bạn";              // đổi chữ
    //a.innerHTML += '<i>Xin chào các bạn</i>';     // đổi toàn bộ cấu trúc HTML bên trong
    a.style.fontSize = x+"px";                    // đổi font chữ
    a.style.color = "pink";
    x++;
    a.classList.add("classnaodo");                // thêm class vào HTML
    a.style.transform = "rotate("+x+"deg)";
}
setInterval(changeText,30);

























