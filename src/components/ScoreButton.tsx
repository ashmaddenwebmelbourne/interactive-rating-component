type ScoreButtonProps = {
	score: number;
	updateScore: (score: number) => void;
	selectedScore: null | number;
};

const ScoreButton = ({ score, updateScore, selectedScore }: ScoreButtonProps): JSX.Element => {
	return (
		<div
			className={`${
				selectedScore === score ? 'bg-white text-very-dark-blue' : 'bg-dark-blue text-light-grey'
			} flex h-[2.625rem] w-[2.625rem] tablet:h-[3.188rem] tablet:w-[3.188rem] items-center justify-center rounded-full bg-dark-blue hover:bg-orange hover:text-very-dark-blue transition-colors duration-300 text-light-grey cursor-pointer`}
			onClick={() => updateScore(score)}
		>
			<p className='font-overpass font-bold text-sm tablet:text-base'>{score}</p>
		</div>
	);
};

export default ScoreButton;
