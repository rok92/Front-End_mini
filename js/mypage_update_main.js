// mypage_update_main.js

$(document).ready(function(){
    // 프로필 사진 변경
    // 파일 업로드
    ///


    // 회원 아이디 텍스트 상자 설정
    $('.input_update_id').val("admin");// 회원 아이디 값
    $('.input_update_id').attr("disabled", true);// 텍스트 상자 비활성화

    // 회원 이름 텍스트 상자 설정
    $('.input_update_name').focus(function(){// 포커스 O
        $(this).css('border', '1px solid #48A0FF');
    });

    $('.input_update_name').blur(function(){// 포커스 X
        $(this).css('border', '1px solid #DDDDDD');
    });

    // 취소하기 버튼 - index.html 로 이동
    $('.btn_update_cancel').click(function(){
        location.href='flight_main.html';
    });

    // 저장하기 버튼 - index.html 로 이동
    $('.btn_update_confirm').click(function(){
        // 데이터 값 넘겨주기
        // 회원 이름
        
        //
        alert("회원정보가 저장되었습니다.");
        location.href='flight_main.html';
    });
    
});