import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar-3 w-nav"
      >
        <div className="navcontainer">
          <div className="div-block-13">
            <a
              href="/"
              aria-current="page"
              className="brand-2 w-nav-brand w--current"
              aria-label="home"
            >
              <img
                src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c8ab691b5699c73a2aa86d_Dogs%20NFT2.png"
                loading="lazy"
                sizes="50px"
                height={40}
                srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c8ab691b5699c73a2aa86d_Dogs%20NFT2-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c8ab691b5699c73a2aa86d_Dogs%20NFT2-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c8ab691b5699c73a2aa86d_Dogs%20NFT2.png 1024w"
                alt=""
                className="brandlogo-2"
              />
              <div className="brandtext-2"> Lil ShibaDoges Club</div>
            </a>
          </div>
          <nav role="navigation" className="nav-menu-2 w-nav-menu">
            <a href="#Story" className="nav-link-2 w-nav-link">
              Story
            </a>
            <a href="#Collection" className="nav-link-2 w-nav-link">
              Collection
            </a>
            <a href="#Rarity" className="nav-link-2 w-nav-link">
              Rarity
            </a>
            <a href="#Roadmap" className="nav-link-2 w-nav-link">
              Roadmap
            </a>
            <a href="#FAQ" className="nav-link-2 w-nav-link">
              FAQ
            </a>
            <a href="#Team" className="nav-link-2 w-nav-link w--current">
              Team
            </a>
          </nav>
          <div className="div-block-5">
            <a
              href="/"
              target="_blank"
              aria-current="page"
              className="sociallink nav twitter w-inline-block w--current"
            />
            <a
              href="https://opensea.io/collection/lilshibadogesclub"
              target="_blank"
              className="sociallink nav opensea w-inline-block"
            />
            <a
              href="https://discord.gg/7sUTnA8DC7"
              target="_blank"
              className="sociallink nav discord w-inline-block"
            />
            <div className="navbuttongroup">
              <a
                href="https://l.linklyhq.com/l/fMH3"
                target="_blank"
                className="mainbutton discord w-button"
              >
                Join Our Discord
              </a>
            </div>
          </div>
          <div
            className="don-t-touch-2 w-nav-button"
            style={{ WebkitUserSelect: "text" }}
            aria-label="menu"
            role="button"
            tabIndex={0}
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <div className="icon-3 w-icon-nav-menu" />
          </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" />
      </div>
      <section id="Main" className="slider-stage-splitscreen wf-section">
        <div className="splitscreen-column right">
          <div className="gallery-slider-mouse-stop" />
          <div
            data-delay={6000}
            data-animation="outin"
            className="gallery-slider w-slider"
            data-autoplay="true"
            data-easing="ease"
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-autoplay-limit={0}
            data-nav-spacing={3}
            data-duration={800}
            data-infinite="true"
            role="region"
            aria-label="carousel"
          >
            <div className="gallery-mask w-slider-mask" id="w-slider-mask-0">
              <div
                className="gallery-slide w-slide"
                aria-label="1 of 3"
                role="group"
                style={{
                  transform: "translateX(-840px)",
                  opacity: 1,
                  zIndex: 117,
                  visibility: "hidden"
                }}
                aria-hidden="true"
              >
                <img
                  src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c08815280d797b0223d7_BigPict2.jpg"
                  loading="lazy"
                  sizes="(max-width: 991px) 100vw, 60vw"
                  width={2056}
                  srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c08815280d797b0223d7_BigPict2-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c08815280d797b0223d7_BigPict2-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c08815280d797b0223d7_BigPict2-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c08815280d797b0223d7_BigPict2-p-2600.jpeg 2600w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c08815280d797b0223d7_BigPict2-p-3200.jpeg 3200w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c08815280d797b0223d7_BigPict2.jpg 4108w"
                  alt=""
                  className="gallery-image"
                  style={{
                    transform:
                      "translate3d(0%, 0%, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 0
                  }}
                  aria-hidden="true"
                />
              </div>
              <div
                className="gallery-slide w-slide"
                aria-label="2 of 3"
                role="group"
                style={{
                  transform: "translateX(-840px)",
                  opacity: 0,
                  zIndex: 118,
                  transition: "opacity 400ms ease 0s"
                }}
                aria-hidden="true"
              >
                <img
                  src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c08815280d797b0223d7_BigPict2.jpg"
                  loading="lazy"
                  width={2056}
                  sizes="(max-width: 991px) 100vw, 60vw"
                  srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c08815280d797b0223d7_BigPict2-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c08815280d797b0223d7_BigPict2-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c08815280d797b0223d7_BigPict2-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c08815280d797b0223d7_BigPict2-p-2600.jpeg 2600w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c08815280d797b0223d7_BigPict2-p-3200.jpeg 3200w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c08815280d797b0223d7_BigPict2.jpg 4108w"
                  alt=""
                  className="gallery-image"
                  style={{
                    transform:
                      "translate3d(-11.437%, 11.437%, 0px) scale3d(1.08371, 1.08371, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 0,
                    willChange: "transform"
                  }}
                  aria-hidden="true"
                />
              </div>
              <div
                className="gallery-slide w-slide"
                aria-label="3 of 3"
                role="group"
                style={{
                  transform: "translateX(-1680px)",
                  opacity: 1,
                  zIndex: 119,
                  transition: "opacity 400ms ease 0s"
                }}
              >
                <img
                  src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c0884c1633e50093ef68_BigPict3.jpg"
                  loading="lazy"
                  width={2056}
                  sizes="(max-width: 991px) 100vw, 60vw"
                  srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c0884c1633e50093ef68_BigPict3-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c0884c1633e50093ef68_BigPict3-p-1600.jpeg 1600w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c0884c1633e50093ef68_BigPict3-p-2000.jpeg 2000w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c0884c1633e50093ef68_BigPict3-p-2600.jpeg 2600w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c0884c1633e50093ef68_BigPict3-p-3200.jpeg 3200w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9c0884c1633e50093ef68_BigPict3.jpg 4110w"
                  alt=""
                  className="gallery-image"
                  style={{
                    transform:
                      "translate3d(-0.95745%, 0.95745%, 0px) scale3d(1.01629, 1.01629, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 1,
                    willChange: "transform"
                  }}
                />
              </div>
              <div
                aria-live="off"
                aria-atomic="true"
                className="w-slider-aria-label"
                data-wf-ignore=""
              >
                Slide 3 of 3.
              </div>
            </div>
            <div
              className="display-none w-slider-arrow-left"
              role="button"
              tabIndex={0}
              aria-controls="w-slider-mask-0"
              aria-label="previous slide"
            >
              <div className="w-icon-slider-left" />
            </div>
            <div
              className="display-none w-slider-arrow-right"
              role="button"
              tabIndex={0}
              aria-controls="w-slider-mask-0"
              aria-label="next slide"
              style={{}}
            >
              <div className="w-icon-slider-right" />
            </div>
            <div className="display-none w-slider-nav w-round">
              <div
                className="w-slider-dot"
                data-wf-ignore=""
                aria-label="Show slide 1 of 3"
                aria-pressed="false"
                role="button"
                tabIndex={-1}
                style={{ marginLeft: 3, marginRight: 3 }}
              />
              <div
                className="w-slider-dot"
                data-wf-ignore=""
                aria-label="Show slide 2 of 3"
                aria-pressed="false"
                role="button"
                tabIndex={-1}
                style={{ marginLeft: 3, marginRight: 3 }}
              />
              <div
                className="w-slider-dot w-active"
                data-wf-ignore=""
                aria-label="Show slide 3 of 3"
                aria-pressed="true"
                role="button"
                tabIndex={0}
                style={{ marginLeft: 3, marginRight: 3 }}
              />
            </div>
          </div>
        </div>
        <div className="splitscreen-column left">
          <div className="slider-description-wrap">
            <h2 className="headingsection black">
              &nbsp;LIL&nbsp;SHIBADOGES CLUB
              <strong className="bold-text-6" />
            </h2>
            <div className="slider-title-wrap">
              <img
                src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c8af508bee1b42c2a2d7f5_ezgif-2-19e0a4ebaf.gif"
                loading="lazy"
                alt=""
                className="image-8"
              />
            </div>
            <div className="slider-copy-wrap">
              <p className="paragraph story black">
                <strong>Lil ShibaDoges Golf Club</strong> is a collection of 25,000
                Unique NFT - digital collectibles living on the Ethereum blockchain.
                Your Lil ShibaDoge is not only a fun collection but a pass to the
                ambitious community with like-minded people. By buying Lil
                ShibaDoge, you become a part of the Blockchain revolution. The
                collection was made with love to make your dreams come true.
              </p>
            </div>
            <div className="slider-btn-wrap">
              <div className="div-block-17">
                <a
                  href="https://opensea.io/collection/lilshibadogesclub"
                  target="_blank"
                  className="primary-button heronew w-button"
                >
                  Buy on OpenSea
                  <br />
                </a>
                <a
                  href="https://discord.gg/7sUTnA8DC7"
                  target="_blank"
                  className="primary-button heronew discord w-button"
                >
                  Discord
                  <br />
                </a>
              </div>
              <div className="hero-price-2">
                The first authentic Meme Collection.
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="Story" className="storysection wf-section">
        <div className="maincontainerr">
          <div className="w-layout-grid descriptiongrid story">
            <div className="imagepixel story" />
            <div className="div-block-16">
              <h2 className="headingsection white">
                THE&nbsp;STORY <br />
              </h2>
              <p className="paragraph story white">
                <br />
                We are on our own in this crypto fever. But why is that? Can we
                change it? Can we unite all together into one like-minded community
                targeted at the wealth growth of each individual?
                <br />‍<br />
                The answer is YES. This token grants you an opportunity to join Lil
                ShibaDoges Club. The community we will grow all together. The fair
                community you are part of. The community where you can not only
                discuss wonderful opportunities in Crypto but the community where we
                can combine our power with DAO mechanics and make something really
                meaningful together. <br />
                <br />
                The next step is up to you. Should you either wait and hope for the
                best or{" "}
                <a
                  href="https://opensea.io/collection/lilshibadogesclub"
                  target="_blank"
                  className="link-3"
                >
                  buy Lil ShibaDoges
                </a>{" "}
                <strong>token</strong> and change your life.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontalscrollsection wf-section">
        <div className="marquee-horizontal">
          <div className="marquee-horizontal-alt-css w-embed">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n\n    .track-horizontal-alt {\n      position: absolute;\n      white-space: nowrap;\n      will-change: transform;\n      animation: marquee-horizontal-alt 10s linear infinite;\n      /* manipulate the speed of the marquee by changing "40s" line above*/\n    }\n\n    @keyframes marquee-horizontal-alt {\n      from { transform: translateX(-50%); }\n      to { transform: translateX(0%); }\n    }\n\n    '
              }}
            />
          </div>
          <div className="track-horizontal-alt">
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c908d1910d1af9f448a096_63.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c908d1910d1af9f448a096_63-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c908d1910d1af9f448a096_63-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c908d1910d1af9f448a096_63.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091df307889d3fe1a19b_196.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091df307889d3fe1a19b_196-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091df307889d3fe1a19b_196-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091df307889d3fe1a19b_196.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091cf6120e54b3f3f5af_194.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091cf6120e54b3f3f5af_194-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091cf6120e54b3f3f5af_194-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091cf6120e54b3f3f5af_194.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091c9ca4567b8999630a_193.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091c9ca4567b8999630a_193-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091c9ca4567b8999630a_193-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091c9ca4567b8999630a_193.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091c8a2670129382f7a9_192.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091c8a2670129382f7a9_192-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091c8a2670129382f7a9_192-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091c8a2670129382f7a9_192.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091b03e8b9f3bac89558_191.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091b03e8b9f3bac89558_191-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091b03e8b9f3bac89558_191-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091b03e8b9f3bac89558_191.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091b1e48c4320916a7c5_190.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091b1e48c4320916a7c5_190-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091b1e48c4320916a7c5_190-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091b1e48c4320916a7c5_190.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a9ca456be43996309_189.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a9ca456be43996309_189-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a9ca456be43996309_189-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a9ca456be43996309_189.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a348fb77849454b16_188.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a348fb77849454b16_188-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a348fb77849454b16_188-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a348fb77849454b16_188.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a46ef2dd5da906951_187.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a46ef2dd5da906951_187-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a46ef2dd5da906951_187-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a46ef2dd5da906951_187.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a66276f2c3c09afda_186.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a66276f2c3c09afda_186-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a66276f2c3c09afda_186-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a66276f2c3c09afda_186.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a66276f2c3c09afda_186.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a66276f2c3c09afda_186-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a66276f2c3c09afda_186-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091a66276f2c3c09afda_186.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909198a62bb03d45d61d5_185.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909198a62bb03d45d61d5_185-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909198a62bb03d45d61d5_185-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909198a62bb03d45d61d5_185.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90919348fb76625454b13_184.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90919348fb76625454b13_184-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90919348fb76625454b13_184-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90919348fb76625454b13_184.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091983c49a033c46a18a_183.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091983c49a033c46a18a_183-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091983c49a033c46a18a_183-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091983c49a033c46a18a_183.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90919f6120ef8bff3f5ac_182.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90919f6120ef8bff3f5ac_182-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90919f6120ef8bff3f5ac_182-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90919f6120ef8bff3f5ac_182.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909182174cdf07d7a20b8_181.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909182174cdf07d7a20b8_181-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909182174cdf07d7a20b8_181-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909182174cdf07d7a20b8_181.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091846ef2d54fa90694f_180.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091846ef2d54fa90694f_180-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091846ef2d54fa90694f_180-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091846ef2d54fa90694f_180.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90918d7170c5418f6f603_179.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90918d7170c5418f6f603_179-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90918d7170c5418f6f603_179-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90918d7170c5418f6f603_179.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091703e8b95f2cc89518_178.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091703e8b95f2cc89518_178-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091703e8b95f2cc89518_178-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091703e8b95f2cc89518_178.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90917c29e7dbbb8b46d5a_177.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90917c29e7dbbb8b46d5a_177-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90917c29e7dbbb8b46d5a_177-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90917c29e7dbbb8b46d5a_177.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90917f3078858b0e1a17c_176.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90917f3078858b0e1a17c_176-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90917f3078858b0e1a17c_176-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90917f3078858b0e1a17c_176.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909174c7d3f1f0e1e5851_175.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909174c7d3f1f0e1e5851_175-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909174c7d3f1f0e1e5851_175-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909174c7d3f1f0e1e5851_175.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909166637245236f27016_174.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909166637245236f27016_174-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909166637245236f27016_174-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909166637245236f27016_174.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90916ff93896a906f9e6e_173.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90916ff93896a906f9e6e_173-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90916ff93896a906f9e6e_173-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90916ff93896a906f9e6e_173.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091650354724cff43966_172.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091650354724cff43966_172-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091650354724cff43966_172-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c9091650354724cff43966_172.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909162392ae427ac176b2_171.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909162392ae427ac176b2_171-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909162392ae427ac176b2_171-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c909162392ae427ac176b2_171.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
            <img
              src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90915a3d5866b14a30c72_170.png"
              loading="lazy"
              width={240}
              height={240}
              srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90915a3d5866b14a30c72_170-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90915a3d5866b14a30c72_170-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c90915a3d5866b14a30c72_170.png 1024w"
              sizes="240px"
              alt=""
              className="imagehorisontalscroll"
            />
          </div>
        </div>
      </div>
      <section id="Collection" className="mint-section wf-section">
        <div className="maincontainer-2">
          <div className="w-layout-grid descriptiongrid-3">
            <div className="w-layout-grid pixelgrid-2">
              <div className="imagepixel _1image" />
              <div className="imagepixel _2image" />
              <div className="imagepixel _3image" />
              <div className="imagepixel _4image" />
              <div className="imagepixel _5image" />
              <div className="imagepixel _6image" />
            </div>
            <div
              id="w-node-_7e93fd41-848a-d7c1-d5c3-9f1a08ba45f3-40c5971e"
              className="minting-container mobile w-container"
            >
              <h2 className="headingsection black">
                GET&nbsp;YOUR&nbsp;
                <br />
                LIL&nbsp;SHIBADOGE
                <strong className="bold-text-6" />
              </h2>
              <p className="paragraph story black">
                <br />
                We are all different but the same. <br />‍<br />
                Lil ShibaDoges is a Meme collection (in terms of art) inspired by
                Sbiba Inu Coin. They are all designed by our fabulous in-team
                designers to represent each of us. Each NFT is unique, but they are
                all made with love and have Crypto Spirit inside. Each Lil Shiba
                Doge possesses several traits: Nose, Hair, Eyes, Shoes, Jacket,
                Hand, Ears, and Fonts.
                <br />
                Of course, there are rare Lil ShibaDoges and even some Super Rares.
                Despite the rarity, each NFT is lovely and grants equal access to
                our community.
                <br />‍<br />
                Get yourself as much as you want!
                <br />
              </p>
              <a
                href="https://opensea.io/collection/lilshibadogesclub"
                target="_blank"
                className="primary-button heronew mintsection w-button"
              >
                Buy Lil ShibaDoge now
                <br />
              </a>
              <div className="price-2">
                <strong className="bold-text-2 mintsection">
                  All Lil ShibaDoges are stored as ERC-1155 tokens on the Ethereum
                  blockchain.
                  <br />‍<br />
                  With more than 180 hand-drawn traits, each NFT is unique. It comes
                  with some benefits. You will get free NFTs in our following
                  projects, benefits from secondary sales profits, and early access
                  to all our future sales. Join our ambitious, growing community and
                  obtain multiple benefits and utilities.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Rarity" className="rarity-section wf-section">
        <div className="maincontainer-2 rarity">
          <div className="w-layout-grid descriptiongrid-3 story">
            <div className="rarity-chart">
              <h2
                id="w-node-_8990a37d-e72d-352c-c24f-c738d7555499-40c5971e"
                className="headingsection black"
              >
                LIL&nbsp;SHIBADOGE'S
                <br />
                RARITY
              </h2>
              <p
                id="w-node-_8990a37d-e72d-352c-c24f-c738d755549b-40c5971e"
                className="paragraph story black rarity"
              >
                Each NFT is algorithmically generated by combining 180+ unique
                traits with varying rarity across categories.
              </p>
              <div className="div-block-14 variations">
                <h3 className="rarity-heading">
                  Variations and Rarity (total 25,000 NFTs). <br />
                  There are minumum 20 elements per trait.
                </h3>
                <div className="rarity-row blue">
                  <div className="text-block-16">
                    <strong>Hair. </strong>
                    <br />
                    From 3% (Wolferine) to 7%&nbsp;(Ordinary)
                  </div>
                </div>
                <div className="rarity-row">
                  <div className="text-block-24">
                    <strong>Ears.</strong>
                    <br />
                    From 1% (Undervalued Hunter) to 7%&nbsp;(Naive)
                  </div>
                </div>
                <div className="rarity-row blue">
                  <div className="text-block-24">
                    <strong>Eyes.</strong>
                    <br />
                    From 1% (True Ganster) to 6%&nbsp;(Impatient)
                  </div>
                </div>
                <div className="rarity-row">
                  <div className="text-block-24">
                    <strong>Nose.</strong>
                    <br />
                    From 2% (Fangs) to 7%&nbsp;(Happy)
                  </div>
                </div>
                <div className="rarity-row blue">
                  <div className="text-block-24">
                    <strong>Right Hand.</strong>
                    <br />
                    From 2% (Musks Institute) to 8%&nbsp;(DogeCoin)
                  </div>
                </div>
                <div className="rarity-row">
                  <div className="text-block-24">
                    <strong>Jacket.</strong>
                    <br />
                    From 2% (USA) to 7%&nbsp;(Blue Collar)
                  </div>
                </div>
                <div className="rarity-row blue">
                  <div className="text-block-24">
                    <strong>Left&nbsp;Hand.</strong>
                    <br />
                    From 1% (Rocket) to 7%&nbsp;(Crypto Wallet)
                  </div>
                </div>
                <div className="rarity-row">
                  <div className="text-block-24">
                    <strong>Shoes.</strong>
                    <br />
                    From 2% (Bricks) to 7%&nbsp;(ETH Shoes)
                  </div>
                </div>
                <div className="rarity-row blue">
                  <div className="text-block-24">
                    <strong>Background.</strong>
                    <br />
                    From 1% (Seafoam Pearl) to 7%&nbsp;(Sour Patch Peach)
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-grid raritygrid">
              <div className="spec-grid">
                <div
                  id="w-node-_8990a37d-e72d-352c-c24f-c738d75554fd-40c5971e"
                  className="tech-part-container"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e19555c7ed765cf36a0_hair_2.png"
                    loading="lazy"
                    width={150}
                    alt=""
                  />
                  <div className="tech-description">Hair</div>
                </div>
                <div
                  id="w-node-_8990a37d-e72d-352c-c24f-c738d7555501-40c5971e"
                  className="tech-part-container"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e1a8a62bb3efa5ec623_hand_left_15.png"
                    loading="lazy"
                    alt=""
                  />
                  <div className="tech-description">Right Hand</div>
                </div>
                <div
                  id="w-node-_8990a37d-e72d-352c-c24f-c738d7555505-40c5971e"
                  className="tech-part-container"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e19577c825abf5c47b2_eyes_15.png"
                    loading="lazy"
                    width={150}
                    alt=""
                  />
                  <div className="tech-description">Eyes</div>
                </div>
                <div
                  id="w-node-_8990a37d-e72d-352c-c24f-c738d7555509-40c5971e"
                  className="tech-part-container"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e1b090c1214d923e36b_jacket_2.png"
                    loading="lazy"
                    sizes="(max-width: 991px) 19vw, 8vw"
                    srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e1b090c1214d923e36b_jacket_2-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e1b090c1214d923e36b_jacket_2-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e1b090c1214d923e36b_jacket_2.png 1024w"
                    alt=""
                    className="image-7"
                  />
                  <div className="tech-description">Jacket</div>
                </div>
                <div
                  id="w-node-_8990a37d-e72d-352c-c24f-c738d755550d-40c5971e"
                  className="tech-part-container"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e1a1e48c413e8184685_hand_right_15.png"
                    loading="lazy"
                    alt=""
                  />
                  <div className="tech-description">Left Hand</div>
                </div>
                <div
                  id="w-node-_8990a37d-e72d-352c-c24f-c738d7555511-40c5971e"
                  className="tech-part-container"
                />
                <div
                  id="w-node-_8990a37d-e72d-352c-c24f-c738d7555515-40c5971e"
                  className="tech-part-container"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e1c9ca4563f239b212d_shoes_17.png"
                    loading="lazy"
                    sizes="(max-width: 991px) 19vw, 8vw"
                    srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e1c9ca4563f239b212d_shoes_17-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e1c9ca4563f239b212d_shoes_17.png 574w"
                    alt=""
                  />
                  <div className="tech-description">Shoes</div>
                </div>
                <div
                  id="w-node-_8990a37d-e72d-352c-c24f-c738d7555519-40c5971e"
                  className="tech-part-container"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c8b79652103b9831632fdf_%D0%B3%D0%B0%D0%BD%D0%B3%D1%81%D1%82%D0%B5%D1%80%20%D1%84%D0%BE%D0%BD.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 36vw, (max-width: 767px) 38vw, (max-width: 991px) 39vw, 15vw"
                    srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c8b79652103b9831632fdf_%25D0%25B3%25D0%25B0%25D0%25BD%25D0%25B3%25D1%2581%25D1%2582%25D0%25B5%25D1%2580%2520%25D1%2584%25D0%25BE%25D0%25BD-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c8b79652103b9831632fdf_%25D0%25B3%25D0%25B0%25D0%25BD%25D0%25B3%25D1%2581%25D1%2582%25D0%25B5%25D1%2580%2520%25D1%2584%25D0%25BE%25D0%25BD-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c8b79652103b9831632fdf_%D0%B3%D0%B0%D0%BD%D0%B3%D1%81%D1%82%D0%B5%D1%80%20%D1%84%D0%BE%D0%BD.png 1024w"
                    alt=""
                  />
                  <div className="tech-description">Background</div>
                </div>
                <div
                  id="w-node-_8990a37d-e72d-352c-c24f-c738d755551d-40c5971e"
                  className="tech-part-container"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e1c2392aeb492c3124f_nose_17.png"
                    loading="lazy"
                    alt=""
                  />
                  <div className="tech-description">Nose</div>
                </div>
                <div
                  id="w-node-_384729d3-097f-eade-650f-1b91ca5f5d70-40c5971e"
                  className="tech-part-container"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e198a62bb2a285ec621_ears_19.png"
                    loading="lazy"
                    sizes="(max-width: 991px) 19vw, 8vw"
                    srcSet="https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e198a62bb2a285ec621_ears_19-p-500.png 500w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e198a62bb2a285ec621_ears_19-p-800.png 800w, https://uploads-ssl.webflow.com/61c2f9bc00636d0504c5971d/61c94e198a62bb2a285ec621_ears_19.png 866w"
                    alt=""
                  />
                  <div className="tech-description">Ears</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Roadmap" className="roadmap-section wf-section">
        <div className="maincontainer-3">
          <div className="header-center-box _75">
            <div>
              <h2 className="heading-5 roadmap">
                LAUNCH ROADMAP PART&nbsp;I.
                <br />
              </h2>
              <p className="paragraph-3">
                <strong className="bold-text-7">
                  We will update our roadmap according to your comments and ideas
                  because we value our community and its creativity.&nbsp;But these
                  goals are just the beginning for our community's wealth.{" "}
                </strong>
              </p>
            </div>
          </div>
          <div className="w-layout-grid grid-5">
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf847-40c5971e"
              className="div-block-15"
            >
              <h1 className="heading-10">1</h1>
              <div className="stagegrid-2 completed">October 29th, 2021</div>
            </div>
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf84c-40c5971e"
              className="stagedescr-2 completed"
            >
              Birth of the first CryptoGuy.
            </div>
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf84e-40c5971e"
              className="div-block-15"
            >
              <h1 className="heading-10">2</h1>
              <div className="stagegrid-2 completed">November 30th, 2021</div>
            </div>
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf853-40c5971e"
              className="stagedescr-2 completed"
            >
              25,000 unique Lil Shabagoges were made with the love and respect of
              their future holders.
            </div>
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf855-40c5971e"
              className="div-block-15"
            >
              <h1 className="heading-10">3</h1>
              <div className="stagegrid-2 completed">Dec 26th, 2021</div>
            </div>
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf85a-40c5971e"
              className="stagedescr-2 completed"
            >
              We revealed the project. Start sales on OpenSea. First Lil ShibaDoges
              were sold. Discord and Twitter community were officialy launched.
            </div>
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf865-40c5971e"
              className="div-block-15"
            >
              <h1 className="heading-10">4</h1>
              <div className="stagegrid-2">20&nbsp;ETH&nbsp;Volume Traded</div>
            </div>
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf86a-40c5971e"
              className="stagedescr-2"
            >
              We will give away 2 Ethers to random NFT&nbsp;holders.
            </div>
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf86c-40c5971e"
              className="div-block-15"
            >
              <h1 className="heading-10">5</h1>
              <div className="stagegrid-2">50 ETH Volume Traded</div>
            </div>
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf871-40c5971e"
              className="stagedescr-2"
            >
              We will give away 5 ETH to random NFT&nbsp;holders and airdrop 10 NFTs
              to the biggest holders.{" "}
            </div>
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf873-40c5971e"
              className="div-block-15"
            >
              <h1 className="heading-10">6</h1>
              <div className="stagegrid-2">100 ETH Volume Traded</div>
            </div>
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf878-40c5971e"
              className="stagedescr-2"
            >
              DAO&nbsp;mechanics will be launched. Our team will fill the community
              treasury with 5 ETH. All money from secondary sales +&nbsp;1
              ETH&nbsp;per each next 10&nbsp;ETH sales will go to the community
              treasury.
            </div>
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf87a-40c5971e"
              className="div-block-15"
            >
              <h1 className="heading-10">7</h1>
              <div className="stagegrid-2">150 ETH&nbsp;Volume Traded</div>
            </div>
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf87f-40c5971e"
              className="stagedescr-2"
            >
              Official merch will be created. NFT holders will have special
              conditions for purchase.
            </div>
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf881-40c5971e"
              className="div-block-15"
            >
              <h1 className="heading-10">8</h1>
              <div className="stagegrid-2">1000 ETH&nbsp;Volume Traded</div>
            </div>
            <div className="stagedescr-2">
              We are launching Lil ShibaGoge token with integrations in the most
              well-known exchanges. We will mainly target our coin utility to
              in-game NFT&nbsp;use in other projects.
            </div>
            <div
              id="w-node-_93fc390b-b1d4-7cf5-73c0-b503f7fcf888-40c5971e"
              className="div-block-15"
            >
              <h1 className="heading-10">9</h1>
              <div className="stagegrid-2">Q1 2022&nbsp;+ </div>
            </div>
            <div className="stagedescr-2">
              We will continue expanding the community by launching other
              collections but maintaining the community's health.&nbsp;We will
              define our following big goals by discussing them with Lil ShibaGoges'
              holders.
            </div>
          </div>
        </div>
      </section>
      <section id="FAQ" className="section-faq wf-section">
        <div className="content-wrapper slim w-container">
          <div className="header-center-box _75">
            <h2 className="headingsection black">
              FAQ
              <br />
            </h2>
          </div>
          <div className="accordion-wrapper">
            <div className="accordion-item">
              <div id="q6" className="accordion-item-trigger">
                <h4 className="accordion-heading" style={{ color: "rgb(0, 0, 0)" }}>
                  What’s&nbsp;an NFT?
                  <br />
                </h4>
                <div
                  className="icon-2 accordion-icon"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                  }}
                >
                  +
                </div>
              </div>
              <div
                className="accordion-item-content"
                style={{ width: 1130, height: 0 }}
              >
                <p className="faqparagraph">
                  NFT stands for "Non-fungible token", which means that it's a
                  unique, digital item with blockchain-managed ownership that users
                  can buy, own, and trade. Most NFTs are meant to be digital art.
                  But they can also provide extra benefits like exclusive access to
                  certain websites, events, game items, etc. Think of it as a unique
                  piece of art that can also serve as a "members-only" card. Lil
                  ShibaDoges Club NFT is exactly the same thing.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <div id="q1" className="accordion-item-trigger">
                <h4 className="accordion-heading" style={{ color: "rgb(0, 0, 0)" }}>
                  <strong
                    className="accordion-heading"
                    style={{ color: "rgb(0, 0, 0)" }}
                  >
                    What is Lil ShibaDoges Club?
                  </strong>
                </h4>
                <div
                  className="icon-2 accordion-icon"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                  }}
                >
                  +
                </div>
              </div>
              <div
                className="accordion-item-content"
                style={{ width: 1130, height: 0 }}
              >
                <p className="faqparagraph">
                  Lil ShibaDoges Club is the collection of 25,000 unique NFTs —
                  digital collectibles living on the Ethereum blockchain with
                  benefits for their holders.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <div id="q2" className="accordion-item-trigger">
                <h4 className="accordion-heading" style={{ color: "rgb(0, 0, 0)" }}>
                  <strong
                    className="accordion-heading"
                    style={{ color: "rgb(0, 0, 0)" }}
                  >
                    What do I get?
                  </strong>
                </h4>
                <div
                  className="icon-2 accordion-icon"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                  }}
                >
                  +
                </div>
              </div>
              <div
                className="accordion-item-content"
                style={{ width: 1130, height: 0 }}
              >
                <p className="faqparagraph">
                  Your Lil ShibaDoges NFT is not only a beautiful art but a
                  membership that grants you exclusive access to members-only
                  benefits. The main advantage besides the beautiful art is access
                  to a community with like-minded people targeted at increasing each
                  member's wealth.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <div id="q3" className="accordion-item-trigger">
                <h4 className="accordion-heading">
                  <strong className="accordion-heading">How do I get it?</strong>
                </h4>
                <div
                  className="icon-2 accordion-icon"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                  }}
                >
                  +
                </div>
              </div>
              <div className="accordion-item-content" style={{ height: 0 }}>
                <p className="faqparagraph">
                  You can{" "}
                  <a
                    href="https://opensea.io/collection/lilshibadogesclub"
                    target="_blank"
                  >
                    buy Lil ShibaDoges NFTs on OpenSea
                  </a>{" "}
                  and join our community on Discord right after.&nbsp;There is no
                  presale.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <div id="q4" className="accordion-item-trigger">
                <h4 className="accordion-heading" style={{ color: "rgb(0, 0, 0)" }}>
                  Which Blockchain will you use?
                  <br />
                </h4>
                <div
                  className="icon-2 accordion-icon"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                  }}
                >
                  +
                </div>
              </div>
              <div
                className="accordion-item-content"
                style={{ width: 1130, height: 0 }}
              >
                <p className="faqparagraph">
                  We use Ethereum Blockchain. Despite the comparitively high gas fee
                  this network is much more beneficial for its holders.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <div id="q6" className="accordion-item-trigger">
                <h4 className="accordion-heading" style={{ color: "rgb(0, 0, 0)" }}>
                  How do I&nbsp;buy NFT?
                  <br />
                </h4>
                <div
                  className="icon-2 accordion-icon"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                  }}
                >
                  +
                </div>
              </div>
              <div
                className="accordion-item-content"
                style={{ width: 1130, height: 0 }}
              >
                <p className="faqparagraph">
                  We suggest using Metamask to mint and buy the NFT on{" "}
                  <a
                    href="https://opensea.io/collection/lilshibadogesclub"
                    target="_blank"
                  >
                    OpenSea
                  </a>
                  .{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Team" className="team-section wf-section">
        <div className="maincontainer">
          <h2 className="headingsection white">
            THE&nbsp;TEAM
            <br />
          </h2>
          <div className="w-layout-grid descriptiongrid-2">
            <div className="div-block-10">
              <div className="teamphoto _1" />
              <h1 className="headdingteamname">Johann. Co-Founder</h1>
              <h1 className="headdingteamdescr">
                Main developer. <br />
                Did 5 successful business projects with a total cap &gt;$10M
              </h1>
            </div>
            <div className="div-block-10">
              <div className="teamphoto _2" />
              <h1 className="headdingteamname">Andrew. Co-Founder</h1>
              <h1 className="headdingteamdescr">
                Web Designer and Lead community manager. Led 3 NFTs projects before.
              </h1>
            </div>
            <div className="div-block-10">
              <div className="teamphoto _3" />
              <h1 className="headdingteamname">Julia. Designer</h1>
              <h1 className="headdingteamdescr">
                Designer with ten years of experience and &gt;1000 projects done.
              </h1>
            </div>
            <div className="div-block-10">
              <div className="teamphoto _4" />
              <h1 className="headdingteamname">Bob. PR Manager</h1>
              <h1 className="headdingteamdescr">
                Two years of experience in marketing. Total marketing budget spent
                &gt;$1M.
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-section-2 wf-section">
        <div className="hero-heading mobile">
          Lil Shiba
          <br />
          Doges Club
          <br />
        </div>
        <div className="hero-heading bottom">
          Lil Shiba
          <br />
        </div>
        <div className="hero-heading bottom">
          Doges Club
          <br />
        </div>
        <a
          href="https://opensea.io/collection/lilshibadogesclub"
          target="_blank"
          className="primary-button heronew w-button"
        >
          Buy on OpenSea
        </a>
        <div className="text-block-24">
          <br />
          ©2021 Lil Shiba Doges Club. All rights reserved
          <a href="#">
            <strong className="discordlink-2">
              <br />
            </strong>
          </a>
        </div>
      </div>
      {/*[if lte IE 9]><![endif]*/}
    </>
  )
}
