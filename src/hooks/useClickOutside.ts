import { useEffect, useRef, useState } from "react";

const useClickOutside = <T extends HTMLElement>() => {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<T | null>(null);

	const setRef = (refParam: T | null) => {
		containerRef.current = refParam;
	};

	const handleOutsideClick = (e: MouseEvent) => {
		if (containerRef && !containerRef.current?.contains(e.target as Node)) setIsOpen(false);
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);
		return () => document.removeEventListener("mousedown", handleOutsideClick);
	}, []);

	return { isOpen, setIsOpen, setRef };
};
export default useClickOutside;
