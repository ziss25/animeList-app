import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/myContext';

const Input = ({ title, onChange, type, icon, isErorr }) => {
  const { darkMode } = useContext(Context);
  const [result, setResult] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <section className="flex flex-col gap-3 mb-5">
      <div className="form-control">
        <FormControl
          error={isErorr}
          fullWidth
          variant="filled"
          sx={{
            m: 1,
            '& label': {
              color: darkMode ? 'white' : 'black',
            },
            '& input': {
              color: darkMode ? 'white' : 'black',
              borderColor: darkMode ? 'white' : 'black',
              '&:focus': {
                borderColor: darkMode ? 'white' : 'black',
              },
            },
          }}
        >
          <InputLabel htmlFor={title}>{title}</InputLabel>
          {type === 'password' ? (
            <FilledInput
              id={title}
              type={showPassword ? 'text' : 'password'}
              onChange={onChange}
              x
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      color: darkMode ? 'white' : 'black',
                    }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                  </IconButton>
                </InputAdornment>
              }
            />
          ) : (
            <FilledInput
              id={title}
              type={type}
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      color: darkMode ? 'white' : 'black',
                    }}
                    edge="end"
                  >
                    {icon}
                  </IconButton>
                </InputAdornment>
              }
            />
          )}
        </FormControl>
      </div>
    </section>
  );
};

export default Input;
