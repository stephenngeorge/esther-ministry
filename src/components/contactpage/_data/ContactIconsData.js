import { emailIcon, facebookIcon, instagramIcon } from '../../../assets'

const ContactIconsData = {
    contactMethods: [
        {
            contactName: 'facebook',
            contactIcon: facebookIcon,
            contactUrl: 'https://www.facebook.com/estherministryuk/'
        },
        {
            contactName: 'email',
            contactIcon: emailIcon,
            contactUrl: 'mailto:person@email.co.uk?Subject=Website%20Enquiry'
        },
        {
            contactName: 'instagram',
            contactIcon: instagramIcon,
            contactUrl: 'https://www.instagram.com/estherministry/'
        }
    ],
    additionalClasses: [
        'bg--secondary'
    ]
}

export default ContactIconsData