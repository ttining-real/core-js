/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;


/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title
// ctrl 누르고 url 클릭하면 이동함 (console.log search, hash)

const { href, protocol, host, port, search, hash, replace, reload } = location;


console.log( href ); // http://localhost:5500/ (전체 주소를 가져옴, 값 재할당/getter·setter 가능)
console.log( protocol ); // http:
console.log( host ); // localhost:5500
console.log( port ); // 5500
console.log( search ); // 검색어를 입력했을 때 떨어지는 파라미터를 받아서 문자로 출력 ?type=listing&page=2
console.log( hash ); // #title
console.log( replace ); // ƒ replace() { [native code] }
console.log( reload ); // ƒ reload() { [native code] }
// replace, reload : 값을 바꿔치기 하거나... 어쩌구..



const urlParams = new URLSearchParams(location.search);

// 이터러블 프로토콜 => for ... of 사용
for (const [key, value] of urlParams) {
  console.log(`${key}:${value}`);
}

// urlParams.get('type') // 'listing'










/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;

// navigator.geolocation
// navigator.geolocation.getCurrentPosition : 위치기반서비스
// navigator.geolocation.getCurrentPosition((data)=>{
//   // console.log(data);

//   if(data) {
//     // console.log(data);
//     const {latitude:lat, longitude:long} = data.coords
//     console.log( lat, long );

//   } else {
//     console.error('위치 서비스 동의하세요.')
//   }
// })

// const geo = getGeolocation();


// console.log( getGeolocation() ); // {lat: 37.15, long: 127.561234}

// 인수로 함수를 전달
// getGeolocation( (data)=>{ console.log(data); } )


// * 함수로 만들어보자..!
// success 콜백, fail 콜백 두 가지를 받는다.

function getGeolocation(success, fail) {
  // console.log(success);

  navigator.geolocation.getCurrentPosition((data) => {
  
    // (!data)일 때, fail 코드 나옴
    if(data) {
      const {latitude:lat, longitude:long} = data.coords;
      
      const geo = { lat, long };
      
      success(geo);
  
    } else {
      fail({message: '위치 기반 서비스에 동의하세요.'});
    }
  })
  // , (e) => {
  //   fail({message: '위치 기반 서비스에 동의하세요.'})
  // })
}



getGeolocation(
  ({lat, long}) => {
    console.log(lat, long);
  },
  (e) => {
    console.log( e );
  }
)

/* -------------------------------------------------------------------------- */
/*                     callback -> promise -> async await                     */
/* -------------------------------------------------------------------------- */

// * Promise를 사용해보자..!
// function getGeolocation(){
  
//   return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition((data)=>{
  
//     if(data){
//       const {latitude:lat,longitude:long} = data.coords;
//       const geo = { lat, long };
//       resolve(geo)
//     }
//     else{
//       reject({message:'위치 서비스 동의 하세요'});
//     }
//     })
//   })
// }

// getGeolocation()
// .then(res => console.log(res))

// const geo = getGeolocation()

// geo // lat,long



// navigator.mediaDevices.getUserMedia({video:true})
// .then((stream)=>{
//   document.querySelector('#videoElement').srcObject = stream;
// })




/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;


/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;