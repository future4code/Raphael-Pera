import React from 'react'
import { useProtectPage } from '../../hooks/useProtectPage'

export const FeedPage = () => {
    useProtectPage()
    return(
        'FeedPage'
    )
}
