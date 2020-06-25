import './styles.css'
import {
    createStore,
    applyMiddleware,compose
} from 'redux';
import thunk from 'redux-thunk';
import {
    rootReducer
} from './redux/rootReducer';
import logger from 'redux-logger'
import {
    increment,
    decrement,
    asyncincrement,
    changeTheme
} from './redux/action';

var counter = document.getElementById('counter');
var addBtn = document.getElementById('add');
var subBtn = document.getElementById('sub');
var asyncBtn = document.getElementById('async');
var themeBtn = document.getElementById('theme');


// function logger(state){
//   return function(next){
//       return function(action){
//           console.log(state.getState());
//           console.log(action)
//           return next(action)
//       }
//   }
// }

const store = createStore(rootReducer,compose(applyMiddleware(thunk, logger),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

addBtn.addEventListener("click", () => {
    store.dispatch(increment())
})
subBtn.addEventListener("click", () => {
    store.dispatch(decrement())
})
asyncBtn.addEventListener("click", () => {
    store.dispatch(asyncincrement())
})
themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
    store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state.counter;
    document.body.className = state.theme.value;
    [addBtn,subBtn,asyncBtn,themeBtn].forEach(btn=>{btn.disabled=state.theme.disabled})
})
store.dispatch({
    type: "INIT_APPLICATION"
})
