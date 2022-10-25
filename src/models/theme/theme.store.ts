import {themeDomain} from "../models.domains";
import {ETheme} from "./theme.types";

export const $theme = themeDomain.createStore<ETheme>(ETheme.Light);

export const updateThemeEvent = themeDomain.createEvent<ETheme>();