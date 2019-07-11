import React from 'react';

const Card = ({name, email, id, username}) => {
	
	return(

	<div className= 'bg-light-green dib br2 pa2 ma3 grow bw2 shadow-2' >
		<img alt = 'robots' src ={`https://robohash.org/${id}${id}color?200x200`}/>
		<div>
		<h2>{name}</h2>
		<p>{username}</p>
		<p>{email}</p>
		</div>
	</div>
		);
}
export default Card;