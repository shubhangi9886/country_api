import React, { Component } from 'react'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Detail from './Detail';
import Typography from '@material-ui/core/Typography';
import { withStyles, } from '@material-ui/core/styles';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            Image: ''
        }
    }
    handleChange = e => {
        const regex = /[A-Za-z]/
        if ((e.target.value === '') || regex.test(e.target.value)) {
            this.setState({ text: e.target.value })
        }
    }
    handelSubmit = async e => {
        e.preventDefault();
        const response = await axios.get('https://restcountries.eu/rest/v2/name/' + this.state.text, {
        })
        console.log(response);
        this.setState({ Image: response.data })
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <form>
                    <Typography className={classes.text}>Country Detail :- </Typography>
                    <TextField label="Enter the country name" margin="normal" variant="outlined" className={classes.input} onChange={this.handleChange} />
                    <Button variant="contained" color="primary" className={classes.btn} onClick={this.handelSubmit} disabled={!this.state.text}>
                        Search</Button>
                </form>
                {this.state.Image !== '' && (<Detail {...this.state} />)}
            </div>
        )
    }
}
export default withStyles({
    container: {
        marginLeft: '30%',
    },
    text: {
        fontSize: '40px',
        marginTop: '5%'
    },
    input: {
        width: '50%',
    },
    btn: {
        padding: '15px',
        margin: '1%',
        width: '9%',
    }
})(SearchBar);