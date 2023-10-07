import { TextField } from "@mui/material";

const TravelInput = () => {
    return(
        <div sx={{ display: 'inline-block'}}>
            <TextField sx={{ margin: 1 }} label="From"></TextField>
            <TextField sx={{ margin: 1 }} label="To"></TextField>
        </div>
    )
}
export default TravelInput;