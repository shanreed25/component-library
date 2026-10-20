import type { UserProfileCardProps } from "../../types/index"

export function UserProfileCard(props: UserProfileCardProps){
    return (
        <>
        <div className="user-card-info">
            <img src={props.user.avatarUrl} alt="user placeholder image" width={200} height={200} />
            <div>
                <h3>{props.user.name}</h3>
                <p>{props.user.email}</p>
                <p>{props.user.role}</p>
            </div>
        </div>
        <button className="user-card-button">Edit Profile</button>
        </>
    )
}