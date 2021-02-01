const User = (data) => {
    return {
        id: data.id,
        name: data.name,
        batch: data.batch || '',
        profileImage: data.fileName || '',
    }
}

export default User;
