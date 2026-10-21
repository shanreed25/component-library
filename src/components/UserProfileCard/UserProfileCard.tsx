import type { UserProfileCardProps } from "../../types/index"

// destructuring: {user, showEmail, showRole, onEdit, children}
export function UserProfileCard({user, showEmail, showRole, onEdit, children}: UserProfileCardProps){
    return (
        <div className="user-card">

        <div className="user-card-info">
          <div>
                 {/*
                    ternary works like if/else inside JSX:
                    condition ? (show this if true) : (show this if false)
                */}
                {user.avatarUrl ?(
                    <img className="avatar" src={user.avatarUrl} alt="user image" width={200} height={200} /> //if the user has a picture, show it
                ): (
                    <div className="avatar letter-avatar" >
                        {user.name.charAt(0)}
                    </div>//if the user has no picture show the first letter of their name in a circle
                )}

                {children && <p className="user-message">{children}</p>}
                
          </div>
            <div>
                <h3>{user.name}</h3>
                <p className="user-email">{user.email}</p>
                <p className="user-role">{user.role}</p>
            </div>
        </div>

        <button className="user-card-button">Edit Profile</button>
        </div>
    )
}