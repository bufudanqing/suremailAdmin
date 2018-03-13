import React from 'react'
import './ToDo.less'
import ToDoItems from './ToDoItems'
import AddTodo from './AddTodo'
import uuid from 'uuid'

export default class AllItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    "id": "1",
                    "task": "做一个TodoList Demo",
                    "complete": "false"
                  }, {
                    "id": "2",
                    "task": "学习ES6",
                    "complete": "false"
                  }, {
                    "id": "3",
                    "task": "Hello React",
                    "complete": "true"
                  }, {
                    "id": "4",
                    "task": "找工作",
                    "complete": "false"
                  }
            ]
        }
        this.handleToggleComplete = this.handleToggleComplete.bind(this);
        this.handleTaskDelete = this.handleTaskDelete.bind(this);
        this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
    }
    handleToggleComplete(taskId){
        let data = this.state.data;
        for (let item of data) {
            if (item.id === taskId) {
                item.complete = item.complete === "true" ? "false" : "true"
            }
        }
        this.setState({data})
    }
    handleTaskDelete(taskId) {
        let data = this.state.data
        data = data.filter(task => task.id !== taskId)
        this.setState({data})
    }
    handleAddTodoItem(task) {
        let newItem = {
            id: uuid.v1(),
            task,
            complete: "false"
        }
        let data = this.state.data
        data = data.concat([newItem])
        this.setState({data})
    }
    render() {
        return (
           <div className='allwrapper'>
               <ToDoItems data={this.state.data} toggleComplete={this.handleToggleComplete} deleteTask={this.handleTaskDelete} />
               <AddTodo saveNewItem={this.handleAddTodoItem}/>
           </div>
        )
    }
}