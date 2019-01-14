import React, { Component, Fragment } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  FormControl: {
    width: 500
  }
});

class Create extends Component {
  state = {
    open: false,
    exersise: {
      titles: '',
      description: '',
      muscles: ''
    }
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      exersise: {
        ...this.state.exersise,
        [name]: value
      }
    });
  };

  handleSubmit = () => {
    //TODO validate

    const { exersise } = this.state

    this.props.onCreate({
      ...exersise,
      id: exersise.titles.toLocaleLowerCase().replace(/ /g,'-')
    });

    this.setState({
      open: false,
      exersise: {
        titles: '',
        description: '',
        muscles: ''
      }
    });
  };

  render() {
    const {
        open,
        exersise: { titles, description, muscles }
      } = this.state,
      { classes, muscles: categories } = this.props

    return (
      <Fragment>
        <Button variant="fab" onClick={this.handleToggle} mini>
          <Add />
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create a new Exersise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the forms below.
            </DialogContentText>
            <form>
              <TextField
                id="standard-name"
                label="Title"
                value={titles}
                onChange={this.handleChange("titles")}
                margin="normal"
                className={classes.FormControl}
              />
              <br />
              <FormControl className={classes.FormControl}>
                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                <Select value={muscles} onChange={this.handleChange("muscles")}>
                  {categories.map(category => 
                    <MenuItem value={category}>{category}</MenuItem>
                  )}
                </Select>
              </FormControl>
              <br />
              <TextField
                multiline
                rows="4"
                label="Description"
                value={description}
                onChange={this.handleChange("description")}
                margin="normal"
                className={classes.FormControl}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="raised"
              onClick={this.handleSubmit}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Create);
