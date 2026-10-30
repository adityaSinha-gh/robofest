// Central, easy-to-replace content. Nothing here is invented: items marked PLACEHOLDER need official details.
export const REGISTER_URL = 'https://robotix.nitrr.ac.in/robofest' // PLACEHOLDER: swap for the official registration form link
export const NAV = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' },
  { id: 'events', label: 'Events' }, { id: 'gallery', label: 'Gallery' }, { id: 'sponsors', label: 'Sponsors' }, { id: 'register', label: 'Register' },
]
// PLACEHOLDER events: replace titles/descriptions/links with the official list.
export const EVENTS = [
  { id: 'robo-race', no: '01', title: 'Robo Race', text: 'Speed, navigation, and precision.', img: '/images/events/robo-race.svg', href: REGISTER_URL },
  { id: 'robo-soccer', no: '02', title: 'Robo Soccer', text: 'Robot movement, control, and strategy.', img: '/images/events/robo-soccer.svg', href: REGISTER_URL },
  { id: 'robo-sumo', no: '03', title: 'Robo Sumo', text: 'Mechanical design, stability, and competition.', img: '/images/events/robo-sumo.svg', href: REGISTER_URL },
]
// Add verified links here (Instagram, LinkedIn, email...) as { label, href }.
export const SOCIALS = [{ label: 'Official ROBOTiX website', href: 'https://robotix.nitrr.ac.in/' }]

// PLACEHOLDER sponsors: replace `name` (and optionally add `logo: '/images/sponsors/xyz.png'`) with confirmed sponsors. Nothing here is real.
export const SPONSOR_URL = 'https://robotix.nitrr.ac.in/' // PLACEHOLDER: swap for the sponsorship enquiry link or mailto:
export const SPONSORS = [
  { tier: 'Title Sponsor', size: 'lg', items: [{ name: 'Your Logo Here' }] },
  { tier: 'Gold Sponsors', size: 'md', items: [{ name: 'Sponsor Name' }, { name: 'Sponsor Name' }, { name: 'Sponsor Name' }] },
  { tier: 'Supporting Partners', size: 'sm', items: [{ name: 'Partner' }, { name: 'Partner' }, { name: 'Partner' }, { name: 'Partner' }, { name: 'Partner' }, { name: 'Partner' }] },
]
