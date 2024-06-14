/* ---------------- */
/* Condition        */
/* ---------------- */

// const result = prompt('자바스크립트의 "공식" 이름은 무엇일까요?', '');

// if(result === 'ECMAScript'){
//   console.log('정답입니다!');
// }else{
//   console.log('모르셨나요? 정답은 ECMAScript 입니다!');
// }




// let question = prompt('당신의 이름은 무엇입니까?')
// if (question === '김연걸', question === '연걸') {
//   alert('안녕? 나는 앙지잉.')
// } else (
//   prompt('뭐야! 당신 누구야!')
// )


function watchingMovie() {
  // 그 영화 봤니?
  //     ↓
  // Yes | No
  //     | 영화 볼거니?
  //           ↓
  //       Yes | No

  // 영화 봤니?
  let didWatchMovie = confirm('듄2 영화 봤어?');

  if (didWatchMovie) {
    console.log('그 영화 참 재밌더라!');
  } else {
    let goingToWatchMovie = confirm('영화 볼거니?');

    if (goingToWatchMovie) {
      // 영화 볼거야
      let withWho = prompt('누구랑 볼거니??');

      if (withWho === 'you') {
        console.log('사랑해');
      } else {
        console.log('왜 나랑 안봐요?');
      }
    } else {
      // 안볼거야
      console.log('그래 나중에 한번 꼭 봐!');
    }
  }

  // 영화 볼거니?
}

// if 문 (statement)
// else 절(caluse)
// else if 복수 조건 처리

// 조건부 연산자
let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

// const result = confirm('그 영화 봤니?') ? confirm('혼자?') ? console.log('응') : console.log('몰라도 돼') : confirm('예정도 없니?');

// 일치 연산으로 비교
// const message = didWatchMovie === 'yes' ? '그 영화 참 재밌더라' : '다음에 같이 볼래?'

// 문자의 메서도 사용
const message = didWatchMovie.includes('yes')
  ? '그 영화 참 재밌더라'
  : goingToWatchMovie.includes('yes')
    ? '언제 볼까? 재밌겠다'
    : '그랭..ㅎ';

// 멀티 조건부 연산자 식




function render(node,isActive){
  
  let template = `
    <div>${isActive ? '안녕~~!!' : '잘가~~!!'}</div>
  `
  node.insertAdjacentHTML('beforeend',template);
}