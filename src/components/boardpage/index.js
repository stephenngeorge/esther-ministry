import React from 'react'

import { ProfilesList, Title } from 'ministrylib'
import { ProfilesListData, TitleData } from './_data'

const BoardPage = () => {
    return (
        <div className="page page__boardpage">
            <div style={{marginLeft: "4rem", padding: "3rem 0"}}>
                <Title {...TitleData} />
            </div>
            <ProfilesList {...ProfilesListData} />
        </div>
    )
}

export default BoardPage