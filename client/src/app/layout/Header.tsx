import { DarkMode } from "@mui/icons-material";
import Switch from '@mui/material/Switch';
import { AppBar,  Toolbar, Typography } from "@mui/material";
interface props{
    darkMode:boolean;
    handleThemeChange:(darkMode: React.ChangeEvent) => void;
}
export default function Header({darkMode,handleThemeChange}:props){
    return(
    <AppBar position="static" sx={{mb:4}}>
        <Toolbar>
            <Typography variant="h6">
                Re-Store
            </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange} />
        </Toolbar>
    </AppBar>
    )
}