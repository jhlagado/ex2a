import { todo, todos } from './reducers'
import { toggleTodo, addTodo } from './actions'

// jest.resetModules();

describe('todo reducer', () => {

  var state = {
    text: 'Run the tests',
    completed: false,
    id: 1
  }

  it('should handle TOGGLE_TODO', () => {
    const after = {
      text: 'Run the tests',
      completed: true,
      id: 1
    }
    const newState = todo(state, toggleTodo(1));
    // console.log('===============>', newState);
    expect(newState.completed).toEqual(after.completed);
  })

  it('should handle noop', () => {
    expect(
      todo(state, {
        type: 'NOOP',
        id: 1
      })
    ).toBe(state);
  })

});

describe('todos reducer', () => {

  const item1 = {
      text: 'Run the tests',
      completed: false,
      id: 0
  };

  const item2 = {
      text: 'Use Redux',
      completed: false,
      id: 1
  };

  const item3 = {
      text: 'Fix the tests',
      completed: false,
      id: 2
  };

  it('should handle initial state', () => {
    const noAction = {};
    expect(todos(undefined, noAction)).toEqual([])
  })

  it('should handle ADD_TODO', () => {

    const action1 = addTodo('Run the tests', 0);
    const action2 = addTodo('Use Redux', 1);
    const action3 = addTodo('Fix the tests', 2);

    expect(todos([], action1)).toEqual([ item1 ]);
    expect(todos([item1], action2)).toEqual([ item1, item2 ]);
    expect(todos([item1, item2], action3)).toEqual([ item1, item2, item3 ]);

  })

  it('should handle TOGGLE_TODO', () => {

    const action1 = toggleTodo(1);
    const state1 = [item1, item2, item3];
    const state2 = todos(state1, action1);

    expect(state2[1].completed).toEqual(!state1[1].completed);
  })
})
