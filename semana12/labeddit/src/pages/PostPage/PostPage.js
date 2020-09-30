import React from 'react'
import { useProtectPage } from '../../hooks/useProtectPage'

export const PostPage = () => {
    useProtectPage()
    return(
        'PostPage'
    )
}
