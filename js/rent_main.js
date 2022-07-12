// rent_main.html의 기능 설정

$(document).ready(function(){
  // 여행지 검색
  // 여행지 검색 텍스트 클릭 시 display:block css 토글
  // .dp_block이라는 클래스로 토글
  $('#rentSearchBtn').click(function(){
    $('.popup_rent').toggleClass('dp_block');
    // 만약 display:block 이라면 popuprentSearch 인풋에 포커스
    if($('.popup_rent').hasClass('dp_block')){
      $('#popuprentSearch').focus();
    }
  });

  // 여행지 검색 팝업 X 버튼 클릭 시 display:none;
  $('#popuprentCloseBtn').click(function(){
    $('.popup_rent').toggleClass('dp_block');
  });

  // 여행지 검색 팝업 외부영역 클릭 시 팝업 딛기
  $(document).mouseup(function (e){
    var LayerPopup = $(".popup_rent");
    if(!LayerPopup.is(e.target) && LayerPopup.has(e.target).length == 0){
      LayerPopup.removeClass("dp_block");
    }
  });

  // 팝업 내 검색하기 버튼 클릭 시
  $('#popuprentSearchBtn').click(function(){
    var txt = $('#popuprentSearch').val();
    if(txt == ''){
      alert("여행지를 입력하세요");
    }else{
      $('#rentSearchBtn').attr('value', txt);
      $('#rentSearchBtn').removeClass('txt_rent_placeholder');
      $('.popup_rent').toggleClass('dp_block');
    }
  });

  // list_location 클릭 시
  $('.list_location').click(function(){
    // 클릭한 list_location에 클래스 부여
    $(this).addClass('click_class');
    // 부여한 클래스의 장소를 txt에 담아서 value 값 수정
    var txt = $('.click_class .txt_location_main').text();
    $('#rentSearchBtn').attr('value', txt);
    $('#rentSearchBtn').removeClass('txt_rent_placeholder');
    $('.popup_rent').toggleClass('dp_block');
    // 위의 과정이 끝나면 다시 클래스 제거
    $(this).removeClass('click_class');
  });

  // daterangepicker
  // 오늘 날짜 가져오기
  var now = new Date();
  var today = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear();

  // daterangepicker 정의
  $(function() {
    $('#rentDatepicker').daterangepicker({
      timePicker: true,
      autoUpdateInput: false,
      minDate: today,
      locale: {
          "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
          "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
        }
    });

    // 날짜 선택했을 때 포맷
    $('#rentDatepicker').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MM.DD(dd) A hh:mm') + ' - ' + picker.endDate.format('MM.DD(dd) A hh:mm'));
      $(this).removeClass('txt_rent_placeholder');
    });

    // 날짜 없을 때
    $('#rentDatepicker').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
  });

  // 운전자 생년월일 입력 후 외부영역 클릭 시 만 나이 계산
  $('#rentBirth').change(function(){
    var rentBirth = $(this).val();  // 입력한 생일 가져오기
    var now = new Date();           // 오늘 날짜 가져오기   
    var age, mon;
    // 계산을 위해 int로 변환 (YY, MM, DD)
    var birthY = parseInt(rentBirth.substr(0,2));
    var birthM = parseInt(rentBirth.substr(2,2));
    var birthD = parseInt(rentBirth.substr(4,2));
    var onlyNum = /^[0-9]+$/;       // 숫자만 입력 가능하게  

    

    if(rentBirth != ""){            // 입력한 생일이 빈 값이 아니라면,
      // 연도 4자리로 변환하기
      if(birthY >= 00 && birthY <= (now.getFullYear()%100)){ // 2022 % 100 = 22
        birthY += 2000;
      }else{
        birthY += 1900;
      }
      // 만 나이
      age = now.getFullYear() - birthY;
      mon = (now.getMonth()+1) - birthM;
      if(mon < 0 || (mon === 0 && now.getDate() < birthD)){
        age -= 1; // 만약 계산한 달이 0보다 작거나 0이지만 오늘 일자보다 생일 일자가 큰 경우 -1
      }
      
    }
    // 텍스트를 적었을 경우
    if(!onlyNum.test($(this).val())){
      alert("숫자만 입력 가능 합니다");
      $(this).val('');
    }else if(birthM > 12 || birthM < 1){          // 1월~12월 사이의 값을 작성하지 않았을 경우
      alert("생년월일을 올바르게 입력했는지 확인해주세요");   
      $(this).focus();
    }else if(birthD > 31 || birthD < 1){          // 1~31일 사이의 값을 작성하지 않았을 경우
      alert("생년월일을 올바르게 입력했는지 확인해주세요");   
      $(this).focus();
    }else if(age < 19 || age >= 99){
      alert("만 19세 미만은 이용하실 수 없습니다");
      $(this).val('');
    }else{
      $(this).val(rentBirth + " (만 " + age + "세)");
    }
  });
  
  // 클릭할 때 초기화
  $('#rentBirth').click(function(){
    $(this).val('');
  });

  // form #rentSearch의 submit 버튼 클릭 시 유효성 검사
  $('.btn_search_rent').click(function(){
    // 만약 날짜가 선택되지 않았을 경우 = 기본 value값인 "날짜를 선택해주세요"가 적혀 있는 경우
    if($('#rentSearchBtn').val() == "여행지를 검색해주세요") {
  		alert("여행지를 선택해주세요");
  		return false; // 서버로 전송되지 않도록
  	}
    // 만약 날짜가 선택되지 않았을 경우 = 기본 value값인 "날짜를 선택해주세요"가 적혀 있는 경우
    if($('#rentDatepicker').val() == "날짜를 선택해주세요") {
  		alert("여행 기간을 선택해주세요");
  		return false; // 서버로 전송되지 않도록
  	}
    // 인원 선택은 디폴트 어른 1명이 있기 때문에 유효성 검사 필요 없음
    location.href = 'rent_list.html';
  });

  // 탑 버튼 눌렀을 때 최상단으로
  $(".btn_top").click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
    return false;
  });
});
