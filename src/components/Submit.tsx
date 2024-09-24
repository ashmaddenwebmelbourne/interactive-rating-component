type SubmitProps = {
	handleSubmit: () => void;
};

const Submit = ({ handleSubmit }: SubmitProps): JSX.Element => {
	return (
		<button
			onClick={handleSubmit}
			className='bg-orange hover:bg-white transition-colors duration-300 text-very-dark-blue w-full mt-6 tablet:mt-8 uppercase font-overpass font-bold text-sm tablet:text-base text-very-dark-blue py-3 rounded-3xl'
		>
			Submit
		</button>
	);
};

export default Submit;
