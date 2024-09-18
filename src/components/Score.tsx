type ScoreProps = {
	selectedScore: number | null;
};

const Score = ({ selectedScore }: ScoreProps): JSX.Element => {
	return <>{selectedScore && <div>{`You have selected ${selectedScore} out of 5`}</div>}</>;
};

export default Score;
