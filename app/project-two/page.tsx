import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <header className="header container">
        <h2 className="header__title">Project Two</h2>

        <nav className="header__menu">
          <a className="header__link header__link--active" href="#">Pricing</a>
          <a className="header__link" href="#">Features</a>
          <a className="header__link" href="#">Contact</a>
        </nav>

        <div className="header__btn-container">
          <button className="btn">Login</button>
          <button className="btn">Enter App</button>
        </div>
      </header>

      <section className="hero container">
        <h1 className="hero__title">Accounting made simple for small businesses</h1>
        <p className="hero__description">Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you dont have to think about it.</p>
        <a href="#" className="btn animated-btn">Learn more</a>
      </section>

      <section className="pricing container">
        <Image src="/globe.svg" alt="Pricing" width={100} height={100} className='pricing__img' />

        <h2 className="pricing__title">Simple transparent pricing</h2>
        <p className="pricing__description">It doesnt matter what size your business is our software wont work well for you</p>

        <div className="pricing__container">
          <div className="pricing__box">
            <h3 className="pricing__price">5$</h3>
            <h4 className="pricing__plan">Starter</h4>
            <p className="pricing__plan-description">Good for anyone who is self-employed</p>
            <button className="pricing__btn">Get Started</button>
            <ul className="pricing__features">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div className="pricing__box">
            <h3 className="pricing__price">10$</h3>
            <h4 className="pricing__plan">Starter</h4>
            <p className="pricing__plan-description">Good for anyone who is self-employed</p>
            <button className="pricing__btn">Get Started</button>
            <ul className="pricing__features">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div className="pricing__box">
            <h3 className="pricing__price">15$</h3>
            <h4 className="pricing__plan">Starter</h4>
            <p className="pricing__plan-description">Good for anyone who is self-employed</p>
            <button className="pricing__btn">Get Started</button>
            <ul className="pricing__features">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="features container">
        <h2 className="features__title">Lorem ipsum dolor sit amet.</h2>
        <p className="features__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, praesentium!</p>

        <div className="features__container">
          <div className="features__box">
            <h3 className="features__box-title">Lorem, ipsum.</h3>
            <p className="features__box-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, veniam.
            </p>
          </div>
          <div className="features__box">
            <h3 className="features__box-title">Lorem, ipsum.</h3>
            <p className="features__box-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, veniam.
            </p>
          </div>
          <div className="features__box">
            <h3 className="features__box-title">Lorem, ipsum.</h3>
            <p className="features__box-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, veniam.
            </p>
          </div>
          <div className="features__box">
            <h3 className="features__box-title">Lorem, ipsum.</h3>
            <p className="features__box-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, veniam.
            </p>
          </div>
          <div className="features__box">
            <h3 className="features__box-title">Lorem, ipsum.</h3>
            <p className="features__box-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, veniam.
            </p>
          </div>
        </div>
      </section>

      <section className="contact container">
        <h2 className="contact__title">Reach Out</h2>
        <p className="contact__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, praesentium!</p>
        <a href="#" target="_blank" className="btn">Reach Out</a>
      </section>

      <footer>
        <h2 className="footer_title">Project Two</h2>
      </footer>
    </main>
  );
}