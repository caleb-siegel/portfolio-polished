import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [toggleModal, setToggleModal] = useState(0);

    const handleToggleModal = (index) => {
        setToggleModal(index);
    };
    
    return (
        <section className="qualification section">
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
                                    <div className="qualification__modal-content">
                                        <i onClick={() => handleToggleModal(0)} className="uil uil-times qualification__modal-close"></i>

                                        <h3 className="qualification__modal-title">Flatiron School</h3>
                                        <p className="qualification__modal-description">Jan '24 - Apr '24</p>

                                        <ul className="qualification__modal-qualification grid">
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Received Software Engineering certification after completing rigorous 15-week bootcamp</p>
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
                                    <div className="qualification__modal-content">
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
                                                <p className="qualification__modal-info">Summa Cum Laude</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Dean's Scholar</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Dean's List, all semesters</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021-Present
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
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017-2018
                                </div>
                            </div>
                        </div> */}
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
                                                <p className="qualification__modal-info">Oversaw marketing for 30+ E-Commerce brands ensuring client growth and success by coordinating collaborative strategy execution among six internal teams: web design, web development, paid search marketing, paid social marketing, affiliate & influencer marketing, email & SMS marketing.</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Devised and applied strategies to grow clients’ businesses:</p>
                                            </li>

                                            <p className="qualification__modal-subtitle"><i className="uil uil-circle qualification__modal-subtitle-icon"></i>Lowered CPC on women’s leggings brand to grow traffic 250% and sales 100%.</p>
                                            <p className="qualification__modal-subtitle"><i className="uil uil-circle qualification__modal-subtitle-icon"></i>Built sports licensing brand's revenue from $0 to $2mn/month in 24 months.</p>
                                            <p className="qualification__modal-subtitle"><i className="uil uil-circle qualification__modal-subtitle-icon"></i>Improved struggling cosmetics brand's revenue from down 30% y/y to up 50%.</p>
                                            <p className="qualification__modal-subtitle"><i className="uil uil-circle qualification__modal-subtitle-icon"></i>Doubled client baby stroller brand’s ecommerce sales overnight by analyzing customer purchase behavior, noticing more affordable product from competing retailers cannibalizing our site sales and implementing welcome offer to compete more favorably on price.</p>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Developed client-operations process to address company growth opportunities and challenges; enforced strict guidelines to streamline efficiency and limit non-impactful actions, increasing client performance and improving client relationships through clearer and more strategically-developed direction.</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Built proprietary website dashboard calculating and illustrating monthly commission revenue projections and run-rates, increasing alignment between operators and executive team.</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Managed email marketing department coordinating marketing calendars and strategies focused on maximizing website traffic and sales. Developed partnership with the largest industry vendor, Mailchimp, increasing Group 8A’s monthly sales and go-forward client base by ~25%.</p>
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
                                                <p className="qualification__modal-info">Research Associate of large-cap Internet and Technology stocks primarily focused on Digital Media, E-Commerce, Marketplace, and Online Travel sectors.</p>
                                            </li>
                                            
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Led work on IPO diligence process for over-the-top media provider, Roku. Attended analyst day with company management, participating in diligence calls with company suppliers, advertisers, and retailers. Conducted educational calls for 30+ institutional investors during management’s roadshow. Assisted in authoring initiation report and launching coverage.</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Spearheaded Citi’s Internet Big Data initiative, collecting and analyzing scraped data to provide differentiated analyses. Initiated specific projects including nuanced analysis of company career listings to determine which business areas were seeing the greatest investment, collecting OTA property listings to understand the relative supply outlook and comparative geographic strengths/weaknesses and Roku tracker utilizing API data on streaming app hours.</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">In addition to company specific models, created and maintained non-company models to drive greater internal efficiency including an FX model which meaningfully simplified updating company models, and a detailed Citi vs. Consensus model providing greater insights into bullish vs bearish calls.</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">As Summer Associate, worked on the Cable, Satellite, and Media team. Built out working financial model of Live Nation Entertainment (LYV) and conducted industry research utilized in initiating stock coverage. Developed stock pitch on Six Flags and presented to department management to secure full-time job offer.</p>
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
                                                <p className="qualification__modal-info">Served as Part-time Analyst at Hedge Fund during college. Structured University schedule so all classes were on only two days, keeping the other days open to work at Clinton.</p>
                                            </li>
                                            
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Created financial models valuing specific aspects of possible investments; focused on building out revenues to understand and forecast the company's ability to generate sales.</p>
                                            </li>
                                            
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Contributed to letters to shareholders of underperforming companies to recommend potential activist intervention.</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Met with company CEOs to discuss their business models and to suggest the benefits of alternative strategies.</p>
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
                                                <p className="qualification__modal-info">Created financial models evaluating the impact of the growing film industries in BRIC countries (Brazil, Russia, India, China) on the domestic film studios; forecasted industry metrics, including box office receipts, admissions, ticket prices, and number of screens.</p>
                                            </li>
                                            
                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Researched the impact of different genres of film on studios’ profitability and examined production pipelines to project which studios would benefit from increasing positive genre trends.</p>
                                            </li>

                                            <li className="qualification__modal-qual">
                                                <i className="bx bxs-circle qualification__modal-icon"></i>
                                                <p className="qualification__modal-info">Co-authored report, titled Found in Translation, comparing the growth of the foreign film market to that of the domestic market, and highlighted upside to companies investing internationally.</p>
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