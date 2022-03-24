import React from 'react'
import Auth from '../../../../hoc/auth'
import Typing from '../../commons/TypingOnce';
import { imgURL } from '../../../Config';
import { Link } from 'react-router-dom';
import SkillsCarousel from './Sections/SkillsCarousel'

const AboutPage = (): JSX.Element => {
	return (
		<section className="page about-page">
			<div className="page-intro about__page-intro">
				<h2 className="page-intro__title">
					<Typing words={ ["About"] } />
				</h2>
				<p className="page-intro__text">안녕하세요, 반갑습니다.</p>
			</div>
			<div className="visual">
				<figure>
					<img src={ `${imgURL}coding-v2.gif` } alt=""/>
				</figure>
			</div>
			<div className="introduce">
				<div className="introduce__inner flex-grid flex-grid--wrap">
					<div className="introduce__cont profile">
						<h2>Web developer</h2>
						<div className="profile__list">
							<ul>
								<li className="flex-grid">
									<h3 className="title">Email</h3>
									<div className="detail">
										<a className="mailto" href="mailto:fromnowwon@gmail.com">fromnowwon@gmail.com</a>
									</div>
								</li>
								<li className="flex-grid">
									<h3 className="title">Github</h3>
									<div className="detail">
										<span className="link">
											<a href="https://github.com/fromnowwon" target={"_blank"}>https://github.com/fromnowwon</a>
										</span>
									</div>
								</li>
								<li className="flex-grid">
									<h3 className="title">Velog</h3>
									<div className="detail">
										<span className="link">
											<a href="https://velog.io/@nemo/" target={"_blank"}>https://velog.io/@nemo/</a>
										</span>
									</div>
								</li>
								<li className="flex-grid">
									<h3 className="title">Works</h3>
									<div className="detail">
										<div className="detail__item">
											<h4 className="detail__title">IKEA JAPAN</h4>
											<div className="link-box">
												{/* Ratings and Reviews */}
												{/* <span className="link">
													<a href="https://www.ikea.com/jp/ja/customer-service/shopping-at-ikea/ratings-reviews-pub9acdaea0" target="_blank">Link</a>
												</span> */}
												{/* Digital showroom */}
												<span className="link">
													<a href="https://www.ikea.com/jp/ja/campaigns/digital-showroom-pub0585e8d0" target="_blank">Link</a>
												</span>
												{/* Online outlet */}
												<span className="link">
													<a href="https://www.ikea.com/jp/ja/campaigns/ca01-online-outlet-pubb2e5fa70" target="_blank">Link</a>
												</span>
												{/* SEO */}
												<span className="link">
													<a href="https://www.ikea.com/jp/ja/campaigns/tlp-pubd93dc8a0" target="_blank">Link</a>
												</span>
												{/* IKEA RESTAURANT */}
												{/* <span className="link">
													<a href="https://www.ikea.com/jp/ja/stores/restaurant/?itm_campaign=ikea-restaurant&itm_element=Fan&itm_content=Food" target="_blank">Link</a>
												</span> */}
												{/* MSR */}
												<span className="link">
													<a href="https://www.ikea.com/jp/ja/campaigns/ca00-made-for-japan-pub008631e0" target="_blank">Link</a>
												</span>
												{/* Eco bags */}
												{/* <span className="link">
													<a href="https://www.ikea.com/jp/ja/campaigns/ca00-everyday-eco-bags-pubefcc3c10" target="_blank">Link</a>
												</span> */}
												{/* Better Sleep pt.2 */}
												<span className="link">
													<a href="https://www.ikea.com/jp/ja/campaigns/ca00-better-sleep-pubbd353860" target="_blank">Link</a>
												</span>
												{/* CLOSET STORAGE */}
												<span className="link">
													<a href="https://www.ikea.com/jp/ja/campaigns/ca00-closet-storage-pube7c8fa70" target="_blank">Link</a>
												</span>
											</div>
										</div>
										<div className="detail__item">
											<h4 className="detail__title">SCU</h4>
											<div className="link-box">
												<span className="link">
													<a href="https://www.iscu.ac.kr/03_aboutschool/46_01_overview.asp" target="_blank">Link</a>
												</span>
												<span className="link">
													<a href="https://www.iscu.ac.kr/03_aboutschool/45_01_overview.asp" target="_blank">Link</a>
												</span>
												<span className="link">
													<a href="https://www.iscu.ac.kr/03_aboutschool/48_01_overview.asp" target="_blank">Link</a>
												</span>
												<span className="link">
													<a href="https://www.iscu.ac.kr/03_aboutschool/47_01_overview.asp" target="_blank">Link</a>
												</span>
											</div>
										</div>
										{/* <div className="detail__item">
											<h4 className="detail__title">PHONAK</h4>
											<div className="link-box">
												<span className="link">
													<a href="https://fromnowwon.github.io/phonak" target="_blank">Link</a>
												</span>
											</div>
										</div> */}
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="introduce__cont skills">
						<h2>Skills</h2>
						<div className="skills__table">
							<SkillsCarousel />
						</div>
					</div>
				</div>
				<div className="introduce__cont contact">
					<Link to="/contact">
						<span className="link-text">SAY HELLO</span>
						<em className="bar"></em>
						<ul className="hearts flying">
							<li className="heart"></li>
							<li className="heart"></li>
							<li className="heart"></li>
							<li className="heart"></li>
							<li className="heart"></li>
							<li className="heart"></li>
							<li className="heart"></li>
							<li className="heart"></li>
							<li className="heart"></li>
							<li className="heart"></li>
							<li className="heart"></li>
							<li className="heart"></li>
						</ul>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Auth(AboutPage, null);