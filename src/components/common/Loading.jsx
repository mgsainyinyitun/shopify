import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh" // Make the box occupy the entire viewport height
            width="100vw" // Make the box occupy the entire viewport width
            position="fixed" // Position the box fixed to ensure it stays in the viewport
            top={0}
            left={0}
            bgcolor="rgba(0, 0, 0, 0.5)" // Semi-transparent background
            zIndex={9999} // Ensure the loading box appears on top of other content
        >
            <CircularProgress />
        </Box>
    );
}