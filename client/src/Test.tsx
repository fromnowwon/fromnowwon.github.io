import React, { useEffect, useState } from 'react';

const App = () => {
	const [Fruit, setFruit] = useState("");
	const [Count, setCount] = useState(0);
	
	useEffect(() => {
		setFruit("사과");
		setCount(7);
	}, [])

	return (
		<div className="App">
			<p>
				{ `나는 ${Fruit}을/를 ${Count}개 먹었다.` }
			</p>
		</div>
	);
}

export default App;
