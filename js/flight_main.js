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



// 최근 검색한 항공권 슬라이드


let rctSlideBox = document.querySelector(".recently_slide_box");
let rctPrev = document.querySelector(".recently_prev");
let rctNext = document.querySelector(".recently_next");
let rctIndex = 0;
let rctPosition = 0;
const moveWidth = 440;

function rctPrevButton(){

  if(rctIndex > 0){
    rctNext.removeAttribute("disabled");
    rctPosition += moveWidth;

    rctSlideBox.style.transform = `transitionX(${rctPosition}px)`
    rctIndex -= 1;
  }

  if(rctIndex == 0){
    rctPrev.setAttribute('disabled', 'true');
  }

}

function rctNextButton(){
  if(rctIndex < 9){
    rctPrev.removeAttribute("disabled");
    rctPosition -= moveWidth;

    rctSlideBox.style.transform = `transitionX(${rctPosition}px)`
    rctIndex += 1;
  }

  if(rctIndex == 9){
    rctNext.setAttribute('disabled', 'true');
  }
}

function rctInit(){
  rctPrev.setAttribute("disabled", "true");
  rctPrev.addEventListener('click',rctPrevButton);
  rctNext.addEventListener('click',rctNextButton);
}

rctInit();


// 출발지 선택 팝업 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e){
  var LayerPopup = $("#depart_pop");
  if(!LayerPopup.is(e.target) && LayerPopup.has(e.target).length == 0){
    LayerPopup.css('display','none');
  }
});

// 도착지 선택 팝업 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e){
  var LayerPopup = $("#arrive_pop");
  if(!LayerPopup.is(e.target) && LayerPopup.has(e.target).length == 0){
    LayerPopup.css('display','none');
  }
});

// 인원 선택 팝업 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e){
  var LayerPopup = $("#custom_air_pop");
  if(!LayerPopup.is(e.target) && LayerPopup.has(e.target).length == 0){
    LayerPopup.css('display','none');
  }
});









