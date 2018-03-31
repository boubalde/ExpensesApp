import { createStore } from 'redux';

const incrementCount =({ incrementBy = 1} = {})=> ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy 
});
const resetCount = ()=>({
  type: 'RESET'

})
const setCount= ({count=20}={}) =>({
  type: 'SET',
  count
})


const store = createStore((state = { count: 0 }, action) => {
  switch (action.type){
    case 'INCREMENT':
    return{
      count: state.count + action.incrementBy
    };
    case 'DECREMENT':
   return{
      count: state.count - action.decrementBy
    };
    case 'RESET':
    return {
      count: 0
    };
    case 'SET':
    return {
      count : action.count
    }
    default:
    return state;
  }
  
});
const unsubscribe = store.subscribe(() => {
console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy:5}))


store.dispatch(incrementCount());






store.dispatch(decrementCount({ decrementBy: 10 }))
store.dispatch(decrementCount());


store.dispatch(resetCount());

store.dispatch(setCount({ count: 300 }))
// console.log(store.getState());
// Actions
// I'd like to increment the count
// I'd like to reset the count to zero
