import {
  Box,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";
import Hamburguer from "../assets/hamburguer.png";
import ArrowButton from "./arrowButton";
import { motion } from "framer-motion";
import "./styles.css";

// Cria um componente MotionBox para adicionar animação
const MotionBox = motion(Box);
const MotionAccordionPanel = motion(AccordionPanel);

interface CardProps {
  dia: string;
  descricao: string;
  detalhe?: string;
  espacamento?: number
}

const FoodCard: React.FC<CardProps> = ({ dia, descricao, detalhe, espacamento }) => {
  const [isClicked, setisClicked] = React.useState(false);

  const handleClick = () => {
    setisClicked(!isClicked);
  };

  return (
    <Accordion allowMultiple border={"none"} marginBottom={espacamento ? espacamento : "0"}>
      <AccordionItem border={"none"}>
        {({ isExpanded }) => (
          <MotionBox
            display={"flex"}
            width={240}
            background={"white"}
            marginLeft={90}
            marginTop={5}
            borderRadius={15}
            alignItems={"start"}
            boxShadow={"0 8px 12px rgba(0, 0, 0, 0.5)"}
            animate={{ height: isExpanded ? "*" : "auto" }} // Ajuste a altura conforme necessário
            transition={{ duration: 0.3 }} // Duração da animação
            boxSizing={"border-box"}
          >
            <Box
              backgroundColor={"white"}
              position={"absolute"}
              left={6}
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
              position={"relative"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
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
              <Text fontFamily={"Roboto"} fontSize={16} textAlign={"center"}>
                {descricao}
              </Text>
              <MotionAccordionPanel
                pb={4}
                initial={{ height: 0 }}
                animate={{ height: isExpanded ? "auto" : "auto" }} // Altura automática quando expandido, 0 quando recolhido
                transition={{ duration: 0.3 }} // Duração da animação
                style={{ overflow: "hidden" }} // Adiciona overflow hidden para esconder o conteúdo extra
              >
                <strong>Informações adicionais: </strong>
                <Text marginTop={5}>{detalhe ? detalhe : "Sem informações adicionais"}</Text>
              </MotionAccordionPanel>
              <h2 style={{ position: "relative" }}>
                <AccordionButton>
                  <ArrowButton
                    handleClick={handleClick}
                    isExpanded={isClicked}
                  />
                </AccordionButton>
              </h2>
            </Box>
          </MotionBox>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default FoodCard;
