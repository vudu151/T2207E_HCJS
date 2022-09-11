function loadingMenu() {
    var xHttp = new XMLHttpRequest();
    xHttp.onload = function () {
        var data = JSON.parse(this.responseText);
        // console.log(this.responseText);
        var all = data.list;
        for (var i=0;i<all.length;i++){
            var date = all[i].dt_txt;
            var tp = all[i].main.temp;
            var ic = all[i].weather[0].icon;
            var ds = all[i].weather[0].description;
            console.log(all[i].weather.icon);
            var content = `<div class="main">
                      <h2><span class="datetime">${date}</span></h2>
                      <span><img src="https://openweathermap.org/img/wn/${ic}@2x.png"/></span>
                      <h1><span class = "temp">${tp}</span><sup>o</sup>C</h1>
                      <h3><span class = "des">${ds}</span></h3>
                      </div>`;
            var div = document.getElementById("all");
            div.innerHTML += content;
        }
    }
    var link = "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xHttp.open("get",link,true);
    xHttp.send();
}
loadingMenu();