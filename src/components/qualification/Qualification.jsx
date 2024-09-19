import React, { useState, useEffect, useRef } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(2);
    const [toggleModal, setToggleModal] = useState(0);

    const modalRef = useRef(null); // Ref to track modal content

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const handleToggleModal = (index) => {
        setToggleModal(index);
    };

    // useEffect to handle clicks outside the modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the click is outside the modal content, close the modal
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setToggleModal(0);
            }
        };

        // Add event listener when the modal is open
        if (toggleModal !== 0) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup the event listener when the modal is closed
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleModal]);
    
    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Flatiron School</h3>
                                <span className="qualification__subtitle">Software Engineering</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024
                                </div>

                                <span className="qualification__see-more-button" onClick={() => handleToggleModal(1)}>See More
                                    <i className="uil uil-arrow-right qualification__see-more-button-icon"></i>
                                </span>

                                <div className={toggleModal === 1 ? "qualification__modal active-modal" : "qualification__modal"}>
                                    <div className="qualification__modal-content" ref={modalRef}>
                                        <i onClick={() => handleToggleModal(0)} className="uil uil-times qualification__modal-close"></i>

                                        <h3 className="qualification__modal-title">Flatiron School</h3>                                        
                                        <p className="qualification__modal-description">Jan - Apr '24</p>

                                        <ul className="qualification__modal-qualification grid">
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Earned Software Engineering certification after completing intensive 15-week bootcamp</p>
                                            </li>
                                            
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Phase 1 - Frontend: HTML, CSS, Javascript, React</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Phase 2 - Backend: Python, SQL, Flask</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Yeshiva University</h3>
                                <span className="qualification__subtitle">BA, Economics (3.9 GPA)</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2013-2016
                                </div>

                                <span className="qualification__see-more-button" onClick={() => handleToggleModal(2)}>See More
                                    <i className="uil uil-arrow-right qualification__see-more-button-icon"></i>
                                </span>

                                <div className={toggleModal === 2 ? "qualification__modal active-modal" : "qualification__modal"}>
                                    <div className="qualification__modal-content" ref={modalRef}>
                                        <i onClick={() => handleToggleModal(0)} className="uil uil-times qualification__modal-close"></i>

                                        <h3 className="qualification__modal-title">Yeshiva University</h3>
                                        <p className="qualification__modal-description">2013 - 2016</p>

                                        <ul className="qualification__modal-qualification grid">
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Bachelor of Arts, Economics</p>
                                            </li>
                                            
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Cumulative GPA: 3.9</p>
                                            </li>
                                            
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Graduated <strong>Summa Cum Laude</strong></p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Received Dean's List merit for all semesters</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Accepted as Dean's Scholar</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Group 8A</h3>
                                <span className="qualification__subtitle">VP, Marketing</span>
                                <span className="qualification__subtitle">Director, Paid Search</span>
                                <span className="qualification__subtitle">Sr. Mgr, Client Services</span>
                                <span className="qualification__subtitle">Mgr, Email Marketing</span>
                                <span className="qualification__subtitle">Analyst, Operations</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019-2023
                                </div>

                                <span className="qualification__see-more-button" onClick={() => handleToggleModal(3)}>See More
                                    <i className="uil uil-arrow-right qualification__see-more-button-icon"></i>
                                </span>

                                <div className={toggleModal === 3 ? "qualification__modal active-modal" : "qualification__modal"}>
                                    <div className="qualification__modal-content">
                                        <i onClick={() => handleToggleModal(0)} className="uil uil-times qualification__modal-close"></i>

                                        <h3 className="qualification__modal-title">Group 8A</h3>
                                        <p className="qualification__modal-description">2019-2023</p>

                                        <ul className="qualification__modal-qualification grid">
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Received 4 promotions in 5 years:</p>
                                            </li>
                                            
                                            <p className="qualification__modal-subtitle"><i className="uil uil-circle qualification__modal-subtitle-icon"></i>VP, Performance Marketing (Jun '23 - Dec '23)</p>
                                            <p className="qualification__modal-subtitle"><i className="uil uil-circle qualification__modal-subtitle-icon"></i>Director, Paid Search Marketing (May '22 - May '23) </p>
                                            <p className="qualification__modal-subtitle"><i className="uil uil-circle qualification__modal-subtitle-icon"></i>Sr. Manager, Client Services (Sep '20 - May '22) </p>
                                            <p className="qualification__modal-subtitle"><i className="uil uil-circle qualification__modal-subtitle-icon"></i>Manager, Email Marketing (Apr '19 - Sep '20) </p>
                                            <p className="qualification__modal-subtitle"><i className="uil uil-circle qualification__modal-subtitle-icon"></i>Analyst, Operations (Jan '19 - Mar '19) </p>
                                            
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Oversaw marketing efforts for 50+ e-commerce brands, driving growth and success by leading strategy execution, and managing 20+ employees, across six internal teams: design, development, paid search, paid social, affiliate & influencer marketing, and email & sms marketing.</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Developed and implemented strategies that delivered significant client results:</p>
                                            </li>

                                            <p className="qualification__modal-subtitle"><i className="uil uil-circle qualification__modal-subtitle-icon"></i>Licensed sportswear: launched website and drove revenue from $0 to $2mn/month in 24 months.</p>
                                            <p className="qualification__modal-subtitle"><i className="uil uil-circle qualification__modal-subtitle-icon"></i>Women's leggings: reduced CPC to increase traffic by 250% and sales by 100%.</p>
                                            <p className="qualification__modal-subtitle"><i className="uil uil-circle qualification__modal-subtitle-icon"></i>Cosmetics: improved struggling brand's revenue from down 30% y/y to up 50%.</p>
                                            <p className="qualification__modal-subtitle"><i className="uil uil-circle qualification__modal-subtitle-icon"></i>Baby strollers: doubled e-commerce sales overnight through market behavior analysis.</p>

                                            {/* <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Streamlined client-operations processes, creating strict guidelines to improve efficiency and limit non-impactful actions. Enhanced client performance and relationships through clearer strategic direction.</p>
                                            </li> */}

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Built proprietary dashboard for monthly commission projections, aligning operators and executives with real-time commission insights.</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Promoted to manage email marketing department after just 3 months at the company and with no prior experience. Optimized marketing calendars and strategies to maximize website traffic and sales, and partnered with Mailchimp, boosting Group 8A’s monthly sales and client base by ~25%.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Citigroup</h3>
                                <span className="qualification__subtitle">Equity Research Associate</span>
                                <span className="qualification__subtitle">Summer Associate (2015)</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016-2018
                                </div>

                                <span className="qualification__see-more-button" onClick={() => handleToggleModal(4)}>See More
                                    <i className="uil uil-arrow-right qualification__see-more-button-icon"></i>
                                </span>

                                <div className={toggleModal === 4 ? "qualification__modal active-modal" : "qualification__modal"}>
                                    <div className="qualification__modal-content">
                                        <i onClick={() => handleToggleModal(0)} className="uil uil-times qualification__modal-close"></i>

                                        <h3 className="qualification__modal-title">Citigroup</h3>
                                        <p className="qualification__modal-description">2016-2018</p>

                                        <ul className="qualification__modal-qualification grid">
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Research Associate on top-rated internet research team, covering large-cap internet and technology stocks, with primary focus on digital media, e-commerce, marketplaces, and online travel sectors.</p>
                                            </li>
                                            
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Led IPO diligence for Roku, attending analyst day with company management and participating in calls with suppliers, advertisers, and retailers. Conducted educational calls with 30+ institutional investors during the management roadshow, and co-authored the initiation report to launch coverage.</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Spearheaded Citi’s Internet Big Data initiative, analyzing scraped data for differentiated insights. Key projects included assessing business investment via company job listings, analyzing OTA property listings to gauge supply outlook, and creating a Roku tracker using API data on streaming app hours.</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Developed non-company models to improve internal efficiency, including an FX model that simplified updating company models and a Citi vs. Consensus model to provide deeper insights into bullish vs. bearish calls.</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">As Summer Associate on the Cable, Satellite, and Media team, built financial model for Live Nation Entertainment (LYV) and conducted industry research later used for stock coverage. Delivered end-of-summer stock pitch on Six Flags to department management, which secured a full-time offer.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Clinton Group</h3>
                                <span className="qualification__subtitle">Part-time Analyst</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2014-2015
                                </div>

                                <span className="qualification__see-more-button" onClick={() => handleToggleModal(5)}>See More
                                    <i className="uil uil-arrow-right qualification__see-more-button-icon"></i>
                                </span>

                                <div className={toggleModal === 5 ? "qualification__modal active-modal" : "qualification__modal"}>
                                    <div className="qualification__modal-content">
                                        <i onClick={() => handleToggleModal(0)} className="uil uil-times qualification__modal-close"></i>

                                        <h3 className="qualification__modal-title">Clinton Group</h3>
                                        <p className="qualification__modal-description">2014-2015</p>

                                        <ul className="qualification__modal-qualification grid">
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Worked as Part-time Analyst at hedge fund during college, structuring schedule to attend classes two days a week and dedicate remaining time to work at Clinton.</p>
                                            </li>
                                            
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Developed financial models to value specific aspects of potential investments, with focus on revenue forecasting to evaluate the company’s future sales potential.</p>
                                            </li>
                                            
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Contributed to shareholder letters for underperforming companies, recommending activist intervention strategies.</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Met with company CEOs to discuss business models and propose alternative strategies for improvement.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Nomura Securities</h3>
                                <span className="qualification__subtitle">Equity Research Analyst</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Summer 2014
                                </div>

                                <span className="qualification__see-more-button" onClick={() => handleToggleModal(6)}>See More
                                    <i className="uil uil-arrow-right qualification__see-more-button-icon"></i>
                                </span>

                                <div className={toggleModal === 6 ? "qualification__modal active-modal" : "qualification__modal"}>
                                    <div className="qualification__modal-content">
                                        <i onClick={() => handleToggleModal(0)} className="uil uil-times qualification__modal-close"></i>

                                        <h3 className="qualification__modal-title">Nomura Securities</h3>
                                        <p className="qualification__modal-description">Summer 2014</p>

                                        <ul className="qualification__modal-qualification grid">
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Created financial models to evaluate impact of growing film industries in BRIC countries (Brazil, Russia, India, China) on domestic film studios, forecasting key industry metrics such as box office receipts, admissions, ticket prices, and number of screens.</p>
                                            </li>
                                            
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Researched profitability impact of different film genres and analyzed production pipelines to project which studios would benefit from positive genre trends.</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Co-authored report <i>Found in Translation</i>, comparing growth of foreign film markets to domestic ones, highlighting upside for companies investing internationally.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification