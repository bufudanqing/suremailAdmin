import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';
import TodoItem from './TodoItem'
import './ToDo.less'

const { Conlumn, ColumnGroup } = Table;


export default class ToDoItem extends React.Component {

    render() {

        let taskList = this.props.data.map((listItem) =>
            <TodoItem taskId={listItem.id}
            key={listItem.id}
            task={listItem.task}
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