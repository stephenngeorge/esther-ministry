import React from 'react'

import { CallToAction, HeroImage, HeroText, ImageBlock, PlainText, Testimonial, TextLink } from 'ministrylib'

import CallToActionData from './CallToActionData'
import HeroImageData from './HeroImageData'
import HeroTextData from './HeroTextData'
import ImageBlockData from './ImageBlockData'

const Homepage = () => {
    return (
        <div className="page page__homepage">
            <HeroImage {...HeroImageData} />
            <HeroText {...HeroTextData} />
            <CallToAction {...CallToActionData} />
            <PlainText  
                additionalClasses={['text--lead', 'white-space-y', 'text-container--very-narrow']}
                text="
                Rowena serves as Assistant Pastor in charge of Evangelism and Discipleship 
                at St Saviour's Church, Sunbury. She has appeared on UCB, and worked with 
                many well-known organisations including TearFund and New Wine.
                "
            />
            <ImageBlock {...ImageBlockData} />
            <TextLink linkText="Find out more" linkUrl="/about" variation="internal" />
            <Testimonial    additionalClasses={['bg--main', 'color--light']}
                            testimonialText="This has given me fresh boldness to speak to everyone I know about Jesus"
            />
        </div>
    )
}

export default Homepage