/*
    jQuery(local-json.js)
*/
//window.onload=function(){}

$(function(){ //jQuery이다. 위와 같은 내용, 초기화작업
   
    //로컬스토리지객체생성 => DB대용 =>프로파일러 목적(계정별로 서로 다른 환경 설정 불러옴)
    let storage=localStorage; //로컬스토리지 객체명 =localStorage
    let body=document.querySelector("body"); //배경색상때문에(body태그)
    let nameField=document.getElementById("name"); //이름
    let colorField=document.getElementById("color"); //폰트 색상        $("#color")-> jQuery방식
    let fontSizeField=document.getElementById("fontSize"); //폰트크기


    //멘 처음 로그인 시 기본 배경색상, 글자크기 지정(디폴트값 지정)
    let defaultBackground="#ffffff";
    let defaultFontSize=15;

    //1.storage에 저장
    $("#save").click(function(){ //save.onclick=function()[]
        //로컬스트리지.setItem("키명","저장할 값")<->~getItem("키명")
        
        let user={
            name:nameField.value, /*키명:입력받은 값*/
            color:colorField.value,
            size:fontSizeField.value
        }
        //로컬 스토리지는 객체가 저장이 안됨-> 저장하기위해서는 객체를 문자열로 변환 필요(중요) : JSON.stringfy
        storage.setItem(nameField.value,JSON.stringify(user)); //간단한 용량의 데이터를 DB데이터로 쓰고 싶을 때 사용한다.(이 예제)
        
        //화면에 반영
        updateUserInfo(nameField.value,colorField.value,fontSizeField.value);
    })

    //2.storage에 저장된 데이터 삭제
    $("#remove").click(function(){
        //형식1: 로컬스토리지객체명.clear() 모두삭제 -> 전체다 날림
        //형식2: 로컬스토리지객체명.removeItem(키명) -> 정해진 키만 날림 <->setItem(키명,저장할값(user))의 반대 개념이다?????????.
        storage.removeItem(nameField.value);
        
        //화면도 기본화면으로 다시 초기화작업
        updateUserInfo("",defaultBackground,defaultFontSize);
    })

    //3.id,color,size설정해주는 함수-> 사용자 정의 함수
    function updateUserInfo(id,color,size){
        nameField.value=id; //사용자 id
        colorField.value=color;
        fontSizeField.value=size;

        //화면에 반영(최상위 속성명.하위속성명=저장할 것.)
        body.style.background=color; //배경색
        body.style.fontSize=size+"px"; //단위설정 필수 (안하면 적용이 안됨=html5)

    }

    //4.처음 로그인 시 반영할 초기화 설정해주는 함수
    $("#login").click(function(){
       
        //1.로컬스토리지객체명.getItem("불러올키명")<->~setItem(키명,저장할 값)
        let userStr=storage.getItem(nameField.value); //계정명
        if(userStr){//계정명이 존재한다면
            //저장된 문자열=> 객체로 다시 변환시켜서 화면에 반영
            //형식) JSON.parse(문자열) => 객체로 변환

            let userObj=JSON.parse(userStr); //객체명.속성명
            updateUserInfo(userObj.name,userObj.color,userObj.size); //꺼내온 객체명.키명(저장된 값 불러옴.)


        }else{ //저장된 값이 없다면 초기 설정 지정
            updateUserInfo("",defaultBackground,defaultFontSize); //계정없고 흰색,15px
        }
    })
})