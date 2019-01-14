import React  from "react";

import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import CreateDialog from '../Exersises/Dialogs/Create'

export default ({ muscles, onExersiseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
        Exersies DataBase
      </Typography>

      <CreateDialog muscles={muscles}
        onCreate={onExersiseCreate}
      />
    </Toolbar>
  </AppBar>
);
