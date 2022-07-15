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



// 출발지 선택하는 버튼 block/none
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

//도착지 선택하는 버튼 block/none
let arriveLocation = document.getElementById("arriveLocation");
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

// 도시 선택 시 출발지 / 도착지 자동 입력
// 출발지
var city;
$('#depart_location_table td').click(function(){
  city = $(this).text();
  $('#depart_loacation').attr('value', city);
});

// 도착지
$('#arrive_location_table td').click(function(){
  city = $(this).text();
  $('#arriveLocation').attr('value', city);
});

//인원수 및 좌석 선택 버튼 block/none
let personSit = document.getElementById("person_sit");
let customflightPOP = document.getElementById("custom_flight_pop");
let count3 = 1;
personSit.addEventListener("click",clickCount3);

function clickCount3(){
  count3++;
  
  if(count3 % 2 == 0){
    customflightPOP.style.display = "block";
  }else{
    customflightPOP.style.display = "none";
  }
}

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
  var LayerPopup = $("#custom_flight_pop");
  if(!LayerPopup.is(e.target) && LayerPopup.has(e.target).length == 0){
    LayerPopup.css('display','none');
  }
});


// 왕복 편도 다구간 선택
let flightShuttleBtn = document.getElementsByClassName('flight_shuttle_select');

function shuttleClick(event){
  if(event.target.classList[1] == "selectBtn"){
    event.target.classList.remove("selectBtn");
  }else{
    for(let i = 0; i < flightShuttleBtn.length; i++){
      flightShuttleBtn[i].classList.remove("selectBtn");
    }
    event.target.classList.add("selectBtn");
  }
}

function shuttleInit(){
  for(let i = 0; i < flightShuttleBtn.length; i++){
    flightShuttleBtn[i].addEventListener('click',shuttleClick);
  }
}
shuttleInit();

// 출발지 여행지 선택
// 출발지 팝업 내 검색하기 버튼 클릭 시
$('#popupLodSearchBtn').click(function(){
  var txt = $('#popupLodSearch').val();
  if(txt == ''){
    alert("여행지를 입력하세요");
  }else{
    $('#depart_loacation').attr('value', txt);
    $('.depart_popup').css('display','none');
  }
});

$("#popupLodSearch").on("keyup",function(key){
	if(key.keyCode==13){
	  var txt = $('#popupLodSearch').val();
    if(txt == ''){
      alert("여행지를 입력하세요");
    }else{
      $('#depart_loacation').attr('value', txt);
      $('.depart_popup').css('display','none');
    }
	}
});

// 도착지 팝업 내 검색하기 버튼 클릭 시
$('#popupLodSearchBtn2').click(function(){
  var txt = $('#popupLodSearch2').val();
  if(txt == ''){
    alert("여행지를 입력하세요");
  }else{
    $('#arriveLocation').attr('value', txt);
    $('.arrive_popup').css('display','none');
  }
});

$("#popupLodSearch2").on("keyup",function(key){
	if(key.keyCode==13){
	  var txt = $('#popupLodSearch2').val();
    if(txt == ''){
      alert("여행지를 입력하세요");
    }else{
      $('#arriveLocation').attr('value', txt);
      $('.arrive_popup').css('display','none');
    }
	}
});

// 인원 좌석 선택 버튼 클릭
let adultBtnMinus = document.getElementById('adultBtnMinus');
let personCount = document.getElementById('personCount');
let classType = document.getElementById('classType');
let maxNumber = 1;

