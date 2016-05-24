import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

class DropDown extends Component {
	constructor(props) {
		super(props)
	}

	toggleClick(e) {
		e.preventDefault()
		e.stopPropagation()

		if( this.open ) {
				return false
		}
		this.open = true;
		this.form.fldOpen = this.pos;
		var self = this;
		this.fld.className += ' nl-field-open';
	}

	render() {

		let dropdownClass = class
		return (
				<div className="nl-field nl-dd">
					<a className="nl-field-toggle" onClick={this.toggleClick.bind(this)}>anytime</a>
					<ul>
						<li class="nl-dd-checked">anytime</li>
						<li>at 15 p.m.</li>
						<li>at 8 p.m.</li>
						<li>at 9 p.m.</li>
					</ul>
				</div>
			)
	}
}

DropDown.defaultProps = {}
export default DropDown

