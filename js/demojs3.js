function update(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        //console.log(this.responseText);
        // convert to object of js
        var data = JSON.parse(this.responseText);               // lấy dữ liệu của Json
        //console.log(data.main.temp);
        var t = data.main.temp;   //26
        document.getElementById("temp").innerText = t;

        var ct = data.name + ", "+data.sys.country;
        document.getElementById("city").innerText = ct;

        var press = data.main.pressure;
        document.getElementById("press").innerText = press;

    };
    var link = "https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get",link,true);
    xhttp.send();
}