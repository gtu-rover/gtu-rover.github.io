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
    if (!editable && !list) return null; // show empty groups only in admin
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
