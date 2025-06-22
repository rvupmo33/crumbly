import React, { useState } from "react";
import "../style/Home.css";
import pfp from "../assets/pfps/pfp-1.jpg";
import { House, NotebookPen } from "lucide-react";

const Home = () => {
  const [user, setUser] = useState("user");
  const [name, setName] = useState("name");
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet, consecte adipisicing."
  );
  const [info, setInfo] = useState(
    "Lorem ipsum dolor sit amet, consecte adipisicing elit. Pariatur quaerat fugiat, incidunt soluta ducimus reiciendis quae accusantium amet perspiciatis."
  );
  const [link1, setLink1] = useState("https://example.com/1");
  const [link2, setLink2] = useState("https://example.com/2");
  const [link3, setLink3] = useState("https://example.com/3");
  const [yayText, setYayText] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  );
  const [nayText, setNayText] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  );

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
            <House color="#98b821" /> Home
          </a>
          <a className="tab" href="/notes">
            <NotebookPen color="#98b821" /> Notes
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
                    <p>{bio}</p>
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
                      <span>Text/Info:</span> {info}
                    </p>
                    <div className="links">
                      <a href={link1} target="_blank" rel="noopener noreferrer">
                        link 1
                      </a>{" "}
                      /{" "}
                      <a href={link2} target="_blank" rel="noopener noreferrer">
                        link 2
                      </a>{" "}
                      /
                      <a href={link3} target="_blank" rel="noopener noreferrer">
                        link 3
                      </a>
                    </div>
                  </div>
                  <div className="about-boxes">
                    <div className="info-box">
                      <h4>
                        <span>( ≧ᗜ≦) yay!</span>
                      </h4>
                      <p>{yayText}</p>
                    </div>
                    <div className="info-box">
                      <h4>
                        <span>( ꩜ᯅ꩜ ) no...</span>
                      </h4>
                      <p>{nayText}</p>
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
                        placeholder="Enter username"
                        onChange={(e) => setUser(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Enter name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row inner">
                      <textarea
                        placeholder="Enter bio"
                        onChange={(e) => setBio(e.target.value)}
                        rows={2}
                      />
                      <textarea
                        placeholder="Enter Text/Info"
                        onChange={(e) => setInfo(e.target.value)}
                        rows={2}
                      />
                    </div>
                    <div className="row inner">
                      <input
                        type="text"
                        placeholder="Link 1"
                        onChange={(e) => setLink1(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Link 2"
                        onChange={(e) => setLink2(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Link 3"
                        onChange={(e) => setLink3(e.target.value)}
                      />
                    </div>

                    <div className="row inner">
                      <textarea
                        placeholder="What makes you go yay?"
                        onChange={(e) => setYayText(e.target.value)}
                        rows={2}
                      />
                      <textarea
                        placeholder="What makes you go noo?"
                        onChange={(e) => setNayText(e.target.value)}
                        rows={2}
                      />
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
