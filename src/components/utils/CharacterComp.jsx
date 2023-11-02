import { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function CharacterComp({ value, index }) {
  
  console.log("value : ", value, "index : ", index);
  
  return (
    <Card key={index} style={{ width: "15rem", alignItems: "center" }}>
      <Card.Img
        variant="top"
        src={value.image}
        style={{ height: "200px", width: "80%", marginTop: "10px" }}
      />
      <Card.Body className="d-flex flex-column align-items-center bg-info text-light">
        <Card.Title style={{color: "orange"}} className="mt-2">{value.title}</Card.Title>
        <Card.Text>{value.content}</Card.Text>
        <Button style={{background: "brown"}} className="mb-2" variant="primary" onClick={() => setToggle(!toggle)}>
          Buy this{" "}
        </Button>
      </Card.Body>
    </Card>
  );
}
