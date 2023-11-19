import React from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import { useSelector } from 'react-redux';
import useActions from '../lib/useActions';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

const TodosContainer = () => {

    const {input, todos} = useSelector(({todos}) => ({
        input : todos.input,
        todos : todos.todos
    }));

    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove],
        []
    );

    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};


export default TodosContainer;