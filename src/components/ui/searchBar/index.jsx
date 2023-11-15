import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import Input from "@mui/material/Input";

export default function Index() {
  return (
    <>
      <Input
        className='w-72 placeholder-red-500'
        sx={{ color: "white" }}
        placeholder='Search'
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon className='text-primary-200' />
          </InputAdornment>
        }
      ></Input>
    </>
  );
}
