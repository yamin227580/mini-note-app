import BackofficeLayout from "@/components/backofficeLayout/BackofficeLayout";
import CreateNote from "@/components/CreateNote/createNote";
import { Box, Typography } from "@mui/material";

const CreateNotePage = () => {
  //const [open, setOpen] = useState<boolean>(true);

  return (
    <BackofficeLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: 22, textAlign: "center", fontWeight: "bold" }}
          >
            ဝင်ငွေစာရင်းမှတ်ရန်
          </Typography>
          <Typography sx={{ fontSize: 16, textAlign: "center", mt: 1 }}>
            (ယနေ့အတွက်)
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <CreateNote />
        </Box>
      </Box>
    </BackofficeLayout>
  );
};
export default CreateNotePage;
