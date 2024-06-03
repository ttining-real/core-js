function login() {
  let userName = prompt('누구쇼');

  // 대소문자 구분 X - .toLowerCase()
  // .toLowerCase 앞에 ? 붙이는 이유
  // 아무것도 입력하지 않고 확인 버튼을 누르면 undefined를 반환해서 타입 에러가 뜬다.
  // undefined를 걸러주기 위해 ? 연산자를 사용해준다.


  // userName이 null, undefined => 아래 코드 실행 안함 (실행 순서를 제어할 수 있다.)
  if (userName === null || undefined) return;

  if (userName?.toLowerCase() === 'admin') {
    let password = prompt('비밀번호는?');

    if (password?.toLowerCase() === 'themaster') {
      console.log('Huānyíng Huānyíng!');
    } else if (password === null) {
      console.log('취소');
    } else {
      console.log('비밀번호를 잘못 입력하셨습니다.');
      login() // 재귀함수 (내가 나를 계속해서 다시 호출하는 것)
    }
  }
  // else if (userName === null || userName.includes(' ')) {
  else if (userName === null || userName?.replace(/\s*/g, '') === '') {
    console.log('취소!');
  } else {
    console.log('로그인 실패!');
  }
}

login();
