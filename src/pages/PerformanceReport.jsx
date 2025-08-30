
import {
    Box,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    Chip,
    CircularProgress,
    Divider,
    Tooltip
} from "@mui/material";
import {
    AccessTime,
    AssignmentTurnedIn,
    ThumbUp,
    School,
    ThumbDown,
} from "@mui/icons-material";
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Area } from "recharts"

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";


const PerformanceReport = () => {
    const reportRef = useRef();
    const [employee,setEmployee] = useState(null);
    const [report,setReport] = useState(null);
    // const [performanceData, setPerformanceData] = useState([]);

    const { id } = useParams();

        const handleExportPDF = async () => {
            const input = reportRef.current;

            const canvas = await html2canvas(input, {
                scale: 2,
                useCORS: true,
                scrollY: -window.scrollY  // capture entire visible & off-screen area
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            const imgWidth = pdfWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let heightLeft = imgHeight;
            let position = 0;

            // First page
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;

            // Add more pages if needed
            while (heightLeft > 0) {
                position -= pdfHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pdfHeight;
            }

            pdf.save(`${employee?.name}_Performance_Report.pdf`);
        };


        useEffect(() => {
    // Fetch the performance report data using the id
        const fetchPerformanceReport = async () => {
            try {
                const {data} = await axios.get(`https://employee-performance-report-backend.onrender.com/api/performance/reports/${id}`);
                // Set the performance data state with the fetched data
                setEmployee(data.employee);
                setReport(data.reports);

            } catch (error) {
                console.error("Error fetching performance report:", error);
            }
    };
    fetchPerformanceReport();
}, [])

return (
    <div
        style={{
            backgroundColor: "rgb(18, 23, 40)",
            padding: "2rem 0",
            overflow: "auto",
            height: "100vh",

        }}
    >
        <div
            ref={reportRef}
            style={{
                width: "80%",
                margin: "0 auto",
                backgroundColor: "#0d1117",
                color: "#fff",
                minHeight: "100vh",
                padding: "2rem",
            }}
        >

            {/* Header */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
                <Box>
                    <Typography variant="h5">Performance Report For:</Typography>
                    <Typography variant="h6">
                        {employee?.name} ({employee?.employeeId})
                    </Typography>
                    <Typography variant="subtitle1">{employee?.role}</Typography>
                    <Typography variant="body2">{report?.month}</Typography>
                </Box>
                <Box>
                    <Button
                        variant="contained"
                        sx={{ mr: 2, backgroundColor: "#00d084" }}
                        onClick={handleExportPDF}
                    >
                        Export PDF
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: "#8e44ad" }}>
                        New Report
                    </Button>
                </Box>
            </Box>

            {/* Score + Key Takeaways */}
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            backgroundColor: "#161b22",
                            p: 4,
                            borderRadius: 2,
                            textAlign: "center",
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Overall Score
                        </Typography>
                        <Box sx={{ position: "relative", display: "inline-flex", mb: 1 }}>
                            <CircularProgress
                                variant="determinate"
                                value={150}
                                size={150}
                                thickness={5}
                                sx={{ color: report?.score >= 110 ? "#00d084" : report?.score >= 95 ? "#f39c12" : "#e74c3c" }}
                            />
                            <Box
                                sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    p:"2rem"
                                }}
                            >
                                <Typography variant="h4">
                                    {report?.score}
                                </Typography>
                                <Typography variant="body2">{report?.score >= 110 ? "Excellent" : report?.score >= 95 ? "Good" : "Bad"}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Box sx={{ backgroundColor: "#161b22", p: 4, borderRadius: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Key Takeaways
                        </Typography>
                        <Divider sx={{ borderColor: "#333", my: 2 }} />
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Chip label="Implication" color={report?.score >= 110 ? "success" : report?.score >= 95 ? "warning" : "error"} sx={{ mr: 2 }} />
                            <Typography>{report?.score >= 110 ? "Increment Eligible: Performance is excellent. Eligible for a 5% increment." : report?.score >= 95 ? "Increment Eligible: Performance is good. Eligible for a 3% increment." : "No Increment: Performance is below expectations."}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* Performance Breakdown */}
            <Box sx={{ mt: 6 }}>
                <Typography variant="h6" gutterBottom>
                    Performance Metrics Breakdown
                </Typography>
                <Grid container spacing={3}>
    
                    <Grid size={3} >
                            <Card
                                sx={{
                                    backgroundColor: "#161b22",
                                    color: "#fff",
                                    borderRadius: 2,
                                }}
                            >
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Box sx={{ fontSize: 30, mb: 1 }}>{<AccessTime />}</Box>
                                    <Typography variant="h6">
                                        {report?.attendance_score >= 0 ? `+${report?.scoreBreakdown.attendance}` : report?.scoreBreakdown.attendance}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                        Attendance
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#aaa" }}>
                                        Based on punctuality and presence.
                                    </Typography>
                                </CardContent>
                            </Card>
                    </Grid>
                    

                        <Grid size={3}>
                            <Card
                                sx={{
                                    backgroundColor: "#161b22",
                                    color: "#fff",
                                    borderRadius: 2,
                                }}
                            >
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Box sx={{ fontSize: 30, mb: 1 }}>{<AssignmentTurnedIn />}</Box>
                                    <Typography variant="h6">
                                        {report?.project_score >= 0 ? `+${report?.scoreBreakdown.upskills}` : report?.scoreBreakdown.upskills}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                        UpSkill
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#aaa" }}>
                                        Based on deadline adherence.
                                    </Typography>
                                </CardContent>
                            </Card>
                    </Grid>

                    <Grid size={3}>
                            <Card
                                sx={{
                                    backgroundColor: "#161b22",
                                    color: "#fff",
                                    borderRadius: 2,
                                }}
                            >
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Box sx={{ fontSize: 30, mb: 1 }}>{report?.scoreBreakdown.clientFeedback >= 0 ? <ThumbUp /> : <ThumbDown />}</Box>
                                    <Typography variant="h6">
                                    {report?.scoreBreakdown.clientFeedback >= 0 ? `+${report?.scoreBreakdown.clientFeedback}` : report?.scoreBreakdown.clientFeedback}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                        Client Feedback
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#aaa" }}>
                                        Based on client reviews.
                                    </Typography>
                                </CardContent>
                            </Card>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ mt: 6 }}>
                <Typography variant="h6" gutterBottom>
                    Score Contribution Analysis
                </Typography>
                <Box
                    sx={{
                        backgroundColor: "#161b22",
                        p: 3,
                        borderRadius: 2,
                        height: 300,
                    }}
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={[
                                { name: "Attendance", score: report?.scoreBreakdown.attendance },
                                { name: "Projects", score: report?.scoreBreakdown.projects },
                                { name: "Feedback", score: report?.scoreBreakdown.clientFeedback },
                                { name: "Upskilling", score: report?.scoreBreakdown.upskills },
                            ]}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid stroke="#333" vertical={false} />
                            <XAxis dataKey="name" stroke="#ccc" />
                            <YAxis stroke="#ccc" />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="score"
                                stroke="#8884d8"
                                fillOpacity={1}
                                fill="url(#colorScore)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </Box>
            </Box>
        </div>
    </div>
);
};

export default PerformanceReport;
