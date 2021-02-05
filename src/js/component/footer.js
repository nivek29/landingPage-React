import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import sunset from "../../img/Screenshot_1.png";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Footer() {
	return (
		<Container className="footer">
			<Row>
				<Col className="d-flex justify-content-center">
					<p bg="dark">CopyRight Kevin Meza</p>
				</Col>
			</Row>
		</Container>
	);
}
