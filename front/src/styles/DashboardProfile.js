/* eslint-disable no-useless-computed-key */
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        flexDirection: "column",
        display: "flex",
        height: "100%",
        width: "100%",
        backgroundColor: "#eceaea",
    },
    noWidget: {
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    Container: {
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5px",
        marginBottom: "5px",
        height: "100%",
        width: "100%",
        overflowY: "scroll",
        overflowX: "hidden"
    },
    ListService: {
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "500px",
        width: "100%",
    },
    OauthGithub: {
        margin: "10px",
        backgroundColor: "rgb(255, 255, 255)",
        display: "inline-flex",
        alignItems: "center",
        color: "rgba(0, 0, 0, 0.54)",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px",
        padding: "0px",
        borderRadius: "2px",
        border: "1px solid transparent",
        fontSize: "15px !important",
        fontWeight: "500",
        fontFamily: "Roboto, sans-serif",
        opacity: "0.6",
        height: "42px",
        cursor: "pointer",
        width: "215px",
    },
    DisableOauthGithub: {
        margin: "10px",
        backgroundColor: "rgb(255, 255, 255)",
        display: "inline-flex",
        alignItems: "center",
        color: "rgba(0, 0, 0, 0.54)",
        padding: "0px",
        boxShadow: "",
        border: "0",
        borderRadius: "2px",
        fontSize: "15px !important",
        fontWeight: "500",
        fontFamily: "Roboto, sans-serif",
        opacity: "0.1",
        height: "45px",
        pointerEvents: "none",
        width: "215px",
    },
    OauthMicrosoft: {
        margin: "10px",
        backgroundColor: "rgb(255, 255, 255)",
        display: "inline-flex",
        alignItems: "center",
        color: "rgba(0, 0, 0, 0.54)",
        padding: "0px",
        borderRadius: "2px",
        border: "1px solid transparent",
        fontSize: "14px",
        fontWeight: "500",
        fontFamily: "Roboto, sans-serif",
        opacity: "0.6",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px",
    },
    DisableOauthMicrosoft: {
        margin: "10px",
        backgroundColor: "rgb(255, 255, 255)",
        display: "inline-flex",
        alignItems: "center",
        color: "rgba(0, 0, 0, 1)",
        padding: "0px",
        borderRadius: "2px",
        boxShadow: "",
        border: "0",
        fontSize: "14px",
        fontWeight: "500",
        fontFamily: "Roboto, sans-serif",
        opacity: "0.1",
        pointerEvents: "none",
    },
    OauthGoogle: {
        margin: "10px",
        backgroundColor: "rgb(255, 255, 255)",
        display: "inline-flex",
        alignItems: "center",
        color: "rgba(0, 0, 0, 0.54)",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px",
        padding: "0px",
        borderRadius: "2px",
        border: "1px solid transparent",
        fontSize: "15px !important",
        fontWeight: "500",
        fontFamily: "Roboto, sans-serif",
        opacity: "0.6",
        width: "215px",
        height: "42px",
    },
    DisableOauthGoogle: {
        margin: "10px",
        backgroundColor: "rgb(0, 0, 0)",
        display: "inline-flex",
        alignItems: "center",
        color: "rgba(0, 0, 0, 0.54)",
        padding: "0px",
        borderRadius: "2px",
        boxShadow: "",
        border: "0",
        fontSize: "15px !important",
        fontWeight: "500",
        fontFamily: "Roboto, sans-serif",
        opacity: "0.1",
        height: "45px",
        width: "215px",
        pointerEvents: "none",
    },
  })
);

export default useStyles;