import React from "react";
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';
import {Link} from 'react-router-dom';

class StreamList extends React.Component {

  componentDidMount(){
    this.props.fetchStreams()
  }

  renderAdmin(stream){
    if(stream.userId === this.props.currentUserId){
      return <div className="right floated content">
        <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
        <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
      </div>
    }
  }

  renderCreate() {
    if(this.props.isSignedIn){
      return (
        <div style={{textAlign: 'right'}}>
          <Link className="ui button primary" to="/streams/new" >Create stream</Link>
        </div>
      )
    }else{

    }
  }

  renderList(){
    return this.props.streams.reverse().map(stream => {
      return( <div className="item" key={stream.id}>
        {this.renderAdmin(stream)}
        <i className="large middle aligned icon camera"></i>
        <div className="content">{stream.title}</div>
        <div className="description">{stream.description}</div>
      </div>
     );
    });
  }

  render(){
    return(
      <div className="ui container">
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {streams: Object.values(state.streams),
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps,{fetchStreams})(StreamList);
