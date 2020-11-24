import React from "react";
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';

class StreamCreate extends React.Component {

  renderInput(formProps){
    return(
      <div className="field">
        <label>{formProps.label}</label>
        <input type="text" {...formProps.input} autoComplete="off"/>
        <div>{formProps.meta.error}</div>
      </div>
    );
  }

  onSubmit = (formValues) => {
   this.props.createStream(formValues);
  }

  render(){
    return(
      <div className="ui container">
        <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" label="Enter Title" component={this.renderInput}/>
          <Field name="description" label="Enter Description" component={this.renderInput}/>
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
};


const validate = (formValues) => {
  const errors = {};
  if (!formValues.title){
    errors.title = "you must enter a title"
  }
  if (!formValues.description){
    errors.description = "you must enter a description"
  }

  return errors;
}

const formWrapped =  reduxForm({
  form: 'StreamCreate',
  validate
})(StreamCreate);

export default connect(null, {createStream})(formWrapped);
