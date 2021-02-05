import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropType from "prop-types";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function JumbotronPane(props) {
	return (
		<Container>
			<Row>
				<Col xs={12} sm={12} md={12} lg={12} xl={12}>
					<Jumbotron>
						<h1>{props.title}</h1>
						<p>{props.description}</p>
						<p>
							<Button variant="primary">Learn more</Button>
						</p>
					</Jumbotron>
				</Col>
			</Row>
		</Container>
	);
}
JumbotronPane.propTypes = {
	//proptypes here
	title: PropType.string,
	description: PropType.string
};
