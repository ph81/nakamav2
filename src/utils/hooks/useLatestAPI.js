import { useState, useEffect } from 'react';
import { WZL_API } from '../constants';

const INITIAL_API_METADATA = { ref: null, isLoading: true };

export function useLatestAPI() {
  const [apiMetadata, setApiMetadata] = useState(() => INITIAL_API_METADATA);

  useEffect(() => {
    const controller = new AbortController();

    async function getAPIMetadata() {
      try {
        setApiMetadata(INITIAL_API_METADATA);

        const response = await fetch(WZL_API.base_url, {
          signal: controller.signal,
        });
        const { refs: [{ ref } = {}] = [] } = await response.json();

        setApiMetadata({ ref, isLoading: false });
      } catch (err) {
        setApiMetadata({ ref: null, isLoading: false });
        console.error(err);
      }
    }

    getAPIMetadata();
    console.log('metadata'+ getAPIMetadata())

    return () => {
      controller.abort();
    };
  }, []);

  return apiMetadata;
}