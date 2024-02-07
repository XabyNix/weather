const Feelslike = ({ feelslikeTemp }: { feelslikeTemp: number }) => {
	return (
		<article className="innerCard" id="feelslike">
			<h3>Temperatura percepita</h3>
			<section className="innerCard-section">
				<h2>{feelslikeTemp}°</h2>

				<p>Temperatura percepita sotto</p>
			</section>
		</article>
	);
};

export default Feelslike;
