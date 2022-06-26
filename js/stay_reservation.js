$(document).ready(function(){

  // 시작전에 ID란에 포커스
  $('#emailId').focus();

  // 예약하기 눌렀을 때
  $('#book_ing').on('click',function(){
    // 아이디값 유효성 검사
    if($('#emailId').val()==""){
      alert('아이디를 입력하세요.');
      $('#emailId').focus();
      $('#emailId').focus(function(){
        $(this).css('border-color','#e65454');
        if($('#emailId').val()!=""){
          $(this).css('border-color','#DDDDDD');
        }
      });
      return false;
    }

    // 이메일 형식
    var exptext = /^[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    var email = $('.email_address_insert').val();
    if ($('.email_address_select').val() == "1") {
        if (exptext.test(email) == false) {
            alert("이메일 형식이 아닙니다. 다시 입력해주세요.");
            $('.user_email2').val() = "";
            return false;
        }
    }

    // 휴대폰 번호 유효성 검사
    if($('#num_second').val()=="" || $('#num_third').val()==""){
      alert('휴대폰 번호를 입력해 주세요.');
      return false;
    }
    // 약관 동의 유효성 체크
    if(!$('input:checked[id=check_final]').is(':checked')){
      alert('약관에 모두 동의하셔야 합니다.');
      return false;
    }

});

  // input 칸 기능
  // 각 input 칸에 마우스 올렸을 때 / 내렸을 때 테두리 변화
  $('input').hover(
    function(){
      $(this).addClass('bdblack');
    },
    function(){
      $(this).removeClass('bdblack');
    }
  );

  // 각 input 칸에서 입력하고 있을 때 테두리 변화
  $('input').on('click',function(){
    $(this).addClass('bdblue');
  });

  $('input').focus(function(){
    $(this).addClass('bdblue');
  })

  // 각 input 칸에서 입력 마치고 나올 때 테두리 변화
  $('input').blur(function(){
    $(this).removeClass('bdblue');
  });


  // select 칸 기능
  // select 칸 마우스 올렸을 떄 / 내렸을 때 변화
  $('select').hover(
    function(){
      $(this).addClass('bdblack');
    },
    function(){
      $(this).removeClass('bdblack');
    }
  );
  // select칸에 입력하고 있을 때 테두리 변화
  $('select').click(function(){
    $(this).addClass('bdblue');
  });

  // select칸에 입력 마치고 나올 떄 테두리 변화
  $('select').blur(function(){
    $(this).removeClass('bdblue');
  });

  // 투숙객정보와 일치해요 버튼클릭하면

  $("#cusInfo").change(function(){
    if($('#cusInfo').is(':checked')){
      $('#realName').attr('value', $('#cusName').val());
      $('#realId').attr('value', $('#emailId').val());
      $('#realAddress').attr('value', $('#emailAddress').val());
      $('#realSel').attr('value', $('#cusSel').val());
      $('#realPsel').attr('value', $('#cusPsel').val());
      $('#realPs').attr('value', $('#num_second').val());
      $('#realPt').attr('value', $('#num_third').val());
    }else{
      $('#realName').removeAttr('value', $('#cusName').val());
      $('#realId').removeAttr('value', $('#emailId').val());
      $('#realAddress').removeAttr('value', $('#emailAddress').val());
      $('#realSel').removeAttr('value', $('#cusSel').val());
      $('#realPsel').removeAttr('value', $('#cusPsel').val());
      $('#realPs').removeAttr('value', $('#num_second').val());
      $('#realPt').removeAttr('value', $('#num_third').val());
    }
  });
});