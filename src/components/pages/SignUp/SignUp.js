import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjFour } from '../data/Data';

function SignUp() {
	return (
		<>
			<HeroSection {...homeObjFour} />
		</>
	);
}

export default SignUp;
