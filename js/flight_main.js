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
    $('#arriveLocation').attr('value', txt);
    $('#arriveLocation').removeClass('txt_gray');
    $('.arrive_popup').css('display','none');
  }
});

// 인원 좌석 선택 버튼 클릭
//성인
let adultBtnMinus = document.getElementById('adultBtnMinus');
let personCount = document.getElementById('personCount');
let classType = document.getElementById('classType');

function plusMinusBtn(pm){
  const adCount = document.getElementById('adCount');
  let number = adCount.innerHTML;

  if(pm == "plus"){
    number = parseInt(number) + 1;
  }else if(pm = "minus"){
    number = parseInt(number) - 1;
  }

  adCount.innerHTML = number;
  personCount.value = number;
  
  if(adCount.innerHTML > 1){
    adultBtnMinus.setAttribute("disabled", false);
  }

}

function plusMinusInit(){
  adultBtnMinus.setAttribute('disabled', true);
}
plusMinusInit();


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

//최근 검색한 항공권 슬라이드 내용 지우기 (아직 못함)
let rctBox = document.querySelectorAll(".recently_slide_box > div");

function removeFlightBox(){
  for(let i = 0; i < rctSlideCount.length; i++){
    rctBox[i].remove();
    rctPrevButton();
  }
}

// 탑 버튼 눌렀을 때 최상단으로
$(".btn_top").click(function () {
  $('html, body').animate({
      scrollTop: 0
  }, 400);
  return false;
});




