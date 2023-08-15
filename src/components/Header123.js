import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default class Header123 extends Component {
  render() {
    return (
      <Container style={{padding:"0px"}}>
        <h1 style={{padding:"15px",textAlign:"center",fontWeight:"bolder"}}>GIFTOS</h1>
        <Navbar style={{backgroundColor:"lightGray"}} data-bs-theme="dark" className="rounded-top">
          <Container >
            <Nav className="m-auto ">
              
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#features">SHOP</Nav.Link>
              <Nav.Link href="#pricing">WHY US</Nav.Link>
              <Nav.Link href="#pricing">TESTIMONIL</Nav.Link>
              <Nav.Link href="#pricing">CONTACT US</Nav.Link>
              <Nav.Link href="#pricing"><i class="fa-solid fa-user"></i>  LOGIN</Nav.Link>
              <Nav.Link href="#pricing"><i class="fa-solid fa-bag-shopping"></i></Nav.Link>
              <Nav.Link href="#pricing"><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
              
              
            </Nav>
          </Container>
        </Navbar>
        </Container>
    );
  }
}
