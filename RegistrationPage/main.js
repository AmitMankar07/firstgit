var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');



form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
//add item
function addItem(e){
    e.preventDefault();

    var newItem=document.getElementById('item').value;
    var descItem=document.getElementById('description').value;

    var combinItem=newItem+" "+descItem;
    //new li item
    var li=document.createElement('li');
    li.className='list-group-item';

    li.appendChild(document.createTextNode(combinItem));

   
    

     

     //delete buttn
    var deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);

    //edit button
    var editbutn=document.createElement('button');
    editbutn.className="btn btn-sm float-right Edit";
    editbutn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbutn);

    itemList.appendChild(li);
}

//rmemove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
//filter
function filterItems(e){
    //covert to lower
    var text=e.target.value.toLowerCase();
   var items= itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var itemName2=item.childNodes[1].textContent;
      
        if(itemName.toLowerCase().indexOf(text)!=-1 || itemName2.toLowerCase().indexOf(text)!=-1 ){
            item.style.display ='block';
        }
        else
        {
            item.style.display = 'none';
        }
    })
}