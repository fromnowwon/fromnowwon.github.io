import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import Auth from '../../../../hoc/auth'
import { imgURL } from '../../../Config'
import labList from '../../../../data/labList'
import Typing from '../../commons/TypingOnce';
import { useRef } from 'react';

const LabPage = ():JSX.Element => {
	const [lab, setLab] = useState(labList);
	const labListRef = useRef<HTMLDivElement>(null);
	const anchorRef = useRef<HTMLDivElement>(null);
	const itemRef = useRef<HTMLDivElement[]>([]);

	const observer = () => {
		const anchors = anchorRef.current?.querySelector('ul')?.children;
		
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.45
		}
		
		const io = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				let idx = Number(entry.target.getAttribute("data-list"));

				// 관찰 대상이 뷰포트에 들어왔을 경우
				if (entry.intersectionRatio > 0.45) {
					entry.target.classList.add("active");
					
					anchors && anchors[idx].classList.add('current');
				}
				// 관찰 대상이 뷰포트에 없을 경우
				else {
					entry.target.classList.remove("active");
					anchors && anchors[idx].classList.remove('current');
				}
			});
		}, options);
	
		for (let i = 0; i < itemRef.current.length; i++) {
			io.observe(itemRef.current[i]);
		}
	}
	
	useEffect(() => {
		observer();
	}, [])
	
	const scrollEventNav = () => {
		// const $labList = document.querySelector('.lab-list');
		const anchor = anchorRef.current;
		let boundingRect = labListRef.current?.getBoundingClientRect();

		if (boundingRect) {
			if (boundingRect.top < 20 && boundingRect.bottom > 500) {
				anchor?.classList.remove('inactive');
				anchor?.classList.add('active');
			}
			else {
				anchor?.classList.remove('active')
				anchor?.classList.add('inactive');
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
			<div className="anchor inactive" ref={ anchorRef } onMouseOver={ cursorOver } onMouseLeave={ cursorLeave }>
				<ul>
					{
						lab.map((item, idx) => {
							return (
								<li data-anchor={idx} key={ idx }>
									<HashLink smooth to={ `#${item.name}` }>
										<span className="anchor__title">{ item.title }</span>
									</HashLink>
								</li>
							)
						})
					}
				</ul>
				<p className="arrow-text">Scroll to Explore</p>
				<div className="scroll-down-arrow flex-grid flex-grid--center">
					<HashLink smooth to="#lab-list" className="arrow">
						<img src={ `${imgURL}scroll-down-arrow-light.png` } alt=""></img>
					</HashLink>
				</div>
			</div>
			<div id="lab-list" className="lab-list" ref={ labListRef }>
				<div className="lab-list__inner">
					{
						lab.map((item, idx) => {
							return (
								<div 
									id={ item.name } 
									className="lab-item flex-grid flex-grid--wrap" 
									data-list={idx}
									ref={elem => ( itemRef.current[idx] = elem as HTMLDivElement )}
									key={ idx }
								>
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
																<a href={ link.url } target="_blank">{ link.title }</a>
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