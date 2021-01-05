import React, { useState, useEffect } from 'react';

import { Divider, Grid, IconButton, Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ButtonHandleCardPosition from '../../../Tools/ButtonHandleCardPosition';
import LoaderWidget from '../../../Tools/Loader';

import useStyles from '../../../../styles/WidgetTemplate';
import YoutubeChannelSetting from '../../../Modals/YoutubeChannelSetting';
import BodyYoutubeChannel from './Body/YoutubeChannel';

const WidgetYoutubeChannel = ({index, list, setList}) => {

    const classes = useStyles();

    const [modalSettings, setOpenModalSettings] = useState(false);
    const [isLoading, setLoader] = useState(true);
    const [isData, setData] = useState({});

    useEffect(() => {
        const myInit = {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json"}),
            mode: "cors",
            cache: "default",
            body: JSON.stringify({request: "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" + list[index].channel + "&key=AIzaSyChM-8ZB5UI75ZLiGuakaPs4qb4c9vduw8&access-token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImRlZGMwMTJkMDdmNTJhZWRmZDVmOTc3ODRlMWJjYmUyM2MxOTcyNGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiOTQxMjg2Mjc0MzA1LThzMjExcGxnM2YxaG5zY29xdWZhZ3VyYzVzZjBnbTc5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiOTQxMjg2Mjc0MzA1LThzMjExcGxnM2YxaG5zY29xdWZhZ3VyYzVzZjBnbTc5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE4MzE4ODE1NzE1NDEyNjI5Mzg5IiwiZW1haWwiOiJqYWNxdWUycGF0YXRlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiWjFxT3N1ejVUREh5c1hCb09BUDNidyIsIm5hbWUiOiJKYWNxdWUgUHJvcG9yIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS8tNHdnbkNCMm55Z0UvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQU1adXVjbW56bGd4X19ER2JtOWxNc2YyQlIzR0Z1ZmRLQS9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiSmFjcXVlIiwiZmFtaWx5X25hbWUiOiJQcm9wb3IiLCJsb2NhbGUiOiJmciIsImlhdCI6MTYwNjQyOTA1MSwiZXhwIjoxNjA2NDMyNjUxLCJqdGkiOiI2YjE2Y2ZhMzVkNDg1ZDViNDg4OGE3NDIxMjdmYjlhYzZiMTVmMTUzIn0.RxTSdxGlOHNKKb-kWim4axro-vS7_WmrK_K3ronoZ7GI-TfKiJNzLq4RYbUT4dMpwhNzThGmUx4BFbWERKEipOd_xpwDv3nvsNturJRq1HpBbCFyg1RVAz7LBf0kS2fs4RCxsEdmZSI19WsE-V5h9XLT-8eMKP0OAN7qc3l3tYSG16O6_bZaO2Zug0jAFG1qfpoqFd5-2owwjjfGdN0MVKwZxhlRyZe_8pU3x5s5ttPitzJNSc6Ah5P4rpaNCgdm5my4im9L7kEo7Gkf_T1BAijwsMTgDbw9oMSbbqWyNDzRIR_bj3BMaPM6T3XShvVrd8_-uG1Pu_7Y_pbVAm9T1Q"})
        };
        fetch(`http://localhost:8080/meteo`, myInit)
            .then(async res => {
                const result = await res.json()
                if (result.pageInfo.totalResults === 1) {
                    setData(result)
                    setLoader(false);
                } else {
                    console.error(result)
                }
            })
            .catch((error) => {
                console.error(error)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list[index]]);

    return (
        <Grid className={classes.root} style={{ margin: '5px'}}>
            <Grid container className={classes.bar}>
                <Grid item xs={10} style={{display: "flex"}}>
                    <Typography className={classes.title} variant="h5" component="h5" style={{color: list[index].color}}>
                        { list[index].title }
                    </Typography>
                </Grid>
                <Grid item xs={2}  style={{display: "flex", justifyContent: "flex-end"}}>
                    <ButtonHandleCardPosition index={index} list={list} setList={setList} />
                    <IconButton size="medium" onClick={() => setOpenModalSettings(true)}>
                        <SettingsIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Divider orientation="horizontal" style={{backgroundColor: "black"}} />
            <Grid className={classes.body}>
                { isLoading ?
                    <LoaderWidget color={list[index].color} />
                :
                    <BodyYoutubeChannel data={ isData } />
                }
            </Grid>
            <YoutubeChannelSetting
                open={modalSettings}
                setOpen={() => setOpenModalSettings(false)}
                index={index}
                list={list}
                setList={setList} />
        </Grid>
    );
};

export default WidgetYoutubeChannel;

/**
 * https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC2Kl-Y9g3CJST4U8kAyYxHw&key=AIzaSyChM-8ZB5UI75ZLiGuakaPs4qb4c9vduw8&access-token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImRlZGMwMTJkMDdmNTJhZWRmZDVmOTc3ODRlMWJjYmUyM2MxOTcyNGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiOTQxMjg2Mjc0MzA1LThzMjExcGxnM2YxaG5zY29xdWZhZ3VyYzVzZjBnbTc5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiOTQxMjg2Mjc0MzA1LThzMjExcGxnM2YxaG5zY29xdWZhZ3VyYzVzZjBnbTc5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE4MzE4ODE1NzE1NDEyNjI5Mzg5IiwiZW1haWwiOiJqYWNxdWUycGF0YXRlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiWjFxT3N1ejVUREh5c1hCb09BUDNidyIsIm5hbWUiOiJKYWNxdWUgUHJvcG9yIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS8tNHdnbkNCMm55Z0UvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQU1adXVjbW56bGd4X19ER2JtOWxNc2YyQlIzR0Z1ZmRLQS9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiSmFjcXVlIiwiZmFtaWx5X25hbWUiOiJQcm9wb3IiLCJsb2NhbGUiOiJmciIsImlhdCI6MTYwNjQyOTA1MSwiZXhwIjoxNjA2NDMyNjUxLCJqdGkiOiI2YjE2Y2ZhMzVkNDg1ZDViNDg4OGE3NDIxMjdmYjlhYzZiMTVmMTUzIn0.RxTSdxGlOHNKKb-kWim4axro-vS7_WmrK_K3ronoZ7GI-TfKiJNzLq4RYbUT4dMpwhNzThGmUx4BFbWERKEipOd_xpwDv3nvsNturJRq1HpBbCFyg1RVAz7LBf0kS2fs4RCxsEdmZSI19WsE-V5h9XLT-8eMKP0OAN7qc3l3tYSG16O6_bZaO2Zug0jAFG1qfpoqFd5-2owwjjfGdN0MVKwZxhlRyZe_8pU3x5s5ttPitzJNSc6Ah5P4rpaNCgdm5my4im9L7kEo7Gkf_T1BAijwsMTgDbw9oMSbbqWyNDzRIR_bj3BMaPM6T3XShvVrd8_-uG1Pu_7Y_pbVAm9T1Q
 */