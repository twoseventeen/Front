import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook as FacebookIcon } from '../icons/facebook';
// import { Google as GoogleIcon } from '../icons/google';
import Stack from '@mui/material/Stack';

const Login = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      id: '',
      password: ''
    },
    validationSchema: Yup.object({
      id: Yup
        .string()
        .max(255)
        .required(
          '아이디를 입력해주세요.'),
      password: Yup
        .string()
        .max(255)
        .required(
          '비밀번호를 입력해주세요.')
    }),
    onSubmit: () => {
      router.push('/');
    }
  })

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
      {/* 상단 */}
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
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              메인화면으로 돌아가기
            </Button>
          </NextLink>

          <form onSubmit={formik.handleSubmit}>
            <Box sx={{
              my: 5,
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                로그인
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >

              </Typography>
            </Box>

            {/* 로그인 */}
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
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={{ mt: 2.5 }}
              >
                Sign In Now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              <NextLink
                href="/find"
              >
                <Grid container>
                  <Grid item xs>
                    <NextLink
                      href="/find"
                    >
                      <Link
                        to="/find"
                        variant="subtitle2"
                        underline="hover"
                        sx={{
                          cursor: 'pointer'
                        }}
                      >
                        비밀번호 찾기
                      </Link>
                    </NextLink>
                  </Grid>
                  <Grid item>
                    <NextLink
                      href="/register"
                    >
                      <Link
                        to="/register"
                        variant="subtitle2"
                        underline="hover"
                        sx={{
                          cursor: 'pointer'
                        }}
                      >
                        회원가입
                      </Link>
                    </NextLink>
                  </Grid>
                </Grid>
              </NextLink>
            </Typography>

            {/* 소셜로그인   */}

            <Grid item xs={12}>
            </Grid>
            <Typography
            ><Divider>간편 로그인</Divider></Typography>

            <Grid
              item
              xs={1}
              md={2}
            >
              <Box sx={{
                my: 10,
                marginTop: 3
              }}>
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    color="info"
                    fullWidth
                    startIcon={<FacebookIcon />}
                    onClick={clickMe1}
                    size="large"


                  >
                    카카오톡 로그인
                  </Button>

                  <Button
                    color="info"
                    fullWidth
                    startIcon={<FacebookIcon />}
                    onClick={clickMe2}
                    size="large"
                    variant="contained"
                  >
                    구글 로그인
                  </Button>
                </Stack>
              </Box>
            </Grid>

          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;