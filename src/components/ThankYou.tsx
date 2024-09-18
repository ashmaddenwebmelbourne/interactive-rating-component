import thankYouIcon from '../assets/images/illustration-thank-you.svg';
import Score from './Score';
import Title from './Title';
import Description from './Description';

const ThankYou = () => {
	return (
		<div>
			<img src={thankYouIcon} alt='' aria-hidden='true' />
			<Score />
			<Title />
			<Description />
		</div>
	);
};

export default ThankYou;
