import './styles.css'
import {createStore} from './cretateStore';
import { rootReducer } from './redux/rootReducer';


var addBtn=document.getElementById('add');
var subBtn=document.getElementById('sub');
var asyncBtn=document.getElementById('async');
var themeBtn=document.getElementById('theme');

const store=createStore(rootReducer,0)

addBtn.addEventListener("click",()=>{
   store.dispatch({type:"INCREMENT"})
})
subBtn.addEventListener("click",()=>{
    store.dispatch({type:"DECREMENT"})
})
asyncBtn.addEventListener("click",()=>{

})
themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
})

store.subscribe(()=>{
  
})
