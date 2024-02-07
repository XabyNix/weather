import { MdCancel } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { endpoints } from "../../config/config";
import useDebounce from "../../hooks/useDebounce";
import { GeoapifyAutocomplete } from "../../types";
import useClickOutside from "../../hooks/useClickOutside";
import { coordContext } from "../../contexts/coordinateContext";
import { ChangeEvent, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./search.css";

const Search = () => {
	const [data, setData] = useState<GeoapifyAutocomplete>();
	const [input, setInput] = useState<string>("");
	const { changeCoordinates } = useContext(coordContext);
	const { isOpen, setIsOpen, setRef } = useClickOutside();

	const fetchData = () => {
		console.log("Fetching Data...");
		const url = `${endpoints.autocomplete}&text=${input}`;

		fetch(url)
			.then((res) => res.json())
			.then((jsonData) => setData(jsonData))
			.catch((error) => console.error(error));
	};

	//Handle writing in input field and debounce the request for 1 second
	const debounceRequest = useDebounce(() => {
		input && fetchData();
	});
	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
		debounceRequest();
	};

	//Handle click on a city from results of search
	const handleItemClick = (lat: number, lon: number) => {
		changeCoordinates(lat, lon);
		setIsOpen(false);
	};

	return (
		<>
			{!isOpen && (
				<motion.button
					key={"container"}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					id="searchButton"
					type="button"
					onClick={() => setIsOpen(!isOpen)}
				>
					<CiSearch color="var(--text-color)" />
				</motion.button>
			)}
			<AnimatePresence>
				{isOpen && (
					<motion.section
						key={"search"}
						initial={{ y: "-100%" }}
						animate={{ y: 0 }}
						exit={{ y: "-120%" }}
						transition={{ type: "spring", duration: 0.2 }}
						ref={(ref) => setRef(ref)}
						className={"form-open"}
					>
						<div className="searchContainer">
							<input
								placeholder="Scrivi una città da cercare"
								onChange={handleOnChange}
								value={input}
							/>
							<button onClick={() => setInput("")} type="button" id="clearButton">
								<MdCancel />
							</button>
						</div>

						{/* List of item in the dropdown search*/}
						{data && (
							<ul className="dropdown-list">
								{data.results.map(({ place_id, formatted, lat, lon }) => (
									<li onClick={() => handleItemClick(lat, lon)} key={place_id}>
										<span>{formatted}</span>
									</li>
								))}
							</ul>
						)}
					</motion.section>
				)}
			</AnimatePresence>
		</>
	);
};

export default Search;
