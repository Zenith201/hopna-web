import {Button, List, ListItem, Stack, Typography} from "@mui/joy";
import "../styles.css"
import {LiveTvRounded} from "@mui/icons-material";

const NavBar = () => {
    return <div className={"navbar"}>
        <img src={require("../../assets/logo.jpg")} style={{height: 60, width: 60, borderRadius: 15}}/>

        <List orientation={"horizontal"}>
            <ListItem>
                <a href={""}>
                    <Typography textColor={"white"}>
                        Option 1
                    </Typography>
                </a>
            </ListItem>


            <ListItem>
                <a href={""}>
                    <Typography textColor={"white"}>
                        Option 2
                    </Typography>
                </a>
            </ListItem>

            <ListItem>
                <a href={""}>
                    <Typography textColor={"white"}>
                        Option 3
                    </Typography>
                </a>
            </ListItem>

            <ListItem>
                <a href={""}>
                    <Typography textColor={"white"}>
                        Option 4
                    </Typography>
                </a>
            </ListItem>

            <ListItem>
                <a href={""}>
                    <Typography textColor={"white"}>
                        Option 1
                    </Typography>
                </a>
            </ListItem>

            <ListItem>
                <a href={""}>
                    <Typography textColor={"white"}>
                        Option 5
                    </Typography>
                </a>
            </ListItem>

        </List>

        <Stack alignItems={"center"} flexDirection={"row"} gap={2}>
            <a>
                <Typography textColor={"white"} startDecorator={<LiveTvRounded />}>
                    Live TV
                </Typography>
            </a>

            <a>
                <Button variant={"outlined"}>
                    Log In
                </Button>
            </a>
        </Stack>
    </div>
}

export default NavBar
