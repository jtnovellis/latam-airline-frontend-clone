import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as CardsFAndB } from '../../svg/cards/FrontAndBackCard.svg';

const LATAMButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  color: '#fff',
  fontWeight: 600,
  fontSize: 18,
  padding: '16px 32px',
  border: '1px solid',
  borderRadius: 8,
  lineHeight: 1.5,
  backgroundColor: '#e8114b',
  borderColor: '#e8114b',
  fontFamily: ['LATAM Sans', 'Trebuchet MS', 'sans-serif'].join(','),
  '&:hover': {
    backgroundColor: '#e95878',
    borderColor: '#e95878',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#e95878',
    borderColor: '#e95878',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.1rem #1B0088',
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='left' ref={ref} {...props} />;
});

export default function AddCardModal() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <LATAMButton onClick={handleClickOpen('paper')} variant='contained'>
        Agregar
      </LATAMButton>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
        className='PayMethod__add-card-link-container'
        sx={{
          height: 1 / 1,
          width: 1 / 1,
          display: 'flex',
          padding: 0,
          justifyContent: 'flex-end',
          alignItems: 'center',
          margin: 0,
          marginBlock: 0,
          maxHeight: '100%',
          fontFamily: ['LATAM Sans', 'Trebuchet MS', 'sans-serif'].join(','),
          backgroundAttachment: 0,
          WebkitBoxPack: 'end',
          opacity: 1,
          backdropFilter: ' blur(10px)',
        }}>
        <DialogTitle
          id='scroll-dialog-title'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: ' 1rem 3rem',
            border: 0,
            fontFamily: ['LATAM Sans', 'Trebuchet MS', 'sans-serif'].join(','),
          }}>
          <h2 className='AddCardDialog__title'>
            <span>Agregar tarjeta</span>
          </h2>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <div className='AddCardModal__body'>
            <span
              aria-hidden='true'
              className='AddCardModal__body__subtitle-container'>
              <i
                aria-hidden='true'
                className='AddCardModal__body__subtitle-icon'>
                <CardsFAndB style={{ width: 32, height: 32 }} />
              </i>
              <span>Completa los datos</span>
            </span>
            <p aria-hidden='true' className='AddCardModal__body__info'>
              <span>Ingresa los datos tal como aparecen en la tarjeta.</span>
            </p>
            <div className='AddCardModal__body_form--container'>
              <Box
                component='form'
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete='off'>
                <div
                  className='textfield'
                  id='AddCardModal__accessData__cardNunber'>
                  <TextField
                    id='card-number'
                    variant='outlined'
                    label='Número de tarjeta'
                    type='number'
                    InputProps={{
                      readOnly: false,
                      endAdornment: (
                        <InputAdornment
                          position='end'
                          sx={{
                            color: '#1b0088',
                          }}>
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                    helperText='Ingrese un número de targeta'
                  />
                </div>
                <div
                  className='textfield'
                  id='AddCardModal__accessData__cardName'>
                  <TextField
                    id='card-Name'
                    variant='outlined'
                    label='Nombre de tarjeta'
                    type='text'
                    InputProps={{
                      readOnly: false,
                    }}
                    helperText='Tal como aparece en la tarjeta'
                  />
                </div>
                <div
                  className='textfield'
                  id='AddCardModal__accessData__cardNickName'>
                  <TextField
                    id='card-NickName'
                    variant='outlined'
                    label='Alias (opcional)'
                    type='text'
                    InputProps={{
                      readOnly: false,
                    }}
                    helperText='Con un alias podrás reconocer más fácil tu tarjeta'
                  />
                </div>
                <div
                  className='submitButton-modal'
                  id='AddCardModal__accessData__Submit'>
                  <LATAMButton
                    className='addCardButton__Submit'
                    onClick={SubmitEvent}
                    sx={{ width: 9 / 10, justifyContent: 'center' }}>
                    Agregar
                  </LATAMButton>
                </div>
              </Box>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
