import { useNavigate } from "react-router-dom";
import Configuration from "./Configuration";
import LogInfo from "./LogInfo";
import Service from "./Service";
import UserInfo from "./UserInfo";
import { useEffect, useState } from "react";
import Loading from "../../common/Loading";
import axios from "axios";
import { API_HOST } from "../../../constant";

function Profile() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user,setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        const url = `${API_HOST}/user/details`;

        axios.get(url, {
            mode: 'no-cors',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setLoading(false);
                console.log(response.data);
                setUser(response.data);
            })
            .catch(error => {
                setLoading(false);
                navigate("/signin")
            });
    }, []);
    return (
        <>
            {
            loading ? <Loading /> :
                <>
                    <UserInfo user={user}/>
                    <LogInfo />
                    <Service />
                    <Configuration />
                </>
            }
        </>

    );
}

export default Profile; 