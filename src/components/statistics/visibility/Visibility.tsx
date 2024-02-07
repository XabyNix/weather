const UvIndex = ({ data }: { data: number }) => {
	return (
		<article className="innerCard" id="visibility">
			<h3>Visibilità</h3>
			<section className="innerCard-section">
				<h2>
					{data > 10 ? "> 10" : data}
					<span>km</span>
				</h2>

				<p>Visibilità ottima</p>
			</section>
		</article>
	);
};

export default UvIndex;
