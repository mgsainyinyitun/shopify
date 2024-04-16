import { Button } from "@mui/material"

export default function LightButton(props) {

    const sty = props.style;

    return (
        <Button
            {...props}
            variant="contained" disableElevation
            sx={{
                    background: '#ede7f6', color: 'green',
                    '&:hover': {
                        backgroundColor: 'lightgray',
                        color: 'darkgreen',
                    },
                    width:'100%',
                }}
        >
            {props.text}
        </Button>
    );
}