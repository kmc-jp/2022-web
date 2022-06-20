import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Default = () => {
  const navigate = useNavigate();

  const onClickMoveToLogin = () => {
    navigate("/login");
  };
  const onClickMoveToSignUp = () => {
    navigate("/signup");
  };

  return (
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
