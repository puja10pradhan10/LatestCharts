import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//components
import ParentComponent from "../Communication/parentComponent";
import ParentD3Component from "../D3Chart/ParentD3/parentD3Component";
//import ErrorHandleComponent from "../ErrorHandle/errorHandleComponent";
import GridComponent from "../GridAxiosApi/gridComponent";
import HomeComponent from "../Home/homeComponent";
import ListComponent from "../ListFetchApi/listComponent";
import LoginComponent from "../Login/loginComponent";
//import SharedApiComponent from "../SharedApi/sharedApiComponent";
import TableComponent from "../Table/tableComponent";
import ParentVictoryComponent from "../VictoryChart/parentVictory/parentVictoryComponent";
import ParentChartjsComponent from "../ChartJS/parentChartjsComponet";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 0.1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 22,
    },
    NavMenu: {
        color: 'white',
        textDecoration: 'none'
    }
};


class HeaderComponent extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className={styles.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" style={styles.grow}>
                                <NavLink to="/home" style={styles.NavMenu}>Home</NavLink>
                            </Typography>
                            <Typography variant="h6" color="inherit" style={styles.grow}>
                                <NavLink to="/tabel" style={styles.NavMenu}>Tabel</NavLink>
                            </Typography>
                            <Typography variant="h6" color="inherit" style={styles.grow}>
                                <NavLink to="/grid" style={styles.NavMenu}>Grid</NavLink>
                            </Typography>
                            <Typography variant="h6" color="inherit" style={styles.grow}>
                                <NavLink to="/list" style={styles.NavMenu}>List</NavLink>
                            </Typography>
                            <Typography variant="h6" color="inherit" style={styles.grow}>
                                <NavLink to="/componnetCommunication" style={styles.NavMenu}>CompoCommu</NavLink>
                            </Typography>
                            <Typography variant="h6" color="inherit" style={styles.grow}>
                                <NavLink to="/d3chartComponent" style={styles.NavMenu}>D3Chart</NavLink>
                            </Typography>
                            <Typography variant="h6" color="inherit" style={styles.grow}>
                                <NavLink to="/victoryChartComponent" style={styles.NavMenu}>VictoryChart</NavLink>
                            </Typography>
                            <Typography variant="h6" color="inherit" style={styles.grow}>
                                <NavLink to="/chartjsComponent" style={styles.NavMenu}>ChartJS</NavLink>
                            </Typography>
                            <Typography variant="h6" color="inherit" style={styles.grow}>
                                <NavLink to="/" style={styles.NavMenu}>Logout</NavLink>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div className="content">
                        <Route exact path="/" component={LoginComponent} />
                        <Route path="/home" component={HomeComponent} />
                        <Route path="/tabel" component={TableComponent} />
                        <Route path="/grid" component={GridComponent} />
                        <Route path="/list" component={ListComponent} />
                        <Route path="/componnetCommunication" component={ParentComponent} />
                        <Route path="/d3chartComponent" component={ParentD3Component} />
                        <Route path="/victoryChartComponent" component={ParentVictoryComponent} />
                        <Route path="/chartjsComponent" component={ParentChartjsComponent} />
                        {/* <Route exact path="*" component={PageNotFound}></Route> */}
                    </div>
                </div>
            </HashRouter >
        )
    }
}

export default HeaderComponent;