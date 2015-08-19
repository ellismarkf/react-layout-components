import React from 'react';
import Box from './Box.jsx';

export default class Page extends React.Component {
	constructor() {
		super(...arguments);
	}
	
	render() {
		let styles = {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			position: 'absolute',
			overflow: 'hidden'
		};
		this.props.overflow && (styles['overflow'] = this.props.overflow);
		this.props.overflowX && (styles['overflowX'] = this.props.overflowX);
		this.props.overflowY && (styles['overflowY'] = this.props.overflowY);
		
		console.warn("The Page-Component is deprecated and will be removed with the coming 1.0 release. Use `<Container></Container>` with the overflow-properties instead.");
		return <Box {...this.props} style={styles}>{this.props.children}</Box>
	}
}