import { Box } from "@chakra-ui/react";
import FoodCard from "../../components/FoodCard";

const Home = () => {
  const merendas = [
    {
      dia: "Segunda-feira",
      prato: "Macarrão com Suco de Laranja",
    },
    {
      dia: "Terça-feira",
      prato: "Sanduíche de Frango com Suco de Maçã",
    },
    {
      dia: "Quarta-feira",
      prato: "Arroz com Feijão e Suco de Abacaxi",
    },
    {
      dia: "Quinta-feira",
      prato: "Esfiha de Carne com Suco de Morango",
    },
    {
      dia: "Sexta-feira",
      prato: "Pizza de Calabresa com Suco de Uva ",
    },
  ];

  return (
    <Box
      backgroundColor={"white"}
      height={"100%"}
      width={"100vw"}
    >
      <Box
        height={"100vh"}
        backgroundColor={"#6F9B4E"}
        width={"40%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        paddingTop={73}
      >
        {merendas.map((dia) => (
          <FoodCard dia={dia.dia} descricao={dia.prato} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
