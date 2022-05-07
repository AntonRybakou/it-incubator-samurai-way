export type PostsDataType = {
    id: number;
    message: string;
    likesCount: number;
}
export type DialogsDataType = {
    id: number,
    name: string,
}
export type MessageDataType = {
    id: number,
    message: string,
}
export type ProfilePageType = {
    postsData: Array<PostsDataType>,
}
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessageDataType>,
}
export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}

let state: StateType = {
    profilePage: {
        postsData: [
            {id: 1, message: "Hello, how are you?", likesCount: 0},
            {id: 2, message: "Let's play a game", likesCount: 11},
            {id: 3, message: "Message 4", likesCount: 11},
            {id: 4, message: "Message 5", likesCount: 83},
        ],
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Name1"},
            {id: 2, name: "Name2"},
            {id: 3, name: "Name3"},
            {id: 4, name: "Name4"},
            {id: 5, name: "Name5"},
            {id: 6, name: "Name6"},
        ],
        messagesData: [
            {id: 1, message: "Message 1"},
            {id: 2, message: "Message 2"},
            {id: 3, message: "Message 3"},
            {id: 4, message: "Message 4"},
            {id: 5, message: "Message 5"},
            {id: 6, message: "Message 6"},
        ],
    }
}

export const addPost = (postMessage: string) => {
    const newPost: PostsDataType = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost)
}

export default state