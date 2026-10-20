import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import shannonImg from "./assets/shannon_3d.png"

import "./App.css";


const user1 = {
  id: "1",
  name: "Shannon Reed",
  email: "shan.reed@example.com",
  role: "Software Engineer",
  avatarUrl: shannonImg,
};

const user2 = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Project Manager",
};

export default function App() {
  return (
    <div className="app">
    <section>
      <h2>Alerts</h2>
      <div>
        <AlertBox type="success" message="Your profile has been updated successfully!">
          <p>You can now continue using the application.</p>
        </AlertBox>

        {/* children is undefined */}
        <AlertBox type="info" message="You have 4,289 points"/>
        <AlertBox type="error" message="Something went wrong. Please Try again later."/>

        <AlertBox type="warning" message="Your message will not be saved">
            <p>Save the message before closing</p>
        </AlertBox>
      </div>
      
      
      
    </section>
      

      <section>
        <h2>User Profile Cards</h2>
        <div className="cards">
          <UserProfileCard
          user={user1}
          // showEmail={true}
          // showRole={true}
          // onEdit={(userId) => alert(`Editing user ${userId}`)}
        >
          <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
        </UserProfileCard>

        <UserProfileCard user={user2} />
        </div>
        
   
      </section>
    </div>
  );
}
