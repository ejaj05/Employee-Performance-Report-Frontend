import React, { useState } from "react";
import {
    Box,
    Card,
    Typography,
    Button,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Checkbox,
    Avatar,
    LinearProgress,
    Pagination,
    CircularProgress,
    Chip,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function EmployeeManagement({ setAddModalOpen }) {
    const [reports, setReports] = useState([]);
    const [month, setMonth] = useState("");
    const [department,setDepartment] = useState("");
    const [role,setRole] = useState("")
    const today = new Date();
    const m = today.getMonth();
    

    const columns = [
        "Employee",
        "ID",
        "Department",
        "Role",
        "Attendance Rate",
        "Client Satisfaction",
        "Monthly Score",
        "Trend",
        "Status",
    ];

    const getallReports = async() => {
        const id = toast.loading("Loading...")
        try {
            const {data} = await axios.get("https://employee-performance-report-backend.onrender.com/api/performance/reports")
            setReports(data.report)
        } catch (error) {
            console.log(error)
        } finally {
            toast.dismiss(id)
        }
    }

    const getReportByMonth = async (e) => {
        const id = toast.loading("Loading...")
        try {
            setMonth(e.target.value)
            setDepartment("")
            setRole("")
            const {data} = await axios.get(
                `https://employee-performance-report-backend.onrender.com/api/performance/reports/month/${e.target.value}`
            );
            setReports(data);
            
        } catch (err) {
            console.error("Failed to fetch report:", err);
        } finally {
            toast.dismiss(id)
        }
    };


    const handleDepartment = async(event) => {
        const id = toast.loading("Loading...")
        try {
            const {data} = await axios.get(`https://employee-performance-report-backend.onrender.com/api/performance/reports/department/${event.target.value}`)
            setReports(data.report)
            setDepartment(event.target.value)
            setRole("")
            setMonth("")
        } catch (error) {
            console.log(error)
        }finally {
            toast.dismiss(id)
        }
    }

    const handleRole = async(e) => {
        const id = toast.loading("Loading...")
        try {
            const {data} = await axios.get(`https://employee-performance-report-backend.onrender.com/api/performance/reports/role/${e.target.value}`)
            setReports(data.report)
            setRole(e.target.value)
            setDepartment("")
            setMonth("")
        } catch (error) {
            console.log(error)
        }finally {
            toast.dismiss(id)
        }
    }

    useEffect(() => {
        getallReports()
    }, []);

console.log(reports)
    return (
        <Card>
            <Box
                p={4}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={1}
                borderColor={"lightgray"}
            >
                <Box>
                    <Typography variant="h5" fontWeight="bold">
                        Employee Management
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Manage team members, track performance, and generate reports
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#e0e7ff",
                        color: "#1d4ed8",
                        fontWeight: "bold",
                    }}
                >
                    {reports.length} Total Employees
                </Button>
            </Box>

            {/* Filters */}
            <Box
                px={4}
                display="flex"
                alignItems="center"
                gap={2}
                flexWrap="wrap"
                sx={{ mt: 3, mb: 2 }}
            >
                <TextField placeholder="Search" size="small" sx={{ width: 200 }} />
                <FormControl size="small" sx={{ minWidth: 160 }}>
                    <InputLabel>All Departments</InputLabel>
                    <Select label="All Departments" value={department} onChange={handleDepartment} defaultValue="">
                        <MenuItem value="Engineering">Engineering</MenuItem>
                        <MenuItem value="Design">Design</MenuItem>
                        <MenuItem value="Marketing">Marketing</MenuItem>
                        <MenuItem value="Sales">Sales</MenuItem>
                    </Select>
                </FormControl>
                <FormControl size="small" sx={{ minWidth: 160 }}>
                    <InputLabel>All Roles</InputLabel>
                    <Select label="All Roles" value={role} onChange={handleRole} defaultValue="">
                        <MenuItem value="Senior Developer">Senior Developer</MenuItem>
                        <MenuItem value="Senior Developer">Full Stack Developer</MenuItem>
                        <MenuItem value="UX Designer">UX Designer</MenuItem>
                        <MenuItem value="Marketing Manager">Marketing Manager</MenuItem>
                        <MenuItem value="Sales Representative">Sales Representative</MenuItem>
                        <MenuItem value="Junior Developer">Junior Developer</MenuItem>
                    </Select>
                </FormControl>
                <FormControl size="small" sx={{ minWidth: 160 }}>
                    <InputLabel>All Months</InputLabel>
                    <Select
                        value={month}
                        onChange={getReportByMonth}
                        defaultValue=""
                        label="All Months"
                    >
                        {[
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                        ].map((m) => (
                            <MenuItem key={m} value={m}>
                                {m}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Box flexGrow={1} />

                <Link to={"/report"}>
                    <Button variant="outlined" startIcon={<UploadFileIcon />}>
                        generate report
                    </Button>
                </Link>
                <Button variant="outlined" startIcon={<CloudUploadIcon />}>
                    Export
                </Button>

                <Button
                    onClick={() => setAddModalOpen(true)}
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{ backgroundColor: "#2563eb", borderRadius: "8px" }}
                >
                    Add Employee
                </Button>
            </Box>

            {/* Table */}
            {
                reports.length == 0 ? <Typography my={"2rem"} textAlign={"center"}> No Report Found </Typography>:
                <Box maxHeight={"400px"} overflow={"auto"}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox />
                            </TableCell>
                            {columns.map((column) => (
                                <TableCell sx={{ fontWeight: "bold" }} key={column}>
                                    {column.toUpperCase()}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reports.map((r, index) => {
                            const { employee, report } = r;
                            const emp = employee;
                            const rep = report;

                            return (
                                <TableRow key={index}>
                                    <TableCell padding="checkbox">
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>
                                        <Box display="flex" alignItems="center" gap={1.5}>
                                            <Avatar src={""} />
                                            <Box>
                                                <Typography fontWeight="bold">{emp?.name}</Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>{emp?.employeeId}</TableCell>
                                    <TableCell>{emp?.department}</TableCell>
                                    <TableCell>{emp?.role}</TableCell>
                                    <TableCell>
                                        <Box display="flex" alignItems="center" gap={1}>
                                            <LinearProgress
                                                variant="determinate"
                                                value={Math.floor((rep?.attendance.presentDays / rep?.attendance.totalDays) * 100)}
                                                sx={{
                                                    flexGrow: 1,
                                                    height: 6,
                                                    borderRadius: 5,
                                                    backgroundColor: "#e5e7eb",
                                                    "& .MuiLinearProgress-bar": {
                                                        backgroundColor: rep?.attendance.presentDays / rep?.attendance.totalDays * 100 >= 90 ? "green" : rep?.attendance.presentDays / rep?.attendance.totalDays * 100 >= 80 ? "orange" : "red",
                                                    },
                                                }}
                                            />
                                            <Typography variant="body2">
                                                {Math.floor((rep?.attendance.presentDays / rep?.attendance.totalDays) * 100)}%
                                            </Typography>
                                        </Box>
                                        
                                    </TableCell>

                                    <TableCell>
                                        {
                                            Array(5).fill(0).map((_, index) => (
                                                <StarIcon  key={index} sx={{fontSize:"18px", color: index < rep.clientFeedback.rating ? "gold" : "lightgray" }} />
                                            ))
                                        }
                                    </TableCell>

                                    <TableCell>
                                        <Box position="relative" display="inline-flex">
                                            <CircularProgress
                                                variant="determinate"
                                                value={rep.score}
                                                size={50}
                                                thickness={5}
                                                sx={{
                                                    color:
                                                        rep.score >= 100
                                                            ? "green"
                                                            : rep.score > 80
                                                                ? "orange"
                                                                : "red",
                                                }}
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
                                                <Typography variant="caption" fontWeight="bold">
                                                    {rep.score}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {rep.trend === "upward" && (
                                            <ArrowUpwardIcon sx={{ color: "green" }} />
                                        )}
                                        {rep.trend === "downward" && (
                                            <ArrowDownwardIcon sx={{ color: "red" }} />
                                        )}
                                        {rep.trend === "stable" && (
                                            <RemoveIcon sx={{ color: "gray" }} />
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={rep.status}
                                            color={
                                                rep.status === "Excellent"
                                                    ? "success"
                                                    : rep.status === "Good"
                                                        ? "primary"
                                                        : rep.status === "Average"
                                                            ? "warning"
                                                            : "error"
                                            }
                                            variant="outlined"
                                        />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Box>
            }
        </Card>
    );
}
