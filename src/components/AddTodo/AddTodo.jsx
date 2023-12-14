import React, { useState } from 'react';

export default function AddTodo({onAdd}) {
    const [text, setText] = useState('');
    
    const handleSubmit=(e)=>{
        e.preventDefault();
       
        if(text.trim().length ===0){
          return;
        }
        onAdd({id:'고유한값', text, status:'active' });
        
        setText('');
    };
   
    const handleChange=(e)=>{setText(e.target.value);
    };


    return <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Add Todo' value={text} onChange={handleChange} />
        <button>ADD Todo</button>
    </form>;
}
