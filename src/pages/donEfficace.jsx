import React from 'react'
import CtaButton from '../components/CtaButton/CtaButton';
import Divider from '../components/Divider/Divider';
import ThanksSection from '../components/ThanksSection/ThanksSection.jsx'
import miniMFP from '../assets/Images/mini-de-thumb-simple.png'
import miniDM from '../assets/Images/mini-dm-thumb-simple.png'
import '../styles/caseStudy.css'

export default function donEfficace() {
  return (
    <div className='device-container'>
        <div className="main-content-case">
            <div className="sub-section introduction">
            <div className="title">
                Empowering people to donate with more confidence and closing the giving gap with Don Efficace.
            </div>
            <div className="flex-row context">
                <div className='context-left'>
                    <div className="ht-pair">
                        <div className="heading">My Role</div>
                        <p>I primarily focussed on the product-thinking and experience design of the application as one of three product designers.</p>
                    </div>
                    <div className='ht-pair'>
                        <div className="heading">My Team</div>
                        <p>In my 8 months as a designer, I worked with a handful of PMs, Technical Leads, developers and designers.</p>
                    </div>
                </div>
                <div className="ht-pair context-right">
                    <div className="heading">What is Don Efficace?</div>
                    <div>
                    <p>Don Efficace is an effective altruism organization based in France. They identify pressing social issues and research the most effective NPOs to donate to. They consolidate their findings and offer an outlet that enables users to donate with more trust and diligence.</p>
                    <p>if you want to learn more about the UW Blueprint collective and our work, check us out here!</p>
                </div>
                </div>
            </div>
            <CtaButton
                text='Cut To The Chase'
                // clickFunction={scrollToPrototype}
            />
            </div>
            <div className="sub-section the-problem">
            <Divider
            title={'the problem'}/>
            <div className="the-problem-body ht-pair">
                <div className="heading">
                    As Don Efficace continues to scale, the costs and technical limitations
                    associated with their subscription-based donation platform will soon become 
                    unsustainable.
                    {" "}
                </div>
                <p>
                    Their current solution (a mix of Wix and Donately) heavily restricts 
                    their ability to manage donation and donor data, manage tax documentation 
                    and maximize their local reach without French language accommodations. In 
                    addition, we recognized the need for a more robust donation experience to 
                    attract donors and maintain high donor retention.
                </p>
            </div>
            </div>
            <div className="sub-section key-pain-points">
            <Divider
            title={'key pain points'}/>
            <div className="key-pain-points-body don-efficace">
                <div className='key-pain-point-header'>
                        <div className='heading'>At the end of the day, <em>we define success as...</em></div>
                    <div className="pain-point ht-pair">
                        <div className="heading">
                            1. Making it easier for DE admins to manage donor and donation data.
                        </div>
                        <p>
                            Currently, everything is stored in spreadsheets and handwritten documentation, 
                            which understandably reduces scalability and poses operational inefficiencies.
                        </p>
                    </div>
                    <div className="pain-point ht-pair">
                        <div className="heading">
                            2. Building a cohesive end-to-end donation experience for donors.
                        </div>
                        <p>
                            Donately is not only increasingly expensive but does not provide French language 
                            support, making it nearly impossible for native donors and administrators to get 
                            the most out of the platform.
                        </p>
                    </div>
                    <div className="pain-point ht-pair">
                        <div className="heading">
                            3. Simplifying the process of completing taxes
                        </div>
                        <p>
                            The French government offers handsome tax breaks for donors (up to 75% of their 
                            donation value, in some cases). From the start, we were certain that there was 
                            a way for us to leverage this opportunity, saving everyone time and money.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
)
}

{/* <ThanksSection
title1={'Don Efficace'}
tag1={'Product'}
miniThumb1={miniDE}
link1={'/donEfficace'}
title2={'Diet Me'}
tag2={'Exploration'}
link2={'/dietMe'}
miniThumb2={miniDM}
showWork={true}
/> */}
