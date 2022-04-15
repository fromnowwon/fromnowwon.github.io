import React, { useEffect, useState } from 'react'

const LocalTime = (): JSX.Element => {
	const [time, setTime] = useState(new Date());
	// const year = time.getFullYear();
	const month = time.getMonth() + 1;
	const date = time.getDate();
	const day = time.getDay();
	const hours = time.getHours();
	const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();

	const [realTime, setRealTime] = useState<string>();
	
	useEffect(() => {
		const tictoc = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(tictoc);
	}, []);

	useEffect(() => {
		if (time) {
			setRealTime(
				`${month < 12 ? `0${month}` : month}.` +
				`${date < 10 ? `0${date}` : date} ` +
				`${week[day]}. ` +
				`${hours < 10 ? `0${hours}` : hours} : ` +
				`${minutes < 10 ? `0${minutes}` : minutes} : ` +
				`${seconds < 10 ? `0${seconds}` : seconds}`
			);
		}
	}, [ time ])

	return (
		<div className='local-time'>
			{ realTime }
		</div>
	)
}

export default LocalTime
