import { Alert } from "@mui/material";


export default function NotificationAlert(props) {
    const { show, setShow, type } = props;

    return (
        <Alert
            severity={type}
            onClose={() => { setShow(false) }}
            sx={{ display: show == true ? "" : "none", zIndex:1, width: "60%", position: 'absolute', left: "50%", top:'30px', transform: 'translate(-50%, -50%)' }}>
            {props.message}
        </Alert>
    );
}

