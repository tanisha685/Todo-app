let todolist=[
    {item:'Buy milk',
    dueDate:'2025-03-16'}
];
displayitems()

function addtodo(){
    let inputElement=document.querySelector('#todo-input');
    let todoElement=inputElement.value;
    let inputdate=document.querySelector('#todo-date');
    let tododate=inputdate.value;
    todolist.push({item: todoElement,dueDate:tododate});
    inputElement.value='';
    inputdate.value='';
    displayitems()
}
function displayitems(){
    let element=document.querySelector('.todo-container');
    let newHtml='';
    
    for(let i=0;i<todolist.length;i++){
        let item=todolist[i].item;
        let dueDate=todolist[i].dueDate;
        newHtml+=`
        
            <span id="item">${item}</span> 
            <span id="date">${dueDate}</span>
            <button class="delete-todo" onclick="todolist.splice(${i}, 1) ;
            displayitems();">Delete</button>
        
        `;
    }
    element.innerHTML=newHtml;
}