import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import './Nearest.css';
import UsingCities from './usingCities';
import UsingPinCode from './usingPinCode';

const CustomTab = withStyles({
    root: {
        opacity: 0.8,
        borderRadius: '25px !important',
        border: 'solid 1px #979797 !important',
        letterSpacing: '0.2px',
        fontFamily: 'Lato',
        fontWeight: 800,
        // fontSize: '12px',
        color: '#010001 !important',
        outline: 'none !important',
        // minWidth: '85px',
        // minHeight: '27px',
        // padding: '0px',
        // marginBottom: '6px'
        // padding:'6px 6px'
    },
    labelContainer: {
        // padding: '2px 4px'
    },
    selected: {
        backgroundImage: 'linear-gradient(285deg, #ddb008, #f76b1c)',
        borderBottom: 'none',
        outline: 'none !important',
        color: 'white !important',
        fontSize: '12px',
        fontWeight: 900,
        letterSpacing: '1px',
        border: 'none',

    }
})(Tab)

const CustomTabs = withStyles({
    indicator: {
        backgroundColor: 'inherit'
    },
    flexContainer: {
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }

})(Tabs)


class NearestVaccinationCenterTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.getInitialState()
    }

    getInitialState = () => {
        const initialState = {
            selectedTab: '0',
            info: this.props.info,
            searchText: '',
            searchedColumn: '',
            page: "",
        }
        return initialState
    }

    static getDerivedStateFromProps(props, state) {
        return (props)
    }
 

    handleChange = (event, value) => {
        this.setState({ selectedTab: value });
    };

    render() {
        let tabContent = ''
        if (this.state.selectedTab === '0') {
            tabContent = <UsingPinCode />
        } else if (this.state.selectedTab === '1') {
            tabContent = <UsingCities states={this.props.states}/>
        } 
        return (
            <div>
                <div className="RoleCreate">
                    <React.Fragment>
                        <h6 className="header">Check Your Nearest Vaccination Center And Slots Availability</h6>
                        <div className="radioButtonPosition">
                            <Grid item xl={12} lg={12} style={{ backgroundColor: '#f4f8fb' }}>
                                <CustomTabs  value={this.state.selectedTab} onChange={this.handleChange}>
                                    <CustomTab label="Search by PIN" value="0" />;
                                    <CustomTab label="Search by District" value="1" />;
                                </CustomTabs>
                            </Grid>
                        </div>
                        <Grid item style={{ padding: '0px 20px 20px 20px' }}>
                            {tabContent}
                        </Grid>
                    </React.Fragment>
                </div>
            </div>


        )
    }
}

export default NearestVaccinationCenterTabs