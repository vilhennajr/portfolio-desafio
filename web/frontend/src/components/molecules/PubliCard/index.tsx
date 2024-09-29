import { Box, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { X } from "@phosphor-icons/react/dist/ssr";

const PubliCard = () => {
  const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {isLargerThanMd ? (
        <Box className="w-[624px]">
          <Box className="flex justify-between">
            <Box className="flex justify-center items-center bg-[#ECB600] w-[56px] h-[20px] rounded-sm">
              <Text className="text-xs font-normal text-white">Anúncio</Text>
            </Box>
            <Box className="w-[15px] h-[15px] bg-[#CDCCCC] flex justify-center items-center cursor-pointer">
              <X color="#00AECD" />
            </Box>
          </Box>
          <Box className="flex gap-2">
            <Image
              alt="Imagem"
              className="w-[270px] h-[141px] cursor-pointer"
              src="https://s3-alpha-sig.figma.com/img/4021/9c69/cf620ec540c0fded67517eb3063a5645?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ob6-at0kd5g4pG2cjd75KNHanBJcCnOZsBvk1e-5OqHuGW8QcT5HuryvCTbiP0iIq9cJ0RmiTQdi1ekbWmVuBcRsa5yLAfygv33vumS68ksSNsKE06EjClOXMjY6ULE1kYcvtTfA2P9Brssjnr-IbaBraLRNcI2eyAvisR4XBJY7OzOXBBjMr0-b~9VehgpNktZXKasZFptLRJBojyhTTxUoqeSvRfMLaEW7iXauMRwBYdNqiXP2WCJnCtPsIqpBc1HUMSJIaP2pgFMi0ychGl4C-PTMd7wMR6FwNnJLMIfi5xT1sJkDQ8155m5ouxLRi75n0MKFGI9DJvwjdtjYWg__"
            />
            <Box>
              <Text className="text-2xl font-bold text-[#4D4D4D] italic">
                Aniversário Americanas com ofertas
              </Text>
              <Text className="text-sm font-normal text-gray-400">
                Aniversário Americanas com ofertas
              </Text>
              <Box className="flex flex-col justify-end items-end mt-5 gap-1">
                <Image
                  alt="Imagem"
                  className="w-[30px] h-[30px]"
                  src="https://s3-alpha-sig.figma.com/img/894f/32ac/0f6b578316daf1333aa2389d48ddc8db?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=npl8lys-852d~Kbi6stkVzcJC1P1IepxfEi-iXzXdvKk1dbpMy3TFmDY-dk-r4dMa3CLN63kNHvu-yjssKDUZWf717jpQ~ZSzBzUq-3d4G3QG~ku0A3u3HpeWP326mUupj1JgqlD7RwO8sd9IOl5lz3N4Q2OEUG9GFU13Ar3zhc4tGxZmprvzjxq--NgSJplW0GYdPYxMEtoODqhzpG0m5gTh0pkgL23ZCRdpyVKlsosu4QRwBJa1M1Tvgvu1K4jj~IlvU3zmT3x4AJiZaqs64SHz7Wev-TGIf459sGszEnxj59GHJHhh~FmZiv1tL4HvB5EbMb2sxcPln9oiTTA8g__"
                />
                <Text className="text-xs font-normal text-gray-400">
                  [DCM] Americanas :: Promo
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box className="w-[430px] p-5">
          <Box className="flex justify-between">
            <Box className="flex justify-center items-center bg-[#ECB600] w-[56px] h-[20px] rounded-sm">
              <Text className="text-xs font-normal text-white">Anúncio</Text>
            </Box>
            <Box className="w-[15px] h-[15px] bg-[#CDCCCC] flex justify-center items-center cursor-pointer">
              <X color="#00AECD" />
            </Box>
          </Box>
          <Box className="flex flex-col gap-2">
            <Image
              className="w-[430px] h-[200px] cursor-pointer"
              src="https://s3-alpha-sig.figma.com/img/4021/9c69/cf620ec540c0fded67517eb3063a5645?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ob6-at0kd5g4pG2cjd75KNHanBJcCnOZsBvk1e-5OqHuGW8QcT5HuryvCTbiP0iIq9cJ0RmiTQdi1ekbWmVuBcRsa5yLAfygv33vumS68ksSNsKE06EjClOXMjY6ULE1kYcvtTfA2P9Brssjnr-IbaBraLRNcI2eyAvisR4XBJY7OzOXBBjMr0-b~9VehgpNktZXKasZFptLRJBojyhTTxUoqeSvRfMLaEW7iXauMRwBYdNqiXP2WCJnCtPsIqpBc1HUMSJIaP2pgFMi0ychGl4C-PTMd7wMR6FwNnJLMIfi5xT1sJkDQ8155m5ouxLRi75n0MKFGI9DJvwjdtjYWg__"
              alt="Imagem"
            />
            <Box className="flex flex-col justify-start items-start">
              <Text className="text-2xl text-start italic font-bold text-[#4D4D4D]">
                Aniversário Americanas com ofertas
              </Text>
              <Text className="text-sm font-normal text-gray-400">
                Muito cashback pra fazer a festa
              </Text>
              <Box className="flex w-full justify-between items-end mt-5 gap-1">
                <Image
                  className="w-[30px] h-[30px]"
                  src="https://s3-alpha-sig.figma.com/img/894f/32ac/0f6b578316daf1333aa2389d48ddc8db?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=npl8lys-852d~Kbi6stkVzcJC1P1IepxfEi-iXzXdvKk1dbpMy3TFmDY-dk-r4dMa3CLN63kNHvu-yjssKDUZWf717jpQ~ZSzBzUq-3d4G3QG~ku0A3u3HpeWP326mUupj1JgqlD7RwO8sd9IOl5lz3N4Q2OEUG9GFU13Ar3zhc4tGxZmprvzjxq--NgSJplW0GYdPYxMEtoODqhzpG0m5gTh0pkgL23ZCRdpyVKlsosu4QRwBJa1M1Tvgvu1K4jj~IlvU3zmT3x4AJiZaqs64SHz7Wev-TGIf459sGszEnxj59GHJHhh~FmZiv1tL4HvB5EbMb2sxcPln9oiTTA8g__"
                  alt="Imagem"
                />
                <Text className="text-xs font-normal text-gray-400">
                  [DCM] Americanas :: Promo
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PubliCard;
