import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import './Login.css';
import { beneficiaryIdTypes, addBeneficiary } from '../../components/apis/data';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
function RegisterForVaccination(props) {

    const classes = useStyles();
    const [IDNumber, setIDNumber] = useState('');
    const [selectedPhotoId, setselectedPhotoId] = useState('');
    const [PHOTOIDOPTIONS, setPHOTOIDOPTIONS] = useState([]);
    const [Name, setName] = useState('');
    const [birthYear, setbirthYear] = useState('');
    const [selectedPhotoIdName, setselectedPhotoIdName] = useState('')

    const [value, setValue] = React.useState('male');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClick = () => {
        let formData = {};
        if(selectedPhotoId && Name && birthYear && IDNumber && value){
            formData["name"] = Name
            formData["photo_id_number"]= IDNumber
            formData["photo_id_type"] =  selectedPhotoId
            formData["gender_id"] = value
            formData["birth_year"] = birthYear
            addBeneficiary(postAddBeneficiary,formData);
            alert('Member has been successfully register.')
            props.history.push("/");
        }else{
            alert("Please enter all fields");
        }

    }

    const postAddBeneficiary = (response) =>{
    
    }

    useEffect(() => {
        beneficiaryIdTypes(postbeneficiaryIdTypes)
    }, [])

    const postbeneficiaryIdTypes = (response) => {
        const replaceMap = { "type": "title" }
        if (response.data.success) {
            setPHOTOIDOPTIONS(replaceKeyInObjectArray(response.data.data, replaceMap));
        }
    }

    let replaceKeyInObjectArray = (a, r) => a.map(o =>
        Object.keys(o).map((key) => ({ [r[key] || key]: o[key] })
        ).reduce((a, b) => Object.assign({}, a, b)))

    const onPhotoIdChange = (event, values) => {
        console.log(event.target.value, values)
        setselectedPhotoId(values.id);
        setselectedPhotoIdName(values.title)
    }

    return (
        <div id="Vaccinationform">
            <FormHeader title="Register for Vaccination" />
            <div class="row1">
                <Autocomplete
                    id="combo-box-demo"
                    style={{ width: 400 }}
                    classes={classes}
                    options={PHOTOIDOPTIONS}
                    disableClearable
                    forcePopupIcon={false}
                    onChange={onPhotoIdChange}
                    getOptionLabel={option => option.title}
                    renderInput={params => {
                        return (
                            <TextField
                                {...params}
                                label="Photo Id Proof"
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
            </div>

            <div class="row">
                <label>{"ID Number"}</label>
                <input type="text" id="txtMobId" placeholder={`Enter your ${selectedPhotoIdName? selectedPhotoIdName:'ID'} number`} value={IDNumber} onChange={(event) => setIDNumber(event.target.value)} />
            </div>
            <div class="row">
                <label>{"Name"}</label>
                <input type="text" id="txtMobId" placeholder={`Enter your Name ${selectedPhotoIdName ? `as in ${selectedPhotoIdName}` :''}`}  value={Name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div class="row2">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" row value={value} onChange={handleChange}>
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div class="row">
                <label>{"Birth Year"}</label>
                <input type="number" max={4} id="txtMobId" placeholder={`Year of Birth ${selectedPhotoIdName ? `as in ${selectedPhotoIdName}` :''}`} value={birthYear} onChange={(event) => setbirthYear(event.target.value)} />
            </div>

            <div id="button" class="row">
                <button><Link onClick={handleClick} to="/">{"   Register   "}</Link></button>
            </div>
        </div>
    )
}


const FormHeader = props => (
    <h6 id="headerTitle">{props.title}</h6>
);


export default RegisterForVaccination
