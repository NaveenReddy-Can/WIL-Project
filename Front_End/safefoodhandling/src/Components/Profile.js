import { useAuth0 } from '@auth0/auth0-react';
import './css/profile.css';
const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (

        isAuthenticated && (
            <article className='profilestyle'>
                <center> {user?.picture && <img src={user.picture} alt={user?.name} />}</center>
                <h2>{user?.name}</h2>
                <ul>
                    {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]} </li>)}
                </ul>
            </article>
        )

    )

}

export default Profile
