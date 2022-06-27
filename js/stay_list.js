// stay_list.html의 기능 설정

$(document).ready(function(){
  // 여행지 검색
  // 여행지 검색 텍스트 클릭 시 display:block css 토글
  // .dp_block이라는 클래스로 토글
  $('#lodListSearchBtn').click(function(){
    $('.popup_lod').toggleClass('dp_block');
    // 만약 display:block 이라면 popupLodSearch 인풋에 포커스
    if($('.popup_lod').hasClass('dp_block')){
      $('#popupLodListSearch').focus();
    }
  });

  // 여행지 검색 팝업 X 버튼 클릭 시 display:none;
  $('#popupLodListCloseBtn').click(function(){
    $('.popup_lod').toggleClass('dp_block');
  });

  // 팝업 내 검색하기 버튼 클릭 시
  $('#popupLodListSearchBtn').click(function(){
    var txt = $('#popupLodListSearch').val();
    if(txt == ''){
      alert("여행지를 입력하세요");
    }else{
      $('#lodListSearchBtn').attr('value', txt);
      $('#lodListSearchBtn').removeClass('txt_stay_placeholder');
      $('.popup_lod').toggleClass('dp_block');
    }
  });

  // 여행지 검색 팝업 외부영역 클릭 시 팝업 딛기
   $(document).mouseup(function (e){
     var LayerPopup = $(".popup_lod");
     if(LayerPopup.has(e.target).length === 0){
       LayerPopup.removeClass("dp_block");
     }
   });

  // list_location 클릭 시
  $('.list_location').click(function(){
    // 클릭한 list_location에 클래스 부여
    $(this).addClass('click_class');
    // 부여한 클래스의 장소를 txt에 담아서 value 값 수정
    var txt = $('.click_class .txt_location_main').text();
    $('#lodListSearchBtn').attr('value', txt);
    $('#lodListSearchBtn').removeClass('txt_stay_placeholder');
    $('.popup_lod').toggleClass('dp_block');
    // 위의 과정이 끝나면 다시 클래스 제거
    $(this).removeClass('click_class');
  });

  // daterangepicker 함수
  $('#lodListDatepicker').click(function(){
    $('.daterangepicker').addClass('lod_list_datepicker')
  });

  // daterangepicker
  // 오늘 날짜 가져오기
  var now = new Date();
  var today = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear();


  $(function() {
    $('#lodListDatepicker').daterangepicker({
      startDate: "06/27/2022",
      endDate: "06/30/2022",
      autoUpdateInput: false,
      autoApply: true,
      minDate: today,
      locale: {
          "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
          "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
        }
    });

    // 날짜 선택했을 때 포맷
    $('#lodListDatepicker').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MM.DD(dd)') + ' - ' + picker.endDate.format('MM.DD(dd)') + ', ' + Math.floor((picker.endDate - picker.startDate)/86400000) + '박');
    });

    // 날짜 없을 때
    $('#lodListDatepicker').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
  });

  // 인원 선택
  // 인원 버튼 클릭 시 display:block;
  $('#lodListPersonCount').click(function(){
    $('.popup_person').toggleClass('dp_block');
  });

  // 인원 검색 팝업 X 버튼 클릭 시 display:none;
  $('#popupPersonListCloseBtn').click(function(){
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
  var adultListCount = parseInt($('#adultListCount').text());
  var childListCount = parseInt($('#childListCount').text());

  // 어른 + 버튼 클릭 시
  $('#adultListPlusBtn').click(function() {
    adultListCount++;
    if(adultListCount > 1){
      $('#adultListMinusBtn').addClass('btn_count_active');
    }
    $('#adultListCount').text(adultListCount);
    $('#lodListPersonCount').attr('value', '성인'+adultListCount+', 어린이'+childListCount);
  });

  // 어른 - 버튼 클릭 시
  $('#adultListMinusBtn').click(function() {
    adultListCount--;
    if(adultListCount == 1){
      $('#adultListMinusBtn').removeClass('btn_count_active');
    }else if(adultListCount == 0){
      alert("성인은 최소 1명 이상이어야 합니다");
      adultListCount = 1;
    }
    $('#adultListCount').text(adultListCount);
    $('#lodListPersonCount').attr('value', '성인'+adultListCount+', 어린이'+childListCount);
  });

  // 어린이 + 버튼 클릭 시
  $('#childListPlusBtn').click(function() {
    childListCount++;
    if(childListCount > 0){
      $('#childListMinusBtn').addClass('btn_count_active');
    }
    $('#childListCount').text(childListCount);
    $('#lodListPersonCount').attr('value', '성인'+adultListCount+', 어린이'+childListCount);
  });

  // 어린이 - 버튼 클릭 시
  $('#childListMinusBtn').click(function() {
    childListCount--;
    if(childListCount == 0){
      $('#childListMinusBtn').removeClass('btn_count_active');
    }else if(childListCount == -1){
      alert("0명 이상이어야 합니다");
      childListCount = 0;
    }
    $('#childListCount').text(childListCount);
    $('#lodListPersonCount').attr('value', '성인'+adultListCount+', 어린이'+childListCount);
  });

  // form #lodSearch의 submit 버튼 클릭 시 유효성 검사
  $('#lodSearch').on('submit', function(){
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
  });

  //호텔 등급 선택
  $('.wrap_star>.fa-star').click(function(){
    $(this).toggleClass('fa-disabled');
    $('.wrap_star span').toggleClass('fa-disabled');
  });

  // result_filter_select
  // 셀렉트 커스텀
  $('.result_filter_open').click(function() {
    $('.result_filter_select').slideToggle(500, function(){
      $('#arrowDown').toggleClass('fa-angle-down');
      $('#arrowDown').toggleClass('fa-angle-up');
    });
  });
});
