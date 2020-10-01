export const goToSignUp = (history)=>{
    history.push('/signup')
}

export const goToFeed = (history)=>{
    history.push('/feed')
}

export const goToLogin = (history)=>{
    history.push('/login')
}

export const goToPostPage = (history, id)=>{
    history.push(`feed/${id}`)
}
