import axios from "axios";
import { API_HOST } from "../constant";


export function getImageFromDb(uuid,setImageData) {
    const token = localStorage.getItem("accessToken");
    const url = `${API_HOST}/image/get`;
    axios.post(url, {
        "uuid": uuid,
    }, {
        responseType: 'arraybuffer',
        mode: 'no-cors',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })
        .then(response => {
            const base64String = btoa(
                new Uint8Array(response.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ''
                )
            );
            setImageData(`data:image/png;base64,${base64String}`)
        })
        .catch(error => {
            console.log(error);
            console.log("there is some error;")
        });
}