import React from "react"
import { Link, useRouteMatch } from "react-router-dom"
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";




function ProfileCard({user :{name, photo, bio, likes, id }}) {

 const match = useRouteMatch()


const useStyles = makeStyles({
  catImgLG: {
    maxHeight: 300,
    minHeight: 300,
    maxWidth: "100%",
    minWidth: "100%",
  },
  catImgSM: {
    maxHeight: 150,
    minHeight: 150,
    maxWidth: "100%",
    minWidth: "100%",
  },
});


const classes = useStyles();



  return (
    <div >
      <Link to={`${match.url}/${id}`}><h3>{name}</h3></Link>
      <Grid item><img className={classes.catImgLG} src={photo} alt="profile headshot"></img></Grid>
      <p>{bio}</p>
      <ul>
        Likes: {likes}
      </ul>
    </div>
  )
}

export default ProfileCard