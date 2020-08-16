const redux = require('redux');

const initiaState = {
    count: 0
}

const reducer = (state = initiaState, action) => {
    switch (action.type) {
        case 'INCREASE': return { ...state, count: state.count + 1 }
        case 'DECREASE': return { ...state, count: state.count - 1 }
        case 'SET': return { ...state, count: action.payload }
        default: return state;
    }
}

const store = redux.createStore(reducer);

store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: "INCREASE" })
store.dispatch({ type: "INCREASE" })
store.dispatch({ type: "INCREASE" })
store.dispatch({ type: "DECREASE" })
store.dispatch({ type: "SET", payload: 20 })