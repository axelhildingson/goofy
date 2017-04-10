import React, {Component, PropTypes} from 'react';
import Select from 'react-select';
import styles from './styles.css';
import wordList from'word-list-json';
import Highlighter from 'react-highlight-words';
import { connect } from 'react-redux';
import {result as resultActions } from '../../actions';

export class search extends Component {

    static propTypes = {
        dispatch: PropTypes.func,
    }
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.renderOption = this.renderOption.bind(this);
    this.state = {
        options: [],
        value: '',
    };
  }

  getOptions(value) {
    return new Promise((resolve, reject) => {
        let newOptions = [];
        let counter = 0;
        wordList.forEach((element) => {
            if( element.startsWith(value) && counter < 100 ){
                counter ++;
                newOptions.push({
                    value: element, label: element
                });
            }
        });
        resolve(newOptions);
    }).then((options) => {
        this.setState({
            options: options,
            value: value,
        });
        return this.state;
    });
  }

  onChange(valueObject) {
      this.props.dispatch(resultActions.openResult(valueObject, [valueObject.value, valueObject.value, valueObject.value]));
  }

  renderOption(option) {
        const textList = option.label || "";
        const word = this.state.value || "";
        return (
          <Highlighter
              searchWords={[this.state.value]}
              textToHighlight={option.label}
              highlightStyle={{fontweight: 'bold', background: 'none !important'}}
          />
         );
  }

  render() {
    return (
        <div className={styles.main}>
            <Select.Async
                name="form-field-name"
                value={this.state.value}
                options={this.state.options}
                onChange={this.onChange}
                loadOptions={this.getOptions}
                optionRenderer={this.renderOption}
            />
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
