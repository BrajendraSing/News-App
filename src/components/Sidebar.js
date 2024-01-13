import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Sidebar(props) {
  return (
    <>
      <InputGroup className="">
        <Form.Control ref={props.searchRef} />
        <Button onClick={props.handleSearch} varient="primary">
          Search
        </Button>
      </InputGroup>
    </>
  );
}

export default Sidebar;
