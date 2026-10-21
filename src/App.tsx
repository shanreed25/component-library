import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
import {users} from './data/users'

import "./App.css";



export default function App() {
  {users.map((user)=> (console.log(user.id.charAt(user.id.length -1))))}
  return (
    <div className="app">
    <section>
      <h2>Alerts</h2>
      <div>
        <AlertBox type="success" message="Your profile has been updated successfully!">
          <em>You can now continue using the application.</em>
        </AlertBox>

        {/* children is undefined */}
        <AlertBox type="info" message="You have 4,289 points"/>
        <AlertBox type="error" message="Something went wrong. Please Try again later."/>

        <AlertBox type="warning" message="Your message will not be saved">
            <em>Save the message before closing</em>
        </AlertBox>
      </div>
      
      
      
    </section>
      

      <section>
        <h2>User Profile Cards</h2>
        
        <div className="cards">
          
          {users.map((user)=> (
            
            Number(user.id.charAt(user.id.length -1)) % 2 === 0 ? (
              <UserProfileCard user={user} />
            ) : (
              <UserProfileCard user={user} >
                <em>Last Login: {user.id.charAt(user.id.length -1)} hours ago </em>
              </UserProfileCard>
            )

          ))}

          
          
        

        {/* <UserProfileCard user={user2}>
        <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
        </UserProfileCard> */}
        </div>
        
   
      </section>

      <section>
        {/* <ProductDisplay /> */}
      </section>
    </div>
  );
}
