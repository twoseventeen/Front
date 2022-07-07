import React from "react";
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Stack from '@mui/material/Stack';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import Divider from "@mui/material/Divider";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Facebook as FacebookIcon } from '../icons/facebook';
// import { Google as GoogleIcon } from '../icons/google';
import { DashboardLayout } from '../components/dashboard-layout';

const Login = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          '올바른 이메일 형식을 입력해주세요.')
        .max(255)
        .required(
          '이메일을 입력해주세요.'),
      password: Yup
        .string()
        .max(255)
        .required(
          '비밀번호를 입력해주세요.')
    }),
    onSubmit: () => {
      router.push('/');
    }
  });
  const theme = createTheme({
    palette: {
      primary: {
        main: '#512da8',
      }
    }
  });

  const clickMe1 = () => {
    router.push('/naver.com')
  };
  const clickMe2 = () => {
    router.push('/google.com')
  };

  return (
    <>
      <Head>
        <title>Login | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="xs">
          {/* <NextLink
            href="/"
            passHref
          >
            <Button
              color="secondary"
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              메인화면으로 돌아가기
            </Button>
          </NextLink> */}

          <form onSubmit={formik.handleSubmit}>
            <Box sx={{
              my: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Typography
                color="secondary"
                variant="h2"
              >
                Lawbot
              </Typography>
              {/* <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
               
              </Typography> */}
            </Box>

            <TextField
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
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="비밀번호"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <NextLink
                href="/"
              >
                <Button
                  color="secondary"
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2.5 }}
                >
                  로그인
                </Button>
              </NextLink>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >

              <Grid container>
                <Grid item xs>
                  <NextLink
                    href="/"
                  >
                    <Link
                      to="/"
                      variant="subtitle2"
                      underline="hover"
                      sx={{
                        cursor: 'pointer'
                      }}
                    >
                      아이디 찾기
                    </Link>
                  </NextLink>


                </Grid>
                <Grid item>
                  <NextLink
                    href="/find-password"
                  >
                    <Link
                      to="/find-password"
                      variant="subtitle2"
                      underline="hover"
                      sx={{
                        cursor: 'pointer'
                      }}
                    >
                      비밀번호찾기
                    </Link>
                  </NextLink>
                </Grid>
              </Grid>
            </Typography>

            <Grid item xs={12}></Grid>
            <Typography>
              <Divider>
                간편 로그인
              </Divider>
            </Typography>

            <Grid item xs>
              <Box
                sx={{
                  my: 1,
                  marginTop: 3,
                  borderColor: 'palette'
                }}
              >
                <Stack direction="row" spacing={3}>
                  <ThemeProvider theme={theme}>
                    <Button
                      fullWidth
                      startIcon={<FacebookIcon />}
                      onClick={clickMe1}
                      size="large"
                      variant="outlined"
                    >
                      카카오톡 로그인
                    </Button>

                    <Button
                      fullWidth
                      startIcon={<FacebookIcon />}
                      onClick={clickMe2}
                      size="large"
                      variant="outlined"
                    >
                      구글 로그인
                    </Button>
                  </ThemeProvider>
                </Stack>

              </Box>
            </Grid>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              계정이 없으신가요?
              {' '}
              <NextLink
                href="/register"
                passHref
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  회원가입
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

Login.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
export default Login;