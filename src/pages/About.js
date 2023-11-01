export default function About({ propsHere }) {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5>Leaderboard</h5>
              <p>
                These are the Honey Pot Leaderboards. Created by Liquality,
                Honey Pots allows creators to share with their supporters,
                powered by smart measurable conditions, all onchain. As artists
                flourish, so do their collectors. A true win-win. On November
                14th, Honey Pots will be distributed for top contributors of
                each drop based on their number of mints (with a 70% weight) and
                number of referrals (with a 30% weight). <br></br>
                <br></br>
                <p>
                  <a
                    className="btn btn-primary  "
                    target="_blank"
                    href="https://x.com/Liquality_io/status/1719362747819872620?s=20"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="currentColor"
                      className="bi bi-twitter-x mb-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                    </svg>{" "}
                    Read more here
                  </a>
                </p>
                Top contributors for each drop will then participate in a raffle
                to win the $150 Hive Bonus
              </p>

              <h5>Contact</h5>
              <p>
                If you have any questions about Honey Pots or would like to use
                it to grow your reach onchain, please reach out to us{" "}
                <a href="mailto:support@liquality.io">simon@liquality.io</a> or{" "}
                <a target="_blank" href="https://t.me/simonlapscher">
                  @simonlapscher
                </a>{" "}
                on telegram.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
