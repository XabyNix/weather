import debounce from "lodash.debounce";
import { useRef, useMemo, useEffect } from "react";

const useDebounce = <T extends () => void>(callback: T) => {
	const ref = useRef<T>();

	useEffect(() => {
		ref.current = callback;
	}, [callback]);

	const debouncedCallback = useMemo(() => {
		const func = () => {
			ref.current?.();
		};

		return debounce(func, 500);
	}, []);

	return debouncedCallback;
};
export default useDebounce;
