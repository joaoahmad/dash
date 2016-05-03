import React from 'react'
import { Link } from 'react-router'

class Search extends React.Component{

	doSearch(e) {
		console.log(e.target.value);
		this.setState({ items: [] });
	}

	redirSearch(e) {
		this.setState({ items: '' });
	}

	render() {
		return (
			<div className="search-form">
			<button onClick={this.redirSearch} className="search-btn feather-search"></button>
			<input type="text" className="input-text" placeholder="Buscar" />
			</div>
		);
	}

}

export default Search
