import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import Link  from "@material-ui/core/Link";

// import Favorite from "material-ui/icons";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 900
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
// Favorite
export default function Cards() {
 const [tweets, setTweets] = useState(null)

useEffect(()=>{
  fetch(`http://mini-twitter-cross-over.herokuapp.com/messages`)
  .then(res=>res.json())
  .then(data=>{
    setTweets(data)
    if(data){
  console.log(tweets)
    }
  }
    )
},[])
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log("Cards", tweets);
  if(tweets){
return tweets.map((t) => (
 <Link to="/users/0">
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div>
          <Avatar src="/broken-image.jpg" />
          <Typography variant="h5" component="h2" textAlign="left">
            {t.id}
          </Typography>
        </div>
        <br />

        <Typography variant="body2" component="p">
          {t.msgText}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
        <Favorite color="action" />
        <Share color="action" />
 
 Read more.
 
        {/* <Favorite /> */}
      </CardActions>
    </Card>
    </Link>
  ));
  
  }
  else{
   return (
    'Loading'
   )
  }
  
}
