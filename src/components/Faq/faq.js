import React, { useState } from 'react';
import './faq.css'; // Import your CSS file

import ChatbotIcon from "./assets/icon/Chatbot.svg";
import MessageIconImg from "./assets/icon/MessageIocn.svg";
import SearchIcon from "./assets/icon/search.svg";
import CircleDownIcon from "./assets/icon/CircleDown.svg";
import CircleUpIcon from "./assets/icon/CircleUp.svg";
import AMAButton from "./assets/icon/amaButton.svg";
import PropTypes from 'prop-types';
import configSteps from "../../clientConfig.json";


const FAQComponent = ({ page }) => {
    console.log("page",page)
    console.log("configSteps",configSteps)
    console.log("arr",configSteps[page].faq.faqItems)
    if (configSteps[page]) {
        if (configSteps[page].faq) {
            if (configSteps[page].faq.enabled == true) {
                const faqItems = configSteps[page].faq.faqItems;
                const [searchTerm, setSearchTerm] = useState('');
                const [faqItemsJson, setFaqItemsJson] = useState(faqItems);

                const handleSearch = (event) => {
                    setSearchTerm(event.target.value.trim().toLowerCase());
                    const filterFAQ = faqItems.filter((item) => item.question.toLowerCase().includes(searchTerm));
                    setFaqItemsJson(filterFAQ);

                };

                const toggleFAQItem = (id) => {
                    const answerElement = document.getElementById("answer" + id);
                    answerElement.classList.toggle("faq-hidden");
                    const queImage = document.getElementById("img" + id);
                    if (answerElement.classList.contains("faq-hidden")) {
                        queImage.setAttribute("src", CircleDownIcon);
                    } else {
                        queImage.setAttribute("src", CircleUpIcon);
                    }
                };

                return (
                    <div className="faq-container-outer faq-position-bottom-right">
                        <div className="faq-container-header">
                            <div className="faq-header-text">
                                <span className='header-text-faq'>FAQs with FinBot</span><br />
                                <span className='faq-header-text-help'>Get help 24*7</span>
                            </div>
                            <img className="faq-boat-img" src={ChatbotIcon} alt="Chatbot" />
                            <img className="faq-msz-img" src={MessageIconImg} alt="Message Icon" />
                            <span className="close-icon">×</span>
                        </div>
                        <div className="faq-body-container">
                            <img className="faq-search-img" src={SearchIcon} alt="Search Icon" />
                            <input
                                className="faq-search-box"
                                type="text"
                                placeholder="Cannot find what you need? Type here"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <div className="faq-outer-div">
                                {faqItemsJson.map((faqItem, index) => (
                                    <div key={index}>
                                        <div className="faq-questions-box" id={"questions" + (index + 1)}>
                                            <div className="faq-question" id={"que" + (index + 1)}>{faqItem.question}</div>
                                            <div className="faq-answer faq-hidden" id={"answer" + (index + 1)}>{faqItem.answer}</div>
                                        </div>
                                        <img
                                            className="faq-que-img"
                                            id={"img" + (index + 1)}
                                            src={CircleDownIcon}
                                            alt="Toggle Icon"
                                            onClick={() => toggleFAQItem(index + 1)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            }
        } else {
            console.log("The page you are providing is not matching the structure of config file.")
        }
    } else {
        console.log("Please provide a valid page name .")
    }
};

FAQComponent.propTypes = {
    page: PropTypes.string.isRequired,
};

const FAQGuide = ({ page }) => {

    const [toggleFAQ, setToggleFAQ] = useState(false);

    const handleFAQ = () => {
        setToggleFAQ(!toggleFAQ);

    }

    return (
        <>
            {toggleFAQ && <FAQComponent page={page} />}
            <div className='ama-position-bottom-right'>
                <img src={AMAButton} alt="ama" onClick={() => handleFAQ()} />
            </div>
        </>
    )

}

export default FAQGuide;


