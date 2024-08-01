import { Box } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

const ArrowButton = () => {
  return (
    <Box
			position={'absolute'}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'center'}
			right={-67}
      width={70}
      height={70}
      borderRadius={"50%"}
      bgColor={"white"}
      boxShadow="0 8px 12px rgba(0, 0, 0, 0.5)" // Sombra personalizada
    >
			<IoIosArrowForward fontSize={45} color="green"/>
		</Box>
  );
};

export default ArrowButton;
