$(document).ready(function(){
    //지도 생성에 사용
    var map;
    var mapContainer;

	// 주소 복사에 사용
	var address = document.getElementById("agency_address_text");

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
	$('.car_agency i').click(function() {
		$('html, body').animate({
            scrollTop: 890
        }, 400);
        return false;
	});

	// 주소 복사 아이콘 눌렀을 때 복사
	$('.agency_address i').click(function() {
		// address의 내용(textContent)을 복사
		window.navigator.clipboard.writeText(address.textContent).then(() => {
			// 복사가 완료되면 호출
			$('#copy_box').css('display', 'flex');
			$('#copy_box').fadeOut(4000, 'swing');
		});
	});

	// 더보기 눌렀을 때 숨겨진 내용 슬라이드 하면서 접기로 변경
	$('.btn_expand').click(function() {
		$('.agency_policy_second').slideToggle(500, function () {
			if ($('.btn_expand').text() == "더보기") {
				$('.btn_expand').html('접기<i id="arrow" class="fa-solid text_downarrow fa-angle-up txt_blue"></i>');
			} else {
				$('.btn_expand').html('더보기<i id="arrow" class="fa-solid text_downarrow fa-angle-down txt_blue"></i>');
			}
		});
	});

	// 지도보기 클릭 시 새탭에서 큰 지도 보기
	$('.agency_kakaomap').click(function() {
		window.open('rent_map.html');
	});

	$('.agency_kakaomap').hover(
		function(){
			$('.agency_kakaomap').css('border', '1px solid #48A0FF');
		},
		function(){
			$('.agency_kakaomap').css('border', '1px solid #DDDDDD');
	})

	// 렌터카 선택하기 버튼 눌렀을 때 페이지 이동
	$('.btn_choice').click(function() {
		location.href='rent_rsv.html'
	});

	// 탑 버튼 눌렀을 때 최상단으로
    $('.btn_top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});