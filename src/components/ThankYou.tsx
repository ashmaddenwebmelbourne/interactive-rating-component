import thankYouIcon from '../assets/images/illustration-thank-you.svg';
import Score from './Score';
import Title from './Title';
import Description from './Description';

type ThankYouProps = {
	selectedScore: number | null;
};

const ThankYou = ({ selectedScore }: ThankYouProps): JSX.Element => {
	return (
		<div className='flex flex-col items-center justify-center text-center'>
			<img className='mb-8' src={thankYouIcon} alt='' aria-hidden='true' />
			<Score selectedScore={selectedScore} />
			<Title content='Thank you!' />
			<Description content='We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!' />
		</div>
	);
};

export default ThankYou;
