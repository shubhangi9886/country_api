import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Detail extends Component {
    render() {
        const { Image, classes } = this.props
        return (
            <Grid className={classes.mainDiv}>
                {Image.map((Image, index) => (
                    <Card className={classes.flags} >
                        <Grid container xs={12} component="main" >
                            <Typography >{Image.name}</Typography>
                            <img className={classes.Flag} alt='thumbnail' src={Image.flag} />
                            <Typography className={classes.capital}> Capital :- {Image.capital}</Typography>
                            <Typography className={classes.population}> Population :- {Image.population} </Typography>
                            <Typography className={classes.latlng}> Latlng :- {Image.latlng} </Typography>
                            <Typography className={classes.region}> Region :- {Image.region} </Typography>
                        </Grid>
                        <div>
                            <Link to={{ pathname: "/Weather", state: { Image: Image.capital, }, }}  >
                                <Button variant="contained" color="primary"> Check Weather</Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </Grid>
        )
    }
}

export default withStyles({
    mainDiv: {
        display: 'grid',
        gridTemplateColumns: '25% 25% 25%',
    },
    flags: {
        marginLeft: "15px",
        marginTop: '10%',
    },
    Flag: {
        width: '100%',
        paddingTop: 2,
    },
    capital: {
        marginTop: 5,
    },
    population: {
        marginRight: 20,
    },
    latlng: {
        marginRight: 20,
    },
})(Detail);