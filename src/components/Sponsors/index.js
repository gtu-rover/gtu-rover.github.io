import React, { useState, useEffect, useCallback } from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { useTranslation } from 'react-i18next';
import { db } from '../../utils/firebase';
import SponsorImage from './SponsorImage';
import { addNewSponsor, fetchSponsors, sortSponsors } from './utils';
import { NewImage } from './NewImage';
import { EditableImage } from './EditableImage';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import Style from 'style-it';

// const sponsors = [
//   {
//     main: [
//       {
//         image: 'ulker.svg',
//         link: null,
//         css: 'img { width: 50% !important; margin: 50px; }'
//       }
//     ]
//   },
//   {
//     workshop: [
//       {
//         image: 'starcelik.jpg',
//         link: 'https://www.starcelik.com.tr/',
//         css: 'width: 40%'
//       }
//     ]
//   },
//   {
//     platinum: null
//   },
//   {
//     gold: [
//       {
//         image: 'gunes_dinamik.png',
//         link: 'https://www.gunesdinamik.com/',
//         css: 'width: 15%'
//       },
//       {
//         image: 'imc.png',
//         link: 'https://www.linkedin.com/in/imc-m%C3%BChendislik-ve-dani%C5%9Fmanlik-100069179/?originalSubdomain=tr',
//         css: 'width: 20%'
//       },
//       {
//         image: 'gtu-logo.png',
//         link: 'https://www.gtu.edu.tr',
//         css: 'width: 22%'
//       },
//       {
//         image: 'uskudar.png',
//         link: null,
//         css: 'width: 15%'
//       },
//       {
//         image: 'derincebel.png',
//         link: null,
//         css: 'width: 15%'
//       },
//       {
//         image: 'korfezbel.png',
//         link: null,
//         css: 'width: 15%'
//       }
//     ]
//   },
//   {
//     silver: [
//       {
//         image: 'autodesk.png',
//         link: 'https://www.autodesk.com.tr/',
//         css: 'width: 30%'
//       },
//       {
//         image: 'dekup.png',
//         link: 'https://dekuprobotics.com/',
//         css: 'width: 23% !important; padding-bottom: 15px;'
//       },
//       {
//         image: 'cadcut-logo.svg',
//         link: 'https://cadcut.co/en/',
//         css: 'width: 23% !important; padding-bottom: 15px;'
//       }
//     ]
//   },
//   {
//     bronze: [
//       {
//         image: 'kartal.png',
//         link: 'https://www.kartalotomasyon.com.tr/',
//         css: 'width: 20%'
//       },
//       {
//         image: 'ctech.png',
//         link: 'https://ctech.com.tr/tr',
//         css: 'width: 20%'
//       },
//       {
//         image: 'tto.png',
//         link: 'http://tto.gtu.edu.tr',
//         css: 'width: 20%'
//       }
//     ]
//   },
//   {
//     supporters: [
//       {
//         image: 'ttaf.png',
//         link: 'https://www.ttaf.com.tr/',
//         css: null
//       },
//       {
//         image: 'ac.png',
//         link: 'https://www.actasarim.com.tr/',
//         css: null
//       },
//       {
//         image: 'porima-renkli.png',
//         link: 'https://www.porima3d.com',
//         css: null
//       },
//       {
//         image: 'altinkaya.png',
//         link: 'https://www.altinkaya.com.tr/',
//         css: null
//       },
//       {
//         image: 'robotsepeti.jfif',
//         link: 'https://www.robotsepeti.com/',
//         css: null
//       },
//       {
//         image: 'empa-store.png',
//         link: 'https://www.empastore.com/',
//         css: 'width: 22%'
//       },
//       {
//         image: 'aycan-makina.png',
//         link: null,
//         css: 'width: 22%'
//       }
//     ]
//   }
// ];

const Sponsors = ({ editable = false }) => {
  const { t } = useTranslation();
  const [sponsors, setSponsors] = useState([]);
  const [onForceUpdate, forceUpdate] = useForceUpdate();

  useEffect(() => {
    const getData = async () => {
      const sponsorsFromDb = await fetchSponsors();
      setSponsors(sponsorsFromDb);
    };
    getData();
  }, [onForceUpdate]);

  const groupedSponsors = [];
  for (const s of sponsors) {
    const group = s.group;
    if (!groupedSponsors[group]) {
      groupedSponsors[group] = [];
    }
    groupedSponsors[group].push(s);
  }

  const sortedSponsors = sortSponsors(groupedSponsors);

  const sponsorList = Object.keys(sortedSponsors)?.map((group) => {
    const list = groupedSponsors[group];

    if (!group) return null;
    return (
      <>
        <div
          class="container text-center"
          style={{ marginTop: 40, marginBottom: 40 }}
        >
          <h1 class="text-center h1-fourth-div-2">{t([group])}</h1>
          {list?.map((sponsor) =>
            editable ? (
              // <EditableImage defaultCss={sponsor.css} src={sponsor.image} />
              <EditableImage data={sponsor} onChange={forceUpdate} />
            ) : (
              <Style>
                {sponsor.css || ''}
                <a
                  class="text-center"
                  target="_blank"
                  href={`${sponsor.link || '#'}`}
                >
                  <SponsorImage src={sponsor.image} />
                </a>
              </Style>
            )
          )}
          {editable && (
            <NewImage
              defaults={{
                group: group
              }}
              onNewImage={(img) => setSponsors([...sponsors, img])}
            />
          )}
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
