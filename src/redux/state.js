let rerenderEntireTree = () =>{
    console.log('blablabla')
}

let state = {
    profilePage: {
        profilePost: [
            { name: 'Alex', age: 31, massege: 'Hi,how are you?', likesCount: 12 },
            { name: 'Vit', age: 36, massege: 'Its ok!', likesCount: 15 },
            { name: 'Tem', age: 24, massege: 'Und1 You?', likesCount: 19 },
            { name: 'Alexey', age: 32, massege: 'Im ok, too!', likesCount: 13 },
        ],
        newPostText: ''
    },
    messagesPage: {
        dialogsData: [
            { id: 1, name: 'Alex1' },
            { id: 2, name: 'Alex2' },
            { id: 3, name: 'Alex3' },
            { id: 4, name: 'Alex4' },
            { id: 5, name: 'Alex5' },
        ],

        Messages: [
            { id: 1, mes: 'Hello1' },
            { id: 2, mes: 'Hello2' },
            { id: 3, mes: 'Hello3' },
            { id: 4, mes: 'Hello4' },
            { id: 5, mes: 'Hello5' },
        ],

    },
    friends: [
        { name: 'Alex', age: 31, massege: 'Hi,how are you?', likesCount: 12 },
        { name: 'Vit', age: 36, massege: 'Its ok!', likesCount: 15 },
        { name: 'Tem', age: 24, massege: 'Und You?', likesCount: 19 },
        { name: 'Alexey', age: 30, massege: 'Im ok, too!', likesCount: 13 },

    ]
}
// добавляет данный поста по шаблону в profilePost
export let addNewPost = (postMes) => {

    let newPost = {
        name: 'Alex',
        age: 30,
        massege: postMes,
        likesCount: 12,
    };
    state.profilePage.profilePost.push(newPost);
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;

}

export default state;

