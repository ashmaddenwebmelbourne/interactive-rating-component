type SubmitProps = {
	handleSubmit: () => void;
};

const Submit = ({ handleSubmit }: SubmitProps): JSX.Element => {
	return (
		<button onClick={handleSubmit} className='bg-orange text-very-dark-blue'>
			Submit
		</button>
	);
};

export default Submit;
