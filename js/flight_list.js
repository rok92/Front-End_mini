// flight_list.html의 기능 설정

$(document).ready(function(){
  // daterangepicker
  // 오늘 날짜 가져오기
  var now = new Date();
  var today = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear();
  
  // 항공 리스트에서 검색 필터 부분
  // daterangepicker 함수
  $('#flightDatepicker').click(function(){
    $('.daterangepicker').addClass('lod_list_datepicker')
  });

  $(function() {
    $('#flightDatepicker').daterangepicker({
      startDate: "06/27/2022",
      endDate: "07/01/2022",
      autoUpdateInput: false,
      autoApply: true,
      minDate: today,
      locale: {
          "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
          "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
        }
    });

    // 날짜 선택했을 때 포맷
    $('#flightDatepicker').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MM.DD(dd)') + ' - ' + picker.endDate.format('MM.DD(dd)'));
      $(this).removeClass('txt_placeholder');
    });
  });

  // 항공 인원 선택
  // 인원 선택
  // 인원 버튼 클릭 시 display:block;
  $('#flightPersonCount').click(function(){
    $('.popup_person').toggleClass('dp_block');
  });

  // 여행지 검색 팝업 X 버튼 클릭 시 display:none;
  $('#popupPersonListCloseBtn').click(function(){
    $('.popup_person').toggleClass('dp_block');
  });

  // 라디오버튼 커스텀
  var sitRadioCheck = $('input:radio[name="sits"]:checked').val();;

  //일반석 선택했을 경우
  $('#sitsGen').click(function(){
    $('#sitsGen').prop('checked', true);
    if($('.popup_person_radio i').hasClass('fa-solid')){
      $('.popup_person_radio i').removeClass('fa-solid fa-circle-dot');
      $('.popup_person_radio i').addClass('fa-regular fa-circle');
    }
    $('#sitsGenLabel>i').addClass('fa-solid fa-circle-dot');
    $('#sitsGenLabel>i').removeClass('fa-regular fa-circle');
    sitRadioCheck = $('input:radio[name="sits"]:checked').val();
    $('#flightPersonCount').attr('value', (adultFlightCount+childFlightCount+babyFlightCount) + '명, ' + sitRadioCheck);
  });

  //프리미엄 일반석 선택했을 경우
  $('#sitsPreGen').click(function(){
    $('#sitsPreGen').prop('checked', true);
    if($('.popup_person_radio i').hasClass('fa-solid')){
      $('.popup_person_radio i').removeClass('fa-solid fa-circle-dot');
      $('.popup_person_radio i').addClass('fa-regular fa-circle');
    }
    $('#sitsPreGenLabel>i').addClass('fa-solid fa-circle-dot');
    $('#sitsPreGenLabel>i').removeClass('fa-regular fa-circle');
    sitRadioCheck = $('input:radio[name="sits"]:checked').val();
    $('#flightPersonCount').attr('value', (adultFlightCount+childFlightCount+babyFlightCount) + '명, ' + sitRadioCheck);
  });

  //비즈니스석 선택했을 경우
  $('#sitsBusi').click(function(){
    $('#sitsBusi').prop('checked', true);
    if($('.popup_person_radio i').hasClass('fa-solid')){
      $('.popup_person_radio i').removeClass('fa-solid fa-circle-dot');
      $('.popup_person_radio i').addClass('fa-regular fa-circle');
    }
    $('#sitsBusiLabel>i').addClass('fa-solid fa-circle-dot');
    $('#sitsBusiLabel>i').removeClass('fa-regular fa-circle');
    sitRadioCheck = $('input:radio[name="sits"]:checked').val();
    $('#flightPersonCount').attr('value', (adultFlightCount+childFlightCount+babyFlightCount) + '명, ' + sitRadioCheck);
  });

  //일등석 선택했을 경우
  $('#sitsFir').click(function(){
    $('#sitsFir').prop('checked', true);
    if($('.popup_person_radio i').hasClass('fa-solid')){
      $('.popup_person_radio i').removeClass('fa-solid fa-circle-dot');
      $('.popup_person_radio i').addClass('fa-regular fa-circle');
    }
    $('#sitsFirLabel>i').addClass('fa-solid fa-circle-dot');
    $('#sitsFirLabel>i').removeClass('fa-regular fa-circle');
    sitRadioCheck = $('input:radio[name="sits"]:checked').val();
    $('#flightPersonCount').attr('value', (adultFlightCount+childFlightCount+babyFlightCount) + '명, ' + sitRadioCheck);
  });

  // 인원 버튼 클릭할 때
  var adultFlightCount = parseInt($('#adultFlightCount').text());
  var childFlightCount = parseInt($('#childFlightCount').text());
  var babyFlightCount = parseInt($('#babyFlightCount').text());

  // 어른 + 버튼 클릭 시
  $('#adultFlightPlusBtn').click(function() {
    adultFlightCount++;
    if(adultFlightCount > 1){
      $('#adultFlightMinusBtn').addClass('btn_count_active');
      $('#adultFlightMinusBtn').attr('href', '#');
    }
    $('#adultFlightCount').text(adultFlightCount);
    $('#flightPersonCount').attr('value', (adultFlightCount+childFlightCount+babyFlightCount) + '명, ' + sitRadioCheck);
  });

  // 어른 - 버튼 클릭 시
  $('#adultFlightMinusBtn').click(function() {
    adultFlightCount--;
    if(adultFlightCount == 1){
      $('#adultFlightMinusBtn').removeClass('btn_count_active');
      $('#adultFlightMinusBtn').removeAttr('href');
    }else if(adultFlightCount == 0){
      alert("성인은 최소 1명 이상이어야 합니다");
      adultFlightCount = 1;
    }
    $('#adultFlightCount').text(adultFlightCount);
    $('#flightPersonCount').attr('value', (adultFlightCount+childFlightCount+babyFlightCount) + '명, ' + sitRadioCheck);
  });

  // 소아 + 버튼 클릭 시
  $('#childFlightPlusBtn').click(function() {
    childFlightCount++;
    if(childFlightCount > 0){
      $('#childFlightMinusBtn').addClass('btn_count_active');
      $('#childFlightMinusBtn').attr('href', '#');
    }
    $('#childFlightCount').text(childFlightCount);
    $('#flightPersonCount').attr('value', (adultFlightCount+childFlightCount+babyFlightCount) + '명, ' + sitRadioCheck);
  });

  // 소아 - 버튼 클릭 시
  $('#childFlightMinusBtn').click(function() {
    childFlightCount--;
    if(childFlightCount == 0){
      $('#childFlightMinusBtn').removeClass('btn_count_active');
      $('#childFlightMinusBtn').removeAttr('href');
    }else if(childFlightCount == -1){
      alert("0명 이상이어야 합니다");
      childFlightCount = 0;
    }
    $('#childFlightCount').text(childFlightCount);
    $('#flightPersonCount').attr('value', (adultFlightCount+childFlightCount+babyFlightCount) + '명, ' + sitRadioCheck);
  });

  // 유아 + 버튼 클릭 시
  $('#babyFlightPlusBtn').click(function() {
    babyFlightCount++;
    if(babyFlightCount > 0){
      $('#babyFlightMinusBtn').addClass('btn_count_active');
      $('#babyFlightMinusBtn').attr('href', '#');
    }
    $('#babyFlightCount').text(babyFlightCount);
    $('#flightPersonCount').attr('value', (adultFlightCount+childFlightCount+babyFlightCount) + '명, ' + sitRadioCheck);
  });

  // 유아 - 버튼 클릭 시
  $('#babyFlightMinusBtn').click(function() {
    babyFlightCount--;
    if(babyFlightCount == 0){
      $('#babyFlightMinusBtn').removeClass('btn_count_active');
      $('#babyFlightMinusBtn').removeAttr('href');
    }else if(babyFlightCount == -1){
      alert("0명 이상이어야 합니다");
      babyFlightCount = 0;
    }
    $('#babyFlightCount').text(babyFlightCount);
    $('#flightPersonCount').attr('value', (adultFlightCount+childFlightCount+babyFlightCount) + '명, ' + sitRadioCheck);
  });

  //항공 필터 출발 시간 토글
  $('.tlt_start_time').click(function() {
    $('.toggle_filter').slideToggle(500, function(){
      $('#arrowDown').toggleClass('fa-angle-down');
      $('#arrowDown').toggleClass('fa-angle-up');
    });
  });

  $('.tlt_end_time').click(function() {
    $('.toggle_filter2').slideToggle(500, function(){
      $('#arrowDown2').toggleClass('fa-angle-down');
      $('#arrowDown2').toggleClass('fa-angle-up');
    });
  });

  $('.toggle_flight_info').click(function() {
    $('.wrap_result_flight_detail').slideToggle(500, function(){
      $('.toggle_flight_info>i').toggleClass('fa-chevron-down');
      $('.toggle_flight_info>i').toggleClass('fa-chevron-up');
      $('.wrap_result_flight_list').toggleClass('b_rb_lb_none');
    });
  });

  //항공 체크박스
  $('.txt_time_picker').click(function() {
    $(this).addClass('checkI')
    $('.checkI i').toggleClass('fa-active');
    $(this).removeClass('checkI');
  });

  // result_filter_select
  // 셀렉트 커스텀
  $('.result_filter_open').click(function() {
    $('.result_filter_select').slideToggle(500, function(){
      $('#arrowDown').toggleClass('fa-angle-down');
      $('#arrowDown').toggleClass('fa-angle-up');
    });
  });

  // 선택 눌러서 페이지 이동
  $('.txt_flight_select').on('click', function(){
    location.href='flight_rsv.html';
  });

  // 탑 버튼 눌렀을 때 최상단으로
  $(".btn_top").click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
    return false;
  });
});
