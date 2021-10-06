import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { SearchOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import './Nearest.css';
import { getCalenderbyPinCode } from '../../components/apis/data';
import Card from './Card/Card';
import Data_not_found from '../../components/assets/Images/Data_not_found.svg';
import Divider from '@material-ui/core/Divider';
function UsingPinCode() {

    const [input, setinput] = useState('');

    const [data, setstate] = useState([]);
    const [centers, setCenters] = useState([])
    const [move, setmove] = useState(0);
    const [dataNotFound, setdataNotFound] = useState(false)

    useEffect(() => {

    }, [])
    const postGettingCalenderbyPinCode = (response) => {
        if (response.data.success) {
            setCenters(response.data.data.centers)
        }else{
            setdataNotFound(true)
        }
    }

    const handleClick = () => {
        const formData = {};
        const date = new Date().toJSON().slice(0, 10).split('-').reverse().join('-')
        formData['pinCode'] = parseInt(input);
        formData['date'] = date;
        if (date) {
            getCalenderbyPinCode(postGettingCalenderbyPinCode, formData)
        } else {
            alert('Please enter Pincode!')
        }
    }

    const showNext = () => {
        if (move > 0) {
            setmove(move - 366)
        }
    }
    const showPrevious = () => {
        if (move < 2196) {
            setmove(move + 366)
        }
    }
    let AllCenters = centers && centers.map((item, index) => {
        return (

            <div className="releasedSongs">
                <div className="releasedSongsHeader">
                    <span className="released_this_week_text">{item.name} {" "} {item.blockName} {" ( "} {item.from}{"-"}{item.to} {" )"}</span>
                    {/* <div className="moveableCards">
                        <NavigateBeforeIcon fontSize="medium" onClick={showNext} style={{ cursor: 'pointer' }} />
                        <NavigateNextIcon fontSize="medium" onClick={showPrevious} style={{ cursor: 'pointer' }} />
                    </div> */}
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' ,marginBottom:'15px'}}>
                    {item.sessions && item.sessions.map((session, index) => {
                        // console.log('seassion',session)
                        return (
                            <div className="releasedView" style={{ display: 'flex' }}>
                                <div style={{ overflow: "hidden" }}>
                                    <li className="cardContentDaily" style={{ transform: `translateX(${'-'}${move}px)` }}>
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

    const BarStyling = { background: "#f9f9f9", border: "none ", padding: "0.5rem", marginRight: "30px", width: "30vw" };
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <div className="SearchBar" style={{ border: "2px solid lightgray", height: "40px", borderRadius: "40px", display: "flex", marginRight: '20px' }}>
                    <IconButton style={{ marginTop: '1px', background: 'none', outline: 'none !important' }}>
                        <SearchOutlined />
                    </IconButton>
                    <input
                        style={BarStyling}
                        key="random1"
                        className="search"
                        value={input}
                        placeholder={"Enter your PIN"}
                        onChange={(e) => setinput(e.target.value)}
                    />
                </div>
                <Button style={{ backgroundColor: '#002060', borderRadius: '10px', color: '#fff' }} color='primary' onClick={handleClick}>Search</Button>
            </div>
            {AllCenters}
            {dataNotFound ? <div ><img  style={{display:'flex',justifyContent:'center',marginLeft:'400px',marginTop:'50px'}} src={Data_not_found} alt="dataNotFound"/></div> : null}

        </div>
    )
}

export default UsingPinCode
