import {
    Toolbar,
    Typography,
    Box,
    IconButton,
    Avatar,
    Button,
    Stack,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { Fragment, useState } from "react";

const HeaderBar = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        "Attendance",
        "Tasks & Feedback",
        "Review Cards",
        "Charts & Export",
    ];
    return (
        <Stack>
            <Box borderBottom={1} borderColor={"lightgray"} padding={"1rem"}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Left Side - Logo + Title */}
                    <Box display="flex" alignItems="center" gap={2}>
                        {/* Logo Box */}
                        <Box
                            sx={{
                                bgcolor: "#4f46e5",
                                color: "white",
                                width: 40,
                                height: 40,
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: "bold",
                                fontSize: "14px",
                            }}
                        >
                            MT
                        </Box>

                        {/* Company Info */}
                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold">
                                Million Technologies
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Monthly Performance Report Generator
                            </Typography>
                        </Box>
                    </Box>

                    {/* Right Side - Icons + Profile */}
                    <Box display="flex" alignItems="center" gap={2}>
                        <IconButton>
                            <NotificationsNoneIcon />
                        </IconButton>
                        <IconButton>
                            <SettingsIcon />
                        </IconButton>

                        {/* Profile */}
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: "20px",
                                textTransform: "none",
                                borderColor: "#e5e7eb",
                                color: "black",
                                backgroundColor: "#f9fafb",
                                "&:hover": { backgroundColor: "#f3f4f6" },
                            }}
                            startIcon={
                                <Avatar
                                    src="https://i.pravatar.cc/40"
                                    sx={{ width: 28, height: 28 }}
                                />
                            }
                            endIcon={<ArrowDropDownIcon />}
                        >
                            Sarah Chen
                        </Button>
                    </Box>
                </Toolbar>
            </Box>

            <Box
                display="flex"
                alignItems="center"
                gap={3}
                sx={{
                    borderBottom: "1px solid #e5e7eb",
                    px: 4,
                    py: 2,
                    backgroundColor: "white",
                }}
            >
                {tabs.map((tab, index) => (
                    <Fragment key={index}>
                        <Button
                            onClick={() => setActiveTab(index)}
                            sx={{
                                textTransform: "none",
                                fontWeight: activeTab === index ? "bold" : "normal",
                                color: activeTab === index ? "#1d4ed8" : "#6b7280",
                                backgroundColor:
                                    activeTab === index ? "#e0e7ff" : "transparent",
                                borderRadius: "20px",
                                px: 2,
                                py: 1,
                                display: "flex",
                                alignItems: "center",
                                gap: 1.2,
                                "&:hover": {
                                    backgroundColor: activeTab === index ? "#e0e7ff" : "#f3f4f6",
                                },
                            }}
                        >
                            {/* Number Badge */}
                            <Box
                                sx={{
                                    width: 22,
                                    height: 22,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    color: activeTab === index ? "white" : "#6b7280",
                                    backgroundColor: activeTab === index ? "#1d4ed8" : "#e5e7eb",
                                }}
                            >
                                {index + 1}
                            </Box>
                            {tab}
                        </Button>

                        {/* Divider line between steps */}
                        {index !== tabs.length - 1 && (
                            <Box sx={{ width: "1px", height: "20px", bgcolor: "#e5e7eb" }} />
                        )}
                    </Fragment>
                ))}
            </Box>
        </Stack>
    );
};

export default HeaderBar;
