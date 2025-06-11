import React, { useState } from "react";
import "../style/Home.css";
import pfp from "../assets/pfps/pfp-1.jpg";

const Home = () => {
  const [user, setUser] = useState("user");
  const [name, setName] = useState("name");
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="app-container">
      <div className="header-banner">
        <div className="header-content">
          <h1>ʚ Welcome ɞ</h1>
          <p>Made for little moments ~</p>
        </div>
      </div>

      <div className="main-content">
        <div className="navigation-tabs">
          <a className="tab active" href="/">
            Home
          </a>
          <a className="tab" href="/">
            Notes
          </a>
        </div>

        <div className="route-content">
          {!isEditing ? (
            <div className="home-screen">
              <div className="profile-banner">
                <div className="profile-inner">
                  <div className="profile-details">
                    <h1>
                      ˗ˏˋ @<span>/{user}</span> ˎˊ˗
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                  </div>
                  <div>
                    <img src={pfp} alt="User Profile" />
                  </div>
                </div>
              </div>

              <div className="about-section">
                <h2>ʚ🍪ɞ About Me ʚ🍪ɞ</h2>
                <div className="about-inner">
                  <div className="about-text">
                    <h3>@/{name} .ᐟ</h3>
                    <p>
                      <span>Text/Info:</span> Lorem ipsum dolor sit amet,
                      consecte adipisicing elit. Pariatur quaerat fugiat,
                      incidunt soluta ducimus reiciendis quae accusantium amet
                      perspiciatis.
                    </p>
                    <div className="links">
                      <a href="#">link 1</a> / <a href="#">link 2</a> /{" "}
                      <a href="#">link 3</a>
                    </div>
                  </div>
                  <div className="about-boxes">
                    <div className="info-box">
                      <h4>
                        <span>( ≧ᗜ≦) yay!</span>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="info-box">
                      <h4>
                        <span>( ꩜ᯅ꩜ ) no...</span>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="edit-screen">
              <div className="edit-content">
                <div className="screen-2">
                  <div className="banner">
                    <div className="banner-inner">
                      <div className="banner-info">
                        <h1>✎ edit profile</h1>
                      </div>
                    </div>
                  </div>
                  <div className="edit-info">
                    <div className="row inner">
                      <input
                        type="text"
                        placeholder={user}
                        onChange={(e) => setUser(e.target.value)}
                      />
                      <input type="text" placeholder="" />
                    </div>
                    <div className="row inner">
                      <input type="text" placeholder="" />
                      <input type="text" placeholder="" />
                    </div>
                    <div className="row inner">
                      <input type="text" placeholder="" />
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="edit-btn" onClick={toggleEditing}>
          {isEditing ? "Back" : "Edit"}
        </p>
      </div>
    </div>
  );
};

export default Home;
