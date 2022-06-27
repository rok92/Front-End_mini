// stay_main.html의 기능 설정

$(document).ready(function(){
  // 여행지 검색
  // 여행지 검색 텍스트 클릭 시 display:block css 토글
  // .dp_block이라는 클래스로 토글
  $('#lodSearchBtn').click(function(){
    $('.popup_lod').toggleClass('dp_block');
    // 만약 display:block 이라면 popupLodSearch 인풋에 포커스
    if($('.popup_lod').hasClass('dp_block')){
      $('#popupLodSearch').focus();
    }
  });

  // 여행지 검색 팝업 X 버튼 클릭 시 display:none;
  $('#popupLodCloseBtn').click(function(){
    $('.popup_lod').toggleClass('dp_block');
  });

  // 여행지 검색 팝업 외부영역 클릭 시 팝업 딛기
  $(document).mouseup(function (e){
    var LayerPopup = $(".popup_lod");
    if(LayerPopup.has(e.target).length === 0){
      LayerPopup.removeClass("dp_block");
    }
  });

  // 팝업 내 검색하기 버튼 클릭 시
  $('#popupLodSearchBtn').click(function(){
    var txt = $('#popupLodSearch').val();
    if(txt == ''){
      alert("여행지를 입력하세요");
    }else{
      $('#lodSearchBtn').attr('value', txt);
      $('#lodSearchBtn').removeClass('txt_stay_placeholder');
      $('.popup_lod').toggleClass('dp_block');
    }
  });

  // list_location 클릭 시
  $('.list_location').click(function(){
    // 클릭한 list_location에 클래스 부여
    $(this).addClass('click_class');
    // 부여한 클래스의 장소를 txt에 담아서 value 값 수정
    var txt = $('.click_class .txt_location_main').text();
    $('#lodSearchBtn').attr('value', txt);
    $('#lodSearchBtn').removeClass('txt_stay_placeholder');
    $('.popup_lod').toggleClass('dp_block');
    // 위의 과정이 끝나면 다시 클래스 제거
    $(this).removeClass('click_class');
  });

  // daterangepicker
  // 오늘 날짜 가져오기
  var now = new Date();
  var today = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear();

  // daterangepicker 정의
  $(function() {
    $('#lodDatepicker').daterangepicker({
      autoUpdateInput: false,
      autoApply: true,
      minDate: today,
      locale: {
          "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
          "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
        }
    });

    // 날짜 선택했을 때 포맷
    $('#lodDatepicker').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MM.DD(dd)') + ' - ' + picker.endDate.format('MM.DD(dd)') + ', ' + Math.floor((picker.endDate - picker.startDate)/86400000) + '박');
      $(this).removeClass('txt_stay_placeholder');
    });

    // 날짜 없을 때
    $('#lodDatepicker').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
  });

  // 인원 선택
  // 인원 버튼 클릭 시 display:block css 토글
  $('#lodPersonCount').click(function(){
    $('.popup_person').toggleClass('dp_block');
  });

  // 인원 선택 팝업 X 버튼 클릭 시 display:none;
  $('#popupPersonCloseBtn').click(function(){
    $('.popup_person').toggleClass('dp_block');
  });

  // 인원 선택 팝업 외부영역 클릭 시 팝업 닫기
  $(document).mouseup(function (e){
    var LayerPopup = $(".popup_person");
    if(LayerPopup.has(e.target).length === 0){
      LayerPopup.removeClass("dp_block");
    }
  });

  // 인원 버튼 클릭할 때
  var adultCount = parseInt($('#adultCount').text());
  var childCount = parseInt($('#childCount').text());

  // 어른 + 버튼 클릭 시
  $('#adultPlusBtn').click(function() {
    adultCount++;
    // 2명부터 -버튼 활성화
    if(adultCount > 1){
      $('#adultMinusBtn').addClass('btn_count_active');
      $('#adultMinusBtn').attr('href', '#');
    }
    $('#adultCount').text(adultCount);
    $('#lodPersonCount').attr('value', '성인'+adultCount+', 어린이'+childCount);
  });

  // 어른 - 버튼 클릭 시
  $('#adultMinusBtn').click(function() {
    adultCount--;
    // 1명이 된다면 -버튼 비활성화
    if(adultCount == 1){
      $('#adultMinusBtn').removeClass('btn_count_active');
      $('#adultMinusBtn').removeAttr('href');
    }else if(adultCount == 0){
      // 만약에 비활성화 상태여도 누른다면,
      alert("성인은 최소 1명 이상이어야 합니다");
      adultCount = 1;
    }
    $('#adultCount').text(adultCount);
    $('#lodPersonCount').attr('value', '성인'+adultCount+', 어린이'+childCount);
  });

  // 어린이 + 버튼 클릭 시
  $('#childPlusBtn').click(function() {
    childCount++;
    // 어린이는 없어도 예약 가능하기 때문에 0부터 체크
    // 1명부터 -버튼 활성화
    if(childCount > 0){
      $('#childMinusBtn').addClass('btn_count_active');
      $('#childMinusBtn').attr('href', '#');
    }
    $('#childCount').text(childCount);
    $('#lodPersonCount').attr('value', '성인'+adultCount+', 어린이'+childCount);
  });

  // 어린이 - 버튼 클릭 시
  $('#childMinusBtn').click(function() {
    childCount--;
    // 어린이는 0명이 된다면 -버튼 비활성화
    if(childCount == 0){
      $('#childMinusBtn').removeClass('btn_count_active');
      $('#childMinusBtn').removeAttr('href');
    }else if(childCount == -1){
      // -1명은 존재하지 않기 때문에
      alert("0명 이상이어야 합니다");
      childCount = 0;
    }
    $('#childCount').text(childCount);
    $('#lodPersonCount').attr('value', '성인'+adultCount+', 어린이'+childCount);
  });

  // form #lodSearch의 submit 버튼 클릭 시 유효성 검사
  $('.btn_search_stay').click(function(){
    // 만약 날짜가 선택되지 않았을 경우 = 기본 value값인 "날짜를 선택해주세요"가 적혀 있는 경우
    if($('#lodSearchBtn').val() == "여행지를 검색해주세요") {
  		alert("여행지를 선택해주세요");
  		return false; // 서버로 전송되지 않도록
  	}
    // 만약 날짜가 선택되지 않았을 경우 = 기본 value값인 "날짜를 선택해주세요"가 적혀 있는 경우
    if($('#lodDatepicker').val() == "날짜를 선택해주세요") {
  		alert("여행 기간을 선택해주세요");
  		return false; // 서버로 전송되지 않도록
  	}
    // 인원 선택은 디폴트 어른 1명이 있기 때문에 유효성 검사 필요 없음
    location.href = 'stay_list.html';
  });

  // prev/next 버튼으로 인기 호텔 보기
  // 첫번째 인기호텔 부분 nextButton
  $('#firstNextBtn').click(function(){
    $('#rmdfirstList').animate({
      right: '0'
    }, 500, function(){
      $('#rmdfirstList').css('left','');
    });
    $('#divfirstNext').fadeOut(300);
    $('#divfirstPrev').fadeIn(300);
  });

  // 첫번째 인기호텔 부분 prevButton
  $('#firstPrevBtn').click(function(){
    $('#rmdfirstList').animate({
      left: '0'
    }, 500, function(){
      $('#rmdfirstList').css('right','');
    });
    $('#divfirstNext').fadeIn(300);
    $('#divfirstPrev').fadeOut(300);
  });

  // 두번째 인기호텔 부분 nextButton
  $('#secondNextBtn').click(function(){
    $('#rmdsecondList').animate({
      right: '0'
    }, 500, function(){
      $('#rmdsecondList').css('left','');
    });
    $('#divsecondNext').fadeOut(300);
    $('#divsecondPrev').fadeIn(300);
  });

  // 두번째 인기호텔 부분 prevButton
  $('#secondPrevBtn').click(function(){
    $('#rmdsecondList').animate({
      left: '0'
    }, 500, function(){
      $('#rmdsecondList').css('right','');
    });
    $('#divsecondNext').fadeIn(300);
    $('#divsecondPrev').fadeOut(300);
  });

  // 탑 버튼 눌렀을 때 최상단으로
  $(".btn_top").click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
    return false;
  });
});
