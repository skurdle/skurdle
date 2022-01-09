import "./WordDisplay.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function GenerateRow(row) {
    return (
        <Grid container justifyContent="center" spacing={1} key={row}>
            {[...Array(4)].map((_, value) => (
                <Grid key={value} item xs={1}>
                    <Paper sx={{ height: 100, width: 100 }} />
                </Grid>
            ))}
        </Grid>
    );
}

function GenerateInputRows() {
    const maxAttempts = 5;

    return (
        <Grid item xs={12}>
            {[...Array(maxAttempts)].map((_, row) => GenerateRow(row))}
        </Grid>
    );
}

function WordDisplay() {
    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            {GenerateInputRows()}
        </Grid>
    );
}

export default WordDisplay;
