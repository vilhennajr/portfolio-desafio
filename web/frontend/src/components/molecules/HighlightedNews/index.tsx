import { Box, Text, Image, AspectRatio } from "@chakra-ui/react";
import type { HighlightedNewsProps } from "./types";

const HighlightedNews = ({
  description,
  emphasis,
  title,
  image,
}: HighlightedNewsProps) => {
  return (
    <>
      {image ? (
        <Box className="relative ">
          <AspectRatio
            className="max-w-[430px] 2xl:max-w-full h-[426px] w-[464px]"
            ratio={1 / 1}
          >
            <Image
              className="relative h-[426px] w-full"
              src={image}
              alt="Imagem"
            />
          </AspectRatio>
          <Text className="font-bold text-4xl text-white absolute bottom-0 p-6">
            {title}
          </Text>
        </Box>
      ) : (
        <Box className="flex flex-col max-w-[4300px] 2xl:min-w-[464px] min-h-[426px] bg-white shadow-sm drop-shadow-lg shadow-gray-400 rounded-md p-6 gap-10">
          <Text className="text-base font-medium">{emphasis}</Text>
          <Text className="text-[#C4170C] max-w-[416px] font-bold text-4xl">
            {title}
          </Text>
          <Text className="text-base font-normal line max-w-[416px]">
            {description}
          </Text>
        </Box>
      )}
    </>
  );
};

export default HighlightedNews;
