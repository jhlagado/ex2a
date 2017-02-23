import {SET_VISIBILITY_FILTER} from './actions'
import visibilityFilter from './reducers'
import { setVisibilityFilter } from './actions'
// jest.resetModules();

describe('visibilityFilter reducer', () => {

  it('should handle initial state', () => {
    const noAction = {};
    expect(visibilityFilter(undefined, noAction)).toEqual('SHOW_ALL')
    expect(visibilityFilter('SHOW_ACTIVE', noAction)).toEqual('SHOW_ACTIVE')
  })

  it('should handle SET_VISIBILITY_FILTER', () => {
    var state = visibilityFilter(undefined, setVisibilityFilter('SHOW_ACTIVE')); 
    expect(state).toEqual('SHOW_ACTIVE');
  })

})
