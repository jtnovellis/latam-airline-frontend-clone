import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';

const DataUser = () => {
  return (
    <div className='dataUser'>
      <div className='dataUser__header'>
        <div className='dataUser__header--title'>
          <h2>Mis datos</h2>
        </div>
        <div className='dataUser__header--avatar'>
          <Stack direction='row' spacing={2}>
            <Avatar
              alt='Remy Sharp'
              src='https://pixabay.com/get/g9854c72bc538623f253b7260263cd7614b1476dcf2095711e845b41a2b90454646650ee1182f8e777ab98b10803e0a9727293d251523c635f7a0b7bc6413daf90734d8570699cdf7da961120d40cbb23_640.png'
              sx={{ width: 56, height: 56 }}
            />
          </Stack>
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
              defaultValue='email.example@example.com'
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
              defaultValue='email.example@example.com'
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
      </div>
    </div>
  );
};

export default DataUser;
