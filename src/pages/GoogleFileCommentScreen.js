import React from "react";
import CreateCommentForm from "../components/Comments/CreateCommentForm";

const GoogleFileCommentScreen = ({ match }) => {
  const id = match.params.id;
  return <CreateCommentForm id={id} />;
};

export default GoogleFileCommentScreen;
