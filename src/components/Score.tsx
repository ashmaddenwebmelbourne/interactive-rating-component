type ScoreProps = {
	selectedScore: number | null;
};

const Score = ({ selectedScore }: ScoreProps): JSX.Element => {
	return (
		<>
			{selectedScore && (
				<div className='bg-dark-blue text-orange rounded-full px-4 py-1 mb-8'>{`You selected ${selectedScore} out of 5`}</div>
			)}
		</>
	);
};

export default Score;
