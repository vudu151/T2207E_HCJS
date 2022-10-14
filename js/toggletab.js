function cityName(cityName){
    var i, tabContent;
    tabContent = document.getElementsByClassName('tabContent');
    for(i=0;i<tabContent.length;i++){
        tabContent[i].style.display= "none";
    }
    document.getElementById(cityName).style.display="block";
}