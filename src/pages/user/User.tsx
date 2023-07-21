import './user.scss';
import Single from "../../components/single/Single.tsx";
import {singleUser} from "../../data.ts";

const User = () => {

    // Fetch data send to Single Component

    return (
        <div className='user'>
            <Single {...singleUser}/>
        </div>
    );
};

export default User;
