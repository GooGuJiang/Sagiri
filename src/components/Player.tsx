import Card from '@mui/material/Card';
import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function Player() {
    return (
        <>
            <Grid container spacing={0.5}
            style={{
                marginBottom:"5px"
            }}
            >
                <Grid item xs>
                <Card
                style={{
                    //backgroundColor:"#9da2fd",
                    height:"90px",
                    width:"100%"
                }}
                >
                </Card>
                </Grid>
                <Grid item xs={0.1}>
                    <Card
                        style={{
                            //backgroundColor:"#9da2fd",
                            height:"90px",
                            width:"100%"
                        }}
                    >
                    </Card>
                </Grid>
                <Grid item xs={8.5}>
                    <Card
                        style={{
                            //backgroundColor:"#068aff",
                            height:"90px",
                            width:"100%"
                        }}
                    >
                    </Card>
                </Grid>
            </Grid>

            <Card
                style={{
                    padding: "0 16px",
                    //backgroundColor:"#6f1f1f",
                    height:"90px"
            }}
            >
            <h1>Hello</h1>
            </Card>
            </>
    );
}

export default Player;
