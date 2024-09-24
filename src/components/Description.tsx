type DescriptionProps = {
	content: string;
};

const Description = ({ content }: DescriptionProps): JSX.Element => {
	return <p className='text-light-grey font-overpass text-sm tablet:text-[0.938rem]'>{content}</p>;
};

export default Description;
