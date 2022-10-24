import {persist} from "effector-storage/local";
import {$theme} from "./theme.store";

persist({
    store: $theme,
    key: "theme",
})