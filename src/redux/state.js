
let store = {
    getState() {
        return this._state;
    },
    _state: {
        
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
    },
    addNewPost(postMes) {

        let newPost = {
            name: 'Alex',
            age: 30,
            massege: postMes,
            likesCount: 12,
        };
        this._state.profilePage.profilePost.push(newPost);
        this.rerenderEntireTree(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this.rerenderEntireTree(this._state);
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;


    },
    rerenderEntireTree() {
        console.log('blablabla')
    },
}


// добавляет данный поста по шаблону в profilePost







export default store;
window.store = store;

