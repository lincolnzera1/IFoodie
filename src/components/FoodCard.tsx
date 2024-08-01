import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Hamburguer from "../assets/hamburguer.png";
import ArrowButton from "./arrowButton";

interface CardProps {
  dia: string;
  descricao: string;
}

const FoodCard: React.FC<CardProps> = ({ dia, descricao }) => {
  return (
    <Box
      display={"flex"}
      width={250}
      minHeight={100}
      background={"white"}
      marginLeft={90}
      // marginRight={5}
      // border={"1px solid black"}
      borderRadius={15}
      alignItems={"center"}
      boxShadow="0 8px 12px rgba(0, 0, 0, 0.5)" // Sombra personalizada
    >
      <Box
        backgroundColor={"white"}
        position={"absolute"}
        left={10}
        borderRadius={"40%"}
        padding={2}
        border={"1px solid gray"}
      >
        <Image
          objectFit="contain"
          width={62}
          src={Hamburguer}
          alt="Caffe Latte"
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        // background={'red'}
        marginLeft={3}
        padding={2}
      >
        <Text
          fontFamily={"Roboto"}
          fontSize={20}
          fontWeight={"bold"}
          marginRight={7}
        >
          {dia}
        </Text>
        {/* <Divider height={0.5} backgroundColor={'gray'} /> */}
        <Text
          fontFamily={"Roboto"}
          fontSize={16}
          textAlign={"center"}
          // marginTop={5}
        >
          {descricao}
        </Text>
      </Box>
      <ArrowButton />
    </Box>
  );
};

export default FoodCard;
