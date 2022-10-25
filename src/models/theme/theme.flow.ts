import {persist} from "effector-storage/local";
import {$theme, updateThemeEvent} from "./theme.store";
import {forward} from "effector";

forward({
    from: updateThemeEvent,
    to: $theme,
})

persist({
    store: $theme,
    key: "theme",
})