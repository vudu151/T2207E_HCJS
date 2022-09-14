var x=0;
var flag = false;
function demoEvent(){
    if(flag==false){
        var h = document.getElementById("heading");
        h.style.color = "red";
        setInterval(changeText,20);
        flag = true;
    }
}
function changeText(){
    var h = document.getElementById("heading");
    h.style.transform = "rotate("+x+"deg)";
    x++;
}

function inputSearch(obj){              // dùng obj thì ko cần dùng id
    // var ix=document.getElementById(id);
    console.log("Searching: " + obj.value);
}

function demoEvent2(){
   // var ips= document.getElementsByTagName("input");   //array     // đây là tác động đến id
    var ips= document.getElementsByClassName("input-text");    //đây là tác động đến class, giống như id bên trên
    //var ips=document.querySelectorAll("input.input-text");
    for(var i=0;i<ips.length;i++){                                 // cách điều khiển một lúc nhiều đối tượng
        ips[i].style.backgroundColor ="pink";
    }
}