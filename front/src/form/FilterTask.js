import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';

const currencies = [
    {
      value: 'R',
      label: 'Ready',
    },
    {
      value: 'P',
      label: 'In progress',
    },
    {
      value: 'D',
      label: 'Done',
    },
  ];

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function FilterTask() {
  const classes = useStyles();

  const [responsible, setResponsible] = React.useState();
  
  const [currency, setCurrency] = React.useState('P');
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  function handleSubmit(e) {
    const formData = new FormData(e.target);
    e.preventDefault();
    const newTask = {};
    for (let entry of formData.entries()) {
        newTask[entry[0]] = entry[1];
    }
    newTask['selectedDate'] = selectedDate.toLocaleDateString();
    newTask['currency'] = currency;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FormatListBulletedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Task Filter
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={12}>
                        <KeyboardDatePicker
                        variant="outlined"
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <Grid item xs={12} >
                    <TextField
                        variant="outlined"
                        id="status"
                        select
                        label="Select"
                        value={currency}
                        onChange={handleChange}
                        helperText="Status"
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="responsible"
                        label="Responsible"
                        type="responsible"
                        id="responsible"
                        autoComplete="responsible"
                        onChange={setResponsible}
                    />
                </Grid>
            </Grid>
            
            <br/>
            <br/>

            <Button
            fullWidth
            variant="contained"
            color="primary"
          >
            APPLY
          </Button>

            <br/>
            <br/>

            <Button
            fullWidth
            variant="contained"
            color="primary"
          >
            CLEAR ALL
          </Button>
        </form>
      </div>
    </Container>
  );
}