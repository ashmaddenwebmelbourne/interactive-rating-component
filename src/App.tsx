import { useState } from 'react';
import Star from './components/Star';
import Title from './components/Title';
import Description from './components/Description';
import ScoreButton from './components/ScoreButton';
import Submit from './components/Submit';
import ThankYou from './components/ThankYou';
import './App.css';

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
		<main>
			{!showThankYouScreen && (
				<div>
					<Star />
					<Title content='How did we do?' />
					<Description content='Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!' />
					<div className='flex justify-between items-center'>
						{scoreOptions.map((score) => {
							return <ScoreButton key={score} score={score} updateScore={updateScore} />;
						})}
					</div>
					<Submit handleSubmit={handleSubmit} />
					{showErrorMessage && <p className='text-white'>Please select a score</p>}
				</div>
			)}
			{showThankYouScreen && <ThankYou selectedScore={selectedScore} />}
		</main>
	);
}

export default App;
