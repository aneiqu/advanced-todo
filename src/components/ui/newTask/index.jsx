import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

export default function Index() {
  return (
    <div className='transparent fixed bottom-3 right-3 text-black'>
      <Fab
        style={{ backgroundColor: "white" }}
        color='inherit'
        aria-label='add'
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
