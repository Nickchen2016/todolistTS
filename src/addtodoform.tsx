import React, { useState } from 'react';

interface addNew {
    addtodolist: Addtodolist
}

export const Addtodoform: React.FC<addNew> =( {addtodolist} )=> {

    const [addtext, setaddtext] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setaddtext(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();
        console.log(addtext)
        addtodolist({text: addtext,complete: false});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={addtext} onChange={handleChange} />
            <input type='submit'/>
        </form>
    )
}