import "./entryAnimation.css";
import { Transition, motion } from "framer-motion";

const EntryAnimation = ({ setAnimationCompleted }: { setAnimationCompleted: () => void }) => {
	const halfInnerHeight = window.innerHeight / 2;

	const leftAnimate = {
		x: [-50, -50, 0],
		y: [-halfInnerHeight, 0, 0],
		opacity: [0, 1, 1],
	};

	const rightAnimate = {
		x: [50, 50, 0],
		y: [halfInnerHeight, 0, 0],
		opacity: [0, 1, 1],
	};

	const transition: Transition = {
		duration: 2,
		ease: "easeInOut",
		times: [0, 0.8, 1],
	};

	return (
		<section className="entryContainer">
			<video id="seasonsVideo" autoPlay muted loop>
				<source src="/seasonsVideo.mp4" type="video/mp4" />
			</video>
			<motion.h1
				onAnimationComplete={setAnimationCompleted}
				animate={leftAnimate}
				transition={transition}
			>
				Met
			</motion.h1>
			<motion.h1 animate={rightAnimate} transition={transition}>
				èo
			</motion.h1>
		</section>
	);
};

export default EntryAnimation;
