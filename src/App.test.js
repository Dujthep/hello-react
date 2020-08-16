import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('object', () => {
  const data = { a: 'a', b: 'b' }
  expect(data).toEqual({ a: 'a', b: 'b' });
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeFalsy()
})

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
})

test('floating point number', () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3)
})
test('string', () => {
  const s = 'test';
  expect(s).toBe('test');
})

test('Array', () => {
  const v = [1, 2, 3, 4, 5];
  expect(v).toEqual([1, 2, 3, 4, 5]);
  expect(v).toContain(4);
  expect(new Set(v)).toContain(3);
})

function throwErrorNa() {
  throw new Error('error');
}
test('exception', () => {
  expect(throwErrorNa).toThrow('error');
})

class Test extends React.Component {
  state = {
    search: ''
  }

  onChnage = (e) => {
    const v = e.target.value
    this.setState({ screen: v })
  }

  render() {
    return (
      <div>
        Search: <input value={this.state.search} onChange={this.onChnage}></input>
      </div>
    )
  }
}

test('render test component', () => {
  render(<Test />);
  screen.debug();
  // expect(screen.getByText('Search:')).toBeInTheDocument();
  // expect(screen.getByText(/Search:/)).toBeInTheDocument();
  expect(screen.queryByDisplayValue('JavaScript')).toBeNull();
  console.log(screen.getByRole('textbox'));
  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: 'JavaScript' }
  })
  // expect(screen.queryByDisplayValue('JavaScript')).toBeInTheDocument();
  // console.log(screen.queryByDisplayValue('JavaScript'))
  // screen.debug();
})