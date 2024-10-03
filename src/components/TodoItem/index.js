// Write your code here

import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: true,
      updatedTitle: props.todoDetails.title,
      isChecked: false,
    }
  }

  editOrSave = () => {
    this.setState(prevState => ({edit: !prevState.edit}))
  }

  onChangeTitle = event => {
    this.setState({updatedTitle: event.target.value})
  }

  onChangeCheckbox = event => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  render() {
    const {todoDetails, deleteTodo} = this.props
    const {id, title} = todoDetails
    const {edit, updatedTitle, isChecked} = this.state
    console.log(updatedTitle)

    return (
      <li className="todo-item">
        <div className="title-and-edit-con">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.onChangeCheckbox}
          />
          {edit ? (
            <p className={isChecked ? 'todo text' : 'todo'}>{updatedTitle}</p>
          ) : (
            <input
              type="input"
              className="edit-input"
              onChange={this.onChangeTitle}
              value={updatedTitle}
            />
          )}
          {isChecked ? (
            ''
          ) : (
            <button className="edit-btn" onClick={this.editOrSave}>
              {edit ? 'Edit' : 'Save'}
            </button>
          )}
        </div>
        <button
          type="button"
          className="del-btn"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
