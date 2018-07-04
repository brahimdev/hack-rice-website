import PropTypes from 'prop-types';

class Main extends React.Component {
	render() {
		let close = (
			<div
				className="close"
				onClick={() => {
					this.props.onCloseArticle();
				}}
			/>
		);

		return (
			<div
				id="main"
				style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
				<article
					id="about"
					className={`${this.props.article === 'about' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}>
					<h2 className="major">About</h2>
					<p>HackRice is Rice University's annual hackathon event.</p>
          <p>Participants trade their sleep for a weekend and join a team to create a project - typically software - in an environment optimized for creativity.
             At the end of the event, the participants demonstrate their projects to fellow hackers, visitors, and a panel of judges.</p>
          <p>Hosted by the <a href="http://csclub.rice.edu/">Rice Computer Science Club</a>.</p>
					{close}
				</article>

				<article
					id="criteria"
					className={`${this.props.article === 'criteria' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}>
					<h2 className="major">Judging Criteria</h2>
					<ol>
						<li><h3>Technical Difficulty</h3> We are looking for <b>technically advanced solutions to technically challenging problems</b> that make use of <b>hardware and API's</b>. That being said, if you can solve a technically challenging problem with a simple solution, we will be very impressed! Additionally, we would like to emphasize that <b>API's should only be used when necessary.</b></li><br />
						<li><h3>Creativity</h3> We are looking for <b>original ideas</b> or <b>new angles on existing ideas</b>. For example, using an API in a unique way. We know API's work - we want to see if you can do something new and awesome with them!</li><br />
						<li><h3>Design & Polish</h3> We are looking for <b>aesthetically pleasing</b> projects with <b>smooth and clear user experience.</b></li><br />
						<li><h3>Practicality & Usefulness</h3> We are looking for <b>socially good projects</b> that <b>people would use</b>. Additionally, we would like to emphasize that we will extensively check to make sure that your project is one that people can use in the real world and <b>doesn't only work on the cases you demo.</b></li>
					</ol>
					{close}
				</article>

				<article
					id="info"
					className={`${this.props.article === 'info' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}>
					<h2 className="major">Essential Information</h2>
					<ol>
						<li><h3>Logistics</h3><b>36</b> Hours<br/><b>400</b> Hackers<br/><b>5</b> Hackers Per Team</li><br />
						<li><h3>Facebook</h3> Click <a href="https://www.facebook.com/hackrice/">here</a> for the HackRice facebook even page</li><br />
						<li><h3>Devpost</h3> Coming soon!</li><br />
						<li><h3>Location</h3> <b>Rice Memorial Center (RMC)</b><br />Houston, Texas 77005<br /> Click <a href="https://www.google.com/maps/place/Rice+Memorial+Center+-+Grand+Hall/@29.7179144,-95.403988,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c07ba073db39:0x33c8974bfe985837!8m2!3d29.7179098!4d-95.4017993?hl=en-US">here</a> to see the RMC on Google Maps</li>
					</ol>
					{close}
				</article>

				<article
					id="faq"
					className={`${this.props.article === 'faq' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}>
					<h2 className="major">Frequently Asked Questions</h2>
					<ol>
						<li><h3>Who is eligible for HackRice?</h3>Any current student over the age of 18 is eligible to apply to HackRice. Since we are an MLH member event, participants must also accept the <a href="http://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct.</a></li><br />
						<li><h3>Will my travel be reimbursed?</h3>Yes! We'll be providing travel reimbursements for all visiting hackers. More details coming soon!</li><br />
						<li><h3>Will there be prizes?</h3>We will have prizes for 1st, 2nd, 3rd place, as well as a best hardware hack, and many other company sponsored prizes.</li><br />
						<li><h3>Will there be free food?</h3>Yes! We will provide catered meals during the day along with snacks and free caffeine through the night to keep you going.</li><br />
						<li><h3>What are the acceptance criteria?</h3>Rice students and alumni are guaranteed acceptance. For Non-Rice students, we ask for their previous hackathon and coding experiences, so that we can invite people who have demonstrated interest and skill. The admission process will be competitive and rolling! We also will take into account people who have never been to a hackathon before, so please apply!</li><br />
						<li><h3>What do I need to bring?</h3>Please bring a student ID so we can verify and register you on-site! You'll also need to bring a computer, whatever software you feel might be necessary for development, sleeping bag, and pillow. We also recommend that you bring power strips for convenience. Teammates are free to share equipment with each other.</li><br />
						<li><h3>What if I'm not very experienced?</h3>We will try our best to point people in the right direction and use tools and languages that allow rapid development with the least amount of frustration. There will also be upperclassmen participating in the hackathon who can help you out. Furthermore, you can look up tutorials and sample code online. We will also be having workshops the week before the hackathon!</li><br />
						<li><h3>Can Rice alumni attend?</h3>Rice alumni are eligible to attend the event to hack or mentor other students, but alumni submissions will not be eligible for prizes. We will not be able to reimburse alumni for travel.</li><br />
						<li><h3>What if I don't have a team before the event?</h3>You don't have to form a team before the event, or at all. At the start of the event, we will provide plenty of time to break out and form a new one if you choose to. Teams will be limited to 5 members.</li><br />
						<li><h3>Do I need to stay the whole time?</h3>Nope, we are not a lock-in. We realize that 36 hours is a long time, and that some people might have other commitments during that time. Feel free to stay and leave as you choose. However, we would prefer that people stay to promote the environment.</li><br />

					</ol>
					{close}
				</article>

				<article
					id="contact"
					className={`${this.props.article === 'contact' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}>
					<h2 className="major">Contact Us</h2>
					<ol>
						<li><h3>Email</h3>Click <a href="mailto:officialhackrice@gmail.com">here</a> to email us at officialhackrice@gmail.com</li><br />
						<li><h3>Messenger</h3>Click <a href="https://m.me/hackrice">here</a> to message us on Facebook messenger</li><br />
					</ol>
					{close}
				</article>
			</div>
		);
	}
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool
};

export default Main;
