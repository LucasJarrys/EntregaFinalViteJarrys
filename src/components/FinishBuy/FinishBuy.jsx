import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const FinishBuy = ({ orderId }) => {
  return (
    <div>
       <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        Gracias por su compra! su id de transacción es: {orderId}
      </Alert>
      </Stack>
      <Link to="/">Seguir comprando</Link>
    </div>
  );
};

export default FinishBuy;