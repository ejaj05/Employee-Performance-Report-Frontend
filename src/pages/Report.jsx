import React, { use, useState } from "react";
import { Button, Container } from "@mui/material";

import AttendanceReport from "../components/specific/AttendanceReport";
import EmployeeDetails from "../components/specific/EmployeeDetails";
import MetricsReport from "../components/specific/MetricsReport";
import ProfessionalDevelopment from "../components/specific/ProfessionalDevelopment";
import calculateScoreFromData from "../hooks/calculatePerformance";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import toast from "react-hot-toast";

const Report = () => {
  const [name, setName] = useState("");
  const [ID, setID] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [month, setMonth] = useState("August");
  const [year, setYear] = useState("");
  const [baseSalary, setBaseSalary] = useState("");
  const [loading, setLoading] = useState(false);

  const [totalWorkingDays, setTotalWorkingDays] = useState(0);
  const [presentDays, setPresentDays] = useState(0);
  const [absentDays, setAbsentDays] = useState(0);
  const [paidLeaves, setPaidLeaves] = useState(0);
  const [sickLeaves, setSickLeaves] = useState(0);

  const [completedEarly, setCompletedEarly] = useState(0);
  const [missedDeadlines, setMissedDeadlines] = useState(0);

  const [clientFeedback, setClientFeedback] = useState({
    rating: 0,
    clientLeft: false
  });

  const [upskills, setUpskills] = useState({
    certificateAchieved: false
  });
  const navigate = useNavigate();

  const generateReport = async () => {
    if (!name || !ID || !department || !role || !year || !month) {
      alert("Please fill all the fields");
      return;
    }
    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://employee-performance-report-backend.onrender.com/api/performance/submit",
        {
          employeeId: ID,
          name,
          role,
          department,
          baseSalary,
          month,
          attendance: {
            totalDays: totalWorkingDays,
            presentDays,
            absentDays,
            paidLeaveDays: paidLeaves,
            sickLeaveDays: sickLeaves,
          },
          clientFeedback,
          upskills,
        }
      );
      toast.success("Report generated successfully!");
      navigate(`/generate-report/${data._id}`);
    } catch (error) {
      console.log("Error adding report to database:", error);
      // toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "rgb(18, 23, 40)",
        padding: "4rem 0",
        overflow: "auto",
        height: "100vh",
      }}
    >
      <Container
        maxWidth="md"
        sx={{ display: "flex", flexDirection: "column", gap: 5 }}
      >
        <EmployeeDetails
          employee={{
            name,
            ID,
            department,
            role,
            month,
            year,
            baseSalary
          }}
          handler={{
            setName,
            setID,
            setDepartment,
            setRole,
            setMonth,
            setYear,
            setBaseSalary,
          }}
        />
        <AttendanceReport
          attendance={{
            totalWorkingDays,
            presentDays,
            absentDays,
            paidLeaves,
            sickLeaves,
          }}
          handler={{
            setTotalWorkingDays,
            setPresentDays,
            setAbsentDays,
            setPaidLeaves,
            setSickLeaves,
          }}
        />
        <MetricsReport
          metrics={{
            completedEarly,
            missedDeadlines,
            clientFeedback,
          }}
          handler={{
            setCompletedEarly,
            setMissedDeadlines,
            setClientFeedback,
          }}
        />
        <ProfessionalDevelopment upskills={upskills} setUpskills={setUpskills} />

        <LoadingButton
          onClick={generateReport}
          type="submit"
          variant="contained"
          loading={loading}

          
        >
          Generate Report
        </LoadingButton>
      </Container>
    </div>
  );
};

export default Report;
