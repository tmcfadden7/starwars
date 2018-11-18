import React from 'react';
import CharacterList from './CharacterList';
import axios from 'axios';
import '../styles/global.css';
import CharacterDetails from './CharacterDetails';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			characterList: [],
			selectedCharacter: {}
		}
		this.updateSelectedCharacter = this.updateSelectedCharacter.bind(this);
	}

	updateSelectedCharacter(character) {
		this.setState({selectedCharacter: character});
	}

	async componentDidMount() {
		let url = 'https://swapi.co/api/people/';

		let char1 = await axios.get(url+'1');
		let char2 = await axios.get(url+'2');
		let char3 = await axios.get(url+'3');

		this.setState({characterList: [char1.data, char2.data, char3.data]});
	}

	render() {
		return (
			<div>
				<CharacterList list={this.state.characterList} updateSelectedCharacter={this.updateSelectedCharacter}/>
				<CharacterDetails data={this.state.selectedCharacter}/>
			</div>
		)
	}
}

export default App;