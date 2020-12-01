import React from "react";
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component{
  // const id = this.props.match.params.id;
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(formValues)
  };

  render(){
    if(!this.props.stream){
      return <div>Loading ...</div>;
    }
    return(
      <div className="ui container">
       <h3>Edit a stream</h3>
       <StreamForm onSubmit={this.onSubmit} initialValues={this.props.stream}/>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps,
{fetchStream, editStream})(StreamEdit);
