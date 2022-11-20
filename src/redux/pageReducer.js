import { OPEN_PAGE } from "./types"


let defaultState = {
    page: "Introduction"
}

export const pageReducer = (state = defaultState, action) => {
    console.log("pageReducer", action);
    switch (action.type) {
        case OPEN_PAGE:
            console.log("OPEN_PAGE");
            endAnim(state.page)
            startAnim(action.namePage)
            return { ...state, page: action.namePage }
        default:     
            setTimeout(() => {startAnim(state.page)},1)
            return state
    }
}

let timerStack = []

function startAnim(namePage) {
    timerStack.forEach(clearTimeout)
    document.querySelectorAll(`.${namePage} [data-animation]`)
        .forEach(item => { 
        timerStack.push(setTimeout(() => {
            item.setAttribute("data-animation", "end")
        }, (65 * item.dataset.sequence) + 50))
    })
}

function endAnim(namePage) {
    document.querySelectorAll(`.${namePage} [data-animation]`)
        .forEach(item => item.setAttribute("data-animation", "start"))
}