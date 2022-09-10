function luyentap(city){
    var ld = document.getElementById("loading");
    ld.style.display = "block";
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        var data = JSON.parse(this.responseText);

        var ct = data.name;
        document.getElementById("city").innerText = ct;
        var temp = data.main.temp;
        document.getElementById("temp").innerText = temp;
        var pr = data.main.pressure;
        document.getElementById("press").innerText = pr;

        ld.style.display= "none";
    }
    var link= "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xhttp.open("get",link,true);
    xhttp.send();

}