import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
//import Particles from 'react-particles-js'

import { ContactLink } from '../constants'

import { spacing } from '../design-system/utilities/layout'

import PageContainer from '../components/page-container'
import Section from '../components/section'
import SectionHeading from '../components/section-heading'
import SectionIntroduction from '../components/section-introduction'
import Paragraph from '../components/paragraph'
import Events from '../components/events'
import EventLocation from '../components/event-location'
import Event from '../components/event'
import Button from '../components/button'
import HeroSubtitle from '../components/hero-subtitle'
import HumanOpsLogo from '../components/humanops-logo2'
import Link from '../components/link'
import Mantras from '../components/mantras'
import Mantra from '../components/mantra'
import Image from '../components/image'

import eventsJSON from '../static/data/events.json'

import {
    extractLocationsFromEvents,
    getPreviousEventsForLocation,
    getUpcomingEventsForLocation,
    getEventID
} from '../utilities/events'

//const particlesConfig = {
//    particles: {
//        "number": {
//            "value": 1
//        },
//        line_linked: {
//            enable: false
//        },
//        size: {
//            "value": 100,
//            "random": true,
//            "anim": {
//                "enable": false,
//                "speed": 2
//            }
//        },
//        "opacity": {
//            "random": true,
//            "value": 0.2,
//            "anim": {
//                "enable": false,
//                "speed": 0.5
//            }
//        },
//        "move": {
//            "out_mode": "out",
//            "speed": 2
//        }
//    }
//}


const Index = (props) => (
    <PageContainer title="HumanOps" className={ classNames('page--index', props.className) }>
        <Section name='hero' id='hero'>
            <div className='hero-logo-container'>
                <HumanOpsLogo />
            </div>

            <HeroSubtitle color='white'>Focusing on the human side of running infrastructure</HeroSubtitle>
    
            {/*
            <div className='hero-particles-container'>
                <Particles params={ particlesConfig } className='particles' canvasClassName='particles' />
            </div>
              */}
        </Section>

    <div className='responsive-row-container'>
        <Section name="the-problem" backgroundTheme="dark">
            <SectionHeading backgroundTheme="dark">The Problem</SectionHeading>
            <SectionIntroduction backgroundTheme='dark'>
                Too many alerts &amp; interrupted sleep hurts happiness
            </SectionIntroduction>

            <div className='the-problem-description-container'>
                <Paragraph last backgroundTheme="dark">
                    A superhero culture exists and unreasonable expectations are
                    placed on Ops. We want to highlight the importance of the health
                    of teams running systems, not just the systems themselves.
                </Paragraph>
            </div>
        </Section>

        <Section name="our-aim" backgroundTheme="light">
            <SectionHeading backgroundTheme="light">Our aim</SectionHeading>
            <SectionIntroduction backgroundTheme="light">
                Ease communication, reduce fatigue &amp; eliminate stress
            </SectionIntroduction>

            <div className='our-aim-description-container'>
                <Paragraph backgroundTheme="light">
                    We&apos;re encouraging the discussion of ideas and best
                    practices around how to look after the team who look after your
                    systems.
                </Paragraph>
            </div>
        </Section>
    </div>

        <Section name="mantra" backgroundTheme="light">
            <SectionHeading backgroundTheme="light">Mantra</SectionHeading>
            
            <div className='mantras-container'>
                <Mantras>
                    <Mantra>Humans build systems</Mantra>
                    <Mantra>Humans need downtime. We get tired and stressed, feel happy and sad</Mantra>
                    <Mantra>Our wellbeing directly impacts system reliability</Mantra>
                    <Mantra>Our health affects the business health</Mantra>
                    <Mantra>Document everything, teach everyone, save time</Mantra>
                    <Mantra>Automate everything. Escalate to a human as a last resort</Mantra>
                </Mantras>
            </div>
        </Section>

        <Section name="events" backgroundTheme="light">
            <SectionHeading backgroundTheme="light">Events</SectionHeading>
            <SectionIntroduction backgroundTheme="light">
                Discuss and share with people around the world
            </SectionIntroduction>

            <div className='events-container'>
                <Events>
                    {extractLocationsFromEvents(eventsJSON)
                        .sort()
                        .map(location => (
                            <EventLocation name={location} key={location} previousEvents={ getPreviousEventsForLocation(eventsJSON, location, new Date()) }>
                                {getUpcomingEventsForLocation(
                                    eventsJSON,
                                    location,
                                    new Date()
                                ).map(event => (
                                    <Event
                                        key={getEventID(event)}
                                        date={event.date}
                                        host={event.host}
                                        hostLink={event.hostLink}
                                        detailsLink={event.detailsLink}
                                    />
                                ))}
                            </EventLocation>
                        ))}
                </Events>
            </div>
        </Section>

        <div className='responsive-row-container'>
            <Section name="organize" backgroundTheme="light">
                <SectionHeading backgroundTheme="light">Organize</SectionHeading>
                <SectionIntroduction>
                    We&apos;ll help you get started running your own event
                </SectionIntroduction>

                <div className='organize-cta-container'>
                    <Button type='link' href={ ContactLink.organizeMeetup }>Get in touch</Button>
                </div>
            </Section>

            <Section name="a-movement" backgroundTheme="light">
                <SectionHeading backgroundTheme="light">A Movement</SectionHeading>
                <SectionIntroduction>
                    Join a growing list of organizations embracing HumanOps
                </SectionIntroduction>

                <div className='a-movement-organization-logos-container'>
                    <div className='org-logo-container'>
                        <Image source='/static/images/facebook-logo-iconmark.svg' title='Facebook' alt='Facebook' />
                    </div>
                    <div className='org-logo-container'>
                        <Image source='/static/images/yelp-logo-iconmark.svg' title='Yelp' alt='Yelp' />
                    </div>
                    <div className='org-logo-container'>
                        <Image source='/static/images/financial-times-logo-iconmark.svg' title='Financial Times' alt='Financial Times' />
                    </div>
                    <div className='org-logo-container'>
                        <Image source='/static/images/songkick-logo-iconmark.svg' title='Songkick' alt='Songkick' />
                    </div>
                </div>
            </Section>

            <Section name="get-in-touch" backgroundTheme="light">
                <SectionHeading backgroundTheme="light">
                    Find us
                </SectionHeading>

                <div className='get-in-touch-links-container'>
                    <div className='get-in-touch-link-container'>
                        <Link weight='thin' invertHover title='@humanops on Twitter' href='https://twitter.com/humanops' scale={4} align='center' external>@humanops</Link>
                    </div>

                    <div className='get-in-touch-link-container'>
                        <Link weight='thin' invertHover title='Join the Meetup group' href='https://www.meetup.com/HumanOps-London/' scale={4} align='center' external>Meetup.com</Link>
                    </div>
                </div>
            </Section>
        </div>
    </PageContainer>
)

