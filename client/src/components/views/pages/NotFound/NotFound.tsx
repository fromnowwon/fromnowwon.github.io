import React from 'react'
import Auth from '../../../../hoc/auth'

const NotFound = (): JSX.Element => {
	return (
		<div>
			404 Not Found
		</div>
	)
}

export default Auth(NotFound, null);
