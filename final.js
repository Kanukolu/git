
var form=document.getElementById("addForm")
var itemlist=document.getElementById("items")
var filter=documnet.getElementById("filter")
form.addEventListener('submit',addItem)
//del event
itemlist.addEventListener('click',removeItem)
//add item
//add filter
filter.addEventListener('keyup',filteritems)

function addItem(e){
    e.preventDefault()
    //get input value
    var newItem=document.getElementById('item').value
    //create li
    var li=document.createElement('li')
    li.className='list-group-item'
    console.log(li)
    //add text
    li.appendChild(document.createTextNode(newItem))
    itemlist.appendChild(li)
    //add button
    var deletebtn=document.createElement('button')
    // add cls to del
    deletebtn.className='btn btn-danger btn-sm float-right delete'
    deletebtn.appendChild(document.createTextNode('x'))
    li.appendChild(deletebtn)

}
// removeItem
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are u sure')){
            var li=e.target.parentElement;
            itemlist.removeChild(li)
        }
    }
}
//filter
function filteritems(e){
    //lowercase
    var text=e.target.value.toLowerCase()
    //grab li
    var items=itemlist.getElementsByTagName('li')
    //convert array
    Array.from(items).forEach(function(item)) {;
        var itemName=item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='Block'
        }   else{
    };        items.style.display="none"
        }
            
          

}
