type DescriptionProps = {
	content: string;
};

const Description = ({ content }: DescriptionProps): JSX.Element => {
	return <p className='text-light-grey'>{content}</p>;
};

export default Description;
