import { Experience } from "./components/experience";
import { Mobile } from "./components/mobile";
import { Portfolio } from "./components/portfolio";
import { Welcome } from "./components/welcome";


export const Home = () => {
	
	return (
		<div className=" pb-24">
			<Welcome />
			<Experience />
			<Portfolio />
			<Mobile />
		</div>
	);
};
