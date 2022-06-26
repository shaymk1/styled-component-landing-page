import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Image, Logo, Nav, StyledHeader } from "./styles/Header.styled";

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo src="/images/logo.svg" alt="logo"></Logo>
					
						<ul>
							<li>
								<a href="/">Home</a>
							</li>

							<li>
								<a href="/about">About</a>
							</li>
						</ul>
					
					<Button>Try It For Free</Button>
				</Nav>
				<Flex>
					<div>
						<h1>Build the community</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
							omnis, libero quas animi rem enim provident cumque laboriosam,
							quos molestiae iste blanditiis eligendi adipisci repellat ex
							dolores iusto eveniet dolorem.
						</p>

						<Button bg="#ff0099" color="#fff">
							Sign Up For Free
						</Button>
					</div>
					<Image src="./images/illustration-mockups.svg" alt="" />
				</Flex>
			</Container>
		</StyledHeader>
	);
};

export default Header;
