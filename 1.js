
  // var it=document.getElementsByClassName('list2-item');
   
   ///var it=document.getElementsByClassName('list2-item');
   //it[0].textContent="new it"
   //console.log(it);
   //console.dir(document)
   //var it=document.getElementsByTagName('li');
    //it[4].textContent="new "
    //console.log(it);
    //console.dir(document)
   // it[4].style.backgroundColor="green"
    //it[4].style.fontWeight="bold"
//queryselector
var select=document.querySelector('.list-group-item:nth-child(2)')
select.style.backgroundColor="green"
var items=document.querySelector('.list-group-item:nth-child(3)')
items.style.backgroundColor="black"
//queryselectorall
var item_2 =document.querySelectorAll("li:nth-child(odd)");
for (let i = 0; i < item_2.length; i++) {
    item_2[i].style.backgroundColor="green"
    
}
var itemc_2 =document.querySelectorAll("li:nth-child(2)");
itemc_2.style.color="green"