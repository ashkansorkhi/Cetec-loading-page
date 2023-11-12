import { Image, Box, CircularProgress, Text } from "@chakra-ui/react";
import "./App.css";
function App() {
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image src="/Logo.PNG" alt="cETEc Logo" />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress color="orange.400" thickness="12px" isIndeterminate />
        <Text className="text" mx="20px">
          {" "}
          ... سایت در دست ساخت{" "}
        </Text>
      </Box>
    </>
  );
}

export default App;
