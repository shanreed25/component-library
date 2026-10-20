import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import profileImage from "./assets/profileImage.png"

import "./App.css";


const user = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Software Engineer",
  // avatarUrl: profileImage,
};

export default function App() {
  return (
    <div className="app">
    <section>
      <h2>Alerts</h2>

      
      <AlertBox type="success" message="Your profile has been updated successfully!">
          <p>You can now continue using the application.</p>
      </AlertBox>

      {/* children is undefined */}
      <AlertBox type="info" message="You have 4,289 points"/>
      <AlertBox type="error" message="Something went wrong. Please Try again later."/>

      <AlertBox type="warning" message="Your message will not be saved">
          <p>Save the message before closing</p>
      </AlertBox>
      
    </section>
      

      <section>
        <UserProfileCard
          user={user}
          // showEmail={true}
          // showRole={true}
          // onEdit={(userId) => alert(`Editing user ${userId}`)}
        >
          <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
        </UserProfileCard>
      </section>
    </div>
  );
}
