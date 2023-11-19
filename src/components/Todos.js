import React from 'react';

const TodoItem = ({todo, onToggle, onRemove}) => {
    return (
        <div>
            <input type="checkbox" defaultChecked={todo.done} onClick={()=>onToggle(todo.id)}/>
            <span>{todo.text}</span>
            <button onClick={()=>onRemove(todo.id)}>삭제</button>
        </div>
    );
}

const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={(e)=>onChangeInput(e.target.value)}/>
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map(todo=>(
                    <TodoItem onToggle={onToggle} onRemove={onRemove} todo={todo} key={todo.id}/>
                ))}
            </div>
        </div>
    );
};

export default Todos;