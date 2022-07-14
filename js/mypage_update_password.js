// mypage_update_password.js

$(document).ready(function(){
    // 새 비밀번호 텍스트 상자 설정
    $('.input_update_password').focus(function(){
        $(this).css('border', '1px solid #48A0FF');
    });

    $('.input_update_password').blur(function(){
        $(this).css('border', '1px solid #DDDDDD');
    });

    // 새 비밀번호 확인 텍스트 상자 설정
    $('.input_check_password').focus(function(){
        $(this).css('border', '1px solid #48A0FF');
    });

    $('.input_check_password').blur(function(){
        $(this).css('border', '1px solid #DDDDDD');
    });

    // 오류 메세지
    // 오류 메세지 초기화
    $('.error_update_password1').hide();// 기존 비밀번호와 동일합니다
    $('.error_update_password2').hide();// 비밀번호를 확인해주세요
    $('.error_check_password').hide();// 비밀번호가 일치하지 않습니다

    // 비밀번호
    var user_pw = "12345678";// 기존 비밀번호 값
    //var password1 = $('.input_update_password').val();// 새 비밀번호 입력 값
    // var password2 = $('.input_check_password').val();// 새 비밀번호 확인 입력 값
    //var check_password = false;// 

    $('.btn_update_password').click(function(){ 
        // 비밀번호 길이 6~15 범위 벗어났을 경우
        if($('.input_update_password').val().length < 8 || $('.input_update_password').val().length > 16){
            $('.error_update_password1').hide();// 기존 비밀번호와 동일합니다 - 숨김
            $('.error_check_password').hide();// 비밀번호가 일치하지 않습니다 - 숨김
            $('.input_update_password').css('border', '1px solid #E65454');
            $('.error_update_password2').show();// 비밀번호를 확인해주세요 - 표시
        }else if($('.input_update_password').val() == user_pw){// 기존 비밀번호와 동일할 경우
            $('.error_update_password2').hide();// 비밀번호를 확인해주세요 - 숨김
            $('.error_check_password').hide();// 비밀번호가 일치하지 않습니다 - 숨김
            $('.input_update_password').css('border', '1px solid #E65454');
            $('.error_update_password1').show();// 기존 비밀번호와 동일합니다 - 표시   
        } else{
            $('.error_update_password1').hide();// 기존 비밀번호와 동일합니다 - 숨김
            $('.error_update_password2').hide();// 비밀번호를 확인해주세요 - 숨김
            if($('.input_update_password').val() != $('.input_check_password').val()){// 비밀번호 불일치 경우
                $('.input_check_password').css('border', '1px solid #E65454');
                $('.error_check_password').show();// 비밀번호가 일치하지 않습니다 - 표시
            } else {
                $('.error_update_password1').hide();// 기존 비밀번호와 동일합니다 - 숨김
                $('.error_update_password2').hide();// 비밀번호를 확인해주세요 - 숨김
                $('.error_check_password').hide();// 비밀번호가 일치하지 않습니다 - 숨김
                user_pw = $('.input_update_password').val();// 기존 비밀번호를 새 비밀번호로 대체
                alert("비밀번호가 변경되었습니다.");
                location.href = 'flight_main.html';
            }
        }
    });
});