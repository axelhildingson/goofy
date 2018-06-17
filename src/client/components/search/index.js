import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import { connect } from 'react-redux';
import {result as resultActions } from '../../actions';

export class search extends Component {

    static propTypes = {
        dispatch: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            options: [],
            value: '',
        };
    }

    onClick() {
        this.props.dispatch(resultActions.search(this.state.value));
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className={styles.main}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.onClick}> Search </button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    };
};

export default connect(mapDispatchToProps)(search);
