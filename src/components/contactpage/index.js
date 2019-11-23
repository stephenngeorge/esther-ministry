import React, { useEffect } from 'react'
import gsap from 'gsap'

import { ContactIcons, PlainText, TextLink, Title } from 'ministrylib'
import { ContactIconsData, PlainTextData, TextLinkData, TitleData } from './_data'

const ContactPage = () => {
    useEffect(() => {
        let page = document.querySelector('.page__contactpage')
        gsap.from(page, {duration: .8, opacity: 0, x: -32})
        /**
         * ----------
         * ANIMATE ICONS
         * ----------
         */
        const animateIcons = entries => {
            const targets = entries.map(entry => entry.target)
            gsap.to(targets, {duration: 1, opacity: 1, y: 0, stagger: .5, ease: "back"})
        }
        const socialIcons = document.querySelectorAll('.contact-icons__contact-methods > li')
        let iconsObserver = new IntersectionObserver(animateIcons, {rootMargin: "-48px"})
        socialIcons.forEach(icon => {
            iconsObserver.observe(icon)
        })
    }, [])

    return (
        <div className="page page__contactpage">
            <div className="text-container--very-narrow" style={{marginTop: "3rem", marginBottom: "3rem"}}>
                <Title {...TitleData} />
                <PlainText {...PlainTextData} />
            </div>
            <ContactIcons {...ContactIconsData} />
            <div className="text-container--very-narrow contact-sub-text">
                <PlainText text="You can find out more about Rowena, her life and ministry on her personal website." />
                <TextLink {...TextLinkData} />
            </div>
        </div>
    )
}

export default ContactPage