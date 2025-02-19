import React from 'react';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

const ButtonPage: React.FC = () => {
    return (
        <Box>
            <Typography variant="h1" component="h2" gutterBottom>
                Button Lists
            </Typography>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Button type
                </Typography>
                <Button color="primary" >
                    Default
                </Button>
                <Button variant="contained" color="primary">
                    Contain
                </Button>
                <Button variant="outlined" color="primary">
                    Outline
                </Button>
                <Button disabled>
                    Disabled
                </Button>
                <Button href='https://mui.com' target='_blank'>
                    Link
                </Button>
                {/* delete box-shadow */}
                <Button variant="outlined" color="primary" disableElevation>
                    disableElevation
                </Button>
            </Box>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Button color
                </Typography>
                <Button color="primary" variant="contained">
                    Primary
                </Button>
                <Button color="secondary" variant="contained">
                    Secondary
                </Button>
                <Button color="error" variant="contained">
                    Error
                </Button>
                <Button color="warning" variant="contained">
                    Warning
                </Button>
                <Button color="info" variant="contained">
                    Info
                </Button>
                <Button color="success" variant="contained">
                    Success
                </Button>
            </Box>
            <Box>
                <Typography variant="h3" component="h2" gutterBottom>
                    Button size
                </Typography>
                <Button size="small" variant="outlined">
                    Small
                </Button>
                <Button size="medium" variant="outlined">
                    Medium
                </Button>
                <Button size="large" variant="outlined">
                    Large
                </Button>
            </Box>
        </Box>
    );
};

export default ButtonPage;