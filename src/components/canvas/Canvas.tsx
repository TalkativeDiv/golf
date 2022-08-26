import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { fabric } from 'fabric';
let canvas: fabric.Canvas;
let ballObj: any;
let [ballX, ballY] = [10, 10];
let holeObj: any;
let holex = Math.floor(Math.random() * (1 + 400 - 100)) + 100;
let holey = Math.floor(Math.random() * (1 + 400 - 100)) + 100;
const Canvas = () => {
	const c = useRef(null);
	const drawBall = () => {
		fabric.Image.fromURL(
			'https://www.pinclipart.com/picdir/big/364-3640739_mining-and-agriculture-2d-white-ball-transparent-clipart.png',
			(img) => {
				img.hasControls = false;
				img.hasBorders = false;
				img.selectable = false;
				ballObj = img;
				ballObj.scaleToWidth(50);
				ballObj.set({
					top: ballY,
					left: ballX,
				});
				canvas.add(ballObj);
			}
		);
	};
	const drawBg = () => {
		fabric.Image.fromURL(
			'https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?cs=srgb&dl=pexels-pixmike-413195.jpg&fm=jpg',
			(img) => {
				img.hasControls = false;
				img.hasBorders = false;
				img.selectable = false;
				canvas.add(img);
			}
		);
	};
	const drawHole = () => {
		fabric.Image.fromURL(
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_dot_black.svg/768px-Location_dot_black.svg.png',
			(img) => {
				img.scaleToWidth(50);
				img.set({
					top: holex,
					left: holey,
				});
				img.hasControls = false;
				img.hasBorders = false;
				img.selectable = false;
				holeObj = img;
				canvas.add(holeObj);
			}
		);
	};
	const checkColli = () => {
		if (holeObj.intersectsWithObject(ballObj)) {
			holex = Math.floor(Math.random() * (1 + 400 - 100)) + 100;
			holey = Math.floor(Math.random() * (1 + 400 - 100)) + 100;
			ballX = 10;
			ballY = 10;
		}
	};
	useEffect(() => {
		const options = {};
		canvas = new fabric.Canvas(c.current, options);
		drawBg();
		drawBall();
		drawHole();
		return () => {
			canvas.dispose();
			// Load Ball
		};
	}, []);
	document.addEventListener('keydown', (e) => {
		console.log(e.key);
		switch (e.key.toLowerCase().toString()) {
			case 'w':
			case 'arrowup':
				ballY -= 10;
				drawBg();
				drawBall();
				drawHole();
				checkColli();

				break;
			case 's':
			case 'arrowdown':
				ballY += 10;
				drawBg();
				drawBall();
				drawHole();
				checkColli();
				break;
			case 'a':
			case 'arrowleft':
				ballX -= 10;
				drawBg();
				drawBall();
				checkColli();

				break;
			case 'd':
			case 'arrowright':
				ballX += 10;
				drawBg();
				drawBall();
				drawHole();
				checkColli();
				break;
		}
	});
	return (
		<canvas
			ref={c}
			width='800'
			height='600'
			className='border-emerald-300 border-4 rounded-xl shadow-lg shadow-emerald-300'
		/>
	);
};

export default Canvas;
