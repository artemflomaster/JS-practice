import {getData as getData} from "./tools.mjs";

getData('https://jsonplaceholder.typicode.com/todos')
.then(data => console.log(data))
.catch(error => console.log(error.message))