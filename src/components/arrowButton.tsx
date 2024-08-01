import { Box } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";

interface ArrowButtonProps {
  handleClick: () => void;
  isExpanded: boolean;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  handleClick,
  isExpanded,
}) => {
  console.log(isExpanded);

  return (
    <Box
      position={"absolute"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      left={110}
      bottom={2}
      width={59}
      height={59}
      borderRadius={"50%"}
      bgColor={"white"}
      boxShadow="0 8px 12px rgba(0, 0, 0, 0.5)"
      onClick={handleClick}
      transition={"height 0.3s ease"}
    >
      <Box
        transition={"height 0.3s ease"}
        transform={isExpanded ? "rotate(180deg)" : "rotate(0deg)"} // Aplica a rotação
      >
        <IoIosArrowDown fontSize={45} color="green" />
      </Box>
    </Box>
  );
};

export default ArrowButton;
