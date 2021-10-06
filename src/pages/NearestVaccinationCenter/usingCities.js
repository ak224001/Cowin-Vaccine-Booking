import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { getDistricts, findCalenderOfCenterWithDistrict } from '../../components/apis/data';
import { Button } from '@material-ui/core';
import Card from './Card/Card';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Divider from '@material-ui/core/Divider';
import './Nearest.css';
import Data_not_found from '../../components/assets/Images/Data_not_found.svg';

const useStyles = makeStyles(theme => ({
    inputRoot: {
        color: "blue",
        fontFamily: "Roboto Mono",
        backgroundColor: "#f2f2f2",
        "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderColor: "blue"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderColor: "blue"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderColor: "blue"
        }
    }
}));

export default function ComboBox(props) {

    const [states, setStates] = useState('');
    const [districts, setdistricts] = useState([]);
    const [districtId, setDistrictId] = useState('');
    const [centers, setCenters] = useState([])
    const [dataNotFound, setdataNotFound] = useState(false)


    const classes = useStyles();

    const onStateChange = (event, values) => {
        console.log(event.target.value, values)
        setStates(values.stateId)
        let formData = {};
        formData['stateId'] = values.stateId;
        getDistricts(postGettingDistricts, formData);

    }
    const onDistrictChange = (event, values) => {
        setDistrictId(values.districtId)
    }

    const postGettingDistricts = (response) => {
        const replaceMap = { "districtName": "title" }
        if (response.data.success) {
            setdistricts(replaceKeyInObjectArray(response.data.data.districts, replaceMap));
        }

    }

    let replaceKeyInObjectArray = (a, r) => a.map(o =>
        Object.keys(o).map((key) => ({ [r[key] || key]: o[key] })
        ).reduce((a, b) => Object.assign({}, a, b)))

    const handleClick = () => {
        const formData = {};
        const date = new Date().toJSON().slice(0, 10).split('-').reverse().join('-')
        formData['districtId'] = districtId;
        formData['date'] = date;
        if (districtId) {
            findCalenderOfCenterWithDistrict(postGettingCenters, formData)
        } else {
            alert('Please enter districtId!')
        }
    }
    const postGettingCenters = (response) => {
        if (response.data.success) {
            setCenters(response.data.data.centers)
        }else{
            setdataNotFound(true)
        }
    }

    let AllCenters = centers && centers.map((item, index) => {
        return (

            <div className="releasedSongs">
                <div className="releasedSongsHeader">
                    <span className="released_this_week_text">{item.name} {" "} {item.blockName} {" ( "} {item.from}{"-"}{item.to} {" )"}</span>

                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
                    {item.sessions && item.sessions.map((session, index) => {
                        return (
                            <div className="releasedView" style={{ display: 'flex' }}>
                                <div style={{ overflow: "hidden" }}>
                                    <li className="cardContentDaily" >
                                        <Card session={session} />
                                    </li>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

                <Divider />

            </div>

        )
    })

    return (
        <div>
            <div className="CitiesRoot">
                <Autocomplete
                    id="combo-box-demo"
                    style={{ width: 300 }}
                    classes={classes}
                    options={props.states ? props.states : []}
                    disableClearable
                    forcePopupIcon={false}
                    onChange={onStateChange}
                    getOptionLabel={option => option.title}
                    renderInput={params => {
                        return (
                            <TextField
                                {...params}
                                label="SELECT STATE"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        );
                    }}
                />
                <div className="space"></div>
                <Autocomplete
                    id="combo-box-demo"
                    classes={classes}
                    style={{ width: 300 }}
                    options={districts}
                    disableClearable
                    forcePopupIcon={false}
                    onChange={onDistrictChange}
                    getOptionLabel={option => option.title}
                    renderInput={params => {
                        return (
                            <TextField
                                {...params}
                                label="SELECT DISTRICT"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        );
                    }}
                />
                <Button style={{ backgroundColor: '#002060', borderRadius: '10px', color: '#fff', marginLeft: '20px' }} color='primary' onClick={handleClick}>Search</Button>
            </div>
            {AllCenters}
            {dataNotFound ? <div ><img  style={{display:'flex',justifyContent:'center',marginLeft:'400px',marginTop:'50px'}} src={Data_not_found} alt="dataNotFound"/></div> : null}

        </div>

    );
}

