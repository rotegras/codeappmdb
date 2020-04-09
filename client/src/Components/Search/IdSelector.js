import React from "react";
import Button from '@material-ui/core/Button';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IdSelector = ({ keyDown, input, reset }) => {

  const sendId = e => {
      const id = e.target.value;
      keyDown ( id );
  }

  const resetId = (e) => {
      reset();
  }

  return (
    <div className="label bg-dark d-flex flex-row mt-3">
      <input type='text' placeholder="Search by id ..."
        value = { input } className="mb-2 px-2 mr-2 pr-3" onChange={ ( e ) => sendId(e)} />
      <Button className="action-icon" onClick={(e) => resetId(e)}>
        <FontAwesomeIcon icon = { faTimes } onClick={(e) => resetId(e)} />
      </Button>
    </div>
  );
}

export default IdSelector