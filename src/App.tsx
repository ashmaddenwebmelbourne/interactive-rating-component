import { useState } from 'react';
import Star from './components/Star';
import Title from './components/Title';
import Description from './components/Description';
import ScoreButton from './components/ScoreButton';
import Submit from './components/Submit';
import ThankYou from './components/ThankYou';
import './App.css';

// Style it perfectly

function App() {
	const [showThankYouScreen, setShowThankYouScreen] = useState(false);
	const [selectedScore, setSelectedScore] = useState<number | null>(null);
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	const scoreOptions: number[] = [1, 2, 3, 4, 5];

	const handleSubmit = () => {
		if (selectedScore) {
			setShowThankYouScreen(true);
		} else {
			setShowErrorMessage(true);
		}
	};

	const updateScore = (score: number) => {
		setSelectedScore(score);
		setShowErrorMessage(false);
	};

	return (
		<main className='max-w-[25.75rem] mx-auto p-6 tablet:p-8 bg-background-gradient rounded-[0.938rem] tablet:rounded-[1.875rem]'>
			{!showThankYouScreen && (
				<div>
					<Star />
					<Title content='How did we do?' />
					<Description content='Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!' />
					<div className='flex justify-between items-center mt-6'>
						{scoreOptions.map((score) => {
							return <ScoreButton key={score} score={score} updateScore={updateScore} selectedScore={selectedScore} />;
						})}
					</div>
					<Submit handleSubmit={handleSubmit} />
					{showErrorMessage && (
						<p className='text-light-grey font-overpass text-sm tablet:text-[0.938rem] mt-6'>Please select a score</p>
					)}
				</div>
			)}
			{showThankYouScreen && <ThankYou selectedScore={selectedScore} />}
		</main>
	);
}

export default App;
