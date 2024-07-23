import {  Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';


import classes from './style.js';
const ProjectCard = ({img,title,onclick})=> {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});	
	return (
		<div style={isDesktopOrLaptop? classes.cardDesktop:classes.cardMobile} onClick={onclick}>
			<img style={{width:'100%',height:'100%',opacity:0.7,borderRadius:'1em',objectFit: 'cover',
				border: 'solid 2px transparent',}} src={img} alt={title}/>
			<Typography style={classes.txt} variant='h5' fontFamily={'Merriweather'} fontWeight='bold'>
				{title}
			</Typography>
			
		</div>

	);
};
export default ProjectCard;