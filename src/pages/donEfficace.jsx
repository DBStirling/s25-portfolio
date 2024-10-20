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
                Revamping MyFitnessPal’s User Experience to Motivate Disgruntled Users
                &amp; Better Fit Business Needs
            </div>
            <div className="context">
                <div className="ht-pair">
                <div className="heading">My Role</div>
                <p>Complete solo project that I worked on from December 2023 to April 2024 over two main design sprints.</p>
                </div>
                <div className="ht-pair">
                <div className="heading">What is MyFitnessPal?</div>
                <div>
                <p>Millions of people use MyFitnessPal to log their meals and track calories on a daily basis, providing users’ with in-depth breakdowns of their day-to-day nutrition and their progress in achieving goals. </p>
                <p>It also helps users find workouts, recipes and fitness communities through a Discover feature. Additionally, the Plans page provides long-term step-by-step eating and exercise solutions.</p>
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
                After acquiring MyFitnessPal in 2020, Francisco Partners introduced
                major changes that prioritized profitability and left the needs of users
                on the backburner.{" "}
                </div>
                <p>
                The private equity firm hid key features, such as barcode scanning, behind
                premium subscriptions, increased the number of external advertisements and
                implemented additive features that did not address primary use cases for
                users. The addition of these changes over the years created an
                increasingly more disjointed user experience as the interface was not
                reworked to address the differences.
                </p>
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
