import type { UserProfileCardProps } from "../../types/index"

// destructuring: {user, showEmail, showRole, onEdit, children}
export function UserProfileCard({user, showEmail, showRole, onEdit, children}: UserProfileCardProps){
    return (
        <div className="card">
        <div className="user-card-info">
          <div>
                 {/*
                    ternary works like if/else inside JSX:
                    condition ? (show this if true) : (show this if false)
                    if the user has a picture, show it
                    if the user has no picture show the first letter of their name in a circle
                */}
                {user.avatarUrl ?(
                    <img className="avatar" src={user.avatarUrl} alt="user placeholder image" width={200} height={200} />
                ): (
                    <div className="avatar letter-avatar" >
                        {user.name.charAt(0)}
                    </div>
                )}

                {children && <p className="user-message"><em>{children}</em></p>}
                
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