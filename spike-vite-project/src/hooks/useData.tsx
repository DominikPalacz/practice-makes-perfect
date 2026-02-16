// https://developer.mozilla.org/en-US/docs/Web/API/AbortController

import { useEffect, useState } from "react";
import * as z from "zod";

function useData<T = unknown>(url: string, schema?: z.ZodSchema<T>, options?: RequestInit) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);


	useEffect(() => {
		setData(null);
		setLoading(true);
		setError(null);

		const controller = new AbortController();
		const signal = controller.signal;

		const fetchData = async () => {
			try {
				const response = await fetch(url, { signal, ...options });

				if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);

				const result = await response.json();

				const finalData = schema ? schema.parse(result) : result;

				if (!signal.aborted) setData(finalData);

			} catch (err: unknown) {
				if (err instanceof Error && err.name === 'AbortError') return;

				if (err instanceof z.ZodError) {
					console.error("Error validation Zod (issues):", err.issues);
				}

				if (!signal.aborted) setError(err instanceof Error ? err : new Error("Unknown error"))
			} finally {
				if (!signal.aborted) setLoading(false)
			}
		};

		fetchData()

		return () => {
			controller.abort();
		}
	}, [url, schema, JSON.stringify(options)])

	return { data, loading, error };
}

export default useData;


// to use TanStack Query React Query