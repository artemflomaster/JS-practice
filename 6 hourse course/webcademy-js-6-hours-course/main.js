

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

// function checkRooms(success, failed) {
//     setTimeout(function () {
//         console.log('Проверяем номера в отеле...')
//         const avaliableRooms = true;

//         if (avaliableRooms) {
//             let message = 'Rooms are avaliable';
//             success(message);
//         } else {
//             let message = 'Rooms are not avaliable';
//             failed(message);
//         }


//     }, 1000)
// }

// function checkTickets(message, success, failed) {
//     setTimeout(function () {
//         console.log('Проверяем билеты...')
//         const avaliableTickets = true;

//         if (avaliableTickets) {
//             let message = 'Tickets are avaliable';
//             success(message);
//         } else {
//             let message = 'Tickets are not avaliable';
//             failed(message);
//         }
//     }, 5000)

// }

// checkRooms(
//     function (messageFromRooms) {
//         checkTickets(
//             messageFromRooms,
//             function (messageFromTickets) {
//                 submitVacation(messageFromTickets)
//             },
//             function (messageFromTickets) {
//                 cancelVacation(messageFromTickets)
//             })
//     }, function (messageFromRooms) {
//         cancelVacation(messageFromRooms)
//     });

// function cancelVacation(message) {
//     console.log('---cancel vacation!---');
//     console.log('The answer in previos step', message);
//     console.log('The vacation is cancelled!');
// }

// function submitVacation(message) {
//     console.log('---submit vacation!---');
//     console.log('The answer in previos step', message);
//     console.log('The vacation is granted!');
// }

// const myPromise = new Promise(function (resolve, reject) {
//     console.log('Promise created');

//     setTimeout(function () {
//         const response = 1;
//         if (response) {
//             let message = "RESPONSE SUCCESSFUL"
//             resolve(message);
//         } else {
//             let message = 'RESPONSE FAILED'
//             reject(message);
//         }
//     }, 1000);
// })
// myPromise.then(function (data) {
//     console.log('then 1');
//     console.log(data);
//     return 'data from then 1'
// }).then(function(data){
//     console.log('then 2');
//     return 'data from then 2'

// }).catch(function (data) {
//     console.log('catch');
//     console.log(data);
// })

//----------------promice tutorials-----------------

// const checkRooms = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('checking rooms');
//         const avaliableRooms = true;;


//         if (avaliableRooms) {
//             resolve('rooms granted');
//         } else {
//             reject('no rooms avaliable');
//         }
//     }, 1500)

// }).then(function (data) {



//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('------then 1 -------');
//             console.log('Response was:', data);

//             console.log('tickets checking.... ');
//             const avaliableTickets = true;
//             if (avaliableTickets) {
//                 let message = 'Tickets granted';
//                 resolve(message);


//             } else {
//                 let message = 'Tickets not found';
//                 reject(message);
//             }
//         }, 1000)
//     }).then(function (data) {
//         console.log('------then 2 -------');
//         console.log('Response was:', data);
//         console.log('going to vacation');
//     })

// }).catch(function (data) {
//     console.log('------catch 1 -------');
//     console.log('Response was:', data);
//     console.log('NOT going to vacation');
// })


//---------------- Promises-----------------

// function checkRooms() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('checking rooms');
//             const avaliableRooms = true;;


//             if (avaliableRooms) {
//                 resolve('rooms granted');
//             } else {
//                 reject('no rooms avaliable');
//             }
//         }, 1500)

//     }).then(checkTickets).catch(failed)
// }

// function checkTickets(data) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('------then 1 -------');
//             console.log('Response was:', data);

//             console.log('tickets checking.... ');
//             const avaliableTickets = true;
//             if (avaliableTickets) {
//                 let message = 'Tickets granted';
//                 resolve(message);


//             } else {
//                 let message = 'Tickets not found';
//                 reject(message);
//             }
//         }, 1000)
//     }).then(success)
// }

// function success(data) {
//     console.log('------then 2 -------');
//     console.log('Response was:', data);
//     console.log('going to vacation');
// }

// function failed() {
//     console.log('------catch 1 -------');
//     console.log('Response was:', data);
//     console.log('NOT going to vacation');
// }

// checkRooms();




//---------------- async await try catch -------------


// function promiseFun() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {

//             const res = false;
//             if (res) {
//                 resolve('DONE');
//             } else {
//                 reject('FAILED');
//             }

//         }, 500)
//     })
// }
// async function startPromise() {
//     try {

//         const result = await promiseFun();
//         console.log(result);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// startPromise();


// ------------ очередной пример с отелями ---------
// function checkRooms() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('rooms checking');
//             let areRoomsAvaliable = true;
//             if (areRoomsAvaliable) {
//                 resolve('Rooms are avaliable');
//             } else {
//                 reject('Rooms are not avaliable')
//             }


//         }, 1500);
//     })
// }

// function checkTickets(data) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('------then 1 -------');
//             console.log('Response was:', data);

//             console.log('tickets checking.... ');
//             const avaliableTickets = true;
//             if (avaliableTickets) {
//                 let message = 'Tickets granted';
//                 resolve(message);


//             } else {
//                 let message = 'Tickets not found';
//                 reject(message);
//             }
//         }, 1000)
//     })
// }

// function success(data) {
//     console.log('------then 2 -------');
//     console.log('Response was:', data);
//     console.log('going to vacation');
// }

// function failed(data) {
//     console.log('------catch 1 -------');
//     console.log('Response was:', data);
//     console.log('NOT going to vacation');
// }

// async function checkVacation() {
//     try {
//         const roomsResult = await checkRooms();
//         const ticketsResult = await checkTickets(roomsResult);
//         success(ticketsResult);
//     } catch (err) {
//         failed(err);
//     }
// }
// checkVacation();

//----------------------курсы валют -------------

//https://www.cbr-xml-daily.ru/

//https://www.cbr-xml-daily.ru/daily_json.js

// fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//     .then(function (data) {
//         return data.json();


//     }).then(function (data) {
//         console.log(data);
//     }).catch(err){ console.log(err) }



async function currencies() {
    try {
        const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const curEUR = data.Valute.EUR.Value.toFixed(2);
        const curUSD = data.Valute.USD.Value.toFixed(2);
        updateCur(curEUR,curUSD);
    } catch (err) {
        console.log(err);
    }
}

function updateCur(eur, usd){
const spanEUR = document.querySelector('#eur');
const spanUSD = document.querySelector('#usd');
spanEUR.innerText = eur;
spanUSD.innerText = usd;
}

currencies();
