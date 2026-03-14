export default function RewardsSection() {
  return (
    <section className="section section-dark" id="rewards">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Incentives</span>
          <h2 className="section-title">Prizes & Rewards</h2>
          <p className="section-subtitle">Compete for exciting prizes and recognition</p>
        </div>
        <div className="rewards-container">
          <div className="reward-card reward-first">
            <div className="reward-badge">🥇</div>
            <h3 className="reward-title">First Prize</h3>
            <div className="reward-amount">₹50,000</div>
            <ul className="reward-perks">
              <li>Cash Prize</li>
              <li>Trophy & Certificate</li>
              <li>Internship Opportunities</li>
              <li>Mentorship Program</li>
            </ul>
          </div>

          <div className="reward-card reward-second">
            <div className="reward-badge">🥈</div>
            <h3 className="reward-title">Second Prize</h3>
            <div className="reward-amount">₹30,000</div>
            <ul className="reward-perks">
              <li>Cash Prize</li>
              <li>Trophy & Certificate</li>
              <li>Industry Connect</li>
              <li>Goodies & Swag</li>
            </ul>
          </div>

          <div className="reward-card reward-third">
            <div className="reward-badge">🥉</div>
            <h3 className="reward-title">Third Prize</h3>
            <div className="reward-amount">₹20,000</div>
            <ul className="reward-perks">
              <li>Cash Prize</li>
              <li>Trophy & Certificate</li>
              <li>Tech Merchandise</li>
              <li>Networking Access</li>
            </ul>
          </div>
        </div>
        <div className="additional-rewards">
          <p>🎁 Additional rewards for category winners and participation certificates for all!</p>
        </div>
      </div>
    </section>
  );
}
