// 다른 사람이 운전해요 클릭 시
$('.another_person_drive').click(function() {
  $(this).addClass('another')
  $('.another i').toggleClass('fa-active');
  
});

// 약관 전체 동의 클릭 시
$('.check_agree_terms').click(function() {
  $(this).addClass('check')
  $('.check i').toggleClass('fa-active');
  
});


// 이메일 custom select
// 클릭하면 active 토글
function toggleEmailSelect(selectEmailBox){
  selectEmailBox.classList.toggle("active");
}

let selectEmailBoxItems = document.querySelectorAll(".select_email");

selectEmailBoxItems.forEach(selecteditem =>{
  selecteditem.addEventListener('click', (e) => {
    let targetItem = e.target;
    let isOptionItem = targetItem.classList.contains("email_option")

    if(isOptionItem){
      selectEmailOption(targetItem);
    }

    toggleEmailSelect(selecteditem);
  });
});

let inputEmail = document.getElementById("driverEmailDomain");
// 옵션 선택되게 하기
function selectEmailOption(optionitem){
  let emailBox = optionitem.closest(".select_email");
  let selected = emailBox.querySelector(".selected_value");
  selected.textContent = optionitem.textContent;
  inputEmail.value = `${selected.textContent}`;
}

// 이메일 도메인 선택된 곳 클릭하면 다시 빈 값 되게 만들기 (직접입력 선택할 경우)
inputEmail.addEventListener('click',()=>{
  inputEmail.value= '';
});


// 휴대폰 번호 custom select
// 클릭하면 active 토글
function togglePhoneSelect(selectPhoneBox){
  selectPhoneBox.classList.toggle("active");
}
let selectPhoneBoxItems = document.querySelectorAll(".select_phone");
selectPhoneBoxItems.forEach(selecteditem =>{
  selecteditem.addEventListener('click', (e) => {
    let targetItem = e.target;
    let isOptionItem = targetItem.classList.contains("phone_option")

    if(isOptionItem){
      selectPhoneOption(targetItem);
    }

    togglePhoneSelect(selecteditem);
  });
});

// 옵션 선택되게 하기
function selectPhoneOption(optionitem){
  const PhoneBox = optionitem.closest(".select_phone");
  const selected = PhoneBox.querySelector(".selected_phone_value");
  selected.textContent = optionitem.textContent;
}

// 이름, 이메일, 휴대폰번호, 생년월일 중 하나라도 입력되지 않으면 입력하라는 알림
let driverKrName = document.getElementById("driverKrName");
let driverEmail = document.getElementById("driverEmail");
let driverEmailDomain = document.getElementById("driverEmailDomain");
let driverPhoneNum1 = document.getElementById("driverPhoneNum1");
let driverPhoneNum2 = document.getElementById("driverPhoneNum2");
let driverBirth = document.getElementById("driverBirth");

function checkDriverInfo1(){
  let driverReservationToggle1 = false;
  if(driverKrName.value == "" ){
    alert("이름을 입력해주세요");
  }else if(driverEmail.value == "" || driverEmailDomain.value == ""){
    alert("이메일을 입력해주세요");
  }else if(driverPhoneNum1.value == "" || driverPhoneNum2.value == ""){
    alert("휴대폰 번호를 입력해주세요");
  }else if(driverBirth.value == ""){
    alert("생년월일을 입력해주세요");
  }else{
    driverReservationToggle1 = true;
  }
  return driverReservationToggle1;
}

// 입력 형식 체크 및 약관동의
let pattern_num = /^[0-9]*$/;	// 숫자 
let pattern_eng = /^[a-zA-z]+$/;	// 영문
let pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
let pattern_em = /^[a-zA-Z0-9_]+$/; // 이메일 아이디
let pattern_ed = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])+\.[a-zA-Z]{2,3}$/; // 이메일 도메인
let pattern_kor1 = /^[가-힣]+$/; // 한글 글자
let pattern_kor2 = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/; //한글 전체
let pattern_birth = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/ //생년월일 입력형식

function checkDriverInfo2(){
  
  // 만 나이 계산 (생일이 안지난 경우, 현재 년도 - 태어난 년도 -1)
  const today = new Date(); //현재 날짜
  const driverYear = Number(driverBirth.value.substring(0,4));
  const driverMon =  Number(driverBirth.value.substring(4,6));
  const driverDate =  Number(driverBirth.value.substring(6,8));
  const mon = today.getMonth() - driverMon;
  let realAge = today.getFullYear() - driverYear;
  
  if(mon < 0 || (mon == 0 && (today.getDate() < driverDate))){
    realAge -= 1;
  }
  // console.log(driverYear);
  // console.log(driverMon);
  // console.log(driverDate);
  // console.log(today.getDate());

  if(!(pattern_kor1.test(driverKrName.value)) || pattern_num.test(driverKrName.value) || pattern_eng.test(driverKrName.value) || pattern_spc.test(driverKrName.value)){
    alert("이름을 다시 입력해 주세요");
  }else if(!(pattern_em.test(driverEmail.value)) || pattern_kor2.test(driverEmail.value)){
    //영문 대소문자, 숫자, 언더바(_) 입력가능
    alert("이메일을 다시 입력해주세요");
  }else if(!(pattern_ed.test(driverEmailDomain.value)) || pattern_kor2.test(driverEmailDomain.value) || pattern_spc.test(driverEmailDomain.value)){
    alert("이메일을 다시 입력해주세요");
  }else if(!(pattern_num.test(driverPhoneNum1.value)) || pattern_eng.test(driverPhoneNum1.value) || pattern_spc.test(driverPhoneNum1.value) || pattern_kor2.test(driverPhoneNum1.value)){
    alert("휴대폰 번호를 다시 입력해주세요");
  }else if(!(pattern_num.test(driverPhoneNum2.value)) || pattern_eng.test(driverPhoneNum2.value) || pattern_spc.test(driverPhoneNum2.value) || pattern_kor2.test(driverPhoneNum2.value)){
    alert("휴대폰 번호를 다시 입력해주세요");
  }else if(!(pattern_birth.test(driverBirth.value)) || !(pattern_num.test(driverBirth.value)) || pattern_eng.test(driverBirth.value) || pattern_spc.test(driverBirth.value) || pattern_kor2.test(driverBirth.value)){
    alert("생년월일을 다시 입력해주세요");
  }else if(realAge < 18){
    // 입력 생년월일로 만 18세 이상 체크(만 17세 이하인 생년월일을 입력할 경우 대상이 아니라는 알림)
    alert("렌터카 대여 대상이 아닙니다. 생년월일을 다시 입력해주세요");
  }else if(!document.querySelector('.check_agree_terms > i').classList.contains('fa-active')){
    //이용 약관에 동의하기 누르지 않으면 submit되지 않고 동의해 주세요 알림
    alert("약관 확인에 동의해 주세요");
  }

}

//원래 예약자 정보가 디폴트로 입력되고 다른 사람이 운전해요 누르면 내용 없어지게 하기
//디폴트로 입력되는건 db에서..
function anotherPersonCheck(){
  if(!document.querySelector('.another_person_drive > i').classList.contains('fa-active')){
    driverKrName.value = "";
    driverEmail.value = "";
    driverEmailDomain.value = "";
    driverPhoneNum1.value = "";
    driverPhoneNum2.value="";
    driverBirth.value = "";
  }
}


// 탑 버튼 눌렀을 때 최상단으로
$(".btn_top").click(function () {
  $('html, body').animate({
      scrollTop: 0
  }, 400);
  return false;
});








