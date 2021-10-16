import Link from "next/link"
import FavoriteIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';
import classes from "./Footer.module.scss"

const Footer = () => {
    return (
        <div id="footer">
            <div className={classes.Footer}>
                <p>Copyright © 2021-3010</p>
            </div>
        </div>
    )
}

export default Footer