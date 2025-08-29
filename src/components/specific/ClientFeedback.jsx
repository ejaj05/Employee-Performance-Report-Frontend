import React from "react";
import {
    Box,
    Grid,
    Typography,
    Card,
    CardContent,
    LinearProgress,
    Avatar,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { CircularProgress } from "@mui/material";

const feedbackData = [
    {
        client: "TechCorp Inc.",
        stars: 5,
        comment:
            "Exceptional work quality and timely delivery. The team exceeded our expectations on the latest project.",
        project: "E-commerce Platform",
        projectColor: "#0f9d58",
        bgColor: "#e9f9f0",
        date: "2 days ago",
    },
    {
        client: "Digital Solutions",
        stars: 3,
        comment:
            "Good progress but communication could be improved. Some deliverables were delayed.",
        project: "Mobile App Development",
        projectColor: "#e29500",
        bgColor: "#fffbe5",
        date: "4 days ago",
    },
    {
        client: "StartupXYZ",
        stars: 4,
        comment:
            "Professional team with great technical expertise. Looking forward to future collaborations.",
        project: "Cloud Infrastructure",
        projectColor: "#1976d2",
        bgColor: "#eaf2ff",
        date: "1 week ago",
    },
];

const ratingMetrics = [
    { label: "Quality of Work", value: 4.6, color: "#34c759" },
    { label: "Communication", value: 3.9, color: "#fbbc04" },
    { label: "Timeliness", value: 4.2, color: "#4285f4" },
    { label: "Value for Money", value: 4.4, color: "#a56efc" },
];

const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= count) {
            stars.push(<StarIcon key={i} sx={{ fontSize: 18, color: "#fbc02d" }} />);
        } else {
            stars.push(
                <StarBorderIcon key={i} sx={{ fontSize: 18, color: "#fbc02d" }} />
            );
        }
    }
    return stars;
};

const ClientFeedback = () => {
    return (
        <Card elevation={3} sx={{ padding: "2rem", marginTop: "4rem" }}>
            <Typography variant="h5" fontWeight={"bold"} mb={2}>
                Client Feedback & Reviews
            </Typography>

            <Grid container spacing={4}>
                <Grid size={{ md: 6 }}>
                    <Typography variant="h6" fontWeight={600} mb={2}>
                        Recent Client Feedback
                    </Typography>

                    {feedbackData.map((feedback, index) => (
                        <Card
                            key={index}
                            sx={{
                                mb: 2,
                                backgroundColor: feedback.bgColor,
                                borderRadius: 2,
                                padding: "1rem",
                            }}
                        >
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography display={"flex"} alignItems={"center"} variant="subtitle1" fontWeight={600}>
                                        {feedback.client} {renderStars(feedback.stars)}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {feedback.date}
                                    </Typography>
                                </Box>

                                <Box display="flex" mt={0.5}>
                                    
                                </Box>

                                <Typography mt={1} fontSize={"14px"} mb={1}>
                                    "{feedback.comment}"
                                </Typography>
                                <Typography
                                    fontSize={"14px"}
                                    fontWeight={500}
                                    sx={{ color: feedback.projectColor }}
                                >
                                    Project: {feedback.project}
                                </Typography>
                        </Card>
                    ))}
                </Grid>

                <Grid size={{ md: 6 }}>
                    <Typography variant="h6" fontWeight={"bold"} mb={2}>
                        Satisfaction Metrics
                    </Typography>

                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Box mt={"1rem"} position="relative" display="inline-flex" mb={2}>
                            <CircularProgress
                                variant="determinate"
                                value={84}
                                size={100}
                                thickness={4}
                                sx={{ color: "#1abc9c" }}
                            />
                            <Box
                                top={0}
                                left={0}
                                bottom={0}
                                right={0}
                                position="absolute"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography variant="h4" fontWeight={700}>
                                    4.2
                                </Typography>
                            </Box>
                        </Box>
                        <Typography  mt={"1rem"} fontWeight={600}>Overall Rating</Typography>
                        <Typography  variant="body2" color="text.secondary" mb={4}>
                            Based on 127 client reviews
                        </Typography>

                        {ratingMetrics.map((metric, index) => (
                            <Box
                                key={index}
                                display={"flex"}
                                justifyContent={"space-between"}
                                mb={1}
                                width="100%"
                            >
                                <Box width="50%">
                                    <Typography variant="body2">{metric.label}</Typography>
                                </Box>
                                <Box width={"30%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                                    <Box width={"90%"} mx={1}>
                                        <LinearProgress
                                            variant="determinate"
                                            value={(metric.value / 5) * 100}
                                            sx={{
                                                height: 8,
                                                borderRadius: 4,
                                                backgroundColor: "#e0e0e0",
                                                "& .MuiLinearProgress-bar": {
                                                    backgroundColor: metric.color,
                                                },
                                            }}
                                        />
                                    </Box>
                                    <Typography variant="body2" fontWeight={600}>
                                        {metric.value.toFixed(1)}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
};

export default ClientFeedback;
