export default function About({ propsHere }) {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5>Leaderboard</h5>
              <p>
                This is a leaderboard for different mints. Rewards will be
                distributed based on referrals and number of mints after mint is
                over.
              </p>
              <p>
                <a
                  className="btn btn-primary "
                  target="_blank"
                  href="https://github.com/liquality/group-mint-contract"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>{" "}
                  View code for rewards protocol
                </a>
              </p>
              <h5>Contact</h5>
              <p>
                If you have any questions about this application or the rewards
                mechanism, please reach out to us
                <a href="mailto:support@liquality.io">
                  {" "}
                  support@liquality.io
                </a>{" "}
                and we will get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
