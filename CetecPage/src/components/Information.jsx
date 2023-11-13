import { FaTelegramPlane } from "@react-icons/all-files/fa/FaTelegramPlane";
import { Box, Link } from "@chakra-ui/react";
import { AiTwotoneMail } from "@react-icons/all-files/ai/AiTwotoneMail";
export default function Informations() {
  return (
    <Box mt={200}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <AiTwotoneMail size={25} />
        <Link href="mailto:info@cetec.ir" className="info">
          info@cetec.ir
        </Link>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <FaTelegramPlane size={25} />
        <Link a href="https://t.me/CETECIran" className="info" target="_blank">
          @CETECIran
        </Link>
      </Box>
    </Box>
  );
}
