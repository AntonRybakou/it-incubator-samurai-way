import {rerenderEntireTree} from "./Render";
import state, {addPost} from "./redux/state";

rerenderEntireTree(state, addPost);