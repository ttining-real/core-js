
const template = document.createElement('template');

template.innerHTML = `
<div>bye</div>
<div>javascript</div>
`
console.log(template);


// const temp = document.querySelector('#temp');
const app = document.querySelector('#app');
// console.log(temp);
// console.log(temp.content); // fragment
// console.log(app);

// const clone = temp.content.cloneNode(true); // cloneNode로 deepcopy
// app.appendChild(clone);


const clone = template.content.cloneNode(true);
app.appendChild(clone);