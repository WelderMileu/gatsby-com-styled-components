import React from 'react';

export const Jumbotrom = props => {
	return (
		<div className="jumbotron text-center text-muted">
			<h2>{props.content}</h2>
		</div>
	)
}

export const Container = props => {
	return(
		<div className="container mt-3 d-flex flex-wrap">
			{props.children}
		</div>
	)
}

export const Card = props => {
	return(
		<div className="card m-3 col-sm-5">
			<div className="card-body">
				<img src={props.img} className="card-img-top"/>
				<h5 className="card-header mt-3 text-muted text-center">{props.title}</h5>
				<p className="card-text p-3">{props.text}</p>
				<div className="card-footer">
					<a href="#" className="card-link">Link1</a>
					<a href="#" className="card-link">Link2</a>
				</div>
			</div>	
		</div>
	)
}

