import * as React from 'react';
import {useState, useMemo, useEffect} from 'react';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import Pin from './pin.js';
import firebase from '../firebase/firebase';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import Timer from './timer'


export default function Beach() {
  const location = useLocation();
  const selectedBeach = location.state;
  const [status, setStatus] = useState('start');

  return (
    <div style={{textAlign:'center'}}>
        <h1>{selectedBeach.name}</h1>
        <div>
          {status == 'start' ? 
            <div> 
                <Button onClick={()=>{setStatus('timer')}} style={{marginBottom: 15}} variant="outlined" >Start!</Button>
                <div></div>
                <img style={{marginBottom: 15}} width="70%" src={selectedBeach.photoURL} />
            </div>
            :
            <div><Timer></Timer></div>
          }
        
        </div>
            </div>
  );
}