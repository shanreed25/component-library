import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
import { users } from "./data/users";
import { products } from "./data/products";
import { useState } from "react";

import "./App.css";



function handleEdit(userId: string) {
  console.log(`Edit user: ${userId}`);
}

function handleAddToCart(productId: string) {
  console.log(`Added to cart: ${productId}`);
}


export default function App() {
  const [activeTab, setActiveTab] = useState("alerts");

  //keeps each tab’s id and label in one place, so adding 
  // a tab needs a new object here
  const tabs = [
  {id: "alerts", label: "Alerts"},
  {id: "users", label: "User Profile Cards"},
  {id: "products", label: "Products Cards"}

]

console.log(activeTab);

  //need useState to remove the alert from the page 
  const [showSuccessAlert, setShowSuccessAlert] = useState(true)
  const [showInfoAlert, setShowInfoAlert] = useState(true)
  const [showErrorAlert, setShowErrorAlert] = useState(true)
  const [showWarningAlert, setShowWarningAlert] = useState(true)

  //under the hood useState is a generic function, and <string[]>
  //  passes a type argument to it
  // const [cartItems, setCartItems] = useState<string[]>([]);
 
  return (
    <div className="app">
      <nav className="tabs">
        {/* Creates a button for each tab, that calls setActiveTab with its own id */}
        {tabs.map((tab) => (
          //each item rendered from .map() so it can tell the items apart between renders
          //this code works with or without the key because this is a fixed list of three 
          // buttons that never changes
          <button key={tab.id}
          className={tab.id === activeTab ? "tab active": "tab"}
          type="button" 
          onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            </button>
        ) )}
      </nav>




      {/******************** Alert Box Reusable Comeponent Section ********************/}
      {activeTab === "alerts" && 
      <section>
        <h2>Alerts</h2>
        <div>
         { showSuccessAlert && <AlertBox
            type="success"
            message="Your profile has been updated successfully!"
            onClose={() => setShowSuccessAlert(false)}
          >
            <em>You can now continue using the application.</em>
          </AlertBox>}

          {/* children is undefined */}
          {showInfoAlert && <AlertBox
            type="info"
            message="You have 4,289 points"
            onClose={() => setShowInfoAlert(false)}
          />}
          {showErrorAlert && <AlertBox
            type="error"
            message="Something went wrong. Please Try again later."
            onClose={() => setShowErrorAlert(false)}
          />}

          {showWarningAlert && <AlertBox
            type="warning"
            message="Your message will not be saved"
            onClose={() => setShowWarningAlert(false)}
          >
            <em>Save the message before closing</em>
          </AlertBox>}
        </div>
      </section>}

      {/******************** User Profile Card Reusable Comeponent Section ********************/}
      {activeTab === "users" && 
      <section>
        <h2>User Profile Cards</h2>

        <div className="cards">
          {users.map((user) =>
            Number(user.id.charAt(user.id.length - 1)) % 2 === 0 ? (
              <UserProfileCard
                user={user}
                showRole={false}
                onEdit={handleEdit}
              /> //if user id ends in a even number
            ) : (
              <UserProfileCard
                user={user}
                showEmail={false}
                onEdit={handleEdit}
              >
                <em>
                  Last Login: {user.id.charAt(user.id.length - 1)} hours
                  ago{" "}
                </em>
              </UserProfileCard> //if user id ends in a odd number
            ),
          )}
        </div>
      </section>}

      {/******************** Product Card Reusable Comeponent Section ********************/}

     {activeTab === "products" &&  <section>
        <h2>Product Cards</h2>

        <div className="cards">
          {products.map((product) =>
            product.inStock === true ? (
              <ProductDisplay product={product} onAddToCart={handleAddToCart} />
            ) : (
              <ProductDisplay
                product={product}
                showDescription={false}
                
              />
            ),
          )}
        </div>
      </section>}
    </div>
  );
}
