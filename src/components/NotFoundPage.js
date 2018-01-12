import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
	<div>
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">404 Error!</h1>
			</div>
		</div>
		<div className="content-container">
			<img src="../../public/images/404rickmorty.png" />
		</div>
	</div>
);

export default NotFoundPage;
