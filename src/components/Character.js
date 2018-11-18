import React from 'react';

class Character extends React.Component {
	render() {
		return (
			<div id="character" onClick={ 
				() => this.props.updateSelectedCharacter(this.props.data) 
				}>
				<p>Name: {this.props.data.name}</p>
				<p>Mass: {this.props.data.mass}</p>
				<p>Height: {this.props.data.height}</p>
			</div>
		)
	}
}

export default Character;