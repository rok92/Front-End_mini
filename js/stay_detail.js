$(document).ready(function () {
  // 더보기 버튼 클릭시 세부내용
  $(".expand_text").on("click", function () {
    $(".info_detail_second").slideToggle(500, function () {
      if ($(".expand_text").text() == "더보기") {
        $(".expand_text").html(
          '접기<i id="arrow" class="fa-solid text_downarrow fa-angle-up"></i>'
        );
      } else {
        $(".expand_text").html(
          '더보기<i id="arrow" class="fa-solid text_downarrow fa-angle-down"></i>'
        );
      }
    });
  });

  // 이미지 확대 및 슬라이드
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: false,
    fitImagesInViewport: false,
  });

  // 여기부터 데이트피커 + 인원수 체크

  // daterangepicker
  // 오늘 날짜 가져오기
  var now = new Date();
  var today = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear();

  // daterangepicker 정의
  $(function() {
    $('#lodDatepicker').daterangepicker({
      startDate: "06/27/2022",
      endDate: "06/30/2022",
      autoUpdateInput: false,
      autoApply: true,
      minDate: today,
      locale:{
        "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
        "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
      }
    });

    // 날짜 선택했을 때 포맷
    $('#lodDatepicker').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MM.DD(dd)') + ' - ' + picker.endDate.format('MM.DD(dd)') + ', ' + Math.floor((picker.endDate - picker.startDate)/86400000) + '박');
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

  // 객실 선택하기 [버튼] '예약' 위치로
  $('#pressBtn').click(function(){
     $('html,body').animate({scrollTop : 1189}, 500);
  });

  // 탑 버튼 눌렀을 때 최상단으로
  $(".btn_top").click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
    return false;
  });
});




