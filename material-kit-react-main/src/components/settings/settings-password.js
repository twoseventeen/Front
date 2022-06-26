import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const SettingsPassword = (props) => {
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form {...props}>
      <Paper variant="outlined" sx={{ my: { xs: 1, md: 6 }, p: { xs: 3, md: 3 } }}>
        <Box
          sx={{ p: 2 }}>
          <TextField
            fullWidth
            label="새 비밀번호"
            margin="normal"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="새 비밀번호 확인"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >

        </Box>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex',
            p: 4
          }}
        >
          <Typography variant="body2" align="center">
            {"영문, 숫자, 특수문자를 함께 사용하면 보다 안전합니다."}

          </Typography>
        </Box>
        <Box
          sx={{
            display: 'center',
            justifyContent: 'center',
            p: 2
          }}
        >
          <Button
            color="secondary"
            variant="contained"
          >
            확인
          </Button>
        </Box>
      </Paper>



    </form >
  );
};