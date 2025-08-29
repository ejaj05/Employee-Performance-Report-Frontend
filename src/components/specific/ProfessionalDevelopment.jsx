import { Add, Remove } from "@mui/icons-material";
import { Box, IconButton, TextField, Typography } from "@mui/material";

const ProfessionalDevelopment = ({ upskills, setUpskills }) => {
    return (
        <Box
            sx={{
                bgcolor: "#1e1e2f",
                p: 3,
                borderRadius: 3,
                color: "#fff",
                minWidth: 800,
                mx: "auto",
            }}
        >
            <Typography variant="h5" sx={{ mb: 2 }}>
                Professional Development
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems:"start",
                    m: 1,
                }}
            >
                <Typography>certificate gained</Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 1,
                        bgcolor: "#2f2f3fff",
                    }}
                >
                    <IconButton onClick={() => setUpskills({ certificateAchieved: false })}>
                        <Remove sx={{ color: "white" }} />
                    </IconButton>
                    <TextField
                        value={upskills.certificateAchieved?1:0}
                        size="small"
                        sx={{ width: 50, mx: 1 }}
                        inputProps={{ style: { color: "white" } }}
                    />
                    <IconButton onClick={() => setUpskills({ certificateAchieved: true })}>
                        <Add sx={{ color: "white" }} />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default ProfessionalDevelopment;
