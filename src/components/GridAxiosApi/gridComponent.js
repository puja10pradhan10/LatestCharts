import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class GridComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, models: [] };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(function (response) {
                return response.json();
            })
            .then(json => {
                console.log(json)
                this.setState({
                    models: json,
                    isLoaded: true
                });
                console.log(this.setState)
            });
    }

    render() {
        const { isLoaded, models } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }

        return (
            <div className={styles.root}>
                <Grid container spacing={24}>
                    {models.map(model =>
                        <Grid item xs={4} key={model.id}>
                            <Paper className={styles.paper}>{model.id}. {model.title}</Paper>
                        </Grid>
                    )}
                </Grid>
            </div>
        );
    }
}

export default GridComponent;