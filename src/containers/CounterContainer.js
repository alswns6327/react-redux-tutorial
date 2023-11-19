import React, { useCallback } from 'react';
import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { decrease, increase } from '../modules/counter';
import { useSelector } from 'react-redux';
import { useDispatch } from '../../node_modules/react-redux/es/exports';

const CounterContainer = () => {

    const counter = useSelector(state => state.counter);

    const dispatch = useDispatch();

    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

    return (
        <Counter 
            number={counter.number} 
            onIncrease={onIncrease} 
            onDecrease={onDecrease}/>
    );
};

// const mapStateToProps = state => ({
//     number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => 
//     bindActionCreators(
//         {
//             increase,
//             decrease
//         }, 
//         dispatch
//     )


export default CounterContainer;