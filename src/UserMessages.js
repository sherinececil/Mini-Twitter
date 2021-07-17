import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { useParams } from "react-router-dom";

// import Favorite from "material-ui/icons";
const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function UserMessages() {
 
  const { id } = useParams();
  const classes = useStyles();
  const [tweets, setTweets] = useState(null)
  const Userid ="60f29968f95486a16b0c5bbc"

useEffect(()=>{
  fetch(`http://mini-twitter-cross-over.herokuapp.com/messages/${Userid}`)
  .then(res=>res.json())
  .then(data=>{
    setTweets(data)
    if(data){
  console.log(tweets)
    }
  }
    )
},[])
  const bull = <span className={classes.bullet}>•</span>;
  // fetch inside a useEffect
  // url = `api/messages/${id}`;


  return (
    <>
      {tweets ? (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <div>
              <Avatar src="/broken-image.jpg" />
              <Typography variant="h5" component="h2" textAlign="left">
                {tweets._id}
              </Typography>
            </div>
            <br />

            <Typography variant="body2" component="p">
              {tweets.megText}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
            {/* <Favorite /> */}
          </CardActions>
        </Card>
      ) : (
        "loading message " + id
      )}
    </>
  );
}
