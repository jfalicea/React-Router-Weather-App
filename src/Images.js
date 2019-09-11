import React from 'react';

function Images(props){
	const atlPicArray = props.pics.map((pic)=>{
		return <img src={pic} alt="" />
	})
	// console.log(atlPicArray)
	return(
		<div>
			{atlPicArray}
		</div>
	)
}

export default Images;