import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface CardProps {
  dia: string;
	descricao: string;
}

const FoodCard: React.FC<CardProps> = ({ dia, descricao }) => {
  return (
    <Box
      display={"flex"}
      width={300}
      background={"white"}
      marginLeft={100}
      border={"1px solid black"}
      borderRadius={15}
      alignItems={"center"}
    >
      <Image
				position={'absolute'}
				left={10}
        objectFit="cover"
        width={100}
        height={100}
				borderRadius={"50%"}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />
      <Box 
				display={'flex'}
				flexDirection={'column'}
				alignItems={"center"}
				justifyContent={'center'}
				// background={'red'}
				marginLeft={10}
				padding={5}
			>
        <Text fontSize={28} fontWeight={"bold"} marginRight={3}>{dia}</Text>
				{/* <Divider height={0.5} backgroundColor={'gray'} /> */}
        <Text fontSize={22} textAlign={'center'} marginTop={5}>{descricao}</Text>
      </Box>
    </Box>
  );
};

export default FoodCard;
