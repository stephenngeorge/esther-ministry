import React, { useEffect } from 'react'
import gsap from 'gsap'

import { CallToAction, QuoteBlock, TabContent, Testimonial } from 'ministrylib'
import { CallToActionData, QuoteBlockData, TabContentData, TestimonialData } from './_data'

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        /**
         * ----------
         * ANIMATE TESTIMONIAL
         * ----------
         */
        const animateTestimonial = entries => {
            entries.forEach((entry, i) => {
                // set initial opacity
                gsap.set(entry.target, {opacity: 0})
                // check which entry is being targetted
                if (entry.target.classList.contains('source-text')) {
                    // set initial Y
                    gsap.set(entry.target, {y: 16})
                    // run animation only when element is coming into view
                    if (entry.isIntersecting) {
                        gsap.to(entry.target, {duration: .6, opacity: 1, y: 0})
                    }
                }
                else {
                    // set initial X
                    gsap.set(entry.target, {x: -32})
                    // run animation only when element is coming into view
                    if (entry.isIntersecting) {
                        gsap.to(entry.target, {duration: .6, opacity: 1, x: 0})
                    }
                }
            })
        }
        let testimonialObserver = new IntersectionObserver(animateTestimonial, {rootMargin: "-48px"})
        let testimonialText = document.querySelectorAll(".testimonial .plain-text")[0]
        let sourceText = document.querySelector('.testimonial .source-text')
        testimonialObserver.observe(testimonialText)
        testimonialObserver.observe(sourceText)
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
         * ANIMATE QUOTE BLOCK
         * ----------
         */
        const quoteContent = document.querySelector('.quote-block .content-box')
        const quoteBackground = document.querySelector('.quote-block .cover-image img')
        gsap.from(quoteContent, {duration: .8, delay: .5, opacity: 0, y: 16})
        gsap.from(quoteBackground, {duration: .8, delay: .3, opacity: 0})
        
        // cleanup
        return () => {
            ctaObserver.unobserve(ctaButton)
            testimonialObserver.unobserve(testimonialText)
            testimonialObserver.unobserve(sourceText)
        }
    }, [])

    return (
        <div className="page page__aboutpage">
            <QuoteBlock {...QuoteBlockData} />
            <TabContent {...TabContentData} />
            <Testimonial {...TestimonialData} />
            <CallToAction {...CallToActionData} />
        </div>
    )
}

export default AboutPage