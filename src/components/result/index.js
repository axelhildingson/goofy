import React, {Component, PropTypes} from 'react';
import { Well, Panel, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { result as Actions } from '../../actions/result';


export class Result extends Component {
    static propTypes = {
        showResult: PropTypes.bool,
        value: PropTypes.object,
        result: PropTypes.arrayOf(PropTypes.string),
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
        value: state.result.value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
