import {combineReducers } from "redux";
import settingsReducers from "./settings";
import deckReducers from "./deck";
import gameStateReducer from "./gameState";

export default combineReducers({
    settings: settingsReducers,
    deck: deckReducers,
    gameState: gameStateReducer
});