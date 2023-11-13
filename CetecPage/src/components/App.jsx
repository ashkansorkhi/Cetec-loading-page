import { Image, Box, CircularProgress, Text } from "@chakra-ui/react";
import Informations from "./Information";
import "./App.css";

function App() {
  return (
    <Box className="container">
      <Box display="flex" alignItems="center" mx={10} justifyContent="center">
        <Image src="/Logo.png" alt="cETEc Logo" w={600} my={30} />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress color="orange.400" thickness="12px" isIndeterminate />
        <Text className="text" mx="20px">
          {" "}
          ... سایت در دست ساخت{" "}
        </Text>
      </Box>
      <Informations />
    </Box>
  );
}

export default App;
