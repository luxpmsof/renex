import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SubscribeForm from '../components/Common/SubscribeForm';

const TermsOfService = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Terms Of Service" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Terms Of Service" 
                BGImage="item-bg2" 
            />

            <div className="terms-of-service-area ptb-100">
                <div className="container">
                    <div className="terms-of-service-content">
                        <h3>1. Welcome To Renex Terms of Service</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        
                        <h3>2. Data You Provide to Us</h3>
                        <p>We may collect different  from or about you depending on how you use the Services. Below are some examples to help you better understand the  we collect.</p>
                        <h3>3. How We Get Data About You</h3>
                        <p>We use tools like cookies, web beacons, analytics services, and advertising providers to gather the  listed above. Some of these tools offer you the ability to opt out of  collection.</p>
                        <h3>4. What We Use Your Data For</h3>
                        <ol>
                            <li>Responding to your questions and concerns;</li>
                            <li>Sending you administrative messages and information, including messages from instructors and teaching assistants, notifications about changes to our Service, and updates to our agreements;</li>
                            <li>Sending push notifications to your wireless device to provide updates and other relevant messages (which you can manage from the “options” or “settings” page of the mobile app);</li>
                        </ol>
                        <h3>5. Your Choices About the Use of Your Data</h3>
                        <p>You can choose not to provide certain  to us, but you may not be able to use certain features of the Services.</p>
                        <ol>
                            <li>To stop receiving promotional communications from us, you can opt out by using the unsubscribe mechanism in the promotional communication you receive or by changing the email preferences in your account. Note that regardless of your email preference settings, we will send you transactional and relationship messages regarding the Services, including administrative confirmations, order confirmations, important updates about the Services, and notices about our policies.</li>
                            <li>The browser or device you use may allow you to control cookies and other types of local  storage. Your wireless device may also allow you to control whether location or other  is collected and shared. You can manage Adobe’s LSOs through their Website Storage Settings panel.</li>
                            <li>To get information and control cookies used for tailored advertising from participating companies, see the consumer opt-out pages for the Network Advertising Initiative and Digital Advertising Alliance, or if you’re located in the European Union, visit the Your Online Choices site. To opt out of Google’s display advertising or customize Google Display Network ads, visit the Google Ads Settings page. To opt out of Taboola’s targeted ads, see the Opt-out Link in their Cookie Policy.</li>
                            <li>To update  you provide directly, log into your account and update your account at any time.</li>
                        </ol>
                        <h3>6. Our Policy Concerning Children</h3>
                        <p>We recognize the privacy interests of children and encourage parents and guardians to take an active role in their children online activities and interests.</p>
                    </div>
                </div>
            </div>
			 
			<SubscribeForm />

			<Footer />
		</>
    )
}

export default TermsOfService;