import { useEffect, useState } from "react";

import NaversApi from "services/NaversApi";

export default function useNaversIndex() {
  const [navers, setNavers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchNavers() {
      setIsLoading(true);

      try {
        const { data } = await NaversApi.index();

        setIsLoading(false);
        setIsFetching(false);
        setNavers(data);
      } catch (error) {
        setIsLoading(false);
        setIsFetching(false);
        console.log(error.message);
      }
    }

    if (isFetching) {
      fetchNavers();
    }
  }, [isFetching]);

  return [navers, isLoading, setIsFetching] as const;
}
