console.log("hello world");
var map;
var marker;

window.initMap = () => {
    var myLatLng = {lat: 34.701971, lng: 135.488924};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 1,
        center: myLatLng,
		 scrollwheel: false,
    });
    marker = new google.maps.Marker({
        position: myLatLng,
        title: 'Hello World!',
        animation: google.maps.Animation.BOUNCE,
		icon: {
            url: "../img/map-pin.png",
            scaledSize : new google.maps.Size(71, 88.5),
        }
    });
    marker.setMap(map)
    // var directionsService = new google.maps.DirectionsService();
    // var request = {
    //     origin: {lat: 34.702635, lng: 135.495940},
    //     //出発地点
    //     destination: myLatLng,
    //     //行き先
    //     travelMode: google.maps.DirectionsTravelMode.WALKING
    //     //移動手段
    // }
    // directionsService.route(request,function(result, status){
    //     let directionsDisplay = new google.maps.DirectionsRenderer({
    //         suppressMarkers: true,
    //         polylineOptions:{
    //             strokeColor: "#279abc",
    //             strokeWeight: 5,                
    //         }
    //     });
    //     directionsDisplay.setDirections(result);
    //     //経路情報を取得する
    //     directionsDisplay.setMap(map);
    //     //取得した経路情報を描画する
    //     setTimeout(function () {
    //     },0)
    //     //少し後に実行する
    // });
	map.setZoom(17)
}