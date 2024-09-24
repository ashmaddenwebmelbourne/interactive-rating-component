import starIcon from '../assets/images/icon-star.svg';

const Star = () => {
	return (
		<div className='flex h-10 w-10 items-center justify-center rounded-full bg-dark-blue tablet:h-12 tablet:w-12 mb-4 tablet:mb-[1.875rem]'>
			<img src={starIcon} aria-hidden='true' />
		</div>
	);
};

export default Star;
