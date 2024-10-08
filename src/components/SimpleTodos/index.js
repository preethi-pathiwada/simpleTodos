import './index.css'
import {Component} from 'react'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, inputValue: ''}

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  deleteTodo = todoId => {
    console.log(todoId)
    const {todoList} = this.state
    const filteredTodoList = todoList.filter(eachTodo => eachTodo.id !== todoId)
    this.setState({todoList: filteredTodoList})
  }

  onAddTodo = () => {
    const {inputValue, todoList} = this.state
    this.setState(prevState => ({
      todoList: [
        ...prevState.todoList,
        {id: todoList.length + 1, title: inputValue},
      ],
      inputValue: '',
    }))
  }

  render() {
    const {todoList, inputValue} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-todo-con">
            <input
              type="text"
              placeholder="Create a Todo"
              value={inputValue}
              className="create-todo-input"
              onChange={this.onChangeInput}
            />
            <button className="add-btn" onClick={this.onAddTodo}>
              Add
            </button>
          </div>
          <div className="list-con">
            <ul className="todos-list-container">
              {todoList.map(eachTodo => (
                <TodoItem
                  key={eachTodo.id}
                  todoDetails={eachTodo}
                  deleteTodo={this.deleteTodo}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
