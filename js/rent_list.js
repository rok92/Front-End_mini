$(document).ready(function(){
  // 차종토글
  $('.tlt_kind_car').click(function(){
    $('.toggle_filter').slideToggle('500', function(){
      $('#arrowDown').toggleClass('fa-angle-down');
      $('#arrowDown').toggleClass('fa-angle-up');
    });
  });
  // 연료 토글
  $('.tlt_kind_fuel').click(function(){
    $('.toggle_filter2').slideToggle('500', function(){
      $('#arrowDown2').toggleClass('fa-angle-up');
      $('#arrowDown2').toggleClass('fa-angle-down');
    });
  });

  // 여행지 검색 박스 눌렀을때 popup창
  $('.search_destination').click(function(){
    $('.popup_rent').toggleClass('dp_block');
    if($('popup_rent').hasClass('dp_block')){
      $('#popupRentListSearch').focus();
    }
  });

  // 여행지 검색 팝업 X 버튼
  $('#popupRentListCloseBtn').click(function(){
    $('.popup_rent').toggleClass('dp_block');
  });

  // 팝업 검색하기 버튼 클릭시 이벤트
  $('.btn_popup_rent_search').click(function(){
    let text = $('#popupRentListSearch').val();
    if(text == ""){
      alert("여행지를 입력하세요.");
    }else{
      $('.search_destination').attr('value', text);
      $('.search_destination').removeClass('search_destination_placeholder');
      $('.popup_rent').toggleClass('dp_block');
    }
  });

  // 여행지 검색 팝업 외부영역 클릭 시 팝업 딛기
  $(document).mouseup(function (e){
    var LayerPopup = $(".popup_rent");
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
    $('.search_destination').attr('value', txt);
    $('.search_destination').removeClass('search_destination_placeholder');
    $('.popup_rent').toggleClass('dp_block');
    // 위의 과정이 끝나면 다시 클래스 제거
    $(this).removeClass('click_class');
  });

  // 차종 체크박스
  $('.txt_car_picker').click(function() {
    $(this).addClass('checkC')
    $('.checkC i').toggleClass('fa-active');
    $(this).removeClass('checkC');
  });

  // 연료 체크박스
  $('.txt_fuel_picker').click(function() {
    $(this).addClass('checkI')
    $('.checkI i').toggleClass('fa-active');
    $(this).removeClass('checkI');
  });

  // 커스텀 셀렉트
  $('.result_filter_open').click(function(){
    $('.result_filter_select').slideToggle('500', function(){
      $('#arrowDown').toggleClass('fa-angle-down');
      $('#arrowDown').toggleClass('fa-angle-up');
    });
  });

  // 선택 눌렀을 때 페이지 이동
  $('.txt_choose').click(function(){
    location.href='rent_detail.html';
  });

  // 박스 눌렀을 때 페이지 이동
  $('.wrap_final_price').click(function(){
    location.href='rent_detail.html';
  });

  // dateRangePicker
  $(function() {
    $('input[name="datetimes"]').daterangepicker({
      timePicker: true,
      startDate: moment().startOf('hour'),
      endDate: moment().startOf('hour').add(32, 'hour'),
      locale: {
        format: 'MM.DD(dd) A hh:mm'
      }
    });
  });

  // 생년월일 입력하면 나이 자동계산
  // 나이 입력하고 마우스 다른곳에 클릭하면
  $('.search_drive_age').change(function(){
    // 입력값 받아오기
    let birthInput = $(this).val();
    // 오늘날짜
    let now = new Date();
    // 나이변수
    let age;
    let onlyNum = /^[0-9]+$/;

    if(birthInput != ""){
      // 계산을 위한 형변환(int)
      let birthY = parseInt(birthInput.substr(0,2));
      let birthM = parseInt(birthInput.substr(2,2));
      let birthD = parseInt(birthInput.substr(4,2));
      // 년도 4자리로 변환
      if(birthY >= 00 && birthY <= (now.getFullYear()%100)){ // 2022 % 100 = 22
        birthY += 2000;
      }else{
        birthY += 1900;
      }
      // 만나이 계산
      age = now.getFullYear() - birthY;
      let mon = (now.getMonth()+1) - birthM;
      if(mon<0 || (mon===0 && now.getDate()<birthD)){
        age -= 1;
      }
    }
    if(age < 19){
      alert("만 19세 미만은 이용하실 수 없습니다");
      $(this).val('');
    }else if(!onlyNum.test($(this).val())){
      alert("숫자만 입력 가능 합니다");
    }else{
      $(this).val(birthInput + " (만 " + age + "세)");
    }
  });
  // 클릭할 때 초기화
  $('.search_drive_age').click(function(){
    $(this).val('');
  });
});