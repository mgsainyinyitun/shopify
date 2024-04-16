import { Box, Typography } from "@mui/material";
export default function ProfileItem(props) {
    return (
        <Box p={1} mb={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box mr={2}>
                    {props.icon}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box>
                        <Typography variant="body1">
                            {props.title}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2">{props.description}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ alignSelf: 'flex-end' }}>
                {props.leftContent ? props.leftContent : null}
            </Box>
        </Box>
    );
}