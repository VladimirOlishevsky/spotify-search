import { DefaultTheme } from "@mui/material"
import { TITLE_VARIANT } from "components/constants"


export const getTitleColor = (type: TITLE_VARIANT, theme: DefaultTheme) => {
    switch (type) {
        case TITLE_VARIANT.search:
            return theme.search?.text.titles;

        case TITLE_VARIANT.profile:
            return theme.profile.title;

        case TITLE_VARIANT.profileCard:
            return theme.profile.card.title

        default:
            return 'inherit'
    }
}