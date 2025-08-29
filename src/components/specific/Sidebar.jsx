import { Collapse, List, ListItemButton, ListItemText, Stack } from '@mui/material'
import React, { Fragment, useState } from 'react'
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
    const [openGroups, setOpenGroups] = useState({});
    const groups = [
    { name: "Group 4", items: ["Item 4.1", "Item 4.2"] },
    { name: "Group 2", items: ["Item 2.1", "Item 2.2"] },
    { name: "Group 3", items: ["Item 3.1", "Item 3.2"] },
  ];
  const toggleGroup = () => {
    setOpenGroups((prev) => !prev);
  };
  return (
    <Stack bgcolor={"white"} borderRight={1} borderColor={"lightgray"} minHeight={"100vh"}>
        <List>
          {groups.map((group) => (
            <Fragment key={group.name}>
              <ListItemButton onClick={() => toggleGroup()}>
                <ListItemText primary={group.name} />
                {openGroups[group.name] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </Fragment>    
          ))}
        </List>
    </Stack>
  )
}

export default Sidebar