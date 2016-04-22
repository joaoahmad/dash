var React = require('react');
var Link = require('react-router').Link;

var Search = React.createClass({
	getInitialState: function() {
			return {items: []};
		},
	doSearch: function(e) {
			console.log(e.target.value);
			this.setState({ items: [] });
	},
	redirSearch: function(e) {
			this.setState({ items: '' });
	},
	render: function() {
		return (
			<div className="search-wrap">
					<button onClick={this.redirSearch} className="search-btn feather-search"></button>
					<input type="text" className="input-text" />
			</div>
		);
	}

});

module.exports = Search;
