import React, {Fragment} from "react";
import Modal from '../Modal';


const StreamDelete = () => {

  const actions = (
    <Fragment>
       <button className="ui button red">Delete</button>
        <button className="ui button">Cancel</button>
    </Fragment>
   );

  return(
    <div>
      StreamDelete comp
      <Modal
      title="Delete Stream"
      content = "Are you sure you want to delete this streat"
      actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
