import React from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import "./styles/contact.css";
import './styles/resume.css'

const Resume = () => {
	return (
		<div className="page-content page-content-resume">
			<NavBar active="resume" />
			<div className="content-wrapper">
				<div className="contact-logo-container">
					<div className="contact-logo">
						<Logo width={46} />
					</div>
				</div>

				<div className="contact-container">
					<div className="title contact-title">
						Explore My Professional Journey
					</div>

					<div className="subtitle contact-subtitle">
						Thank you for your interest in my professional journey.
						My resume offers a comprehensive look at my skills,
						experiences, and accomplishments as a frontend
						developer. With expertise in creating dynamic and
						engaging user interfaces using React, JavaScript, HTML,
						and CSS, I am passionate about delivering high-quality
						web experiences. Feel free to{" "}
						<a
							href="https://drive.google.com/file/d/1bCwE-HRhha3VOGfb3mtWzkgU-VwPFVLB/view?usp=drivesdk"
							target="_blank"
							rel="noopener noreferrer"
							//className="resume-link"
						>
							Download My Resume
						</a>{" "}
						to get a detailed view of my career, projects, and the
						technologies I excel in. If you have any questions or
						would like to discuss potential opportunities, please
						don't hesitate to reach out to me via email at
						palsampavan@gmail.com.
					</div>
				</div>

				{/* <div className="socials-container">
					<div className="contact-socials">
						<Socials />
					</div>
				</div> */}

				<div className="page-footer-resume page-footer">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Resume;
