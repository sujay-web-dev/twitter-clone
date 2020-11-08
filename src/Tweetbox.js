import React, { useState } from 'react'
import "./Tweetbox.css"
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function Tweetbox() {

    const [tweetmessage, settweetmessage] = useState("");
    const [tweetimage, settweetimage] = useState("");

    const sentweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayname:'Sujay Vadavadagi',
            username:"@Sujayv",
            verified:true,
            text:tweetmessage,
            image:tweetimage,
            avatar:"avatar.jpeg",
        });
        settweetmessage("");
        settweetimage("");
    };

    return (
        <div className="tweetbox">
            <form action="">
                <div className="tweetbox__input">
                    <Avatar src="avatar.jpeg" />
                    <input value={tweetmessage} onChange={e => settweetmessage(e.target.value)} placeholder="Whats happening ?" type="text"/>
                </div>
                    <input value={tweetimage} onChange={e => settweetimage(e.target.value)} className="tweetbox__imageinput" placeholder="Optional: Enter Image URL" type="text"/>
                <Button onClick={sentweet} className="tweetbox__tweetbutton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