function plusMinusBtn(pm){
  const adCount = document.getElementById('adCount');
  const cdCount = document.getElementById('cdCount');
  const bbCount = document.getElementById('bbCount');
  let adNumber = parseInt(adCount.innerHTML);
  let cdNumber = parseInt(cdCount.innerHTML);
  let bbNumber = parseInt(bbCount.innerHTML);

  // 인원 선택 버튼
  if(pm == "adplus"){
    if(adNumber < 9) {
      adNumber = adNumber + 1;
      maxNumber = maxNumber + 1;
      if(maxNumber >= 10){
        maxNumber = 9;
        return false; 
      }
    }
  }else if(pm == "adminus"){
    if(adNumber > 1){
      adNumber = adNumber - 1;
      maxNumber = maxNumber - 1;
    }
  }else if(pm == "cdplus"){
    if(cdNumber < 9) {
      cdNumber = cdNumber + 1;
      maxNumber = maxNumber + 1;
      if(maxNumber >= 10){
        maxNumber = 9;
        return false; 
      }
    }
  }else if(pm == "cdminus"){
    if(cdNumber > 0){
      cdNumber = cdNumber - 1;
      maxNumber = maxNumber - 1;
    }
  }else if(pm == "bbplus"){
    if(bbNumber < 9) {
      bbNumber = bbNumber + 1;
      maxNumber = maxNumber + 1;
      if(maxNumber >= 10){
        maxNumber = 9;
        return false; 
      }
    }
  }else if(pm == "bbminus"){
    if(bbNumber > 0){
      bbNumber = bbNumber - 1;
      maxNumber = maxNumber - 1;
    }
  }

  adCount.innerHTML = adNumber;
  cdCount.innerHTML = cdNumber;
  bbCount.innerHTML = bbNumber;
  personCount.value = maxNumber + "명";
  
  // 버튼 비활성화
  if(adCount.innerHTML > 1){
    $('#adultBtnMinus').css("color", "#48A0FF");
    $('#adultBtnMinus').css("border-color", "#48A0FF");
  } else if (adCount.innerHTML == 1) {
    $('#adultBtnMinus').css("color", "#BBBBBB");
    $('#adultBtnMinus').css("border-color", "#BBBBBB");
  } 

  if (adCount.innerHTML == 9) {
    $('#adultBtnPlus').css("color", "#BBBBBB");
    $('#adultBtnPlus').css("border-color", "#BBBBBB");
  } else if (adCount.innerHTML < 9) {
    $('#adultBtnPlus').css("color", "#48A0FF");
    $('#adultBtnPlus').css("border-color", "#48A0FF");
  }

  if(cdCount.innerHTML > 0){
    $('#childBtnMinus').css("color", "#48A0FF");
    $('#childBtnMinus').css("border-color", "#48A0FF");
  } else if (cdCount.innerHTML == 0) {
    $('#childBtnMinus').css("color", "#BBBBBB");
    $('#childBtnMinus').css("border-color", "#BBBBBB");
  } 

  if (cdCount.innerHTML == 9) {
    $('#childBtnPlus').css("color", "#BBBBBB");
    $('#childBtnPlus').css("border-color", "#BBBBBB");
  } else if (cdCount.innerHTML < 9) {
    $('#childBtnPlus').css("color", "#48A0FF");
    $('#childBtnPlus').css("border-color", "#48A0FF");
  }

  if(bbCount.innerHTML > 0){
    $('#babyBtnMinus').css("color", "#48A0FF");
    $('#babyBtnMinus').css("border-color", "#48A0FF");
  } else if (bbCount.innerHTML == 0) {
    $('#babyBtnMinus').css("color", "#BBBBBB");
    $('#babyBtnMinus').css("border-color", "#BBBBBB");
  } 

  if (bbCount.innerHTML == 9) {
    $('#babyBtnPlus').css("color", "#BBBBBB");
    $('#babyBtnPlus').css("border-color", "#BBBBBB");
  } else if (bbCount.innerHTML < 9) {
    $('#babyBtnPlus').css("color", "#48A0FF");
    $('#babyBtnPlus').css("border-color", "#48A0FF");
  }

  if(maxNumber == 9){
    $('#adultBtnPlus').css("color", "#BBBBBB");
    $('#adultBtnPlus').css("border-color", "#BBBBBB");
    $('#childBtnPlus').css("color", "#BBBBBB");
    $('#childBtnPlus').css("border-color", "#BBBBBB");
    $('#babyBtnPlus').css("color", "#BBBBBB");
    $('#babyBtnPlus').css("border-color", "#BBBBBB");
  }
}

// 좌석 선택
$('input[name="sits"]').on('click', function(){
  classType.value = $('input:radio[name="sits"]:checked').val();
});

//유효성검사, 링크
let flightDateBox = document.getElementById('rangepicker');
// flightDateBox.value = "";
function flightCheck(){

    if(!flightShuttleBtn[0].classList.contains('selectBtn') && !flightShuttleBtn[1].classList.contains('selectBtn') && !flightShuttleBtn[2].classList.contains('selectBtn')){
      alert("왕복, 편도, 다구간 중 선택해주세요");
      
    }else if(departLocation.value == ""){
      alert("출발지를 선택해주세요");
      
    }else if(arriveLocation.value == ""){
      alert("도착지를 선택해주세요");
      
    }else if(flightDateBox.value == ""){
      alert("여행 날짜를 선택해 주세요");

    }else{
        location.href = 'flight_list.html';
    }

}

// 최근 검색한 항공권 슬라이드

let rctSlideBox = document.querySelector(".recently_slide_box");
let rctSlideCount = rctSlideBox.childElementCount;
let rctPrev = document.querySelector(".recently_prev");
let rctNext = document.querySelector(".recently_next");
let rctIndex = 0;
let rctPosition = 0;
const moveWidth = 440;

// 최근 항공권 검색 이전 버튼
function rctPrevButton(){

  if(rctIndex > 0){
    rctPosition += moveWidth;
    rctSlideBox.style.transform = `translateX(${rctPosition}px)`
    rctIndex -= 1;
  }

  if(rctIndex == (rctSlideCount-(rctSlideCount-2))){
    rctNext.style.visibility = "visible";
  }

  if(rctIndex == 0){
    rctPrev.style.visibility = "hidden";
  }

}

// 최근 항공권 검색 다음버튼
function rctNextButton(){
  if(rctIndex < (rctSlideCount-3)){
    rctPosition -= moveWidth;
    rctSlideBox.style.transform = `translateX(${rctPosition}px)`;
    rctSlideBox.style.transition = "0.5s";
    rctIndex += 1;
  }

  if(rctIndex == (rctSlideCount-3)){
    rctNext.style.visibility = "hidden";
  }

  if(rctIndex <= (rctSlideCount-3)){
    rctPrev.style.visibility = "visible";
  }

}
// 최근 검색한 항공권 초기 설정 및 클릭 이벤트
function rctInit(){
  rctPrev.addEventListener('click',rctPrevButton);
  rctNext.addEventListener('click',rctNextButton);
  rctPrev.style.visibility = "hidden";
}

rctInit();

//최근 검색한 항공권 슬라이드 내용 지우기
let rctBox = document.querySelectorAll(".recently_slide_box > div");
$('.recently_colse_btn').click(function(){
  $(this).closest('.recently_item').remove();
  if($('.recently_item').length == 3){
    rctNext.style.visibility = "hidden";
    rctPrev.style.visibility = "hidden";
  }
});

// 탑 버튼 눌렀을 때 최상단으로
$(".btn_top").click(function () {
  $('html, body').animate({
      scrollTop: 0
  }, 400);
  return false;
});