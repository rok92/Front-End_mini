// signup.js

$(document).ready(function(){
    // 입력 상자 테두리 색상 설정
    {
        // 아이디 
        $('.input_signup_id').focus(function(){
            $(this).css('border', '1px solid #48A0FF');
        });
    
        $('.input_signup_id').blur(function(){
            $(this).css('border', '1px solid #DDDDDD');
        });
    
        // 비밀번호
        $('.input_signup_password').focus(function(){
            $(this).css('border', '1px solid #48A0FF');
        });
    
        $('.input_signup_password').blur(function(){
            $(this).css('border', '1px solid #DDDDDD');
        });
    
        // 비밀번호 확인
        $('.input_check_password').focus(function(){
            $(this).css('border', '1px solid #48A0FF');
        });
    
        $('.input_check_password').blur(function(){
            $(this).css('border', '1px solid #DDDDDD');
        });
    
        // 이름 
        $('.input_signup_name').focus(function(){
            $(this).css('border', '1px solid #48A0FF');
        });
    
        $('.input_signup_name').blur(function(){
            $(this).css('border', '1px solid #DDDDDD');
        });
    
        // 휴대폰 번호 
        $('.input_signup_phone').focus(function(){
            $(this).css('border', '1px solid #48A0FF');
        });
    
        $('.input_signup_phone').blur(function(){
            $(this).css('border', '1px solid #DDDDDD');
        });
    
        // 인증번호
        $('.input_check_phone').focus(function(){
            $(this).css('border', '1px solid #48A0FF');
        });
    
        $('.input_check_phone').blur(function(){
            $(this).css('border', '1px solid #DDDDDD');
        });
    
        // 이메일 
        $('.input_signup_email').focus(function(){
            $(this).css('border', '1px solid #48A0FF');
        });
    
        $('.input_signup_email').blur(function(){
            $(this).css('border', '1px solid #DDDDDD');
        });
    }  

    // 아이디 중복 확인 버튼 클릭 시
    // 아이디 중복 체크
    // DB 사용 부분
    var check_id=false;
    $('.btn_check_id').click(function(){
        var userId=$('.input_signup_id').val();
        if(userId==""){
            alert("아이디를 입력하세요");
        }else if(userId=="admin"){
            alert("중복된 아이디입니다.");
            $('.input_signup_id').css('border', '1px solid #E65454');
        }else{
            alert("사용 가능한 아이디입니다.");
            check_id=true;// 회원가입 버튼 실행 시 확인 1
        }
    });

    // 인증 번호 입력란 숨기기(초기설정)
    $('.input_check_phone').hide();
    $('.btn_check_phone').hide();

    // 휴대폰 인증
    // 휴대폰 번호 인증하기 버튼 클릭 시
    // 인증 번호 발급
    // 100000 ~ 999999인 6자리 난수 생성
    var check_phoneNum=false;
    var num=null;
    // 휴대폰 번호 유효성 검사
    var phoneNum_rule=/^01([0|1|6|7|8|9])([0-9]{4})([0-9]{4})$/;
    var phoneNum=null;
    $('.btn_signup_phone').click(function(){
        phoneNum=$('.input_signup_phone').val();
        if(!(phoneNum_rule.test(phoneNum))){
            alert("휴대폰 번호를 확인해주세요.");
            $('.input_signup_phone').css('border', '1px solid #E65454');
        }else{
            num=Math.round(Math.random()*999999)+100000;
            alert("인증번호 발송 : " + num);
            $('.input_check_phone').show();
            $('.btn_check_phone').show();
        }
    });
   
    // 인증 확인
    // 확인 버튼 클릭 시
    // 인증 번호 일치 / 불일치 출력
    $('.btn_check_phone').click(function(){
        if($('.input_check_phone').val()==num){
            alert("인증되었습니다.");
            check_phoneNum = true;// 회원가입 버튼 실행 시 확인 2
            // [인증번호 입력] 칸 / [확인] 버튼 숨기고
            // [휴대폰 번호 입력] 칸 / [인증하기] 버튼 비활성화
            $('.input_check_phone').hide();
            $('.btn_check_phone').hide();
            $('.input_signup_phone').attr("disabled", true);
            $('.input_signup_phone').css("background-color", "#F2F2F2");
            $('.btn_signup_phone').attr("disabled", true);
            $('.btn_signup_phone').html("인증완료");
            $('.btn_signup_phone').css("background-color", "#DDDDDD");
        }
        else{
            check_phoneNum=false;
            alert("인증번호를 다시 확인해주세요.");
            $('.input_check_phone').css('border', '1px solid #E65454');
        }
    });

    var eyes_signup_password=false;
    var eyes_check_password=false;
    $('.eyes_signup_password').click(function(){
        if(!eyes_signup_password){
            $('.eyes_signup_password').attr('src', '../images/ic_eye-slash-solid.png');
            $('.input_signup_password').attr('type', 'text');
            eyes_signup_password=true;
        } else{
            $('.eyes_signup_password').attr('src', '../images/ic_eye-solid.png');
            $('.input_signup_password').attr('type', 'password');
            eyes_signup_password=false;
        }
    });


    $('.eyes_check_password').click(function(){
        if(!eyes_check_password){
            $('.eyes_check_password').attr('src', '../images/ic_eye-slash-solid.png');
            $('.input_check_password').attr('type', 'text');
            eyes_check_password=true;
        } else{
            $('.eyes_check_password').attr('src', '../images/ic_eye-solid.png');
            $('.input_check_password').attr('type', 'password');
            eyes_check_password=false;
        }
    });

    // [약관 전체 동의] 박스 체크 시, 전체 체크 / 해제
    var check_Tos=false;
    $('.checkbox_agreeTos_total').click(function(){
        if($('.checkbox_agreeTos_total').is(":checked")){
            $("input[name=checkboxSub]").prop("checked", true);
        } else{
            $("input[name=checkboxSub]").prop("checked", false);
        } 
    });

    // 전체 체크 상태일 경우 : [약관 전체 동의] 박스 체크
    // 하나라도 해제 상태일 경우 : [약관 전체 동의] 박스 해제
    $('.checkbox_agreeTos_sub1, .checkbox_agreeTos_sub2, .checkbox_agreeTos_sub3').click(function(){
        if($('.checkbox_agreeTos_sub1').is(":checked")
        &&$('.checkbox_agreeTos_sub2').is(":checked")
        &&$('.checkbox_agreeTos_sub3').is(":checked")){
            $('.checkbox_agreeTos_total').prop("checked", true);
        }
        else{
            $('.checkbox_agreeTos_total').prop("checked", false);
        }
    });

    // 회원가입
    // 회원가입 버튼 클릭 시
    var check_password=false;
    var check_name=false;
    var check_email=false;
    var check_signup=false;
    $('.btn_signup').click(function(){
        // 비밀번호
        var password1=$('.input_signup_password').val();
        var password2=$('.input_check_password').val();
        
        if(password1.length<8||password1.length>16){
        }else{
            if(password1!=password2){
                check_password=false;
            } else{
               check_password=true; // 회원가입 버튼 실행 시 확인 3
            }
        }

        // 이름
        // 한글 이름 유효성 검사
        var name_rule=/^[가-힣]+$/;
        var name=$('.input_signup_name').val();
        
        // if(name==""){
        if(!(name_rule.test(name))){
            check_name=false;
        } else{
            check_name=true;// 회원가입 버튼 실행 시 확인 4
         
        }

        // 이메일
        // 이메일 형식 유효성 검사
        var email_rule=/^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        var email_val=$('.input_signup_email').val();
        
        if(email_rule.test(email_val)){
            check_email=true;
        } else{
            check_email=false;
        }

        // 이용약관 동의 여부 검사
        if($('.checkbox_agreeTos_total').is(":checked")){
            check_Tos=true;
        }else{
            check_Tos=false;
        }

        // 회원 정보 처리 검사
        if(check_id&&check_password&&check_name&&check_phoneNum&&check_email&&check_Tos){
           // 회원 가입 완료 - 로그인 페이지로 이동
           alert("회원가입이 완료되었습니다."); 
           check_signup=true;
           location.href='login.html';
        } else{
            if(!check_id){
                alert("아이디 중복확인을 해주세요.");
                $('.input_signup_id').css('border', '1px solid #E65454');
            } else if(!check_password){
                alert("비밀번호를 확인해주세요.");
                $('.input_signup_password').css('border', '1px solid #E65454');
            } else if(!check_name){
                alert("이름을 확인해주세요.");
                $('.input_signup_name').css('border', '1px solid #E65454');
            } else if(!check_phoneNum){
                alert("휴대폰 번호 인증을 해주세요.");
                $('.input_signup_phone').css('border', '1px solid #E65454');
            } else if(!check_email){
                alert("이메일 형식이 유효하지 않습니다.");
                $('.input_signup_email').css('border', '1px solid #E65454');
            } else if(!check_Tos){
                alert("약관에 동의해주세요.");
            }
        }
    });

    // 탑 버튼 눌렀을 때 최상단으로
    $(".btn_top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});