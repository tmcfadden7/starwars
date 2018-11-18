import React from 'react';

class CharacterDetails extends React.Component {

	render() {
		return (
			<div>
				<p>Name: {this.props.data.name}</p>
			</div>
		)
	}

}

export default CharacterDetails;