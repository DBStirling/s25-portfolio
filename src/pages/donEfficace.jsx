import React from 'react'
import { useState } from 'react'
import ModalImage from "react-modal-image";
import CtaButton from '../components/CtaButton/CtaButton';
import Divider from '../components/Divider/Divider';
import ThanksSection from '../components/ThanksSection/ThanksSection.jsx'
import miniMFP from '../assets/Images/mini-mfp-thumb-simple.png'
import miniDM from '../assets/Images/mini-dm-thumb-simple.png'
import formPair from '../assets/Images/de/form-pair.png'
import taxDetail from '../assets/Images/de/tax-potential-detail.png'
import impactCard from '../assets/Images/de/impact-card.png'
import donorPair from '../assets/Images/de/donor-pair.png'
import adminPair from '../assets/Images/de/admin-pair.png'
import donorDetail from '../assets/Images/de/donor-detail.png'
import summaryDetail from '../assets/Images/de/summary-card.png'
import donorProfile from '../assets/Images/de/donor-profile.png'
import causesDetail from '../assets/Images/de/causes-detail.png'
import insightsDetail from '../assets/Images/de/insights-detail.png'

import { IoIosArrowUp } from "react-icons/io";
import '../styles/caseStudy.css'

export default function donEfficace() {

    const [buttonOneDescription, setButtonOneDescription] = useState('Learn More')
    const [buttonTwoDescription, setButtonTwoDescription] = useState('Learn More')
    const [buttonThreeDescription, setButtonThreeDescription] = useState('Learn More')

    const [showItemOne, setShowItemOne] = useState(false)
    const [showItemTwo, setShowItemTwo] = useState(false)
    const [showItemThree, setShowItemThree] = useState(false)

    const toggleItem = (input) => {
        if (input === 'one') {
            setShowItemOne((prevState) => {
                const newState = !prevState;
                setButtonOneDescription(newState ? 'Hide details' : 'Learn more');
                return newState;
            });
        } else if (input === 'two') {
            setShowItemTwo((prevState) => {
                const newState = !prevState;
                setButtonTwoDescription(newState ? 'Hide details' : 'Learn more');
                return newState;
            });
        } else if (input === 'three') {
            setShowItemThree((prevState) => {
                const newState = !prevState;
                setButtonThreeDescription(newState ? 'Hide details' : 'Learn more');
                return newState;
            });
        }
    };

    const cutToSolution = () => {
        const section = document.getElementById('solution');
            console.log('yuhhh')
            if (section) {
                console.log('yuh')
                section.scrollIntoView({ behavior: 'smooth' });
            }
    }


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
                clickFunctio={cutToSolution}
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
                    title={'key pain points'}
                />
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
            <div className='sub-section key-pain-points'
                id='solution'>
                <Divider
                    title={'the solution'}
                />
                <div className='sub-section key-pain-points-body don-efficace'>
                    <div className='de-summary-item'>
                        <div className='de-summary-description'>
                            <div className='de-summary-contents'>
                                <div className='heading'>Donation Form</div>
                                <body>We designed a donation form that estimates a donation’s impact, using empathy and recognition to build confidence in donations. We also leveraged French tax breaks in our designs to compel users to donate more.</body>
                                <button className='learn-more-button'
                                    onClick={() => toggleItem('one')} // Wrap it in an arrow function
                                    >
                                    <body>{buttonOneDescription}</body>
                                </button>
                            </div> 
                            <ModalImage
                                className='summary-img'
                                small={formPair}
                                large={formPair}
                                alt="Donation Form"
                                hideDownload={true}
                                imageBackgroundColor={"white"}
                            />
                        </div>
                        {showItemOne && (
                            <div className='item-description-container'>
                                <div className='description-item'>
                                    <div className='ht-pair'>
                                        <body><b>1. Leveraging Tax Breaks</b></body>
                                        <body>One of the key pain points relayed to us by Don Efficace was that donor’s didn’t know how to take advantage of tax breaks when donating. As a result, we baked the functionality of France’s tax break system into our donation form. By opting to using tax potential, users set the amount that they want to donate and they are recommended a donation value that maximizes their impact and costs them the same amount after taxes are returned.</body>
                                    </div>
                                    <img
                                        className='full-width-detail nh'
                                        src={taxDetail}
                                    />
                                </div>
                                <div className='description-item-row'>
                                    <div className='ht-pair'>
                                        <body><b>2. Bridging the Empathy Gap</b></body>
                                        <body>One of the leading reasons for the decline in donations is the public’s declining faith in NPOs and their inability to assess how much good their donation can do. To combat this, we designed additional transparency and constant feedback in our form, showing impact estimations for every donation. By showing users exactly where their money is going, we believe that we can remind them of why they’re donating and give them an extra push through finalizing their donation.</body>
                                    </div>
                                    <img
                                        className='in-line-detail nh'
                                        src={impactCard}
                                    />
                                </div>
                                <div className='description-item'>
                                    <div className='ht-pair'>
                                        <body><b>3. Valuing the user</b></body>
                                        <body>We made sure that the donation experience was not only cohesive but extremely transparent. Especially with the integration of a new feature like tax potential, we ensured that the form was straightforward to avoid startling or catching the user off guard.</body>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='de-summary-item'>
                        <div className='de-summary-description'>
                            <div className='de-summary-contents'>
                                <div className='heading'>Donor Portal</div>
                                <body>We built a donor portal that allows users to manage reoccurring donations, access their donation history and all of their necessary tax documentation. We also consolidated their information into a donor dashboard for at-a-glance stats and metrics.</body>
                                <button className='learn-more-button'
                                    onClick={() => toggleItem('two')} // Wrap it in an arrow function
                                    >
                                    <body>{buttonTwoDescription}</body>
                                </button>
                            </div> 
                            <ModalImage
                                className='summary-img nh'
                                small={donorPair}
                                large={donorPair}
                                alt="Donation Form"
                                hideDownload={true}
                                imageBackgroundColor={"white"}
                            />
                        </div>
                        {showItemTwo && (
                            <div className='item-description-container'>
                                <div className='description-item'>
                                    <div className='ht-pair'>
                                        <body><b>1. Making Donation Details Accessible</b></body>
                                        <body>One of my first tasks on the project was to create the donation history page, allowing users to download tax receipts for each of their donations and manage their reoccurring payments. We identified 3 core filtering criteria through conversations with the client and put together a donation details table for users. One of the best decisions we made throughout the whole design process, was investing time into building the table modularly as we reused the style across many donor and admin-facing pages, saving us plenty of headaches.</body>
                                    </div>
                                    <img
                                        className='full-width-detail nh'
                                        src={donorDetail}
                                    />
                                </div>
                                <div className='description-item-row'>
                                    <div className='description-item'>
                                        <div className='ht-pair'>
                                            <body><b>2. Reminding them Why They Donate</b></body>
                                            <body>As donors continue to contribute, it was essential to remind them of their real-world impact as donation fatigue is a very real threat. We implemented an all-time impact module on their donation dashboard to show donors their growing impact and encourage them to continue donating.</body>
                                        </div>
                                        <div className='ht-pair'>
                                            <body><b>3. Account Management</b></body>
                                            <body>Finally, we built an account management page that allows the user to update their tax-registered address, email address and other personal details, extending the long-term usability of our platform. Furthermore, we also implemented a secure flow for updating a user’s password, integrating existing frameworks to lighten the development workload.</body>
                                        </div>
                                    </div>
                                    <img
                                        className='in-line-detail nh'
                                        src={summaryDetail}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='de-summary-item'>
                        <div className='de-summary-description'>
                            <div className='de-summary-contents'>
                                <div className='heading'>Admin Portal</div>
                                <body>We created a robust portal for administrators view all necessary donation documentation, gain insight through donor profiles and manage the growing list of NPOs that are supported through Don Efficace. </body>
                                <button className='learn-more-button'
                                    onClick={() => toggleItem('three')} // Wrap it in an arrow function
                                    >
                                    <body>{buttonThreeDescription}</body>
                                </button>
                            </div> 
                            <ModalImage
                                className='summary-img'
                                small={adminPair}
                                large={adminPair}
                                alt="Donation Form"
                                hideDownload={true}
                                imageBackgroundColor={"white"}
                            />
                        </div>
                        {showItemThree && (
                            <div className='item-description-container'>
                                <div className='description-item-row'>
                                    <div className='ht-pair'>
                                        <body><b>1. Consolidating donation information</b></body>
                                        <body>We divided donation record-keeping into two core tenants: a comprehensive list of recent donations across all donors and a complete list of donors with their own unique profile. The former allows administrators to quickly troubleshoot recent donations and verify transactions. The latter enables Don Efficace to get to know their donors a little better, export their annual tax receipt and helps them quickly troubleshoot donor-specifc problems. </body>
                                        <body>The donor profile was my favourite feature to design as I expect it to be the most enabling for administrators who are in a crunch for time.</body>
                                    </div>
                                    <img
                                        className='in-line-detail nh'
                                        src={donorProfile}
                                    />
                                </div>
                                <div className='description-item-row'>
                                    <div className='ht-pair'>
                                        <body><b>2. Managing associated NPOs and their impact metrics </b></body>
                                        <body>The product-defining impact estimation feature in the donation form and dashboard is all made possible by the ‘Causes’ tab in our admin portal. This is our secret stuff. We group NPOs into respective causes and store their impact-cost ratios, which allow us to dynamically estimate donation impacts. I worked closely with our product manager to refine the logic and algorithm behind impact estimation and worked with another designer to iron out the task flow of an admin inputting this data.</body>
                                    </div>
                                    <img
                                        className='in-line-detail nh'
                                        src={causesDetail}
                                    />
                                </div>
                                <div className='description-item'>
                                    <div className='ht-pair'>
                                        <body><b>3. Equipping administrators with key donation insights </b></body>
                                        <body>Due to the robust functionality of the admin portal, it was important for us to consolidate key information into a single dashboard view. Through client discussions, we identified recent donations, top donors and incoming donation revenue as the most important information for administrators and prioritized them through an admin dashboard.</body>
                                        <body>We provided actionable insights to admins by identifying inactive vs active donors and recently cancelled reoccurring donations. These leads can be used to reduce donor turnover.</body>
                                    </div>
                                    <img
                                        className='full-width-detail nh'
                                        src={insightsDetail}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ThanksSection
                title1={'MyFitnessPal'}
                tag1={'Case Study'}
                miniThumb1={miniMFP}
                link1={'/myFitnessPal'}
                title2={'Diet Me'}
                tag2={'Exploration'}
                link2={'/dietMe'}
                miniThumb2={miniDM}
                showWork={true}
            />
        </div>
    </div>
)
}

// <ThanksSection
//     title1={'Don Efficace'}
//     tag1={'Product'}
//     miniThumb1={miniDE}
//     link1={'/donEfficace'}
//     title2={'Diet Me'}
//     tag2={'Exploration'}
//     link2={'/dietMe'}
//     miniThumb2={miniDM}
//     showWork={true}
// />
