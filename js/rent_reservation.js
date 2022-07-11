// 다른 사람이 운전해요 클릭 시
$('.check_agree_terms').click(function() {
  $(this).addClass('check')
  $('.check i').toggleClass('fa-active');
  
  // 라디오 버튼 초기화
  $('input[name="license"]').removeAttr('checked');
  $('input[name="license"]')[0].checked = true;
});

// 약관 전체 동의 클릭 시
$('.another_person_drive').click(function() {
  $(this).addClass('another')
  $('.another i').toggleClass('fa-active');
  
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

let inputEmail = document.getElementById("driver_email");
// 옵션 선택되게 하기
function selectEmailOption(optionitem){
  let emailBox = optionitem.closest(".select_email");
  let selected = emailBox.querySelector(".selected_value");
  selected.textContent = optionitem.textContent;
  inputEmail.value = `${selected.textContent}`;
}


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

// 도메인 선택된 곳 클릭하면 다시 빈 값 되게 만들기
inputEmail.addEventListener('click',()=>{
  inputEmail.value= '';
});






  // 탑 버튼 눌렀을 때 최상단으로
  $(".btn_top").click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
    return false;
  });








