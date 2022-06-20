import axios, { AxiosResponse, AxiosError } from "axios";
import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Alert, AlertTitle } from "@mui/material";

const SignUp = () => {
  const [id, setId] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [signUpError, setSignUpError] = React.useState<{
    error: boolean;
    message: string;
  }>({
    error: false,
    message: "",
  });

  interface SignUpType {
    id: number;
  }

  const onClickSignUp = () => {
    axios
      .post(
        "http://localhost:31000/users",
        {
          user: JSON.stringify({
            user_id: id,
            email: email,
            password: password,
          }),
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      )
      .then((result: AxiosResponse<SignUpType>) => {
        const { data, status } = result;
        console.log(data, status);
        if (status < 200 || status > 299) {
          setSignUpError({
            error: true,
            message: "",
          });
          return;
        }
        setSignUpError({
          error: false,
          message: "",
        });
      })
      .catch((error: AxiosError<{ error: string }>) => {
        console.error(error.message);
        setSignUpError({
          error: true,
          message: error.message,
        });
      })
      .finally(() => {
        setId("");
        setEmail("");
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
        <h1>新規登録</h1>
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
          label="E-mail"
          variant="standard"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
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
          onClick={onClickSignUp}
        >
          登録
        </Button>
        {signUpError.error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {signUpError.message}
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default SignUp;
