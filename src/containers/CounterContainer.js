import React from 'react';
import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { decrease, increase } from '../modules/counter';

const CounterContainer = ({number, increase, decrease}) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
    );
};

const mapStateToProps = state => ({
    number: state.counter.number,
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(
        {
            increase,
            decrease
        }, 
        dispatch
    )


export default connect(
    mapStateToProps,
    {
        increase,
        decrease
    }
)(CounterContainer);