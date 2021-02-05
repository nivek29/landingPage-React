import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Menu() {
	return (
		<Navbar bg="dark" expand="md">
			<Navbar.Brand href="#home">Navbar with txt</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse
				id="basic-navbar-nav"
				className="justify-content-end">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#link">Link</Nav.Link>
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#link">Link</Nav.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}
