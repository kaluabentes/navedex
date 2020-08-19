import { useEffect, useState } from "react";

import NaversApi from "services/NaversApi";

export default function useNaversIndex() {
  const [navers, setNavers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchNavers() {
      setIsLoading(true);

      try {
        const { data } = await NaversApi.index();

        setIsLoading(false);
        setNavers(data);
      } catch (error) {
        setIsLoading(false);
        console.log(error.message);
      }
    }

    fetchNavers();
  }, []);

  return [navers, isLoading] as const;
}
