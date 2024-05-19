import React, { useState } from 'react';
import './faq.css'; // Import your CSS file

import ChatbotIcon from "./assets/icon/Chatbot.svg";
import MessageIconImg from "./assets/icon/MessageIocn.svg";
import SearchIcon from "./assets/icon/search.svg";
import CircleDownIcon from "./assets/icon/CircleDown.svg";
import CircleUpIcon from "./assets/icon/CircleUp.svg";

var faqItems = [
    { question: "How do I open a bank account with FAB?", answer: "To create your account with FAB, you can visit their website and follow the instructions for account opening. You may need to provide personal information and identification documents" },
    { question: " What are the requirements for opening a bank account with FAB?", answer: "Typically, you will need to provide proof of identity such as a passport or national ID card, proof of address, and possibly other documents depending on the type of account you wish to open." },
    { question: "How can I access FAB's online banking services?", answer: "You can access FAB's online banking by visiting their website and logging in with your account credentials. Alternatively, you may download their mobile banking app from the App Store or Google Play Store and log in using your account details." },
    { question: "What services are offered through FAB's online banking platform?", answer: "FAB's online banking platform typically offers services such as account balance inquiries, fund transfers, bill payments, account statements, and more, depending on the specific features available to you as a customer." },
    { question: "Is there a mobile app for FAB's banking services?", answer: "Yes, FAB usually offers a mobile banking app that allows customers to conveniently access banking services on their smartphones or tablets. You can download the app from the App Store or Google Play Store." },
    { question: "How do I reset my online banking password with FAB?", answer: "If you forget your online banking password with FAB, you can usually initiate a password reset process through their website or mobile app. Follow the prompts to verify your identity and create a new password." },
    { question: "What should I do if I notice suspicious activity on my FAB account?", answer: " If you suspect unauthorized activity on your FAB account, it's important to contact the bank immediately. They will guide you through the necessary steps to secure your account and investigate any fraudulent transactions." },
    { question: "Can I link external accounts to my FAB account for transfers?", answer: "Yes, FAB typically allows customers to link external accounts for fund transfers. You may need to verify ownership of the external account before initiating transfers." },
    { question: "What are the fees associated with FAB's banking services?", answer: " Fees vary depending on the type of account and services you use. Common fees may include account maintenance fees, transaction fees, ATM withdrawal fees, and international transfer fees. It's best to consult FAB's fee schedule or contact their customer service for specific information" },
    { question: "How long does it take for a fund transfer to be processed through FAB?", answer: "The processing time for fund transfers with FAB can vary depending on factors such as the destination of the transfer and the transfer method used. Domestic transfers may be processed within the same business day, while international transfers may take a few business days to complete." }
];

const FAQComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.trim().toLowerCase());
    };

    const toggleFAQItem = (id) => {
        
    };

    return (
        <div className="faq-container-outer">
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
                    {faqItems.map((faqItem, index) => (
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
};

export default FAQComponent;
