import React, { useState } from "react";
import {
    Grid, Paper, Avatar, Typography, TextField, Button, FormControl, FormLabel,
    RadioGroup, FormControlLabel, Radio, Checkbox, MenuItem, Select, InputLabel
} from "@mui/material"
export default function Signup() {
    const [userName, setUserName] = useState('');
    const [userTextArea, setUserTextArea] = useState('');
    const [userQualification, setUserQualification] = useState('')
    const [userGender, setUserGender] = useState(null);
    const [userAccept, setUserAccept] = useState(false);
    const [userData, setUserData] = useState([]);

    const handleName = (e) => {
        setUserName(e.target.value)
    }

    const handleTextArea = (e) => {
        setUserTextArea(e.target.value)
    }

    const handleQualification = (e) => {
        setUserQualification(e.target.value)
    }

    const handleGender = (e) => {
        setUserGender(e.target.value)
    }

    const handleAccept = (e) => {
        setUserAccept((pre) => !pre)
    }

    const formSubmissionHandler = (e) => {
        e.preventDefault();
        const userdata = {
            name: userName,
            textArea: userTextArea,
            gender: userGender,
            qualification: userQualification,
            accept: userAccept
        }
        const data = userData;
        data.push(userdata)
        setUserData((prev) => [...prev])
        setUserName('')
        setUserTextArea('')
        setUserQualification('')
        setUserGender(null)
        setUserAccept(null)
    }

    const handleCancel = () => {
        setUserName('')
        setUserTextArea('')
        setUserQualification('')
        setUserGender(null)
        setUserAccept(null)
    }

    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' }
    const headerStyle = { margin: 0 }
    const marginTop = { marginTop: 5 }

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar></Avatar>

                    <h2 style={headerStyle}>Personal Information</h2>
                    <Typography variant='caption'>Please fill the form !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name"
                        value={userName} onChange={handleName} />
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel >Qualification</InputLabel>
                        <Select  label="Qualification" value={userQualification} onChange={handleQualification}>
                            <MenuItem value="">
                                <em>Select</em>
                            </MenuItem>
                            <MenuItem value="B.Tech">B.Tech</MenuItem>
                            <MenuItem value="B.com computer">B.com computer</MenuItem>
                            <MenuItem value="MCA">MCA</MenuItem>
                            <MenuItem value="Agriculture">Agriculture</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField multiline
                    fullWidth
                        rows={4} label='TextArea' placeholder="Enter description"
                        value={userTextArea} onChange={handleTextArea} style={marginTop} />
                    <FormControl component='fieldset' style={marginTop}>
                        <FormLabel component='legend'>Gender</FormLabel>
                        <RadioGroup varia-label="gender" name="gender" value={userGender} onChange={handleGender}
                            style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <FormControlLabel control={<Checkbox name='checked' onChange={handleAccept} checked={userAccept} />} label=' I accept terms'
                        value={userAccept} />
                    <div style={{ textAlign: 'center' }} >
                        <Button variant="contained" size="large" onClick={formSubmissionHandler}>Submit</Button>
                        <Button
                            variant="contained"
                            size="large"
                            style={{ marginLeft: '10px' }}
                            onClick={handleCancel}>Cancel</Button>
                    </div>
                </form>
            </Paper>
            <ul>
                {
                    userData && userData.map((userdata, i) => {
                        return (
                            <>
                                <h5>{i + 1} person data</h5>
                                <li>{userdata.name}</li>
                                <li>{userdata.qualification}</li>
                                <li>{userdata.textArea}</li>
                                <li>{userdata.gender}</li>
                            </>
                        )
                    })
                }
            </ul>
        </Grid>
    )
}
