import { OPEN_PAGE } from "./types"

export function openPage(namePage) {
    return {
        type: OPEN_PAGE,
        namePage
    }
}
