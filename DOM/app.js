// DOCUMENT OBJECT MODEL (DOM)
// console.log(document);

// SELECT THE ELEMENT
// document.getElementById
const heading = document.getElementById('heading');
// console.log(heading);
// console.dir(heading);


// document.getElementsByTagName
// always returns htmlCollection which looks like an array but it is not an array
// const para = document.getElementsByTagName('p');
// console.log(para);
// console.log(para[0]);

// TASK - convert the html collection 'para' into array then loop it
// console.log([...para]);
// console.log([...para].forEach((el)=>{
//     console.log(el.innerText); 
// }));


// document.getElementsByClassName
const list = document.getElementsByClassName('special');
console.log(list);


// document.querySelector
const list2 = document.querySelector('.special');
console.log(list2);


// document.querySelectorAll
const list3 = document.querySelectorAll('.special');
console.log(list3.forEach((Element)=>{
    console.log(Element.innerHTML);
}));

// HTML Collection RETURN by getElementByTagName and getElemenyByClassName AND NODELIST RETURN BY querySelectorAll method

// READING TEXT FROM ELEMENTS
// innerText textContent innerHTML properties

heading.textContent = 'dom';
console.log(document.body.textContent);
console.log(document.body.innerText);
console.log(heading.textContent);
heading.innerText = 'dom2';

heading.innerHTML=`<h1>yo</h1>`;
console.log(heading);
console.log(heading.innerHTML);

// note innerHTML overwrites the the content

const a = document.querySelector('#address');
console.dir(a);
console.log(a);

a.href = 'https://www.amazon.com';
console.log(a);


