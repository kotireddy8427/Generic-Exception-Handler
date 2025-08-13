import { useState, useCallback } from "react";
import { handleError } from "../utils/errorHandler";

/**
 * useApi - React hook to wrap any API call with loading, error, and data state
 * @returns {Object} { loading, data, error, callApi }
 */
function useApi() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // callApi: wraps any async API call
  const callApi = useCallback(async (apiFn, ...args) => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const result = await apiFn(...args);
      setData(result);
      return result;
    } catch (err) {
      const normalized = handleError(err);
      setError(normalized);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, data, error, callApi };
}

export default useApi;
