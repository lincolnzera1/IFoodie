import { Box, Image } from "@chakra-ui/react";
import FoodCard from "../../components/FoodCard";
import Logo from "../../assets/logo.png";

const Home = () => {
  const merendas = [
    {
      dia: "Segunda-feira",
      prato: "Macarrão com Suco de Laranja",
      deltalhe:
        "Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. ",
    },
    {
      dia: "Terça-feira",
      prato: "Sanduíche de Frango com Suco de Maçã",
      deltalhe:
        "Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. Macarrão faz bem pra saúde. ",
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
    <Box backgroundColor={"white"} height={"100vh"} width={"100vw"} display="flex" flexDirection="column">
      <Box
        backgroundColor={"#6F9B4E"}
        width={"40%"}
        display={"flex"}
        flexDirection={"column"}
        paddingTop={123}
        flex="1"
      >
        <Image
          position={"absolute"}
          top={0}
          marginTop={10}
          marginLeft={5}
          src={Logo}
          width={200}
        />
        <Box flex="1">
          {merendas.map((dia, index) => (
            <FoodCard
              key={index}
              dia={dia.dia}
              descricao={dia.prato}
              detalhe={dia.deltalhe}
              espacamento={index === merendas.length - 1 ? 5 : undefined}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
