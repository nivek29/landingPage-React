//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
//import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Menu } from "./component/menu.js";
import { JumbotronPane } from "./component/jumbotron.js";
import { Cartas } from "./component/cartas.js";
import { Footer } from "./component/footer.js";

//render your react application

ReactDOM.render(
	<div>
		<Menu />,<JumbotronPane title="Kevn" description="Meza" />,
		<Cartas
			img="https://www.ambientum.com/wp-content/uploads/2019/10/montanas-atardecer.jpg"
			title="Kevn"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras et ex at arcu accumsan vestibulum. Nunc aliquam risus ultrices finibus fermentum. 
                Sed tristique id urna ut facilisis.
                Etiam hendrerit iaculis ligula sit amet rhoncus. "
		/>
		,<Footer />
	</div>,
	document.querySelector("#app")
);
