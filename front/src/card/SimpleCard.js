import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import FilterTask from '../form/FilterTask'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// {contenido}
export default function SimpleCard({contenido}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <FilterTask />
    </div>
  );

  const bull = <span className={classes.bullet}>•</span>;

  // const contenido =  {
  // 	"description": "some description text ",
  // 	"responsible": {
  // 		"name": "Santiago Carrillo",
  // 		"email": "sancarbar@gmail"
  // 	},
  // 	"status": "ready",
  // 	"dueDate": 156464645646
  // }

  return (
    <div>
      <div> 
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {contenido.description}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {contenido.status}  -   {new Date(contenido.dueDate).toLocaleDateString()}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {contenido.responsible}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <button type="button" onClick={handleOpen}>
          Open Filter Task
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </div>
  );
}