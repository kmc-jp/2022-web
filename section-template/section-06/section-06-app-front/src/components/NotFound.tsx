import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const onClickMoveToHome = () => {
    navigate("/");
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
            このページは存在しません
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
          onClick={onClickMoveToHome}
        >
          ホーム画面に戻る
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
