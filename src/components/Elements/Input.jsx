import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField } from '@mui/material';
import React from 'react';

const Input = ({ title, onChange, type, icon, isErorr }) => {
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
              color: 'white',
            },
            '& input': {
              color: 'white',
              borderColor: 'white',
              '&:focus': {
                borderColor: 'white',
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
                      color: 'white',
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
                      color: 'white',
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

{
  /* <TextField
          id="standard-basic"
          variant="standard"
          label={title}
          sx={{
            '& input': {
              color: 'white',
              '&:hover, &:focus': {
                borderColor: 'white', // Warna border putih saat hover atau focus
                color: 'white',
              },
            },
            '& label': {
              color: 'white', // Warna label putih
            },
          }}
        /> */
}
