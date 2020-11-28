export function getUsers(keyword) {
    console.log(keyword);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: '1',
                    username: 'user1',
                    name: 'Ahmad'
                },
                {
                    id: '2',
                    username: 'user2',
                    name: 'Mina'
                },
            ])
        }, 1000);
    })
}