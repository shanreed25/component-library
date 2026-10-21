import type { UserProfileCardProps } from "../../types/index"

// : UserProfileCardProps part tells TypeScript which interface the props follow
// //props is an object and I could use `props` but destructuring 
// makes the properties easier to access
// destructuring: {user, showEmail, showRole, onEdit, children}
export function UserProfileCard({user, showEmail=true, showRole=true, onEdit, children}: UserProfileCardProps){
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

                
                
          </div>
            <div>
                <h3>{user.name}</h3>
                {/* Only show email and role when they are true */}
                {showEmail && <p className="user-email">{user.email}</p>}
                {showRole && <p className="user-role">{user.role}</p>}
            </div>
        </div>

        
        {children && <p className="user-message">{children}</p>}
        <button className="user-card-button">Edit Profile</button>
        </div>
    )
}