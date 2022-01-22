import React from 'react';
import Style from 'style-it';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { useTranslation } from 'react-i18next';

const sponsors = [
  {
    main: [
      {
        image: 'ulker.svg',
        link: null,
        css: 'width: 50% !important; margin: 50px;'
      }
    ]
  },
  {
    workshop: [
      {
        image: 'starcelik.jpg',
        link: 'https://www.starcelik.com.tr/',
        css: 'width: 40%'
      }
    ]
  },
  {
    platinum: null
  },
  {
    gold: [
      {
        image: 'gunes_dinamik.png',
        link: 'https://www.gunesdinamik.com/',
        css: 'width: 15%'
      },
      {
        image: 'imc.png',
        link: 'https://www.linkedin.com/in/imc-m%C3%BChendislik-ve-dani%C5%9Fmanlik-100069179/?originalSubdomain=tr',
        css: 'width: 20%'
      },
      {
        image: 'gtu-logo.png',
        link: 'https://www.gtu.edu.tr',
        css: 'width: 22%'
      },
      {
        image: 'uskudar.png',
        link: null,
        css: 'width: 15%'
      },
      {
        image: 'derincebel.png',
        link: null,
        css: 'width: 15%'
      },
      {
        image: 'korfezbel.png',
        link: null,
        css: 'width: 15%'
      }
    ]
  },
  {
    silver: [
      {
        image: 'autodesk.png',
        link: 'https://www.autodesk.com.tr/',
        css: 'width: 30%'
      },
      {
        image: 'dekup.png',
        link: 'https://dekuprobotics.com/',
        css: 'width: 23% !important; padding-bottom: 15px;'
      },
      {
        image: 'cadcut-logo.svg',
        link: 'https://cadcut.co/en/',
        css: 'width: 23% !important; padding-bottom: 15px;'
      }
    ]
  },
  {
    bronze: [
      {
        image: 'kartal.png',
        link: 'https://www.kartalotomasyon.com.tr/',
        css: 'width: 20%'
      },
      {
        image: 'ctech.png',
        link: 'https://ctech.com.tr/tr',
        css: 'width: 20%'
      },
      {
        image: 'tto.png',
        link: 'http://tto.gtu.edu.tr',
        css: 'width: 20%'
      }
    ]
  },
  {
    supporters: [
      {
        image: 'ttaf.png',
        link: 'https://www.ttaf.com.tr/',
        css: null
      },
      {
        image: 'ac.png',
        link: 'https://www.actasarim.com.tr/',
        css: null
      },
      {
        image: 'porima-renkli.png',
        link: 'https://www.porima3d.com',
        css: null
      },
      {
        image: 'altinkaya.png',
        link: 'https://www.altinkaya.com.tr/',
        css: null
      },
      {
        image: 'robotsepeti.jfif',
        link: 'https://www.robotsepeti.com/',
        css: null
      },
      {
        image: 'empa-store.png',
        link: 'https://www.empastore.com/',
        css: 'width: 22%'
      },
      {
        image: 'aycan-makina.png',
        link: null,
        css: 'width: 22%'
      }
    ]
  }
];

const Sponsors = () => {
  const { t } = useTranslation();

  const sponsorList = sponsors.map((s) => {
    const key = Object.keys(s)[0];
    const group = s[key];
    console.log({ group });
    console.log({ key });
    if (!group) return null;
    return (
      <>
        <div
          class="container text-center"
          style={{ marginTop: 40, marginBottom: 40 }}
        >
          <h1 class="text-center h1-fourth-div-2">{t([key])}</h1>
          {group.map((sponsor) => (
            <Style>
              {`img { ${sponsor.css || ''} !important }`}
              <a
                class="text-center"
                target="_blank"
                href={`${sponsor.link || '#'}`}
              >
                {/* <ReactScrollWheelHandler
                  upHandler={(e) => console.log('scroll up')}
                  downHandler={(e) => console.log('scroll down')}
                  style={{
                    display: 'inline'
                  }}
                  preventScroll
                > */}
                <img
                  // style={{ border: '1px solid red' }}
                  onMouseHover={() => {}}
                  src={`/images/sponsors/${sponsor.image}`}
                  class="img-sponsor-div2 img-first-div animate__animated animate__zoomIn"
                />
                {/* </ReactScrollWheelHandler> */}
              </a>
            </Style>
          ))}
        </div>
        <hr style={{ borderWidth: 2 }} />
      </>
    );
  });

  return (
    <section
      id="sponsors"
      class="triangle-bg-2 jumbotron jumbotron-fluid align-content-center"
      style={{ marginBottom: 0 }}
    >
      <div class="container">
        <h1 class="text-center display-4 h1-fourth-div font-windlesham">
          {t('sponsors')}
        </h1>
        {sponsorList}
      </div>
    </section>
  );
};

export default Sponsors;
