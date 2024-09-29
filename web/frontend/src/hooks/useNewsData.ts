import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000/feed/page";

interface NewsData {
  id: string;
  title: string;
  url: string;
  image?: string;
  section?: string;
  summary?: string;
  video?: string;
  type: string;
  group?: {
    title: string;
    chapeu: string;
    summary: string;
    url: string;
    image?: string;
  }[];
  footer?: {
    label: string;
    url: string;
  };
}

export const useNewsData = (page: number) => {
  const [data, setData] = useState<NewsData[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get<NewsData[]>(`${BASE_URL}/${page}`);
      if (response.data && response.data.length > 0) {
        setData((prevData) => [...prevData, ...response.data]);
      } else {
        setHasMoreData(false);
      }
    } catch (err) {
      setError(
        axios.isAxiosError(err)
          ? err
          : new Error("An unexpected error occurred")
      );
    } finally {
      setIsLoadingMore(false);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, hasMoreData, isLoadingMore, setIsLoadingMore };
};
