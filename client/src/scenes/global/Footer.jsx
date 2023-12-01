import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            BAMBINOS PIZZA
          </Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Acerca de nosotros
          </Typography>
          <Typography mb="30px">Empleo</Typography>
          <Typography mb="30px">Nuestras sucursales</Typography>
          <Typography mb="30px">Terminos & Condiciones</Typography>
          <Typography mb="30px">Política de privacidad</Typography>
        </Box>

        {/*<Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
  </Box>*/}

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contáctanos
          </Typography>
          <Typography mb="30px">
          Calle Pachuca 92, Hab Valle Ceylan, 54150 Tlalnepantla, Estado de México.
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Teléfonos: 55 53 88 89 50,      55 53 69 27 99
            </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;