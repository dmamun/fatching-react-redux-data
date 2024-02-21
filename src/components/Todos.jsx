import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosAction } from '../services/actionTodos';

const Todos = () => {
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(todosAction())

    },[dispatch])
    return (
        <div>
            {
                todos.map((item)=>{
                    return <li>{item.title}</li>
                })
            }
            
        </div>
    );
};

export default Todos;