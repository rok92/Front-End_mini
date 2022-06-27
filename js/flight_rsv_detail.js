$(document).ready(function () {
    // 시작 시 예약자 이름에 포커스
    $('.user_name').focus();
        
    // 엔터키 눌렀을 때 무조건 submit되지 않도록
    $(document).on('keydown', function (e) {
        if (e.keyCode == 13) return false;
    });

    // 유효성 체크
    $('.btn_rsv').on('click', function () {
        // 예약자 이름 체크
        if ($('.user_name').val() == "") {
            alert("예약자 이름을 입력해주세요.");
            return false;
        }

        // 이메일 주소 체크
        if ($('.user_email1').val() == "" || $('.user_email2').val() == "") {
            alert("이메일 주소를 입력해주세요.");
            return false;
        }

        // 이메일 형식
        var checkemail1 = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*/;
        var checkemail2 = /^[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        var email1 = $('.user_email1').val();
        var email2 = $('.user_email2').val();
        if (checkemail1.test(email1) == false) {
            alert("이메일 형식이 아닙니다. 다시 입력해주세요.")
            return false;
        } else if ($('.user_email3').val() == "") {
            if (checkemail2.test(email2) == false) {
                alert("이메일 형식이 아닙니다. 다시 입력해주세요.")
                return false;
            }
        }

        // 휴대폰 번호 체크
        if (($('.user_phone1').val() == "기타" && $('.user_phone4').val() == "") || $('.user_phone2').val() == "" || $('.user_phone3').val() == "") {
            alert("휴대폰 번호를 입력해주세요.");
            return false;
        }

        // 휴대폰 번호 형식
        var checknum1 = /^[0-9]{3,4}$/;
        var checknum2 = /^[0-9]{4}$/;
        var phone2 = $('.user_phone2').val();
        var phone3 = $('.user_phone3').val();
        if(checknum1.test(phone2) == false || checknum2.test(phone3) == false){
            alert("휴대폰 번호가 올바르지 않습니다.")
            return false;
        }

        // 탑승객 영문 이름 체크
        if ($('.passenger_name1').val() == "" || $('.passenger_name1').val() == "") {
            alert("탑승객 영문 이름을 입력해주세요.");
            return false;
        }

        // 영문 이름 형식
        var checkname = /^[a-zA-Z]+$/ ;
        var name1 = $('.passenger_name1').val();
        var name2 = $('.passenger_name2').val();
        if(checkname.test(name1) == false || checkname.test(name2) == false){
            alert("영문 이름에는 영어만 입력할 수 있습니다.");
            return false;
        }

        // 탑승객 성별 체크
        var $gendermale = $('.btn_passenger_male').attr('class');
        var $genderfemale = $('.btn_passenger_female').attr('class');
        if ($gendermale != 'btn_passenger_male bgblue white' && $genderfemale != 'btn_passenger_female bgblue white') {
            alert("탑승객 성별을 선택해주세요.");
            return false;
        }

        // 탑승객 생년월일 체크
        var idx1 = $(".passenger_birth_month option").index( $(".passenger_birth_month option:selected") );
        var idx2 = $(".passenger_birth_date option").index( $(".passenger_birth_date option:selected") );
        if ($('.passenger_birth_year').val() == "" || idx1 == 0 || idx2 == 0) {
            alert("생년월일을 입력해주세요.");
            return false;
        }

        // 탑승객 생년월일 형식
        var checkYear = /^[0-9]{4}$/; // 숫자 정규식
        var year = $('.passenger_birth_year').val();
        if(checkYear.test(year) == false){
            alert("연도에는 4자리의 숫자만 입력할 수 있습니다.")
            return false;
        }

        // 예약 규정 동의
        var $agree_check = $('.btn_agree_check').attr('class');
        if ($agree_check != 'btn_agree_check bgblue bdwhite') {
            alert("예약 규정을 읽고, 내용에 동의해주세요.");
            return false;
        }
    });

    // 각 입력칸에 마우스 올리거나 입력하려고 누르면 테두리 변경
    // 호버
    $('input').hover(
        function () {
            $(this).addClass('bdblack');
        },
        function () {
            $(this).removeClass('bdblack');
        }
    );

    // 포커스 되었을 때
    $('input').focus(
        function () {
            $(this).addClass('bdblue');
        }
    );

    // 포커스 아웃 되었을 때
    $('input').blur(
        function () {
            $(this).removeClass('bdblue');
        }
    );

    // 각 셀렉트칸에 마우스 올리거나 입력하려고 누르면 테두리 변경
    // 호버
    $('select').hover(
        function () {
            $(this).addClass('bdblack');
        },
        function () {
            $(this).removeClass('bdblack');
        }
    );

    // 포커스 되었을 때
    $('select').focus(
        function () {
            $(this).addClass('bdblue');
        }
    );

    // 포커스 아웃 되었을 때
    $('select').blur(
        function () {
            $(this).removeClass('bdblue');
        }
    );

    // 이메일 주소를 선택했을 때 직접 입력 칸 초기화, 비활성화
    $('.user_email3').change(function () {
        $(".user_email3 option:selected").each(function () {
            if ($(this).val() == "") { //직접입력일 경우
                $(".user_email2").val('');
                $(".user_email2").attr("disabled", false);
            } else { //직접입력이 아닐경우
                $(".user_email2").val($(this).text());
                $(".user_email2").attr("disabled", true);
            }
        });
    });

    // 성별 선택
    $('.btn_passenger_male').on('click', function () {
        $('.btn_passenger_male').addClass('bgblue white');
        $('.btn_passenger_female').removeClass('bgblue white');
        $gendermale = $('.btn_passenger_male').attr('class');
    });
    $('.btn_passenger_female').on('click', function () {
        $('.btn_passenger_female').addClass('bgblue white');
        $('.btn_passenger_male').removeClass('bgblue white');
        $genderfemale = $('.btn_passenger_female').attr('class');
    });

    // 예약 규정 동의 버튼
    $('.btn_agree_check').on('click', function () {
        $('.btn_agree_check').toggleClass('bgblue bdwhite');
        $agree_check = $('.btn_agree_check').attr('class');
    });

    // 탑 버튼 눌렀을 때 최상단으로
    $(".btn_top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});