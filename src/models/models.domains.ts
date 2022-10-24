import {createDomain} from "effector";

export const rootDomain = createDomain();

export const themeDomain = rootDomain.domain("theme");