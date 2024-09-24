type TitleProps = {
	content: string;
};

const Title = ({ content }: TitleProps): JSX.Element => {
	return (
		<h1 className='text-white font-overpass font-bold text-2xl tablet:text-[1.75rem] mb-[0.625rem] tablet:mb-[0.938rem]'>
			{content}
		</h1>
	);
};

export default Title;
