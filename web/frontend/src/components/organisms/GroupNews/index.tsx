import NewsArticle from "@/components/molecules/NewsArticle";
import { Box, Divider, Text } from "@chakra-ui/react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import type { GroupNewsProps } from "./types";

const GroupNews = ({
  firstProp,
  secondProp,
  thirdProp,
  footer,
  header,
  onClick,
}: GroupNewsProps) => (
  <Box className="w-[320px] h-[630px] max-h-[630px] max-w-[320px] rounded-lg border-gray-200 border ">
    <Text className="text-base font-bold m-3 ml-5">{header}</Text>
    <Box className="w-[320px] h-[1px] bg-gray-200 right-6" />
    <Box className="p-5 gap-12 flex flex-col">
      <NewsArticle
        onClick={() => window.open(firstProp.url)}
        title={firstProp.title}
        previewImage={firstProp.image}
        group
      />
      <Divider />
      <NewsArticle
        onClick={() => window.open(secondProp.url)}
        title={secondProp.title}
        previewImage={secondProp.image}
        group
      />
      <Divider />
      <NewsArticle
        onClick={() => window.open(thirdProp.url)}
        title={thirdProp.title}
        previewImage={thirdProp.image}
        group
      />
    </Box>
    <Box className="w-[320px] h-[1px] bg-gray-200 right-6" />
    <Box className="flex justify-start items-center">
      <Text
        className="text-[#C4170C] text-sm font-bold m-3 ml-5 cursor-pointer"
        onClick={onClick}
      >
        {footer}
      </Text>
      <CaretDown color="#C4170C" size={14} weight="bold" />
    </Box>
  </Box>
);

export default GroupNews;
