import React, { useState, useEffect, useReducer, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';

const TodoXList = styled.li`
  color: ${props => props.color ? props.color : 'blue'} ;
  font-size: 20px
`;

function ReactHook(props) {
  const [todo, setTodo] = useState(['asdas']);
  const [title, setTitle] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setTodo([...todo, title]);
      setTitle('');
    }
  }
  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} onKeyDown={handleKeyDown}></input>
      <ul>
        <li>1</li>
        {todo.map((li, i) => <TodoXList color={'red'}>{li}</TodoXList>)}
      </ul>
    </div>
  )
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    default: return state;
  }
}

function Exp(props) {
  const [count, setCount] = useReducer(reducer, 0)
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setName(`${title} ${count}`)
  }, [title]);

  useEffect((effect) => {
  }, []);

  return (
    <div>
      <p>{name}</p>
      <p>{count}</p>
      <p>This is title: {title}</p>
      <input value={title} onChange={(event) => setTitle(event.target.value)}></input>
      <button onClick={() => setCount({ type: 'increment' })}> increment </button>
      <button onClick={() => setCount({ type: 'decrement' })}> decrement </button>
    </div>
  )
}

const ColorContext = React.createContext('pink');

function HelloWorldFunction({ title }) {
  return <h1 alt="('test')"> {title} </h1>
}

function Todo({ color, title }) {
  return <p style={{ color }}>{title}</p>
}

function TodoList({ color }) {
  return (
    <div>
      <Todo title={'Todo 1'} color={color}></Todo>
      <Todo title={'Todo 2'} color={color}></Todo>
    </div>
  )
}
// function ToggleToDoButton() {
//   return (
//     <ColorContext.Consumer>
//       {(context) => {
//         return <button>{context.color}</button>
//       }}
//     </ColorContext.Consumer>
//   )
// }

function Display() {
  return (
    <ColorContext.Provider value={'pink'}>
      <TodoList></TodoList>
      {/* <ToggleToDoButton></ToggleToDoButton> */}
    </ColorContext.Provider>
  )
}

function ComponentExp(props) {
  return props.children;
}

function Composition() {
  const word = false ? 'even' : 'odd'
  return (
    <h1>
      Hello World
      <ComponentExp title={'Hello WOrld'}> {word} </ComponentExp>
      <ComponentExp> Hello World h3</ComponentExp>
    </h1>
  )
}


function Hello() {
  return <h1>Hello World</h1>
}

const withLoadingComponent = (WrappedComponent) => {
  return class ComponentLoading extends React.Component {
    render() {
      if (this.props.isLoding) {
        return (
          <WrappedComponent></WrappedComponent>
        )
      } else {
        return <h1>Loading</h1>
      }
    }
  }
}

const LoadingComponent = withLoadingComponent(Hello);

const wrappedComponent = (WrappedComponent) => {
  return class ComponentWrapped extends React.Component {
    render() {
      return (<div>
        <WrappedComponent></WrappedComponent>
      </div>)
    }
  }
}

const Wrapped = wrappedComponent(Hello);


class HelloWorldClass extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      title: 'init',
      list: []
    };
  }

  onAdd = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const wording = Number.isNaN(+e.target.value);
      this.setState((prevState) => ({ list: [...prevState.list, wording ? 'not Number' : 'isNumber'] }));
      e.target.value = ''
    }
  }

  render() {
    const number = []
    for (let i = 1; i <= this.state.count; i++) {
      number.push(<li key={i}> {`this number ${i} and this is ${i % 2 === 0 ? 'even' : 'odd'}`} </li>)
    }
    return <div>
      <p>{this.props.title} : {this.state.count}</p>
      <input type="text" onKeyDown={this.handleKeyDown}></input>
      <button onClick={this.onAdd}>Add</button>
      <ul>
        {/* {number} */}
        {this.state.list.map((li, i) => <li key={i}>{li}</li>)}
      </ul>
    </div>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ReactHook></ReactHook>
    <Exp></Exp>
    <Wrapped></Wrapped>
    <LoadingComponent isLoding={false}></LoadingComponent>
    <Composition></Composition>
    <HelloWorldClass title={'Hello World Count'}></HelloWorldClass>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
