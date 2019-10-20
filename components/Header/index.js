import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  container: {
    backgroundImage: `url(${"/juggernaut.jpg"})`,
    backgroundSize: "100%",
    paddingTop: 50,
    paddingBottom: 50,
    color: "white"
  }
}));

const Product = props => {
  const { title, imagesUrl, description } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imagesUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

const Header = () => {
  const classes = useStyles();

  return (
    <Container fixed className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography>Find inspiration by playing</Typography>
          <Typography>
            We don't just provide entertainment. By using our products, we hope
            you not only enjoy a relaxing time but also get inspiration to work{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              We Serve, You Play. See our products :
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Product
                title="Gaming Center"
                imagesUrl="/product1.jpg"
                description="Dapatkan kesenengan dengan bermain game online di platform PC. Dengan spek yang memadai rasakan pengalaman bermain dengan lancar"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Product
                title="Wifi Arena"
                imagesUrl="/product2.jpg"
                description="Bagi anda yang ingin bersantai ataupun bermain game menggunakan Gadget kami menyediakan escape room dengan fasilitas wifi internet kecepatan tinggi"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Product
                title="Driving Seat"
                imagesUrl="/product3.png"
                description="Bagi anda pecinta otomotif khususnya roda empat. Kami menyediakan driving simulator arena. Temukan kesenangan balapan bersama teman anda."
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Product
                title="VR Arena"
                imagesUrl="/product4.jpg"
                description="Coming Soon..."
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Product
                title="Smokeless Range"
                imagesUrl="/product5.jpg"
                description="Coming Soon..."
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
