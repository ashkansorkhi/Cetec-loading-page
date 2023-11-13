import { AiOutlineMail } from "react-icons/Ai";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { Box, Text, Link } from "@chakra-ui/react";

export default function Informations() {
  return (
    <Box mt={200}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <AiOutlineMail size={25} />
        <a href="mailto:info@cetec.ir" className="info">
          info@cetec.ir
        </a>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <PiTelegramLogoDuotone size={25} />
        <a a href="https://t.me/CETECIran" className="info" target="_blank">
          @CETECIran
        </a>
      </Box>
    </Box>
  );
}
