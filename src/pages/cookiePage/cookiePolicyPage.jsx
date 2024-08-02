// src/components/CookiePolicy.js

import React from 'react';
import styles from './style';

const CookiePolicyPage = () => {
	return (
		<div style={styles.container}>
			<h1 style={styles.heading}>Cookie Policy</h1>

			<h2 style={styles.subHeading}>Introduction</h2>
			<p>This Cookie Policy explains what cookies are, how we use cookies on our website, and your choices regarding cookies. By continuing to use our website, you consent to our use of cookies as described below.</p>

			<h2 style={styles.subHeading}>What Are Cookies?</h2>
			<p>Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work more efficiently and to provide information to the site owners.</p>

			<h2 style={styles.subHeading}>Types of Cookies We Use</h2>
			<h3 style={styles.subHeading}>Essential Cookies</h3>
			<p>Essential cookies are necessary for the website to function properly. They allow you to navigate the site and use its features, such as accessing secure areas. Without these cookies, some parts of our site may not work correctly.</p>

			<h3 style={styles.subHeading}>Analytics Cookies</h3>
			<p>We use Google Analytics to collect information about how visitors use our website. This helps us understand how users interact with our site and allows us to improve its performance. The data collected by Google Analytics is aggregated and anonymized.</p>
			<ul style={styles.list}>
				<li><strong>Cookie Name</strong>: _ga, _gid</li>
				<li><strong>Purpose</strong>: To collect data about website usage and user behavior.</li>
				<li><strong>Expiration</strong>: Typically expires after 2 years for _ga and 24 hours for _gid.</li>
			</ul>

			<h2 style={styles.subHeading}>How We Use Cookies</h2>
			<ul style={styles.list}>
				<li><strong>Essential Cookies</strong>: These cookies are used to ensure that our website operates correctly and securely.</li>
				<li><strong>Analytics Cookies</strong>: These cookies help us analyze site traffic and user behavior, which enables us to improve our site’s functionality and user experience.</li>
			</ul>

			<h2 style={styles.subHeading}>Managing Cookies</h2>
			<p>You can manage cookies through your browser settings. Most browsers allow you to:</p>
			<ul style={styles.list}>
				<li><strong>View Cookies</strong>: Check what cookies are stored on your device.</li>
				<li><strong>Delete Cookies</strong>: Remove cookies from your device.</li>
				<li><strong>Block Cookies</strong>: Prevent cookies from being set.</li>
			</ul>
			<p><strong>Please note</strong> that blocking or deleting cookies may affect your ability to use certain features of our website.</p>

			<h2 style={styles.subHeading}>How to Manage Cookies in Your Browser</h2>
			<ul style={styles.list}>
				<li><a style={styles.link} href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
				<li><a style={styles.link} href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
				<li><a style={styles.link} href="https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
				<li><a style={styles.link} href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer">Safari</a></li>
			</ul>

			<h2 style={styles.subHeading}>Your Choices</h2>
			<p>By using our website, you consent to the use of essential cookies and Google Analytics cookies as described in this policy. If you do not consent, you may disable cookies in your browser settings, but this may impact your user experience on our site.</p>

			<h2 style={styles.subHeading}>Changes to This Cookie Policy</h2>
			<p>We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. We encourage you to review this policy periodically to stay informed about how we use cookies.</p>

			<h2 style={styles.subHeading}>Contact Us</h2>
			<p>If you have any questions about our use of cookies or this Cookie Policy, please contact us at:</p>
			<ul style={styles.list}>
				<li><strong>Email</strong>: <a style={styles.contactLink} href="mailto:info@palmyraepito.com">info@palmyraepito.com</a></li>
				<li><strong>Phone</strong>: +36306951211</li>
			</ul>
		</div>
	);
};


export default CookiePolicyPage;
