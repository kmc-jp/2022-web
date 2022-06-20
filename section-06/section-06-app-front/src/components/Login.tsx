import axios, { AxiosResponse, AxiosError } from "axios";
import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Alert, AlertTitle } from "@mui/material";

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

  interface LoginType {
    id: number;
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
        console.log(data, status);
        if (status < 200 || status > 299) {
          setLogInError({
            error: true,
            message: "",
          });
          return;
        }
        setLogInError({
          error: false,
          message: "",
        });
      })
      .catch((error: AxiosError<{ error: string }>) => {
        console.error(error.message);
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
