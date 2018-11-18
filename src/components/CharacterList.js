import React from 'react';
import Character from './Character';

class CharacterList extends React.Component {

	render() {
		return (
			<div id="character-list">
				{this.props.list.map((el) => {
					return (<Character 
						data={el} 
						updateSelectedCharacter={this.props.updateSelectedCharacter}
					/>)
				})}
			</div>
		)
	}

}

export default CharacterList;