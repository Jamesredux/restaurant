
console.log("another test");
console.log("maybest");

const content = document.querySelector('.test');
const newPara = document.createElement('p')
const para = `<p>This para</p>`;
newPara.innerHTML = para;
content.appendChild(newPara);