import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { SET_PROFILE_PHOTO } from '../../store/reducers/userReducer';

const ProfilePhoto = () => {
  const [opened, setOpened] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();
  const { email, profilePhoto } = useSelector(state => state.userReducer);

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('email', email);
    data.append('profilePhoto', image, image.name);
    const res = await axios.post(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_API_LATAM_CLONE}/api/users/update`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    dispatch({ type: SET_PROFILE_PHOTO, payload: res.data.data.profilePhoto });
    setOpened(false);
  };

  const readFile = file => {
    const reader = new FileReader();
    reader.onload = e => setPreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleChange = e => {
    readFile(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <>
      <Modal
        opened={opened}
        centered
        transition='fade'
        transitionDuration={600}
        transitionTimingFunction='ease'
        onClose={() => setOpened(false)}
        title='Cambia tu foto de perfil!'>
        <div className='profilePhoto__container'>
          <div>
            <Stack direction='row' spacing={2}>
              <Avatar
                alt='Remy Sharp'
                src={preview}
                sx={{ width: 130, height: 130 }}
              />
            </Stack>
          </div>
          <div>
            <Stack direction='row' spacing={2}>
              <Avatar
                alt='Remy Sharp'
                src={profilePhoto}
                sx={{ width: 130, height: 130 }}
              />
            </Stack>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='form-profile-photo'>
          <label htmlFor='profile-photo' className='label-form-profile-photo'>
            Selecciona tu foto
          </label>
          <input
            type='file'
            accept='image/*'
            name='profile-foto'
            id='profile-photo'
            onChange={handleChange}
          />
          <button className='profile-photo-button'>Cambiar</button>
        </form>
      </Modal>
      <Group position='center'>
        <Button variant='subtle' color='red' onClick={() => setOpened(true)}>
          Cambiar foto de perfil
        </Button>
      </Group>
    </>
  );
};

export default ProfilePhoto;
