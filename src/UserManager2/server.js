export function getUsers(keyword) {
    console.log("getUsers  keyword : ", keyword);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, userName: 'user1', name: 'Ahmad' },
                { id: 2, userName: 'user2', name: 'Mina' },
            ])
        }, 1000);
    })
}
export function deleteUser(id) {
    return new Promise(resolve => {
        resolve(id)
    })
}