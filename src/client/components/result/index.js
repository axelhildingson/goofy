import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { result as Actions } from '../../actions/result';


class Result extends Component {
    static propTypes = {
        showResult: PropTypes.bool,
        searchquery: PropTypes.string,
        result: PropTypes.arrayOf(PropTypes.object),
        dispatch: PropTypes.func,
    }

    constructor(props) {
        super(props);
    }

    resultList(result) {
        let retr = [];
        result.forEach((element, index) => {
            retr.push(
                <Well bsSize="small" key={index}>
                    THIS IS THE RESULT OF YOUR SEARCH: {element}
                </Well>
            )
        })
        return retr;
    }


    render() {
        if(this.props.showResult === true) {
            const resultList = this.resultList(this.props.result);
            return (
                <div>
                    <Panel>
                        {resultList}
                    </Panel>
                </div>
            );
        }
        else {
            return null;
        }
  	}
}
const mapStateToProps = (state) => {
    return {
        showResult: state.result.showResult,
        result: state.result.result,
        searchquery: state.result.searchquery,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
