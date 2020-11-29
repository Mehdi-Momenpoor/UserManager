export function getUsers(keyword) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, userName: 'user1', name: 'Ahmad' },
                { id: 2, userName: 'user2', name: 'Mina' },
            ])
        }, 1000);
    })
}

export function deleteUser(userId) {
    return new Promise(resolve => {
        resolve()
    })
}

export function getUser(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                { id: 2, userName: 'user2', name: 'Mina' },
            )
        }, 1000);
    })
}

export function addUser(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                { id: 2, userName: 'user2', name: 'Mina' },
            )
        }, 1000);
    })
}
export function updateUser(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                { id: 2, userName: 'user2', name: 'Mina' },
            )
        }, 1000);
    })
}