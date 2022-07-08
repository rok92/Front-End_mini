$(document).ready(function(){
    //지도 생성에 사용
    var map;
    var mapContainer;

	// 지도
	mapContainer = document.getElementById('map'), // 지도를 표시할 div 
	mapOption = {
		center: new kakao.maps.LatLng(33.5149566270669, 126.502066907606), // 지도의 중심좌표
		level: 3 // 지도의 확대 레벨
	};  

	// 지도를 생성합니다    
	map = new kakao.maps.Map(mapContainer, mapOption); 

	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(33.5149566270669, 126.502066907606); 

	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
		position: markerPosition
	});

	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);

	// i 아이콘 눌렀을 때 업체 정보로 이동
	$(".car_agency i").click(function(){
		$('html, body').animate({
            scrollTop: 890
        }, 400);
        return false;
	});

	// 

	// 렌터카 선택하기 버튼 눌렀을 때 페이지 이동
	$(".btn_choice").click(function(){
		location.href='rent_rsv.html'
	});

	// 탑 버튼 눌렀을 때 최상단으로
    $(".btn_top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});