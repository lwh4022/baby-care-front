import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React  from "react";
import ShortCard from "./ShortCard";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 10
    }
}))

export default function(){

    const classes = useStyles();

    return (
        <Box display="flex" justifyContent="space-between" flexDirection="row">
            <Box>
                <ShortCard />
            </Box>
            <Box>
                <ShortCard />
            </Box>
            <Box>
                <ShortCard/>
            </Box>
        </Box>
    )
}