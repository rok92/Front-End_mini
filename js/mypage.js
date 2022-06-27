
function open(){
  // 마이페이지 메뉴
  let myHotel = document.getElementById("myBookedHotel");
  let myAirline = document.getElementById("myBookedAirline");
  let myList = document.getElementById("myCheckList");

  // 각 메뉴 페이지
  let bookedHotelPage = document.getElementById("booked_hotel_page");
  let bookedAirPage = document.getElementById("booked_air_page");
  let checkList = document.getElementById("check_list");
  let checkLink = document.getElementById("check_link");

  // 예약한 숙박
  myHotel.addEventListener("click",()=>{
    bookedHotelPage.style.display = "block";
    bookedAirPage.style.display = "none";
    checkList.style.display = "none";
    checkLink.style.display = "flex";
  });

  // 예약한 항공
  myAirline.addEventListener("click",()=>{
    bookedAirPage.style.display = "block";
    bookedHotelPage.style.display = "none";
    checkList.style.display = "none"; 
    checkLink.style.display = "flex";
  });

  // 체크 리스트
  myList.addEventListener("click",()=>{
    checkList.style.display = "block";
    bookedHotelPage.style.display = "none";
    bookedAirPage.style.display = "none"; 
    checkLink.style.display = "none";
  });
}

open();


// 체크리스트 작성

let listInput = document.getElementById("list_input");
let addBtn = document.getElementById("add_btn");
let readyList = [];

//버튼 클릭해서 입력
addBtn.addEventListener("click",addReady);

// 입력란에 클릭하면 내용 사리지는 기능
listInput.addEventListener("click",()=>{
  listInput.value = " ";
});

//enter로 입력하는 기능
function enter(){
  if(window.event.keyCode == 13){
    addReady();
    listInput.value = " ";
  }};

// 배열에 입력(input) 넣기
function addReady(){
  let ready = {
    id : randomIdGenerate(),
    readyContent : listInput.value,
    isComplete: false
  }

  readyList.push(ready);
  console.log(ready);
  
  listRender();
}


// 출력
function listRender(){
  let listHTML = "";

  for(let i = 0; i < readyList.length; i++){
    if(readyList[i].isComplete == true){
      listHTML += `<div class="check_list_content">
      <div>
        <button onclick="toggleComplete('${readyList[i].id}')"><i class="fas fa-check-circle check_toggle"></i></button>
        <span class="list_content comTrue">${readyList[i].readyContent}</span>
      </div>
      <button onclick="deleteReady('${readyList[i].id}')"><i class="fa fa-trash list_delete" aria-hidden="true"></i></button>
    </div>`
    }else{
      listHTML += `<div class="check_list_content">
      <div>
        <button onclick="toggleComplete('${readyList[i].id}')"><i class="fa fa-circle-o empty_circle" aria-hidden="true"></i></button>
        <span class="list_content">${readyList[i].readyContent}</span>
      </div>
      <button onclick="deleteReady('${readyList[i].id}')"><i class="fa fa-trash list_delete" aria-hidden="true"></i></button>
    </div>`
    }

  }
  document.getElementById("check_list_board").innerHTML = listHTML;
}

// 체크 유무
function toggleComplete(id){
  for(let i = 0; i < readyList.length; i++){
    if(readyList[i].id == id){
      readyList[i].isComplete = !readyList[i].isComplete;
      break;
    }
  }
  listRender();
}

// 삭제
function deleteReady(id){
  for(let i in readyList){
    if(readyList[i].id ==  id){
      readyList.splice(i,1);
      break;
    }
  }
  console.log("id: ", id)
  listRender();
}

// 랜덤한 ID 값 만들어서 객체에 넣기 위해
function randomIdGenerate(){
  return '_' + Math.random().toString(36).substr(2,9);
}

// 탑 버튼 눌렀을 때 최상단으로
$(".btn_top").click(function () {
  $('html, body').animate({
      scrollTop: 0
  }, 400);
  return false;
});




