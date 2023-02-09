import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import GoogleMapReact from 'google-map-react';

const MapComponent = ({ text }) => (<div>{text}</div>);

const Contact = () => {

  const defaultProps = {
    center: {
      lat: 14.5833,
      lng: 121.0000
    },
    zoom: 15
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <h3>Contact Us</h3>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <h4>Location</h4>
                <p style={{ fontSize: '16px' }}>Street 89, Philippines 1923</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <h4>Contact No.</h4>
                <p style={{ fontSize: '16px' }}>+639028129356</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <h4>Email</h4>
                <p style={{ fontSize: '16px' }}>mysample@gmail.com</p>
              </CardContent>
            </Card>
          </Grid>

        </Grid>

        <h3>Find Us</h3>

        <div style={{ width: '100%', height: '80vh', marginBottom: '30px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <MapComponent
              lat={14.5833 }
              lng={121.0000}
              text="Jude is here :P"
            />
          </GoogleMapReact>
        </div>
      </Box>

    </>
  )
}

export default Contact