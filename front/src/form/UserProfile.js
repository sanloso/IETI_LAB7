import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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



export default function UserProfile() {
  const classes = useStyles();

  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  
  const [password, setPassword] = React.useState();
  const [confPassword, setConfPassword] = React.useState();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                autoFocus
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                onChange={setName}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={setEmail}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={setPassword}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="ConfPassword"
                label="Confirm Password"
                type="Password"
                id="ConfPassword"
                autoComplete="confirm-password"
                onChange={setConfPassword}
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
            SAVE
          </Button>
        </form>
      </div>
    </Container>
  );
}