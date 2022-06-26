// login.js

$(document).ready(function(){
    // 로그인
    // 아이디/비밀번호 검사
    // ID : admin
    // PW : 12345678

    // 유저 정보 초기화
    var user_id="";
    var user_pw="";
    var input_id="";
    var input_pw="";
     
    // 아이디 / 비밀번호 입력 상자 테두리 색상 설정
    $('.input_login_id').focus(function(){
        $(this).css('border', '1px solid #48A0FF');
    });

    $('.input_login_id').blur(function(){
        $(this).css('border', '1px solid #DDDDDD');
    });

    $('.input_login_password').focus(function(){
        $(this).css('border', '1px solid #48A0FF');
    });

    $('.input_login_password').blur(function(){
        $(this).css('border', '1px solid #DDDDDD');
    });

    $('.error_login_id').hide();
    $('.error_login_password').hide();
    
    // 로그인 버튼 클릭 시
    $('.btn_login').click(function(){
        //alert("로그인 버튼 클릭");
        user_id="admin";
        user_pw="12345678";

        input_id=$('.input_login_id').val();
        input_pw=$('.input_login_password').val();
        if(input_id==user_id){
            if(input_pw==user_pw){
                alert("로그인 되었습니다.");
                location.href='index.html';// 메인페이지로 이동
            } else{
                // alert("비밀번호를 확인해주세요.");
                $('.input_login_password').css('border', '1px solid #E65454');
                $('.error_login_password').show();
                $('.error_login_id').hide();
            }
        } else{
            // alert("아이디를 확인해주세요.");
            $('.input_login_id').css('border', '1px solid #E65454');
            $('.error_login_id').show();
            $('.error_login_password').hide();
        }
    });
});