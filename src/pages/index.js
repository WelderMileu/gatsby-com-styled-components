import React from 'react';
import { Container, Card, Jumbotrom } from '../components/card';
import gatsby from '../assets/gatsby_bootstrap.jpg';
import styled from '../assets/gatsby_styled.jpg';

function App() {
	return (
		<div>
			<Jumbotrom
				content="Desenvolvendo aplicação com Gatsby"
			/>
			<Container>
				<Card 
					img={gatsby}
					title="Gatsby & Bootstrap"
					text="Usando Bootstrap em uma aplicação Gatsby."
				/>
				<Card 
					img={styled}
					title="Gatsby & Styled-Components"
					text="Usando o Styled-Components em uma aplicação Gatsby."
				/>
			</Container>
		</div>
	)
}

export default App;
