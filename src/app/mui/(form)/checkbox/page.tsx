'use client'

import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder } from '@mui/icons-material';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react';

const CheckboxForm: React.FC = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [checked1, setChecked1] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked1(event.target.checked);
    };

    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label="Child 1"
                control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
            />
            <FormControlLabel
                label="Child 2"
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
        </Box>
    );

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;


    return (
        <Box mb={10}>
            <Typography variant="h1" component="h2" gutterBottom>
                Checkbox Lists
            </Typography>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Basic checkbox
                </Typography>
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} />
                <Checkbox {...label} disabled />
                <Checkbox {...label} disabled checked />
            </Box>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Label
                </Typography>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox defaultChecked />
                        }
                        label="Label" />
                    <FormControlLabel
                        required
                        control={
                            <Checkbox />
                        }
                        label="Required" />
                    <FormControlLabel
                        disabled
                        control={
                            <Checkbox />
                        }
                        label="Disabled" />
                </FormGroup>
            </Box>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Size
                </Typography>
                <Checkbox {...label} defaultChecked size="small" />
                <Checkbox {...label} defaultChecked />
                <Checkbox
                    {...label}
                    defaultChecked
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
            </Box>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Color
                </Typography>
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} defaultChecked color="secondary" />
                <Checkbox {...label} defaultChecked color="success" />
                <Checkbox {...label} defaultChecked color="default" />
                <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                            color: pink[600],
                        },
                    }}
                />
            </Box>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Icon
                </Typography>
                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                <Checkbox
                    {...label}
                    icon={<BookmarkBorder />}
                    checkedIcon={<Bookmark />}
                />
            </Box>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Controlled
                </Typography>
                <Checkbox
                    checked={checked1}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </Box>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Intermediate checkbox
                </Typography>
                <FormControlLabel
                    label="Parent"
                    control={
                        <Checkbox
                            checked={checked[0] && checked[1]}
                            indeterminate={checked[0] !== checked[1]}
                            onChange={handleChange1}
                        />
                    }
                />
                {children}
            </Box>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Form Group
                </Typography>
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Assign responsibility</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={gilad} onChange={handleChange4} name="gilad" />
                            }
                            label="Gilad Gray"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={jason} onChange={handleChange4} name="jason" />
                            }
                            label="Jason Killian"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={antoine} onChange={handleChange4} name="antoine" />
                            }
                            label="Antoine Llorca"
                        />
                    </FormGroup>
                    <FormHelperText>Be careful</FormHelperText>
                </FormControl>
                <FormControl
                    required
                    error={error}
                    component="fieldset"
                    sx={{ m: 3 }}
                    variant="standard"
                >
                    <FormLabel component="legend">Pick two</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={gilad} onChange={handleChange4} name="gilad" />
                            }
                            label="Gilad Gray"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={jason} onChange={handleChange4} name="jason" />
                            }
                            label="Jason Killian"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={antoine} onChange={handleChange4} name="antoine" />
                            }
                            label="Antoine Llorca"
                        />
                    </FormGroup>
                    <FormHelperText>You can display an error</FormHelperText>
                </FormControl>
            </Box>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                   Label Placement
                </Typography>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Label placement</FormLabel>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            value="bottom"
                            control={<Checkbox />}
                            label="Bottom"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox />}
                            label="End"
                            labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    );
};

export default CheckboxForm;