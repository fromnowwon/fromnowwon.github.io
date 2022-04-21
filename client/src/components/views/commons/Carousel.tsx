import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500
	}

	return (
		<div className="carousel">
			<Slider { ...settings }>
				<div className='slide1'>
					Slide 1
				</div>
				<div className='slide2'>
					Slide 2
				</div>
				<div className='slide3'>
					Slide	3
				</div>
			</Slider>
		</div>
	);
}

export default Carousel;