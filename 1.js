
  // var it=document.getElementsByClassName('list2-item');
   
//    /var it=document.getElementsByClassName('list2-item');
//    it[0].textContent="new it"
//    console.log(it);
//    console.dir(document)
//    var it=document.getElementsByTagName('li');
//     it[4].textContent="new "
//     console.log(it);
//     console.dir(document)
//    it[4].style.backgroundColor="green"
//     it[4].style.fontWeight="bold"
// queryselector
// var select=document.querySelector('.list-group-item:nth-child(2)')
// select.style.backgroundColor="green"
// var items=document.querySelector('.list-group-item:nth-child(3)')
// items.style.backgroundColor="black"
// //queryselectorall
// var item_2 =document.querySelectorAll("li:nth-child(odd)");
// for (let i = 0; i < item_2.length; i++) {
//     item_2[i].style.backgroundColor="green"
    
// }
// var itemc_2 =document.querySelectorAll("li:nth-child(2)");
// itemc_2.style.color="green"
//parentelement
//var items=document.querySelector('#items')
// console.log(items.parentElement)
// items.parentElement.style.backgroundColor="red"

// //children
// console.log(items.children)
// items.children[0].style.backgroundColor="green"
// //firstelementchild
// console.log(items.firstElementChild)
// items.firstElementChild.textContent="itemss"
// //lastelementchild
// console.log(items.lastElementChild)
// items.lastElementChild.textContent="itemss"
// console.log(items.lastChild)
//create Element
var newDiv=document.createElement("div")
console.log(newDiv)
//add class
newDiv.className=" hello"
//add id
newDiv.id="hello1"
//add attribute
newDiv.setAttribute("title","hello div")
//create textnode
var newdivetext=document.createTextNode("hello world")
newDiv.appendChild(newdivetext)
//insert
var container=document.querySelector('header.container')
console.log(container)
var h1=document.querySelector('header h1')
container.insertBefore(newDiv,h1);

