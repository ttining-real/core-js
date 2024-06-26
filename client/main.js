
import { xhrPromise } from './lib/index.js';

// xhrPromise.get('https://jsonplaceholder.typicode.com/users')
// .then(console.log)



// async function getData() {

//   const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users')

//   console.log(data);
// }



const getData = async () => {

  const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users')

  data.forEach((item) => {
    console.log(item.name);
  })
  
  console.log(data);
  
}

// getData()