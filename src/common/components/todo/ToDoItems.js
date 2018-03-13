import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';
import TodoItem from './TodoItem'
import './ToDo.less'

const { Conlumn, ColumnGroup } = Table;


export default class ToDoItems extends React.Component {

    render() {

        let taskList = this.props.data.map((listItem) =>
            <TodoItem taskId={listItem.id}
            key={listItem.id}
            task={listItem.task}
            complete={listItem.complete}
            toggleComplete={this.props.toggleComplete}
            deleteTask={this.props.deleteTask}
            />
        )
        return (
            <div className='todowrapper'>
                <ul className = 'list-group'>
                    {taskList}
                </ul>
            </div>
        )
    }
}