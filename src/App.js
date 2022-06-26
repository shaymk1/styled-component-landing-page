import { Container } from "./components/styles/Container.styled";
import content from "./content";
import Header from "./components/Header.jsx";
import { ThemeProvider } from "styled-components";
import GlobalStyles from './components/styles/Global'
import Card from "./components/Card";
import Footer from "./components/Footer";
const theme = {
	colors: {
		header: "#ebfbff",
		body: "#fff",
		footer: "#003333",
	},

	mobile:'768px'
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Container className="App">
					{content.map((item, index) => (
						<Card key={index} item={item} />
					))}

				</Container>
				<Footer/>
			</>
		</ThemeProvider>
	);
}

export default App;
