// 데이터 피커 수정 jQuery

var now = new Date();
var today = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear();

$(function(){

  $("#rangepicker").daterangepicker({
    locale: {
      daysOfweek: ['일','월','화','수','목','금','토'],
      monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
    },
    
    autoUpdateInput: false,
    autoApply: true,
    minDate: today
  });

});


$('input[name="daterange"]').on('apply.daterangepicker', function(ev,picker){
  $(this).val(picker.startDate.format('MM.DD(dd)') + ' ~ ' + picker.endDate.format('MM.DD(dd)'));
});


let airDateBox = document.getElementById('rangepicker');
airDateBox.addEventListener('click',()=>{
  airDateBox.value = "여행 날짜 선택";
});



$(document).ready(function(){

  // top 버튼
  $('#topBtn').on('click',function(){

    $('html, body').animate({scrollTop:0},500);
  });


  

});


// 출발지 선택하는 버튼

let departLocation = document.getElementById("depart_loacation");
let departPopUP = document.getElementById("depart_pop");
let count = 1;

departLocation.addEventListener("click",clickCount);

function clickCount(){
  count++;
  
  if(count % 2 == 0){
    departPopUP.style.display = "block";
  }else{
    departPopUP.style.display = "none";
  }
}

//도착지 선택하는 버튼
let arriveLocation = document.getElementById("arrive_location");
let arrivePopUP = document.getElementById("arrive_pop");
let count2 = 1;
arriveLocation.addEventListener("click",clickCount2);

function clickCount2(){
  count2++;
  
  if(count2 % 2 == 0){
    arrivePopUP.style.display = "block";
  }else{
    arrivePopUP.style.display = "none";
  }
}

//인원수 및 좌석 선택 버튼
let personSit = document.getElementById("person_sit");
let customAirPOP = document.getElementById("custom_air_pop");
let count3 = 1;
personSit.addEventListener("click",clickCount3);

function clickCount3(){
  count3++;
  
  if(count3 % 2 == 0){
    customAirPOP.style.display = "block";
  }else{
    customAirPOP.style.display = "none";
  }
}

// 탑 버튼 눌렀을 때 최상단으로
$(".btn_top").click(function () {
  $('html, body').animate({
      scrollTop: 0
  }, 400);
  return false;
});

// 출발지 팝업 내 검색하기 버튼 클릭 시
$('#popupLodSearchBtn').click(function(){
  var txt = $('#popupLodSearch').val() + " (ICN)";
  if(txt == ''){
    alert("여행지를 입력하세요");
  }else{
    $('#depart_loacation').attr('value', txt);
    $('#depart_loacation').removeClass('txt_gray');
    $('.depart_popup').css('display','none');
  }
});

// 도착지 팝업 내 검색하기 버튼 클릭 시
$('#popupLodSearchBtn2').click(function(){
  var txt = $('#popupLodSearch2').val() + " (GUM)";
  if(txt == ''){
    alert("여행지를 입력하세요");
  }else{
    $('#arrive_location').attr('value', txt);
    $('#arrive_location').removeClass('txt_gray');
    $('.arrive_popup').css('display','none');
  }
});

// 다음 페이지로 이동
$('.air_search').click(function(){
  location.href = 'flight_list.html';
});