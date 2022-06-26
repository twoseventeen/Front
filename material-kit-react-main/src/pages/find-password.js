import React from "react";
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, CardContent, CardHeader, Divider, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { AppAppBar } from '../components/appappbar';


const FindPassword = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      // id: '',
      email: '',
      number: '',
      inputnumber: ''
    },
    validationSchema: Yup.object({
      // id: Yup
      //   .string()
      //   .max(255)
      //   .required(
      //     '아이디를 입력해주세요.'),
      password: Yup
        .string()
        .max(255)
        .required(
          '이메일을 입력해주세요.')
    }),
    onSubmit: () => {
      router.push('/');
    }
  });

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 6
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h5" gutterBottom marked="center" align="left">
            본인인증
          </Typography>
          <Typography variant="body3" align="left">
            {"가입시 등록한 이메일주소를 입력해주세요."}
          </Typography>
        </Container>

        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
              <Box
                sx={{ p: 2 }}>
                {/* <TextField
                  error={Boolean(formik.touched.id && formik.errors.id)}
                  fullWidth
                  helperText={formik.touched.id && formik.errors.id}
                  label="아이디"
                  margin="normal"
                  name="id"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="id"
                  value={formik.values.id}
                  variant="outlined"
                /> */}
                <Stack spacing={2} direction="row">

                  <TextField
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="이메일"
                    margin="dense"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="pattern"
                    value={formik.values.email}
                    variant="outlined"
                    size="normal"
                  />
                  <Box sx={{ '& button': { m: 1, py: 2 } }}>
                    <Button variant="outlined" size="small" color="secondary" >확인</Button>
                  </Box>
                </Stack>

                <Stack spacing={2} direction="row">

                  <TextField
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="인증번호 4자리를 입력해주세요."
                    margin="dense"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="pattern"
                    value={formik.values.email}
                    variant="outlined"
                    size="normal"
                  />
                  <Box sx={{ '& button': { m: 1, py: 2 } }}>
                    <NextLink
                      href="/settings"
                    >
                      <Button variant="outlined" size="small" color="secondary" >확인
                      </Button>
                    </NextLink>
                  </Box>
                </Stack>





              </Box>

            </Paper>
          </form >
        </Container>
      </Box>
    </>
  );
};
FindPassword.getLayout = (page) => (
  <AppAppBar>
    {page}
  </AppAppBar>
);
export default FindPassword;