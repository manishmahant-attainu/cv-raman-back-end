const User = (data) => {
    return {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
    }
}

export default User;
