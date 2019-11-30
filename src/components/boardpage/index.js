import React, { useEffect } from 'react'
import gsap from 'gsap'

import { ProfilesList, Title } from 'ministrylib'
import { ProfilesListData, TitleData } from './_data'

const BoardPage = () => {
    useEffect(() => {
        const target = document.querySelector('.page__boardpage')
        gsap.from(target, {duration: .8, opacity: 0, x: 32})
    }, [])

    return (
        <div className="page page__boardpage">
            <div className="text-container--narrow">
                <div style={{padding: "3rem 0"}}>
                    <Title {...TitleData} />
                </div>
            </div>
            <ProfilesList {...ProfilesListData} />
        </div>
    )
}

export default BoardPage