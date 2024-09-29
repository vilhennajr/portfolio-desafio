"use client";

import {
  Box,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  AspectRatio,
  useMediaQuery,
} from "@chakra-ui/react";
import type { NewsArticleProps } from "./types";
import React, { useState } from "react";
import { Play } from "@phosphor-icons/react/dist/ssr";

const NewsArticle = ({
  live,
  previewImage,
  description,
  time,
  title,
  emphasis,
  video,
  group,
  onClick,
  link,
}: NewsArticleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");

  const onClose = () => setIsOpen(false);

  const minuteTime = (video?.duration ?? 0) / 60000;
  const formatedTime = Math.round(minuteTime);

  return (
    <>
      {group ? (
        <Box className="flex gap-2 justify-center items-center">
          <Text
            className="font-bold text-sm text-[#c4170c] w-3/5 hover:underline cursor-pointer"
            onClick={onClick}
          >
            {title?.length > 50 ? `${title.slice(0, 50)}...` : title ?? ""}
          </Text>
          <AspectRatio height={100} ratio={9 / 2} className="w-2/5">
            <Image className="rounded-3xl" src={previewImage} alt="Imagem" />
          </AspectRatio>
        </Box>
      ) : (
        <>
          {isLargerThanMd ? (
            <>
              {title ? (
                <Box>
                  <Box className="w-full h-full flex gap-3">
                    <Box className="relative">
                      <Image
                        alt="Imagem"
                        className="w-[270px] h-[172px] relative"
                        src={
                          previewImage
                            ? previewImage
                            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS4AAACnCAMAAACYVkHVAAAAJ1BMVEX09PTa2trc3Nz29vbj4+Pg4ODv7+/Y2Njy8vLt7e3q6urm5ubn5+eHk7pVAAAEMklEQVR4nO2ci46jMAxFSZw3/P/3ru0QFtoppSPtUsn3rDSLmFaCIycxjplpAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxzSLj7Ir4b8UPdU6lL8MvdF/TtiKjSQnQ5O+cClbsv6OvQEddDKrEo7xTPuAhdeySUivgqqc5xmBq6+MfdF/hVSFxRSYuEVGY93j/ocunuS/wCxujjsTeLKOe3aFJlfMKHJfDJXK2vjUVNldpCl7SLJvXlY2hJBmiSs4vlXGJM596tpvxel+OQSrt0S05Gk7aKGuhjT91sAbUeSUhNx7SUIv8i3nXFt8KiJKTyELVN5jz2ZhY1PSfwNMnk5S0mEhT6JL4be1kjqhZN4Pkj5dELURO5xeBopPnvbJXV1CKz+ekzIesSu8mirjrCSseemprerXmUOCDdbFAXJwWsK3ZR178VOXXdL4125jGJrjBUlbKWHd4QZSXYn7j3Hv4fPSn48HYpcHTtl8ZkJbxUlx/B5a+yJWcrVuZ9muXOR1LgfosZXVXutkLXNahwQp9HKfmQ20PXT4igsB6LrvgZIZrSJXO9H7VR0RXW1OBSRkHr5GdHVxBdayIgh+GTO2dhwZSuadHb7cerrpKuMpnTlTLPXm3U/USXrJZZGf+/pE7WdBWpR8xHXb6vkMctjWe8QV381Ohz/FlXCKfpg0ldUl5Yl8ajrkWWvvkkvizq4kyAh1xfGg+65t4XMUPXHi0l57407nR5N61Pkg+Zvl//GdXFSyPfb9PDva5RpiB/mO99f1Cyq0sfrHty+l4X/6ZuFWuTuki2GPu24WEw1j531d1glNJW5QefmvvOtkldum2oh4ep3nddx+abntDyfGdVF1GT7F3n9aMu30ppx4nLz9p2UihY1aVL41ohfEhTnxKHv8/fFMzqKnLDywVduz0Q0iK/RV0TbSbe6OLPbNGl+yA2dUlPiS6Np7rysYuEik1dWrLqj0Gnuh57biiZHIxEC1vSx6DXurzLz92oNVdz5cHRVyIJ1Ul0/dSMSnMzqEtmbacVwidd+cyWtv4a1CUVQu2oOejiTCGUIM3O2buXjc4GdfFTo1QIy0N0xUaFmqajy0sdFnVJhdCnH8qD8irLItu2L1tsLOpqWvKS9F51ScEwbsOP0nzSj2RRl75YMG+6qne7zdly2rRrUBcvjU4rhCO6fDv00Z991aIubbmMI7okni7fvkVda1/J0PXcS3/yVXu6aJr1DdjwcUuJSV3T1NzY3IGuCyS3vbf4WcOSSV2l9N0x+Rnef3yHxUdsJm4t4D58grVmyw6F0Goqr2r0J/QvGNM19TenPnW1YU1Xz7Sg6yL9di+/5PII/kwCeMsv/1JLmSy+aQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjiD11yHkXgwpzGAAAAAElFTkSuQmCC"
                        }
                      />
                      {video ? (
                        <Box
                          onClick={() => {
                            setIsOpen(true);
                          }}
                          className="absolute bottom-5 left-5 flex justify-center items-center gap-2"
                        >
                          <div className=" h-12 w-12 rounded-full bg-white justify-center items-center flex cursor-pointer">
                            <Play size={30} color="#A30F06" weight="fill" />
                          </div>
                          <Text className="text-white text-base font-semibold">
                            {formatedTime} min
                          </Text>
                        </Box>
                      ) : null}
                    </Box>

                    <Box className="gap-3 flex flex-col">
                      {live ? (
                        <Box className="bg-[#FF0000] w-[58px] rounded-md justify-center items-center flex h-[20px]">
                          <Text className="text-white font-bold text-xs">
                            AO VIVO
                          </Text>
                        </Box>
                      ) : (
                        <Text className="text-[#333333] font-semibold text-base">
                          {emphasis}
                        </Text>
                      )}
                      <Text
                        onClick={() => {
                          window.open(link);
                        }}
                        className="font-bold text-2xl max-w-[338px] text-[#C4170C] hover:underline cursor-pointer"
                      >
                        {title?.length > 60
                          ? `${title.slice(0, 60)}...`
                          : title ?? "Erro ao carregar matéria"}
                      </Text>
                      <Text className="text-[#555555] font-normal  max-w-[338px] text-base">
                        {description?.length ?? 0 > 100
                          ? `${description?.slice(0, 100)}...`
                          : description ?? ""}
                      </Text>
                      {emphasis ? (
                        <Text className="text-[#555555] font-normal text-xs">
                          Há {time} horas — Em {emphasis}
                        </Text>
                      ) : (
                        <></>
                      )}
                    </Box>
                  </Box>
                </Box>
              ) : (
                <></>
              )}
            </>
          ) : (
            <Box className="w-[430px] h-full flex flex-col justify-start items-start gap-3">
              <Box className="gap-3 flex flex-col">
                <Text className="font-bold text-2xl max-w-[430px] text-[#C4170C]">
                  {title?.length > 70
                    ? `${title.slice(0, 70)}...`
                    : title ?? ""}
                </Text>
                <Text className="text-[#555555] font-normal  max-w-[430px] text-base">
                  {description?.length ?? 0 > 100
                    ? `${description?.slice(0, 100)}...`
                    : description ?? ""}
                </Text>
              </Box>
              <Box className="relative">
                <Image
                  className="w-[430px] h-[230px] relative"
                  src={previewImage}
                  alt="Imagem"
                />
                {video ? (
                  <Box
                    onClick={() => {
                      setIsOpen(true);
                    }}
                    className="absolute bottom-10 left-5 flex justify-center items-center gap-2"
                  >
                    <div className=" h-12 w-12 rounded-full bg-white justify-center items-center flex cursor-pointer">
                      <Play size={30} color="#A30F06" weight="fill" />
                    </div>
                    <Text className="text-white text-base font-semibold">
                      {formatedTime} min
                    </Text>
                  </Box>
                ) : null}
              </Box>
              <Text className="text-[#555555] font-normal text-start text-xs px-4">
                Há {time} horas — Em {emphasis}
              </Text>
            </Box>
          )}

          <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay bg="rgba(0, 0, 0, 0.9)" />
            <ModalContent bg="transparent" boxShadow="none">
              <ModalCloseButton color="#FFF" className="pb-32 pl-32" />
              <ModalBody className="flex flex-col items-center justify-center">
                <Text className="text-[28px] text-center font-normal text-white mb-5">
                  {title}
                </Text>

                <AspectRatio w="100%" h="100%" ratio={1}>
                  <iframe title={title} src={video?.source} allowFullScreen />
                </AspectRatio>
              </ModalBody>
              <ModalFooter />
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};

export default NewsArticle;
