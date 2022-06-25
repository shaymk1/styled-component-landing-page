import { Container } from "./components/styles/Container.styled";

import Header from "./components/Header.jsx";
import { ThemeProvider } from "styled-components";
import GlobalStyles from './components/styles/Global'

const theme = {
	colors: {
		header: "#ebfbff",
		body: "#fff",
		footer: "#003333",
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
      <GlobalStyles/>
				<Header />
				<Container className="App">
					<h1>yebo</h1>
				</Container>
			</>
		</ThemeProvider>
	);
}

export default App;
