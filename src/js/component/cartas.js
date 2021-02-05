import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import sunset from "../../img/Screenshot_1.png";
import PropType from "prop-types";

export function Cartas(props) {
	return (
		<Container>
			<Row>
				<Col>
					<CardDeck xs={12} sm={12} md={12} lg={12} xl={12}>
						<Card>
							<Card.Img variant="top" src={props.img} />
							<Card.Body>
								<Card.Title>{props.title}</Card.Title>
								<Card.Text>{props.description}</Card.Text>
							</Card.Body>
							<Card.Footer>
								<p className="d-flex justify-content-center">
									<Button variant="primary">
										Learn more
									</Button>
								</p>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Img variant="top" src={sunset} />
							<Card.Body>
								<Card.Title>{props.title}</Card.Title>
								<Card.Text>{props.description}</Card.Text>
							</Card.Body>
							<Card.Footer>
								<p className="d-flex justify-content-center">
									<Button variant="primary">
										Learn more
									</Button>
								</p>
							</Card.Footer>
						</Card>
						<Card>
							<Card.Img variant="top" src={sunset} />
							<Card.Body>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text
									below as a natural lead-in to additional
									content. This card has even longer content
									than the first to show that equal height
									action.
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<p className="d-flex justify-content-center">
									<Button variant="primary">
										Learn more
									</Button>
								</p>
							</Card.Footer>
						</Card>
					</CardDeck>
				</Col>
			</Row>
		</Container>
	);
}
Cartas.propTypes = {
	img: PropType.string,
	title: PropType.string,
	description: PropType.string
};
