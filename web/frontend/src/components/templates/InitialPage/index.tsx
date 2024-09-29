"use client";

import Header from "@/components/atoms/Header";
import { Box } from "@chakra-ui/react";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import animationData from "../../../../public/lottie/loader.json";
import axios from "axios";
import HighlightedNews from "@/components/molecules/HighlightedNews";

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

const InitialPage = () => {
  const [data, setData] = useState<NewsData[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<NewsData[]>(
          `http://localhost:3000/feed/page/${page}`
        );

        if (Array.isArray(response.data)) {
          setData((prevData) => [...prevData, ...response.data]);
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err);
        } else {
          setError(new Error("An unexpected error occurred"));
        }
      }
    };

    fetchData();
  }, [page]);

  if (error) return <p>Error: {error.message}</p>;
  if (data.length === 0)
    return (
      <Box className="w-screen h-screen flex flex-col justify-center items-center gap-10">
        <Lottie
          animationData={animationData}
          className="flex justify-center items-center"
          loop={true}
        />
      </Box>
    );

  return (
    <Box className="justify-center flex flex-col items-center">
      <Header />
      <Box className="px-1 w-[430px] lg:w-full 2xl:px-80 justify-center flex flex-col items-center">
        <Box className="w-full flex flex-col 2xl:flex-row justify-center items-center gap-5 2xl:gap-10 my-10">
          <>
            <HighlightedNews
              title={data[0].group[0]?.title}
              emphasis={data[0].group[0]?.chapeu}
              description={data[0].group[0]?.summary}
              link={data[0].group[0]?.url}
            />
            <HighlightedNews
              title={data[0].group[1]?.title}
              image={data[0].group[1]?.image}
            />
          </>
        </Box>
      </Box>
    </Box>
  );
};

export default InitialPage;
