window.ondeviceorientation = function(event) {

	// コンパスの向き
	// 0から360の間の値を取得でき、0が北、90が東、180が南、270が西を示す。
	// 取得した値がマイナスの場合、正しい値が取得できていないことを示す。
	var compassHeading = event.webkitCompassHeading;
	document.getElementById("info5").innerHTML = 'コンパスの向き： ' + compassHeading;

	// CompassHeadingの精度。
	// 例えば10という値を取得した場合、compassHeadingの値は前後10の誤差があることを示す。
	// -1の値を取得する場合には、正しいcompassHeadingの値が取得できていないことを示す。
	var compassAccuracy = event.webkitCompassAccuracy;
	this.document.getElementById("info6").innerHTML = 'コンパスの正確性： ' + compassAccuracy;
}
