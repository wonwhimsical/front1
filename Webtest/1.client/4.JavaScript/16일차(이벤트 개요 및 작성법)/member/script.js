/*
기능 : 회원가입 및 로그인을 위한 유효성 검사
*/
function loginCheck(){
    if(document.login.mem_id.value==""){
        alert("아이디를 먼저 입력해주세요!")
        document.login.mem_id.focus();
        return false;
    }
    if(document.login.mem_pwd.value==""){
        alert("비밀번호를 먼저 입력해주세요!")
        document.login.mem_pwd.focus();
        return false;
    }
    document.login.submit(); //document.폼객체명.submit();
}
//회원가입체크유무
function inputCheck(){
    if(document.regForm.mem_id.value==""){
        alert("아이디를 먼저 입력해주세요!");
        document.regForm.mem_id.focus();
        return false;
    }
    //mem_pwd
    if(document.regForm.mem_pwd.value==""){
        alert("비밀번호를 먼저 입력해주세요!");
        document.regForm.mem_pwd.focus();
        return;
    }
    //mem_repasswd
    if(document.regForm.mem_repasswd.value==""){
        alert("비밀번호를 확인해주세요!")
        document.regForm.mem_repasswd.focus();
        return;
    }
    //mem_name
    if(document.regForm.mem_name.value==""){
        alert("이름을 먼저 입력해주세요!")
        document.regForm.mem_name.focus();
        return;
    }
    //mem_email
    if(document.regForm.mem_email.value==""){
        alert("이메일을 먼저 입력해주세요!")
        document.regForm.mem_email.focus();
        return;
    }
    //mem_tel
    if(document.regForm.mem_tel.value==""){
        alert("전화번호를 먼저 입력해주세요!")
        document.regForm.mem_tel.focus();
        return;
    }
    //mem_job
    if(document.regForm.mem_job.value==""){
        alert("직업을 먼저 입력해주세요!")
        document.regForm.mem_job.focus();
        return;
    }
    //암호가 서로일치
    if(document.regForm.mem_pwd.value!=document.regForm.mem_repasswd.value){
        alert("비밀번호가 일치하지 않습니다.");
        document.regForm.mem_repasswd.focus();
        return;
    }
        document.regForm.submit();
    }

//중복 아이디를 체크해주는 자바스크립트 함수 선언
function idCheck(id){
    if(id==""){
        alert("아이디를 먼저 입력하세요")
        document.regForm.mem_id.focus(); //else 있으면 return 필요 없음
    }else{ //입력했다면
        //windown.open(1.불러올 문서명, 2.창의 제목, 3.창의옵션(위치,크기지정));
        open('idCheck.html','w', 'left=350, width=300,height=150');
    }

}
//우편번호를 검색해주는 함수 선언
function ZipCheck(zipcode){
    //left,top,width,height+menubar,status(상태바),scrollbars(스크롤기능),toolbar=yes|no (출연유무)
    open('ZipCheck.html','w', 'left=400, top=220, width=550, height=300'+
                                'menubar=no,status=yes,toolbar=no,scrollbars=yes');

    

}