import { useState, useRef, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import useIntersection from './useIntersection';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	const [elementoRef, isIntersecting] = useIntersection({
		threshold: 0.5,
	});
	const [elementoRef2, isIntersecting2] = useIntersection({
		threshold: 0.75,
	});

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs" ref={elementoRef2}>
				{isIntersecting2 ? 'Dentro' : 'Fuera'}
			</p>
			<div style={{ height: '100vh' }}> Buffer</div>
			<div
				style={{
					backgroundColor: isIntersecting ? 'green' : 'red',
					height: '500px',
				}}
				ref={elementoRef}
			>
				{isIntersecting ? 'Dentro' : 'Fuera'}
			</div>
		</div>
	);
}

export default App;
