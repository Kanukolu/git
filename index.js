function saveToLocalStorage(event){
    event.preventDefault();
    const price=event.target.name.value;
    const description=event.target.description.value;
    const category=event.target.category.value;
    const obj={
        price,
        description,
        category
    }

    localStorage.setItem(obj.description,JSON.stringify(obj));
    showUserOnScreen(obj);

    axios.post("https://crudcrud.com/api/f5cb935998db4ab3b5ffb0e4d98a2390/appointmentData",obj)
        .then((response)=>{
            showUserOnScreen(response.data);
             console.log(response);
        })
        .catch(err=>{
            document.body.innerHTML=err;
            console.log(err)

        })

    
        axios.Delete("https://crudcrud.com/api/f5cb935998db4ab3b5ffb0e4d98a2390/newddata",obj)
        .then((response)=>{
            showUserOnScreen(response.data);
             console.log(response);
        })
        .catch(err=>{
            document.body.innerHTML=err;
            console.log(err)

        })

    // localStorage.setItem(obj.description,JSON.stringify(obj));
    // showUserOnScreen(obj);
}
window.addEventListener("DOMContentLoaded", ()=> {
	axios.get('https://crudcrud.com/api/f5cb935998db4ab3b5ffb0e4d98a2390/newdata')
		.then( (result) => {
			for(var i=0; i<result.data.length; i++){
			showToDisplay(result.data[i]);
			console.log(result.data);
			}
		})
		.catch( (error) => {
			console.log(error);
		})
})


function showUserOnScreen(obj){
    const parentElemen=document.getElementById('listofitems');
    const children=document.createElement('li');
    children.textContent=obj.price+'- '+obj.description+'- '+obj.category;
    const deletebtn=document.createElement('input');
    deletebtn.type='button'
    deletebtn.value='Deleteexpense'
    deletebtn.onclick=()=>{
        localStorage.removeItem(obj.description);
        parentElemen.removeChild(children)
    }
    children.appendChild(deletebtn)
    const editbtn=document.createElement('input')
    editbtn.type='button'
    editbtn.value='Editexpense'
    editbtn.onclick=()=>{
        localStorage.removeItem(obj.description)
        parentElemen.removeChild(children)
        document.getElementById('price').value=obj.price
        document.getElementById('description').value=obj.description
        document.getElementById('category').value=obj.category
    }
    children.appendChild(deletebtn)
    children.appendChild(editbtn)
    parentElemen.appendChild(children)
}