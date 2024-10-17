import React from 'react'
import CtaButton from '../components/CtaButton/CtaButton';
import Divider from '../components/Divider/Divider';
import ThanksSection from '../components/ThanksSection.jsx'
import ideationFirst from '../assets/Images/dm/ideation-first.png'
import ideationSecond from '../assets/Images/dm/ideation-second.png'

import "../styles/caseStudy.css"

export default function dietMe() {

  function scrollToPrototype() {
    const section = document.getElementById('prototypeSection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className='device-container'>
      <div className='main-content-case'>
        <div className="sub-section introduction">
          <div className="title">
            Helping people with allergy and accessibility challenges confidently find
            their next meal
          </div>
          <div className="context">
            <div className="ht-pair">
                <div className="heading">My Role</div>
                <p>I worked in a team of 4 as I led the product-thinking, interface design
                and branding.</p>
              </div>
              <div className="ht-pair">
                <div className="heading">Problem Prompt</div>
                <div>
                <p>How might we create a digital product that helps identify safe foods and
                  dining options, improves communication of dietary needs, and supports a
                  healthy, social lifestyle for people with dietary restrictions?</p>
                </div>
              </div>
          </div>
          <CtaButton
                text='Cut To The Chase'
                clickFunctio={scrollToPrototype} />
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={'key pain points'}/>
          <div className="key-pain-points-body">
            <div className="pain-point ht-pair">
              <div className="heading">1. Identifying Safe Dining Options</div>
              <p>
                Many restaurants struggle to provide complete ingredient lists and
                allergen warnings which make eating out a surprisingly risky activity
                for many with allergies.
              </p>
            </div>
            <div className="pain-point ht-pair">
              <div className="heading">
                2. Frustrations with Grocery Shopping and Cooking
              </div>
              <p>
                Dietary restirctions will inevitabily lead to scanning thousands of
                ingredient lists before taking your first bite. Magnifying this
                discomfort over 20-30 grocery list items will quickly become cumbersome.
              </p>
            </div>
            <div className="pain-point ht-pair">
              <div className="heading">3. Communicating Dietary Needs</div>
              <p>
                Despite being so common, explaining your allergies is beyond awkward for
                many. And as someone who's allergic to tree nuts, explaining the ellergy
                is my least favourite part of it all.
              </p>
            </div>
          </div>
        </div>
        <div className="sub-section the-problem">
          <Divider
          title={'the problem'}/>
          <div className="the-problem-body ht-pair">
            <div className="heading">
              Competitor solutions are strictly limited to barcode scanning and
              struggle to provide comprehensive food databases.
            </div>
            <p>
            After conducting a competitive analysis with competitor apps such as Yuka
            and Fig, we determined that these two points served as their most glaring
            weaknesses and thus, our best opprotunities to truly help users.
            </p>
            <p>
            Although useful in limited quantities, barcode scanning becomes tedious in
            grocery stores as it requires the user to individually locate the barcode
            on each boxed item. Similarly, the limited databases of competitors reduce
            their soliution's overall utility as the app cannot be confidently and
            consistently used.
            </p>
          </div>
        </div>
        <div className="sub-section the-problem">
          <Divider
          title={'ideation'}/>
          <div className="the-problem-body-dm">
            <div className="the-problem-text-dm ht-pair">
              <div className="heading">
                From UberEats to AI Recipe books and much more, we considered it all!
              </div>
              <p>
                We discussed building an AI Recipe book that generates recipes based on
                a user's unique dietary profileand considered designing a web extension
                to confirm the safety of upcoming purchases. We even discussed creating
                an UberEats plugin of sorts to filter nearby restaurants by the quality
                of available food options.
              </p>
              <p>
                Alhough neither of these ideas werre used in their original form, they
                each found their way into the design of our solution. For example, our
                DietMe box-acanning feature is powered by scraping data from online
                stores such as UberEats, InstaCart, Walmart and more. We then built on
                this concept by suggesting recipes to users based on their scanning
                history and their grocery list. Additionally, the grocery list feature
                improved the utility of the application for a greater variety of users.
              </p>
            </div>
            <div className="ht-pair">
              <div className="heading">Ideation Sprint 1</div>
              <img
                className="ideation"
                src={ideationFirst}
                alt="Ideation 1"
              />
            </div>
            <div className="ht-pair">
              <div className="heading">Ideation Sprint 2</div>
              <img
                className="ideation"
                src={ideationSecond}
                alt="Ideation 2"
              />
            </div>
          </div>
        </div>
        <div className="sub-section key-pain-points">
          <Divider
          title={'the solution'}/>
          <div className="key-pain-points-body">
            <div className="pain-point ht-pair">
              <div className="heading">
                1. Users create a one-time dietary profile.
              </div>
              <p>
              After downloading DietMe, users are prompted to create a dietary profile
              in which they describe their dietary restrictions and any lifestyle diet
              plans that they are on. This information is only collected once and is
              compared against all scanned items and recipes to ensure safety and diet
              adherence.
              </p>
            </div>
            <div className="pain-point ht-pair">
              <div className="heading">
                2. Users create a grocery list and get recommended recipes.
              </div>
              <p>
              By tracking groceries through DietMe, the app has a better idea of what
              foods can be used in a recipe. If you don't know what to make for dinner
              but are sure you would love a dish with pasta, you can add the one item
              to your grocery list and watch the recommendations pour in. After
              deciding which recipe looks the best, you can import the required
              ingredients into your grocery list.
              </p>
            </div>
            <div className="pain-point ht-pair">
              <div className="heading">
                3. Users scan items in-store to knock them off their list.
              </div>
              <p>
              By scanning an item on the shelf, users can ensure that it fits their
              dietary needs and cross it off their list at once. If the item doesn't
              fit their diet, DietMe will recommend a substitution or a new recipe
              using the ingredients that are already in their cart.
              </p>
            </div>
            <div className="pain-point ht-pair">
              <div className="heading">
                4. Enabling voice control allows visually impaired users to shop
                independantly.
              </div>
              <p>
              Typically, the visually impaired need to grocery shop alongside a
              truster friend or family member as cardboard boxes and sleek packaging
              exclusively communicate item names, flavours and ingredients visually.
              However, as DietMe stores this information in its databases, voice
              control will enable users to shop without relying on a second party to
              read items aloud. 
              </p>
              <p>
              This feature would need to be paired with haptic feedback for the
              incorrect scanning of items and would require much more intensive
              accessibility research to ensure the accessibility of the product.
              </p>
            </div>
          </div>
        </div>
        <div className="sub-section prototype">
          <Divider
          title={'interactive prototype'}/>
          <div className="protopype-container" id="prototypeSection">
            <div className="prototype">
              <iframe
                className="actual-prototype"
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                max-width="1400px"
                min-width="400px"
                height="800px"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHcYRAzFB9KG4WuGyloUj3A%2FDietMe-Design-File%3Fpage-id%3D0%253A1%26node-id%3D5-4%26viewport%3D1046%252C-483%252C0.79%26t%3DAC0s2Z2wqwRjpRji-1%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A4"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
        <div className='sub-section reflection'>
          <div className='reflection-body'>
            <ThanksSection/>
          </div>
        </div>
      </div>
    </div>
  )
}
