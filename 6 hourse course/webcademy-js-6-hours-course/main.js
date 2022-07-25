

// const todoList = document.querySelector('#todo-list');
// const todoForm = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo-input');

// todoForm.addEventListener('submit', formHandler);


// const delBut = document.createElement('button');
// delBut.setAttribute('role','button');
// delBut.innerText = 'Delete';
// delBut.style['marginLeft'] = '15px';
// newTask.append(delBut);



// function formHandler(event){
//    event.preventDefault();
// const newTask = document.createElement('li');
// newTask.innerText = todoInput.value;
// todoList.append(newTask);   
// // todoList.insertAdjacentHTML('beforeend',`<li>${todoInput.value}</li>`);
// todoInput.value = '';   
//  todoInput.focus();  



//  const delBut = document.createElement('button');
//  delBut.setAttribute('role','button');
//  delBut.innerText = 'Delete';
//  delBut.style['marginLeft'] = '15px';
//  newTask.append(delBut);
// delBut.addEventListener('click', deleteTask);

// }

// function deleteTask(){
//     this.closest('li').remove();
// }

//set interval
// const timerIntervalID = setInterval(() =>{console.log('dbbbbsd')}, 1000);
// clearInterval(timerIntervalID);


// const timerID = setInterval(()=>{console.log('Fired!')}, 1000);
// setTimeout(()=>{clearInterval(timerID)}, 10000);

// const counter = document.querySelector('#counter');
// const startBut = document.querySelector('#start');
// const pauseBut = document.querySelector('#pause');
// const resetBut = document.querySelector('#reset');

// let counterC = 0;
// let counterInterval;


// startBut.addEventListener('click',startHandler);

// function startHandler(){
// counterInterval = setInterval(()=>
// {
//     counterC++;
//     counter.innerText = counterC;
// }, 
// 1000)}

// pauseBut.addEventListener('click',pauseHandler);

// function pauseHandler(){
//     clearInterval(counterInterval);
// }

// resetBut.addEventListener('click', resetHandler);
// function resetHandler(){
//     clearInterval(counterInterval);
//     counterC=0;
//     counter.innerText = counterC;
// }

