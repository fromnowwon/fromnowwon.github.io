import React, { useEffect, useState } from 'react'
import Auth from '../../../../hoc/auth'
import { imgURL } from '../../../Config'
import labList from '../../../../data/labList'
import Typing from '../../commons/TypingOnce';

const LabPage = ():JSX.Element => {
	const [LabList, setLabList] = useState(labList);

	const anchorScroll = (e: { preventDefault: () => void; currentTarget: any; }) => {
		e.preventDefault();
		
		let hash = e.currentTarget.getAttribute("href");
		let name = hash.substring(1);
		let ele = document.getElementById(name);

		ele && ele.scrollIntoView({
			behavior: "smooth",
		});
	}

	const scrollDown = () => {
		const $list = document.querySelector('.lab-list__inner');

		$list && $list.scrollIntoView({
			behavior: "smooth",
		});
	}
	
	const scrollEventNav = () => {
		const $labList = document.querySelector('.lab-list');
		const $anchor = document.querySelector('.anchor');
		let boundingRect = $labList?.getBoundingClientRect();

		if (boundingRect) {
			if (boundingRect.top < 20 && boundingRect.bottom > 500) {
				$anchor?.classList.remove('inactive');
				$anchor?.classList.add('active');
			}
			else {
				$anchor?.classList.remove('active')
				$anchor?.classList.add('inactive');
			}
		}
	}

	const cursorOver = () => {
		const $cursor = document.querySelector('.cursor') as HTMLElement;

		$cursor.style.zIndex = "2";
	}

	const cursorLeave = () => {
		const $cursor = document.querySelector('.cursor') as HTMLElement;

		$cursor.style.zIndex = "0";
	}

	useEffect(() => {
		window.addEventListener("scroll", scrollEventNav);
		return () => {
			window.removeEventListener("scroll", scrollEventNav);
		};
	}, []);

	return (
		<section className="page lab-page">
			<div className="page-intro about__page-intro">
				<h2 className="page-intro__title">
					<Typing words={ ["Laboratory"] } />
				</h2>
			</div>
			<div className="anchor inactive" onMouseOver={ cursorOver } onMouseLeave={ cursorLeave }>
				<ul>
					{
						LabList.map((item, idx) => {
							return (
								<li key={ idx }>
									<a href={ `#${item.name}` } onClick={ anchorScroll }>
										<span className="anchor__title">{ item.title }</span>
									</a>
								</li>
							)
						})
					}
				</ul>
				<p className="arrow-text">Scroll to Explore</p>
				<div className="scroll-down-arrow flex-grid flex-grid--center">
					<span className="arrow" onClick={ scrollDown }>
						<img src={ `${imgURL}scroll-down-arrow-light.png` } alt=""></img>
					</span>
				</div>
			</div>
			<div className="lab-list">
				<div className="lab-list__inner">
					{
						LabList.map((item, idx) => {
							return (
								<div id={ item.name } className="lab-item flex-grid flex-grid--wrap" key={ idx }>
									<div className="lab-item__visual">
										<figure className="visual">
											<img src={`${imgURL + item.image}`} alt={ item.title }></img>
										</figure>
									</div>
									<div className="lab-item__info">
										<div className="lab-item__info__inner">
											<div className="item-box tag-box">
												{
													item.tag.map((tag, idx) => {
														return (
															<span className="tag" key={ idx }>{ tag }</span>
														)
													})
												}
											</div>
											<div className="item-box title-box">
												<h3 className="title">{ item.title }</h3>
											</div>
											<div className="item-box desc-box">
												<p className="desc">{ item.description }</p>
											</div>
											<div className="item-box stack-box">
												<span className="item__name">Tech Stack</span>
												<div className="item__detail">
													<ul>
														<li>Client: { item.stack.client }</li>
														<li>Backend: { item.stack.backend }</li>
														<li>DB: { item.stack.db }</li>
													</ul>
												</div>
											</div>
											<div className="item-box technic-box">
												<span className="item__name">Languages</span>
												<span className="item__detail">{ item.language }</span> 
											</div>
											<div className="item-box link-box">
												{
													item.link.map((link, idx) => {
														return (
															<span className="link" key={ idx }>
																<a href={ link.url } target={"_blank"}>{ link.title }</a>
															</span>
														)
													})
												}
											</div>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}

export default Auth(LabPage, null);