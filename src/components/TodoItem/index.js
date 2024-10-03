// Write your code here

import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  render() {
    const {todoDetails, deleteTodo} = this.props
    const {id, title} = todoDetails

    return (
      <li className="todo-item">
        <p className="todo">{title}</p>
        <button type="button" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
