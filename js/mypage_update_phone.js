// mypage_update_phone.js

$(document).ready(function(){
    // 초기화
    $('.error_update_phoneNum').hide();// 경고 - 휴대폰 번호를 확인해주세요
    $('.error_check_phoneNum').hide();// 경고 - 인증번호를 확인해주세요
    $('.btn_phoneNum_confirm').hide();// 변경하기 버튼

    // input 포커스
    // 휴대폰 번호
    $('.input_phoneNum_box').focus(function(){
        $(this).css('border', '1px solid #48A0FF');
    });

    $('.input_phoneNum_box').blur(function(){
        $(this).css('border', '1px solid #DDDDDD');
    });

    // 인증번호
    $('.input_phoneNum_check').focus(function(){
        $(this).css('border', '1px solid #48A0FF');
    });

    $('.input_phoneNum_check').blur(function(){
        $(this).css('border', '1px solid #DDDDDD');
    });

    // 휴대폰 번호 유효성 검사
    var phoneNum_rule=/^01([0|1|6|7|8|9])([0-9]{4})([0-9]{4})$/;
    var phoneNum = null;// 회원 휴대폰 번호

    // 휴대폰 인증
    // 휴대폰 번호 인증하기 버튼 클릭 시
    // 인증번호 발급
    // 100000 ~ 999999인 6자리 난수 생성
    var num = null;// 인증번호
    // 인증번호 보내기 버튼 클릭 시
    $('.btn_phoneNum_send').click(function(){
        phoneNum=$('.input_phoneNum_box').val();
        if(!(phoneNum_rule.test(phoneNum))){
            alert("휴대폰 번호를 확인해주세요.");
            $('.input_phoneNum_box').css('border', '1px solid #E65454');
            $('.error_update_phoneNum').show();// 경고 - 휴대폰 번호를 확인해주세요
        }else{
            $('.error_update_phoneNum').hide();// 경고 - 휴대폰 번호를 확인해주세요
            num=Math.round(Math.random()*899999)+100000;
            alert("인증번호 발송 : " + num);
            $('.btn_phoneNum_confirm').show();// 변경하기 버튼
        }
    });

    // 변경하기 버튼 클릭 시 - 인증번호 확인
    $('.btn_phoneNum_confirm').click(function(){
        if($('.input_phoneNum_check').val()!=num){  
            $('.input_phoneNum_check').css('border', '1px solid #E65454');
            $('.error_check_phoneNum').show();// 경고 - 인증번호를 확인해주세요
        }
        else{
            alert("휴대폰 번호가 변경되었습니다.");
            location.href = 'flight_main.html';
        }
    });
});
