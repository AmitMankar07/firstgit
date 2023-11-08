// console.log(document.domain);
// console.dir(document);

// console.log(document.URL);
// console.log(document.body);

// console.log(document.head);

// console.log(document.getElementById('header-title'));

// var headertitle=document.getElementById('header-title');
// var header=document.getElementById('main-header')
// console.log(headertitle);

// header.style.border='solid 3px black';

// var items=document.querySelector('.title');
// items.style.fontweight='bold';
// items.style.color='green';

// var itemgroup=document.getElementsByClassName('list-group-item');
// itemgroup[2].style.backgroundColor='green';

// for(let i=0;i<itemgroup.length;i++){
//     itemgroup[i].style.fontWeight='bold '
// }

//tagname

//using clasname
// var itemgroup=document.getElementsByClassName('list-group-item');
// itemgroup[2].style.backgroundColor='yellow';

// for(let i=0;i<itemgroup.length;i++){
//     itemgroup[i].style.color='red';
// }

//now by using tagname

// var itemgroup=document.getElementsByTagName('li');
// itemgroup[2].style.backgroundColor='yellow';

// for(let i=0;i<itemgroup.length;i++){
//     itemgroup[i].style.color='red';
// }

//query 


// var seconditem=document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor='green';

// var thirditem=document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.color='transparent';


//query All

// var scnditem=document.querySelectorAll('.list-group-item');
// scnditem[1].style.color='green';

// var odditems=document.querySelectorAll('li:nth-child(odd)');

// for(let i=0;i<odditems.length;i++){
//     odditems[i].style.backgroundColor='green';
// }



//traversing the DOM

var itemList=document.querySelector('#items');
//parent node
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode);

//parent elemnt
console.log(itemList.parentElement);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement);

//child node
console.log(itemList.childNodes);

console.log(itemList.children[1]);
itemList.children[1].style.color='red';

//first child
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);

//last child
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);

//nextsibling
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

//previousSibling

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

//create element

var newDiv=document.createElement('div');

newDiv.id='hel';

newDiv.setAttribute('title','hello div');

var newdivtext=document.createTextNode('hello world');
newDiv.append(newdivtext);



var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(newDiv,h1);


var newcontainer=document.getElementById('main');

var listgroup=document.getElementById('items');

console.log("-------------",newcontainer,listgroup);
newcontainer.insertBefore(newDiv,listgroup);