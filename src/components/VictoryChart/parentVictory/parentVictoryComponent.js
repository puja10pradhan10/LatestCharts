import React from 'react';
import PieChartVictoryComponent from '../childVictory/pieChartVictory'
import HorizontalVictoryBarComponent from '../childVictory/horizontalVictoryBar'
import StackedVictoryBarComponent from '../childVictory/stackedVictoryBar'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class ParentVictoryComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidePieChart: false,
            hideBarChart: false,
            hideStackedBarChart: false
        }
    }

    showChart(param) {
        if (param === 'barChart') {
            this.setState({
                hideBarChart: true,
                hidePieChart: false,
                hideStackedBarChart: false
            });
        }
        else if (param === 'pieChart') {
            this.setState({
                hidePieChart: false,
                hideBarChart: false,
                hideStackedBarChart: true
            });
        }
        else {
            this.setState({
                hideBarChart: false,
                hidePieChart: true,
                hideStackedBarChart: false
            });
        }
    }

    render() {
        return (
            <div>
                <Grid container spacing={24} style={{ padding: 24 }}>
                    <Grid item lg={4} xl={4}>
                        <Button variant="contained" color="secondary" onClick={() => this.showChart('barChart')}>Show BarChart</Button><br />
                        <Button variant="contained" color="primary" onClick={() => this.showChart('pieChart')}>Show Pie Chart</Button><br />
                        <Button variant="contained" color="upload" onClick={() => this.showChart('horizontalBarChart')}>Show VerticalStacked BarChart</Button>
                    </Grid>
                    <Grid item lg={8} xl={8}>
                        <div hidden={!this.state.hidePieChart}>
                            <PieChartVictoryComponent />
                        </div>
                        <div hidden={!this.state.hideStackedBarChart}>
                            <StackedVictoryBarComponent></StackedVictoryBarComponent>
                        </div>
                        <div hidden={!this.state.hideBarChart}>
                            <HorizontalVictoryBarComponent></HorizontalVictoryBarComponent>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ParentVictoryComponent;