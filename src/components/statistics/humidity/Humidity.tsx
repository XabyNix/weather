const Humidity = ({ humidity }: { humidity: number }) => {
	return (
		<article className="innerCard" id="humidity">
			<h3>Umidità</h3>
			<section className="innerCard-section">
				<h2>{humidity}%</h2>

				<p>umidita è nella norma</p>
			</section>
		</article>
	);
};

export default Humidity;
