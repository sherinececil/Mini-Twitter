import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";

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
// Favorite
export default function Cards({ tweets }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log("Cards", tweets);
  return tweets.map((t) => (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div>
          <Avatar src="/broken-image.jpg" />
          <Typography variant="h5" component="h2" textAlign="left">
            {t.author}
          </Typography>
        </div>
        <br />

        <Typography variant="body2" component="p">
          {t.message}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
        <Favorite color="action" />
        <Share color="action" />

        {/* <Favorite /> */}
      </CardActions>
    </Card>
  ));
}
