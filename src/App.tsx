import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
import { users } from "./data/users";
import { products } from "./data/products";

import "./App.css";

export default function App() {
  {products.map((product)=> (console.log(product.imageUrl)))}
  return (
    <div className="app">
      {/******************** Alert Box Reusable Comeponent Section ********************/}
      <section>
        <h2>Alerts</h2>
        <div>
          <AlertBox
            type="success"
            message="Your profile has been updated successfully!"
          >
            <em>You can now continue using the application.</em>
          </AlertBox>

          {/* children is undefined */}
          <AlertBox type="info" message="You have 4,289 points" />
          <AlertBox
            type="error"
            message="Something went wrong. Please Try again later."
          />

          <AlertBox type="warning" message="Your message will not be saved">
            <em>Save the message before closing</em>
          </AlertBox>
        </div>
      </section>

      {/******************** User Profile Card Reusable Comeponent Section ********************/}
      <section>
        <h2>User Profile Cards</h2>

        <div className="cards">
          {users.map((user) =>
            Number(user.id.charAt(user.id.length - 1)) % 2 === 0 ? (
              <UserProfileCard user={user} showRole={false}/> //if user id ends in a even number
            ) : (
              <UserProfileCard user={user} showEmail={false}>
                <em>
                  Last Login: {user.id.charAt(user.id.length - 1)} hours
                  ago{" "}
                </em>
              </UserProfileCard> //if user id ends in a odd number
            ),
          )}
        </div>
      </section>

      {/******************** Product Card Reusable Comeponent Section ********************/}

      <section>
        <h2>Product Cards</h2>

       <div className="cards"> 
        {products.map((product) => <ProductDisplay product={product}/>)}
       </div>
        
        </section>
    </div>
  );
}
