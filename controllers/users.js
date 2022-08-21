import { v4 as uuidv4 } from 'uuid'

let users = []

export const createUser =  (req, res) => {
    const user = req.body
    // const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    // const userWithId = { ...user, id: uuidv4() }

    users.push({ ...user, id: uuidv4() })

    res.send(`Users dengan nama ${user.firstName} berhasil ditambahkan ke database!`)
}

// all routes in here are starting with /users
export const getUsers = (req, res) => {
    // console.log(users)
    res.send(users)
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users  = users.filter((user) => user.id !== id)

    res.send(`User dengan id ${id} berhasil dihapus dari database.`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body
    const user = users.find((user) => user.id === id)

    // logik
    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName
    if (age) user.age = age

    res.send(`User dengan id ${id} berhasil diupdate`)
}