import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import labList from '../../../../../data/labList';

const LabSection = ():JSX.Element => {
	const [lab, setLab] = useState(labList);

	return (
		<section className="section lab-section">
			<div className="section__title section-about__title section__title--light">LAB</div>
			<div className="section__contents">
				<div className="lab-list">
					{
						lab.map((item, idx) => (
							<div className={`lab-list__item ${item.name}`} key={ idx }>
								<HashLink to={`/lab#${item.name}`} className="flex-grid flex-grid--center flex-grid--align-center">
									<span className="item-text">{ item.title }</span>
								</HashLink>
								<span className="item-ico"></span>
							</div>
						))
					}
					<div className="lab-list__item see-more">
						<HashLink to="/lab#top" className="flex-grid flex-grid--center flex-grid--align-center">
							<span className="item-text">SEE MORE</span>
						</HashLink>
						<span className="item-arrow item-arrow--dark"></span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default LabSection