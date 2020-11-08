import React from 'react'
import "./Widgets.css"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed, } from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetcontainer">
                <h3>Whats happening..!</h3>

                <TwitterTweetEmbed tweetId={"858551177860055040"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="cleverqazi" options={{ height : 400 }} />
                <TwitterShareButton url={"https://facebook.com/cleverprogrammer"} options={{ text:"#reactjs is Awesome", via: "cleverqazi" }} />
            </div>
        </div>
    )
}

export default Widgets
