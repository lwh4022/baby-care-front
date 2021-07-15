import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../../store/Store";
import ShortCard from "./ShortCard";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 10
    }
}))


export interface ShortCardLayoutProps {
    stateName : (keyof RootState)
}

export default function(props : ShortCardLayoutProps) {

    const classes = useStyles();

    const state = useSelector((state: RootState) => {
        return state[props.stateName];
    })
    

    return (
        <Box display="flex" justifyContent="space-between" flexDirection="row">
            <Box>
                <ShortCard imgUrl={state.cardProp.imgUrl} name={state.cardProp.name} description={state.cardProp.description}/>
            </Box>
            <Box>
                <ShortCard imgUrl={state.cardProp.imgUrl} name={state.cardProp.name} description={state.cardProp.description}/>
            </Box>
            <Box>
                <ShortCard imgUrl={state.cardProp.imgUrl} name={state.cardProp.name} description={state.cardProp.description}/>
            </Box>
        </Box>
    )
}