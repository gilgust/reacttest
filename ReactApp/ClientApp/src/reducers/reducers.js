import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import seminars from './seminarsRedux';



const todoApp = combineReducers({
  visibilityFilter,
    todos,
    seminars
})

export default todoApp