const StyledIndex = styled(Index)`
    .section--hero {
        min-height: 60vh;
        position: relative;
    }

    .hero-particles-container,
    .particles {
        pointer-events: none;
        position: absolute;
        z-index: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .hero-logo-container {
        width: 90%;
        max-width: ${ spacing(60) };
        max-height: ${ spacing(20) };
        margin: 0 auto;
        padding-top: ${ spacing(6) };
        margin-bottom: ${ spacing(6) };
    }

    .the-problem-description-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(${ spacing(30) }, 1fr));
        grid-column-gap: ${ spacing(4) };
        max-width: 50em;
        margin: 0 auto;
    }

    .our-aim-description-container {
        max-width: 40em;
        margin: 0 auto;
    }

    .mantras-container {
        max-width: 36em;
        margin: 0 auto;
    }

    .events-container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .organize-cta-container {
        max-width: ${ spacing(30) };
        margin: 0 auto;
    }
    
    .a-movement-organization-logos-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        max-width: ${ spacing(50) };
        margin: 0 auto;
    }

    .org-logo-container {
        flex: ${ spacing(6) } 0 1;
        opacity: 0.5;
        filter: grayscale(1);
        transition: filter 0.3s ease-out, opacity 0.3s ease-out;

        &:hover {
            opacity: 1;
            filter: grayscale(0);
        }
    }

    .get-in-touch-links-container {
        display: flex;
        flex-flow: row wrap;
        max-width: 30em;
        margin: 0 auto;
    }

    .get-in-touch-link-container {
        flex: ${ spacing(26) } 1 1;
        margin-bottom: ${ spacing(3) };
    }

    .responsive-row-container {
        display: flex;
        flex-flow: row wrap;

        & > * {
            flex: 1 0 ${ spacing(45) };
        }
    }
`

export default StyledIndex
