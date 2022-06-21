import axios, { AxiosResponse, AxiosError } from "axios";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const cookie = require("cookie");

const Default = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
  const [id, setId] = React.useState<string>("");

  const navigate = useNavigate();

  const onClickMoveToLogin = () => {
    navigate("/login");
  };
  const onClickMoveToSignUp = () => {
    navigate("/signup");
  };
  const onClickLogout = () => {
    const cookies = cookie.parse(document.cookie);
    axios
      .delete("http://localhost:31000/users", {
        params: {
          user: JSON.stringify({
            user_id: decodeURIComponent(cookies.user_id),
            session: decodeURIComponent(cookies.session),
          }),
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((result: AxiosResponse) => {
        const { data, status } = result;
        if (status < 200 || status > 299) {
          throw new Error();
        }
      })
      .catch((error: AxiosError<{ error: string }>) => {})
      .finally(() => {
        document.cookie = cookie.serialize("user_id", "", {
          maxAge: 0,
        });
        document.cookie = cookie.serialize("session", "", {
          maxAge: 0,
        });
        setId("");
        setLoggedIn(false);
      });
  };

  React.useEffect(() => {
    const cookies = cookie.parse(document.cookie);
    if (cookies.user_id === undefined || cookies.session === undefined) {
      setLoading(false);
      return;
    }
    axios
      .get("http://localhost:31000/users", {
        params: {
          user: JSON.stringify({
            user_id: decodeURIComponent(cookies.user_id),
            session: decodeURIComponent(cookies.session),
          }),
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((result: AxiosResponse) => {
        const { data, status } = result;
        if (status < 200 || status > 299) {
          setLoggedIn(false);
          setId("");
          throw new Error();
        }
        setLoggedIn(true);
        setId(decodeURIComponent(cookies.user_id));
      })
      .catch((error: AxiosError<{ error: string }>) => {
        setLoggedIn(false);
        setId("");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <></>
  ) : loggedIn ? (
    <Container fixed>
      <Box
        sx={{
          marginX: { xs: 4, md: 16, lg: 40 },
          marginY: 4,
        }}
      >
        <Box
          sx={{
            marginY: 4,
          }}
        >
          <h1>Webサービス勉強会2022</h1>
          <p
            style={{
              fontSize: 20,
            }}
          >
            ID: {id} としてログインしています。
          </p>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{
            marginY: 2,
            fontSize: 16,
          }}
          onClick={onClickLogout}
        >
          ログアウト
        </Button>
      </Box>
    </Container>
  ) : (
    <Container fixed>
      <Box
        sx={{
          marginX: { xs: 4, md: 16, lg: 40 },
          marginY: 4,
        }}
      >
        <Box
          sx={{
            marginY: 4,
          }}
        >
          <h1>Webサービス勉強会2022</h1>
          <p
            style={{
              fontSize: 20,
            }}
          >
            ログインするか新規登録してください
          </p>
        </Box>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{
            marginY: 2,
            fontSize: 16,
          }}
          onClick={onClickMoveToLogin}
        >
          ログイン
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{
            marginY: 2,
            fontSize: 16,
          }}
          onClick={onClickMoveToSignUp}
        >
          新規登録
        </Button>
      </Box>
    </Container>
  );
};

export default Default;
