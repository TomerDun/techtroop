// Given Promise-based code:
function getUserById(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(user => {
            console.log(`Found user: ${user.name} (${user.email})`);
            return user;
        })
        .catch(error => {
            console.error('Error fetching user:', error.message);
            return null;
        });
}

async function getUserByIdAsync(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        throw new Error('User not found');
    }
    try {
        const user = await response.json();
        console.log(`Found user: ${user.name} (${user.email})`);
        return user;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        return null;
    }

}

getUserById(1)
getUserByIdAsync(1)
