"use client";

import Header from "@/components/atoms/Header";
import { Box, Button, Divider, useMediaQuery } from "@chakra-ui/react";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import animationData from "../../../../public/lottie/loader.json";
import axios from "axios";
import HighlightedNews from "@/components/molecules/HighlightedNews";
import NewsArticle from "@/components/molecules/NewsArticle";
import GroupNews from "@/components/organisms/GroupNews";
import PubliCard from "@/components/molecules/PubliCard";

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
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<NewsData[]>(
          `http://localhost:3000/feed/page/${page}`
        );

        if (Array.isArray(response.data)) {
          setData((prevData) => [...prevData, ...response.data]);

          if (response.data.length === 0) {
            setHasMoreData(false);
          }
        } else {
          setHasMoreData(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (
        typeof window !== "undefined" &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1 &&
        !isLoadingMore &&
        hasMoreData
      ) {
        setIsLoadingMore(true);
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoadingMore, hasMoreData]);

  useEffect(() => {
    if (isLoadingMore) {
      setIsLoadingMore(false);
    }
  }, [data]);

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
        <Box className="flex flex-col w-full 2xl:flex-row 2xl:justify-between">
          <Box className="flex flex-col w-[430px] 2xl:w-full justify-center items-center 2xl:justify-start 2xl:items-start gap-10">
            {data
              .slice(1)
              .filter((news) => news.type !== "agrupador-materia")
              .map((news, index) => (
                <Box className="gap-10 flex flex-col" key={news.id}>
                  <NewsArticle
                    link={news.url}
                    title={news.title}
                    previewImage={news.image}
                    emphasis={news.section}
                    video={news.video}
                    time="5"
                  />
                  {isLargerThanMd ? <Divider /> : null}
                  {(index + 1) % 8 === 0 && (
                    <Box textAlign="center" my={4}>
                      <PubliCard />
                    </Box>
                  )}
                </Box>
              ))}
          </Box>
          {isLargerThanMd ? (
            <Box className="flex flex-col gap-10  2xl:gap-56">
              {data
                .filter((news) => news.type === "agrupador-materia")
                .map((news) => (
                  <GroupNews
                    onClick={() => window.open(news.footer?.url)}
                    footer={news.footer?.label || ""}
                    header={news.header || ""}
                    key={news.id}
                    firstProp={{
                      image: news.group[0]?.content.image || "",
                      title: news.group[0]?.content.title || "",
                      url: news.group[0]?.content.url || "",
                    }}
                    secondProp={{
                      image: news.group[1]?.content.image || "",
                      title: news.group[1]?.content.title || "",
                      url: news.group[1]?.content.url || "",
                    }}
                    thirdProp={{
                      image: news.group[2]?.content.image || "",
                      title: news.group[2]?.content.title || "",
                      url: news.group[2]?.content.url || "",
                    }}
                  />
                ))}
            </Box>
          ) : null}
        </Box>
        <Button
          className="w-4/6 2xl:w-7/12"
          color="#FFF"
          bg="#C4170C"
          _hover={{ background: "#c82418" }}
          isLoading={isLoadingMore}
          onClick={() => {
            if (hasMoreData) {
              setPage((prevPage) => prevPage + 1);
            }
          }}
        >
          VEJA MAIS
        </Button>
      </Box>
    </Box>
  );
};

export default InitialPage;
