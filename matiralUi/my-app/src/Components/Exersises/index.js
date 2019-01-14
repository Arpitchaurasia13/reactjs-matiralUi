import React, { Fragment } from "react";
//import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import { Paper, Typography, List, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { ListItem, ListItemText } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflow: "auto"
  }
};

export default ({
  exersises,
  category,
  onSelect,
  exersise: {
    id,
    titles = "Welcome!",
    description = "Please select the exersise fron the list on the left"
  },
  onDelete,
  onSelectEdit
}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exersises.map(([group, exersises]) =>
          !category || category === group ? (
            <Fragment key={group}>
              <Typography
                variant="headline"
                style={{ textTransform: "capitalize" }}
              >
                {group}
              </Typography>

              <List component="ul">
                {exersises.map(({ id, titles }) => (
                  <ListItem key={id} button onClick={() => onSelect(id)}>
                    <ListItemText primary={titles} />

                    <br />
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => onSelectEdit(id)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => onDelete(id)}>
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>

    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="display1">{titles}</Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
