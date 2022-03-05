import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { imgURL } from '../../../../Config'

const SkillsCarousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500
	}

	const cursorOver = () => {
		const $cursor = document.querySelector('.cursor') as HTMLElement;

		$cursor.style.zIndex = "4";
	}

	const cursorLeave = () => {
		const $cursor = document.querySelector('.cursor') as HTMLElement;

		$cursor.style.zIndex = "0";
	}

	return (
		<div className="carousel"  onMouseOver={ cursorOver } onMouseLeave={ cursorLeave }>
			<Slider { ...settings }>
				<div className='slide slide1'>
					<table>
						<colgroup>
							<col width="30%" />
							<col width="70%" />
						</colgroup>
						<thead>
							<tr>
								<th colSpan={2}>Front-End Language</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>HTML5</th>
								<td>
									<div className="step">
										<span className="img">
											<img src={ `${imgURL}step.png` } />
										</span>
										<span className="bg perc-90"></span>
									</div>
								</td>
							</tr>
							<tr>
								<th>CSS3</th>
								<td>
									<div className="step">
										<span className="img">
											<img src={ `${imgURL}step.png` } />
										</span>
										<span className="bg perc-90"></span>
									</div>
								</td>
							</tr>
							<tr>
								<th>JavaScript</th>
								<td>
									<div className="step">
										<span className="img">
											<img src={ `${imgURL}step.png` } />
										</span>
										<span className="bg perc-70"></span>
									</div>
								</td>
							</tr>
							<tr>
								<th>TypeScript</th>
								<td>
									<div className="step">
										<span className="img">
											<img src={ `${imgURL}step.png` } />
										</span>
										<span className="bg perc-70"></span>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='slide slide2'>
					<table>
						<colgroup>
							<col width="30%" />
							<col width="70%" />
						</colgroup>
						<thead>
							<tr>
								<th colSpan={2}>Front-End Library</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>React</th>
								<td>
									<div className="step">
										<span className="img">
											<img src={ `${imgURL}step.png` } />
										</span>
										<span className="bg perc-70"></span>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='slide slide3'>
					<table>
						<colgroup>
							<col width="30%" />
							<col width="70%" />
						</colgroup>
						<thead>
							<tr>
								<th colSpan={2}>HTTP</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Node.js</th>
								<td>
									<div className="step">
										<span className="img">
											<img src={ `${imgURL}step.png` } />
										</span>
										<span className="bg perc-60"></span>
									</div>
								</td>
							</tr>
							<tr>
								<th>Express.js</th>
								<td>
									<div className="step">
										<span className="img">
											<img src={ `${imgURL}step.png` } />
										</span>
										<span className="bg perc-60"></span>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='slide slide4'>
					<table>
						<colgroup>
							<col width="30%" />
							<col width="70%" />
						</colgroup>
						<thead>
							<tr>
								<th colSpan={2}>Backend Language</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Javascript</th>
								<td>
									<div className="step">
										<span className="img">
											<img src={ `${imgURL}step.png` } />
										</span>
										<span className="bg perc-60"></span>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='slide slide5'>
					<table>
						<colgroup>
							<col width="30%" />
							<col width="70%" />
						</colgroup>
						<thead>
							<tr>
								<th colSpan={2}>DATABASE</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>MongoDB</th>
								<td>
									<div className="step">
										<span className="img">
											<img src={ `${imgURL}step.png` } />
										</span>
										<span className="bg perc-60"></span>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='slide slide6'>
					<table>
						<colgroup>
							<col width="30%" />
							<col width="70%" />
						</colgroup>
						<thead>
							<tr>
								<th colSpan={2}>DEPLOYMENT</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>GITHUB PAGE</th>
								<td>
									<div className="step">
										<span className="img">
											<img src={ `${imgURL}step.png` } />
										</span>
										<span className="bg perc-90"></span>
									</div>
								</td>
							</tr>
							<tr>
								<th>HEROKU</th>
								<td>
									<div className="step">
										<span className="img">
											<img src={ `${imgURL}step.png` } />
										</span>
										<span className="bg perc-90"></span>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='slide slide7'>
					<table>
						<colgroup>
							<col width="30%" />
							<col width="70%" />
						</colgroup>
						<thead>
							<tr>
								<th colSpan={2}>VERSION CONTROL</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>GITHUB</th>
								<td>
									<div className="step">
										<span className="img">
											<img src={ `${imgURL}step.png` } />
										</span>
										<span className="bg perc-90"></span>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Slider>
		</div>
	);
}

export default SkillsCarousel;