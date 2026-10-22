import type { UserProfileCardProps } from "../../types/index";

// : UserProfileCardProps part tells TypeScript which interface the props follow
// //props is an object and I could use `props` but destructuring
// makes the properties easier to access
// destructuring: {user, showEmail, showRole, onEdit, children}
export function UserProfileCard({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}: UserProfileCardProps) {
  function capName(name: string){//capitalize each word in a name like "lisa jones" so it becomes "Lisa Jones"
    return name.toLowerCase().replace(/\b\w/g, letter => letter.toUpperCase());
  }

  return (
    <div className="user-card">
      <div className="user-card-info">
        <div>
          {/*
                    ternary works like if/else inside JSX:
                    condition ? (show this if true) : (show this if false)
                */}
          {user.avatarUrl ? (
            <img
              className="avatar"
              src={user.avatarUrl}
              alt="user image"
              width={200}
              height={200}
            /> //if the user has a picture, show it
          ) : (
            <div className="avatar letter-avatar">{capName(user.name.charAt(0))}</div> //if the user has no picture show the first letter of their name in a circle
          )}
        </div>
        <div>
          <h3>{capName(user.name)}</h3>
          {/* Only show email and role when they are true */}
          {showEmail && <p className="user-email">{user.email}</p>}
          {showRole && <p className="user-role">{user.role}</p>}
        </div>
      </div>

      {children && <p className="user-message">{children}</p>}

      {/* 
      onClick={onEdit(user.id)}
            this does not work because it calls onEdit when the card 
            renders, not on click, instead it needs a arrow function 
            because onEdit has to receive the user's id
            */}
      <button 
      className="user-card-button" 
      onClick={() => onEdit?.(user.id)} //creates a function that runs only on click and passes the id
      >
        Edit Profile
      </button>
    </div>
  );
}
