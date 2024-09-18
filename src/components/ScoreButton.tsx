type ScoreButtonProps = {
	score: number;
	updateScore: (score: number) => void;
};

const ScoreButton = ({ score, updateScore }: ScoreButtonProps): JSX.Element => {
	return (
		<div onClick={() => updateScore(score)}>
			<p className='text-light-grey'>{score}</p>
		</div>
	);
};

export default ScoreButton;
