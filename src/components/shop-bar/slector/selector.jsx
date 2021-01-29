import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({    
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
    },
}));

export default function ControlledOpenSelect({ sort }) {
    const classes = useStyles();
    const [sorting, setSorting] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setSorting(event.target.value);
        sort(event.target.value)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <div>
            <FormControl className={classes.formControl}>
                <h3>Сортировать</h3>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={sorting}
                    onChange={handleChange}
                >
                    <MenuItem value={`priceUp`}>Цена по возрастанию</MenuItem>
                    <MenuItem value={`priceDown`}>Цена по убыванию</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}