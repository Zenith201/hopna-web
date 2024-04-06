import {Button, List, ListItem, Stack, Typography} from "@mui/material";
import {LiveTvRounded} from "@mui/icons-material";

const CategoryBar = () => {
    return <div className={"category-bar"}>

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

    </div>

}

export default CategoryBar