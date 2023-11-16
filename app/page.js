import Illustration from "../public/styles/assets/illustration-intro.svg";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section className="padding-block-900">
        <div className="container">
          <div className="even-columns">
            <div>
              <h1 className="fs-primary-heading fw-bold">
                Bring everyone together to build better products.
              </h1>
              <p>
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
              <button className="button">Get Started</button>
            </div>
            <div>
              <Image src={Illustration} alt="bars for decorative purpose" />
            </div>
          </div>
        </div>
      </section>
      <section className="padding-block-900">
        <div className="container">
          <div className="even-columns">
            <div>
              <h2 className="fs-secondary-heading fw-bold">
                What’s different about Manage?
              </h2>
              <p>
                Manage provides all the functionality your team needs, without
                the complexity. Our software is tailor-made for modern digital
                product teams.
              </p>
            </div>
            <div>
              <ul className="numbered-items" role="list">
                <li>
                  <h3 className="fs-600 fw-bold">
                    Track company-wide progress
                  </h3>
                  <p>
                    See how your day-to-day tasks fit into the wider vision. Go
                    from tracking progress at the milestone level all the way
                    done to the smallest of details. Never lose sight of the
                    bigger picture again.
                  </p>
                </li>
                <li>
                  <h3 className="fs-600 fw-bold">Advanced built-in reports</h3>
                  <p>
                    Set internal delivery estimates and track progress toward
                    company goals. Our customisable dashboard helps you build
                    out the reports you need to keep key stakeholders informed.
                  </p>
                </li>
                <li>
                  <h3 className="fs-600 fw-bold">
                    Everything you need in one place
                  </h3>
                  <p>
                    Stop jumping from one service to another to communicate,
                    store files, track tasks and share documents. Manage offers
                    an all-in-one team productivity solution.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="padding-block-700 carousel">
        <h2 className="fs-secondary-heading fw-bold">What they’ve said</h2>
        <button className="button">Get Started</button>
      </section>
      <section className=" cta | padding-block-700 bg-accent-400 text-neutal-100">
        <div className="container">
          <div className="even-columns">
            <div>
              <p className="fs-secondary-heading fw-bold text-white">
                Simplify how your team works today.
              </p>
            </div>
            <div>
              <button className="button" datatype="inverted">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
