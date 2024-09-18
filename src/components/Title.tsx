type TitleProps = {
	content: string;
};

const Title = ({ content }: TitleProps): JSX.Element => {
	return <h1 className='text-white'>{content}</h1>;
};

export default Title;
