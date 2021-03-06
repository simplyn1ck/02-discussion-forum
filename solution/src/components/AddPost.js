import React, {PropTypes} from "react";
import FlatButton from "material-ui/FlatButton";

const AddPost = (props) => {
  const {onTap} = props;

  return (<FlatButton label="Add post" onTouchTap={onTap} />);
};

AddPost.propTypes = {
  onTap: PropTypes.func.isRequired
};

export default AddPost;