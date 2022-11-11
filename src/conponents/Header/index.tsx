import { AppBar, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'

export default function Header() {

  return (
    <AppBar position="static">
      <Toolbar>
        <MenuIcon sx={{ mr: 2 }} />
        <Typography variant="h6">frontend-test</Typography>
      </Toolbar>
    </AppBar>
  )
}
