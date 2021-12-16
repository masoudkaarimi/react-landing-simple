import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjThree } from '../data/Data';

function Products() {
	return (
		<>
			<HeroSection {...homeObjThree} />
		</>
	);
}

export default Products;
