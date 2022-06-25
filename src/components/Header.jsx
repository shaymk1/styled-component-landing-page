import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import {Container} from "./styles/Container.styled"
import { Button } from './styles/Button.styled'

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				
            <Nav>
            <Logo src="../assetts/logo.svg" alt = "logo"></Logo>
            <Button>Try It For Free</Button>
            </Nav>
			</Container>
		</StyledHeader>
	);
};

export default Header;
