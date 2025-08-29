import React, { useState } from "react";
import { Grid, Paper, Stack } from "@mui/material";
import Header from "../specific/Header";
import Sidebar from "../specific/Sidebar";
import HeaderBar from "../specific/HeaderBar";
import EmployeeManagement from "../specific/EmployeeManagement";
import PerformanceOverview from "../specific/PerformanceOverview";
import DepartmentPerformance from "../specific/DepartmentPerformance";
import RecentActivities from "../specific/RecentActivities";
import TaskOverview from "../specific/TaskOverview";
import ClientFeedback from "../specific/ClientFeedback";
import AnalyticsDashboard from "../specific/AnalyticsDashboard";
import AddEmployeeModal from "../specific/AddEmployeeModal";
const AppLayout = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);


  return (
    <>
      <Header />

      <Grid container>
        <Grid
          size={{
            md:2,
          }}
        >
          <Sidebar />
        </Grid>
        <Grid
          height={"100vh"}
          overflow={"auto"}
          size={{
            md: 10,
          }}
          bgcolor={"rgb(248, 248, 248)"}
          padding={4}
        >
          <Stack bgcolor={"white"} border={1} borderColor={"lightgrey"} borderRadius={2} boxShadow={1}>
            <HeaderBar /> 
            <Stack bgcolor={"rgb(248, 250, 252)"} padding={"2rem 4rem"}>
              <EmployeeManagement setAddModalOpen={setAddModalOpen}/>
              <PerformanceOverview />
              <DepartmentPerformance/>
              <RecentActivities/>
              <TaskOverview/>
              <ClientFeedback/>
              <AnalyticsDashboard/>
              <AddEmployeeModal open={addModalOpen} onClose={() => setAddModalOpen(false)} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default AppLayout;
