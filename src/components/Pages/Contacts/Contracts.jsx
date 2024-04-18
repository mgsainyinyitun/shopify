import { useEffect, useState } from "react";
import CurrentContracts from "./CurrentContracts";
import MerchantList from "./MerchantList";
import { API_HOST } from "../../../constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../common/Loading";

function Contracts() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [merchants, setMerchants] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        const url = `${API_HOST}/merchant/all`;

        axios.post(url, {}, {
            mode: 'no-cors',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => {
                setLoading(false);
                setMerchants(response.data.merchants);
            })
            .catch(error => {
                console.error(error);
                console.log("there is some error;")
                setLoading(false);
                navigate("/signin")
            });
    }, []);

    return (
        <>
            {loading ? <Loading /> :
                <>
                    <CurrentContracts />
                    <MerchantList merchants={merchants} />
                </>
            }
        </>
    );
}

export default Contracts; 