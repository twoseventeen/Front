import React, { useEffect, useState } from "react";
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
import { AppAppBar } from '../components/appappbar';
import axios from "axios";
import googleNewsClient from "google-news-rss";
import googleNewsAPI from "google-news-json"

const Card = () => {
  const [newsList, setNewsList] = useState([]);
  //const googleNews = new googleNewsClient();

  useEffect(
    () => {
      // googleNewsAPI.getNews(googleNewsAPI.SEACRH, "apple", "en-GB", (err, response) => {
      //   console.log("zz" + response);
      // });
      console.debug(" 하하하")
      axios.get("/search")
        .then(res =>
          console.debug("ㄱㅇㅇ", res)
        )
        .then(res => {
          console.debug(res)
        }).catch(error => {
          setNewsList(["망망"])
          console.debug(" 으아아")
        })
      axios.get("/api")
        .then(res =>
          console.debug("wefwef", res)
        )
        .then(res => {
          console.debug(res)
        }).catch(error => {
          setNewsList(["망망"])
          console.debug(" 으아아")
        })
    }, []
  );
  const router = useRouter();
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
          <NextLink
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
          </NextLink>

          {newsList.map(news => {
            { "하하" }
          })}
        </Container>
      </Box>
    </>
  );
};

Card.getLayout = (page) => (
  <AppAppBar>
    {page}
  </AppAppBar>
);

export default Card;