import axios, { AxiosResponse, AxiosError } from "axios";
import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

const cookie = require("cookie");

const SignUp = () => {
  const [id, setId] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [formValidation, setFormValidation] = React.useState<{
    id: boolean;
    email: boolean;
    password: boolean;
  }>({
    id: false,
    email: false,
    password: false,
  });
  const formValidationLabel = {
    id: "ID",
    email: "E-mail",
    password: "Password",
  };

  const [signUpError, setSignUpError] = React.useState<{
    error: boolean;
    message: string;
  }>({
    error: false,
    message: "",
  });

  const navigate = useNavigate();

  interface SignUpType {
    user_id: number;
    session: string;
  }

  const handleClose = () => {
    setDialogOpen(false);
  };

  const onClickSignUp = () => {
    if (Object.values(formValidation).some((v) => v === false)) {
      setDialogOpen(true);
      return;
    }

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
        if (status < 200 || status > 299) {
          setSignUpError({
            error: true,
            message: "",
          });
          throw new Error();
        }
        setSignUpError({
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
            setFormValidation({
              ...formValidation,
              id: /[0-9a-zA-Z\-_]+/.test(e.target.value),
            });
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
            setFormValidation({
              ...formValidation,
              email:
                /([0-9a-zA-Z]([0-9a-zA-Z\-\.])*@([0-9a-zA-Z][0-9a-zA-Z]*\.)+[a-zA-Z]{2,9})/.test(
                  e.target.value
                ),
            });
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
            setFormValidation({
              ...formValidation,
              password: /[0-9a-zA-Z\-_\/*+.,!#$%&()~|]+/.test(e.target.value),
            });
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
        <Dialog open={dialogOpen} onClose={handleClose}>
          <DialogTitle>以下の項目が正しく入力されていません</DialogTitle>
          <DialogContent>
            {
              <ul>
                {Object.keys(formValidation)
                  .filter(
                    (key) => !formValidation[key as keyof typeof formValidation]
                  )
                  .map((key, index) => {
                    return (
                      <li key={index}>
                        {
                          formValidationLabel[
                            key as keyof typeof formValidationLabel
                          ]
                        }
                      </li>
                    );
                  })}
              </ul>
            }
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              閉じる
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default SignUp;
