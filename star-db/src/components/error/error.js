import React from 'react';

import imgError from './boom_2.png'
import './error.css'

const ErrorComponent = () => {
 	return(
		<div className="error-container">
			<p><img src={imgError} className='errorImage'/></p>
			<p className="text-center">Sorry ... </p>
			<p className="text-center">Something bad happend</p>
		</div>
	)
}

export default ErrorComponent;
