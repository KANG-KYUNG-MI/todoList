import React, {useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
    const [todos, setTodos] =useState([
        {id: '123',
         text: 'Shopping',
         status: 'active',
        },

        {id: '124',
         text: 'Studying',
         status: 'active',
        }   
    ]);

    //add new item
    const handleAdd=(todo)=>{
             setTodos([...todos, todo])
    }

    return <section>
           <ul>{
                todos.map(item =><li key={item.id}>{item.text}</li>)            
            }</ul> 
            <AddTodo    onAdd={handleAdd}/>
            </section>
}

