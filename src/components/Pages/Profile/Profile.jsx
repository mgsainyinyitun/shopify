import Configuration from "./Configuration";
import LogInfo from "./LogInfo";
import Service from "./Service";
import UserInfo from "./UserInfo";

function Profile() {
    return (
        <>
            <UserInfo />
            <LogInfo />
            <Service/>
            <Configuration/>
        </>

    );
}

export default Profile; 