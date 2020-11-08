import React, { useEffect, useState } from "react";
import "./Feed.css";
import db from "./firebase";
import Post from "./Post";
import Tweetbox from "./Tweetbox";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setposts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <Tweetbox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayname={post.displayname}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>

      {/* <Post displayname="Sujay V" username="@sujayv" verified text="Hello My name is sujay and am MERN Full Stack Developer" image="https://media.giphy.com/media/UtnxCnjWAOL1J6TNUR/giphy.gif" avatar="avatar.jpeg" /> */}
      {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
    </div>
  );
}

export default Feed;
