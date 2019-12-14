import React, { useEffect } from 'react'
import gsap from 'gsap'

import {
    CallToAction,
    EventsList,
    HeroImage,
    HeroText,
    ImageBlock,
    PlainText,
    Testimonial,
    TextLink
} from 'ministrylib'

import {
    CallToActionData,
    EventsListData,
    HeroImageData,
    HeroTextData,
    ImageBlockData
} from './_data'

const Homepage = () => {
    useEffect(() => {
        /**
         * ----------
         * ANIMATE CTA BUTTON
         * ----------
         */
        const animateCTA = entries => {
            entries.forEach(entry => {
                let timeline = gsap.timeline()
                if (entry.isIntersecting) {
                    timeline.to(entry.target, {duration: .5, backgroundColor: "#E7D6D9", y: -12})
                    timeline.to(entry.target, {duration: .5, backgroundColor: "#AD777F", y: 0}, "+=.3")
                }
            })
        }
        let ctaObserver = new IntersectionObserver(animateCTA, {rootMargin: "-48px", threshold: 1.0})
        let ctaButton = document.querySelector(".call-to-action__button-container > a")
        ctaObserver.observe(ctaButton)

        /**
         * ----------
         * ANIMATE IMAGE BLOCK
         * ----------
         */
        let imageContent = document.querySelector(".image-block__image-content")
        let imageBlock = document.querySelector(".image-block")
        gsap.set(imageContent, {x: "20%", opacity: 0})
        const animateImageBlock = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) gsap.to(imageContent, {duration: 1, x: "0%", opacity: 1, ease: "power2"})
                else if (!entry.isIntersecting) gsap.to(imageContent, {duration: 1, x: "20%", opacity: 0})
            })
        }
        let imageBlockObserver = new IntersectionObserver(animateImageBlock, {rootMargin: "-48px", threshold: 0.3})
        imageBlockObserver.observe(imageBlock)
        return () => {
            ctaObserver.unobserve(ctaButton)
            imageBlockObserver.unobserve(imageBlock)
        }
    }, [])

    return (
        <div className="page page__homepage">
            <HeroImage      {...HeroImageData} />
            <HeroText       {...HeroTextData} />
            <CallToAction   {...CallToActionData} />
            <PlainText      additionalClasses={['text--lead', 'white-space-y', 'text-container--very-narrow']}
                            text="
                                Rowena serves as Assistant Pastor in charge of Evangelism and Discipleship 
                                at St Saviour's Church, Sunbury. She has appeared on UCB, and worked with 
                                many well-known organisations including TearFund and New Wine.
                            "
            />
            <EventsList     {...EventsListData} />
            <ImageBlock     {...ImageBlockData} />
            <TextLink       linkText="find out more" linkUrl="/about" variation="internal" />
            <Testimonial    additionalClasses={['bg--main', 'color--light']}
                            testimonialText="This has given me fresh boldness to speak to everyone I know about Jesus"
            />
        </div>
    )
}

export default Homepage