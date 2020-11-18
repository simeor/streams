import React from "react";
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends React.Component {

  renderInput(formProps){
    return <input type="text" {...formProps.input} />
  }

  render(){
    return(
      <div>
        <form>
          <Field name="title" component={this.renderInput}/>
          <Field name="description" component={this.renderInput}/>
        </form>
      </div>
    );
  }
};

export default reduxForm({
  form: 'StreamCreate'
}) (StreamCreate);
