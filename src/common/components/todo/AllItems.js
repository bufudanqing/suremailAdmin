import React from 'react'
import './ToDo.less'
import ToDoItems from './ToDoItems'

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
    }
    render() {
        return (
           <div className='allwrapper'>
               <ToDoItems data={this.state.data} />
           </div>
        )
    }
}