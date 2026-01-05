import { About } from "./components/about";
import { Cooperate } from "./components/cooperate";
import { Experience } from "./components/experience";
import { Help } from "./components/help";
import { Mobile } from "./components/mobile";
import { Portfolio } from "./components/portfolio";
import { Welcome } from "./components/welcome";


export const Home = () => {
	
	return (
		<div className="">
			<Welcome />
			<About />
			<Experience />
			<Help />
			<Portfolio />
			<Cooperate />
			<Mobile />
		</div>
	);
};
