import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Post.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayname, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headertext">
              <h3>
                {displayname}{" "}
                <span className="post__headerspecial">
                  {verified && <CheckCircleIcon className="post__badge" />}{" "}
                  {username}
                </span>{" "}
              </h3>
            </div>
            <div className="post__headerdescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
