import { Box } from "@mui/material";
import MerchantData from "./MerchantData";
import MerchantLog from "./MerchantLog";

function Job() {
    return (
        <Box mt={10}>
            <MerchantData />
            <MerchantLog/>
        </Box>
    );
}

export default Job; 