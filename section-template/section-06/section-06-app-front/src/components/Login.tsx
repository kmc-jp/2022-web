import axios, { AxiosResponse, AxiosError } from "axios";
import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate } from "react-router-dom";

const cookie = require("cookie");

const Login = () => {
  const [id, setId] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [loginError, setLogInError] = React.useState<{
    error: boolean;
    message: string;
  }>({
    error: false,
    message: "",
  });

  const navigate = useNavigate();
  interface LoginType {
    user_id: number;
    session: string;
  }

  const onClickLogin = async () => {
    axios
      .get("http://localhost:31000/users", {
        params: {
          user: JSON.stringify({
            user_id: id,
            password: password,
          }),
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((result: AxiosResponse<LoginType>) => {
        const { data, status } = result;
        if (status < 200 || status > 299) {
          setLogInError({
            error: true,
            message: "",
          });
          throw new Error();
        }
        setLogInError({
          error: false,
          message: "",
        });
        document.cookie = cookie.serialize(
          "user_id",
          encodeURIComponent(data.user_id)
        );
        document.cookie = cookie.serialize(
          "session",
          encodeURIComponent(data.session)
        );
        navigate("/");
      })
      .catch((error: AxiosError<{ error: string }>) => {
        setLogInError({
          error: true,
          message: error.message,
        });
      })
      .finally(() => {
        setId("");
        setPassword("");
      });
  };

  return (
    <Container fixed>
      <Box
        sx={{
          marginX: { xs: 4, md: 16, lg: 40 },
          marginY: 4,
        }}
      >
        <h1>ログイン</h1>
        <TextField
          label="ID"
          variant="standard"
          fullWidth
          margin="normal"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="standard"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{
            marginY: 8,
            fontSize: 16,
          }}
          onClick={onClickLogin}
        >
          ログイン
        </Button>

        {loginError.error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {loginError.message}
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default Login;
