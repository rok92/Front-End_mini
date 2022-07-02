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
let rctSlideItem = document.querySelectorAll(".recently_slide_box li");
rctCurrentIndex = 0;
rctSlideCount = rctSlideItem.length;

rctPrev = document.querySelector(".recently_prev");
rctNext = document.querySelector(".recently_next");

rctWidth = 400;
rctMargin = 40;

itemMakeClone();
boxItemInit();

function itemMakeClone(){

  // cloneNode() 노드 복제 true : 자식노드도 함께 복제
  let cloneRctSlide = rctSlideItem.cloneNode(true);

  rctSlideBox.append(cloneRctSlide);
  rctSlideBox.insertBefore(cloneRctSlide, rctSlideBox.firstElementChild);

}

function boxItemInit(){
  rctSlideBox.style.width = ((rctWidth*3) + (rctMargin*2)) * (Math.ceil(rctSlideCount/3) + 2) + 'px';
  rctSlideBox.style.left = -((rctWidth*3) + (rctMargin*2)) * (Math.ceil(rctSlideCount/3) + 1) + "px";
}

rctNext.addEventListener('click',function(){

  //다음(next) 버튼 눌렀을 때
  if(rctCurrentIndex <= rctSlideCount - 1){
    //슬라이드 이동
    rctSlideBox.style.left = -(Math.ceil((rctCurrentIndex+1)/3)) * ((rctWidth*3) + (rctMargin*2)) * 2 + 'px';
    rctSlideBox.style.transition = `${0.5}s ease-out`;
  }

  // 마지막 슬라이드
  if(rctCurrentIndex == rctSlideCount - 1){
    setTimeout(function(){
      rctSlideBox.style.left = -((rctWidth*3) + (rctMargin*2)) + "px";
      rctSlideBox.style.transition = `${0}s ease-out`;
    },500);
    rctCurrentIndex = -1;
  }

  rctCurrentIndex += 1;
});

rctPrev.addEventListener('click',function(){

  if(rctCurrentIndex >= 0){
    rctSlideBox.style.left = -(Math.ceil((rctCurrentIndex+1)/3)) * ((rctWidth*3) + (rctMargin*2)) + 'px';
    rctSlideBox.style.transition = `${0.5}s ease-out`;
  }

  if(rctCurrentIndex == 0){
    setTimeout(function(){
      rctSlideBox.style.left = -rctSlideCount * ((rctWidth*3) + (rctMargin*2)) + "px";
      rctSlideBox.style.transition = `${0}s ease-out`;
    },500);
    rctCurrentIndex = rctSlideCount;
  }
  rctCurrentIndex -= 1;
});

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









