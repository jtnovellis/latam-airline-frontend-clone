import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import { useSelector } from 'react-redux';
import ProfilePhoto from './ProfilePhoto';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import logouser from '../../images/user/avatar.png';

const DataUser = () => {
  const { email, password, name, lastname, profilePhoto } = useSelector(
    state => state.userReducer
  );

  return (
    <div className='dataUser'>
      <div className='dataUser__header'>
        <div className='dataUser__header--title'>
          <h2>Mis datos</h2>
        </div>
        <div className='dataUser__header--avatar'>
          <Stack direction='row' spacing={2}>
            <Avatar
              alt={name}
              src={profilePhoto}
              sx={{ width: 56, height: 56 }}
            />
          </Stack>
          <ProfilePhoto />
        </div>
      </div>
      <div className='dataUser__accessData'>
        <div className='dataUser__accessData--header'>
          <div>
            <LockOpenIcon />
          </div>
          <h4>Datos de acceso</h4>
        </div>
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '400px' },
          }}
          noValidate
          autoComplete='off'>
          <div className='dataUser__accessData--email'>
            <TextField
              id='user-email'
              label='Email'
              type='email'
              defaultValue={email}
              InputProps={{
                readOnly: true,
              }}
              variant='standard'
            />
          </div>
          <div className='dataUser__accessData--password'>
            <TextField
              id='user-password'
              label='Contraseña'
              type='password'
              defaultValue={password}
              InputProps={{
                readOnly: true,
              }}
              variant='standard'
            />
          </div>
        </Box>
      </div>
      <div className='dataUser__personalData'>
        <div className='dataUser__personalData--header'>
          <div>
            <ContactPageOutlinedIcon />
          </div>
          <h4>Datos de acceso</h4>
        </div>
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '400px' },
          }}
          noValidate
          autoComplete='off'>
          <div className='dataUser__personalData--name'>
            <TextField
              id='user-name'
              label='Nombre(s)'
              type='text'
              defaultValue={name}
              InputProps={{
                readOnly: true,
              }}
              variant='standard'
            />
          </div>
          <div className='dataUser__personalData--lastname'>
            <TextField
              id='user-lastname'
              label='Apellidos'
              type='text'
              defaultValue={lastname}
              InputProps={{
                readOnly: true,
              }}
              variant='standard'
            />
          </div>
          <div className='dataUser__personalData--birthDate'>
            <TextField
              id='user-bithDate'
              label='Fecha de nacimiento'
              type='text'
              defaultValue='28/07/1994'
              InputProps={{
                readOnly: true,
              }}
              variant='standard'
            />
          </div>
          <div className='dataUser__personalData--genre'>
            <TextField
              id='user-genre'
              label='Género'
              type='text'
              defaultValue='Masculino'
              InputProps={{
                readOnly: true,
              }}
              variant='standard'
            />
          </div>
          <div className='dataUser__personalData--numberPhone'>
            <TextField
              id='user-numberPhone'
              label='Número de telédono'
              type='number'
              defaultValue={3005090433}
              InputProps={{
                readOnly: true,
              }}
              variant='standard'
            />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default DataUser;
