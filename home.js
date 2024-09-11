navigator.geolocation.getCurrentPosition((position)=> {
    //緯度
    let lat = position.coords.latitude;
    //経度
    let lng = position.coords.longitude;
    //方角
    let hea = position.coords.heading;
    document.getElementById("a").innerHTML = lat;
    document.getElementById("b").innerHTML = lng;
    document.getElementById("c").innerHTML = hea;
});