"use client";

import Header from "@/components/atoms/Header";
import { Box, Button, Divider, useMediaQuery } from "@chakra-ui/react";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import animationData from "../../../../public/lottie/loader.json";
import HighlightedNews from "@/components/molecules/HighlightedNews";
import NewsArticle from "@/components/molecules/NewsArticle";
import GroupNews from "@/components/organisms/GroupNews";
import PubliCard from "@/components/molecules/PubliCard";
import { useNewsData } from "@/hooks/useNewsData";

const LOADING_TEXT = "Carregando...";
const LOAD_MORE_TEXT = "VEJA MAIS";

const InitialPage = () => {
  const [page, setPage] = useState(1);
  const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");
  const { data, error, hasMoreData, isLoadingMore, setIsLoadingMore } =
    useNewsData(page);

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoadingMore, hasMoreData]);

  if (error) return <p>Error: {error.message}</p>;

  if (data.length === 0) {
    return (
      <Box className="w-screen h-screen flex flex-col justify-center items-center gap-10">
        <Lottie animationData={animationData} loop={true} />
      </Box>
    );
  }

  const renderHighlightedNews = () => (
    <Box className="w-full flex flex-col 2xl:flex-row justify-center items-center gap-5 2xl:gap-10 my-10">
      <HighlightedNews
        title={data[0].group[0]?.title}
        emphasis={data[0].group[0]?.chapeu}
        description={data[0].group[0]?.summary}
        link={data[0].group[0]?.url}
      />
      <HighlightedNews
        title={data[0].group[1]?.title}
        image={data[0].group[1]?.image}
        link={data[0].group[0]?.url}
      />
    </Box>
  );

  const renderNewsArticles = () => (
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
            {isLargerThanMd && <Divider />}
            {(index + 1) % 8 === 0 && (
              <Box textAlign="center" my={4}>
                <PubliCard />
              </Box>
            )}
          </Box>
        ))}
    </Box>
  );

  const renderGroupNews = () => (
    <Box className="flex flex-col gap-10 2xl:gap-56">
      {data
        .filter((news) => news.type === "agrupador-materia")
        .map((news) => (
          <GroupNews
            key={news.id}
            onClick={() => window.open(news.footer?.url)}
            footer={news.footer?.label || ""}
            header={news.header || ""}
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
  );

  return (
    <Box className="justify-center flex flex-col items-center">
      <Header />
      <Box className="px-1 w-[430px] lg:w-full 2xl:px-80 justify-center flex flex-col items-center">
        {renderHighlightedNews()}
        <Box className="flex flex-col w-full 2xl:flex-row 2xl:justify-between">
          {renderNewsArticles()}
          {isLargerThanMd && renderGroupNews()}
        </Box>
        <Button
          className="w-4/6 2xl:w-7/12"
          color="#FFF"
          bg="#C4170C"
          _hover={{ background: "#c82418" }}
          isLoading={isLoadingMore}
          onClick={() => {
            if (hasMoreData) setPage((prevPage) => prevPage + 1);
          }}
        >
          {LOAD_MORE_TEXT}
        </Button>
      </Box>
    </Box>
  );
};

export default InitialPage;
