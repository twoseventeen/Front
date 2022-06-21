import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// --------------------입력 칸--------------------------
const Register = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      id: '',
      nickname: '',
      passwrod: '',
      password2: '',
      name: '',
      email: ''
      // policy: false
    },
    validationSchema: Yup.object({
      id: Yup
        .string()
        .max(255)
        .required(
          '아이디를 입력해주세요.'),
      nickname: Yup
        .string()
        .max(255)
        .required(
          '사용할 닉네임을 입력해주세요'),
      password: Yup
        .string()
        .max(255)
        .required(
          '비밀번호를 입력해주세요'),
      password2: Yup
        .string()
        .max(255)
        .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지않습니다.')
        .required(
          '비밀번호를 재입력해주세요.'),
      name: Yup
        .string()
        .max(255)
        .required(
          '이름을 입력해주세요.'),
      email: Yup
        .string()
        .max(255)
        .email('올바른 이메일 형식을 입력해주세요.')
        .required(
          '이메일을 입력해주세요.'),

      policy: Yup
        .boolean()
        .oneOf(
          [true],
          'This field must be checked'
        )
    }),
    onSubmit: () => {
      router.push('/');
    }
  });

  return (
    <>
      <Head>
        <title>
          Register | Material Kit
        </title>
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
        <Container maxWidth="sm">
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              메인화면으로
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>


            {/* -------------상단 '회원가입'----------------- */}
            <Box sx={{
              my: 1,
              marginTop: 0.5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                회원가입
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
              </Typography>
            </Box>

            {/* ----------------입력박스에 값이 없을 때 에러표시------------------ */}
            <TextField
              error={Boolean(formik.touched.id && formik.errors.id)}
              fullWidth
              helperText={formik.touched.id && formik.errors.id}
              label="아이디"
              margin="normal"
              name="id"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.id}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.nickname && formik.errors.nickname)}
              fullWidth
              helperText={formik.touched.nickname && formik.errors.nickname}
              label="닉네임"
              margin="normal"
              name="nickname"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.nickname}
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
            <TextField
              error={Boolean(formik.touched.password2 && formik.errors.password2)}
              fullWidth
              helperText={formik.touched.password2 && formik.errors.password2}
              label="비밀번호 확인"
              margin="normal"
              name="password2"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password2}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.name && formik.errors.name)}
              fullWidth
              helperText={formik.touched.name && formik.errors.name}
              label="이름"
              margin="normal"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="이메일"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="pattern"
              value={formik.values.email}
              variant="outlined"
            />

            {/* ------------------약관---------------------- */}
            <Box
              sx={{
                py: 1,
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                이용약관에 동의합니다.
                {' '}
                <NextLink
                  href=""
                  passHref
                >
                  <Link
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >
                    약관보기
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )}

            {/* ----------------회원가입 버튼--------------- */}
            <Box sx={{ py: 3 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                가입하기
              </Button>
            </Box>

            {/* --------로그인 화면으로 돌아가기---------- */}
            <Typography
              color="textSecondary"
              variant="body2"
            >
              계정이 있으신가요?
              {' '}
              <NextLink
                href="/login"
                passHref
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  로그인화면으로 가기
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;

