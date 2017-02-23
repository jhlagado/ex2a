import { connect } from 'react-redux'
import { toggleTodo } from '../store/Todo/actions'
import TodoList from '../components/TodoList'
import { makeGetVisibleTodos } from '../store/Todo/selectors'

const makeMapStateToProps = () => {
  const getVisibleTodos = makeGetVisibleTodos()
  const mapStateToProps = (state, props) => {
    return {
      todos: getVisibleTodos(state, props)
    }
  }
  return mapStateToProps;
}

const mapDispatchToProps =  ({
  onTodoClick: toggleTodo
})

const VisibleTodoList = connect(
  makeMapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
