import React from "react";
import Semafaro from "./semafaro/Semafaro";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Semafaro />
		</div>
	);
};

export default Home;
