import React from 'react';
import Button from '@mui/material/Button';

const ButtonPage: React.FC = () => {
    return (
        <div>
            <h1>Button Page</h1>
            <Button variant="contained" color="primary">
                Primary Button
            </Button>
            <Button variant="outlined" color="secondary">
                Secondary Button
            </Button>
        </div>
    );
};

export default ButtonPage;