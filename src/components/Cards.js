import { useTranslation } from 'react-i18next';
import Card from './Card';

const Cards = () => {
  const { t } = useTranslation();

  return (
    <section
      id="third-div"
      class="triangle-bg jumbotron jumbotron-fluid align-content-center"
      style={{ marginBottom: 0 }}
    >
      <div class="container-fluid text-center">
        <div class="container">
          <Card
            image="/images/card/marsrovernedir-min.jpg"
            link="https://mars.nasa.gov/mars2020/spacecraft/rover/"
            imgPos="left"
          >
            <Card.Title>{t('what is rover')}</Card.Title>
            <Card.Body>{t('rover description')}</Card.Body>
          </Card>
          <Card
            image="/images/card/ercnedir-min.jpg"
            link="https://roverchallenge.eu/en/main-page/"
            imgPos="left"
            end
          >
            <Card.Title>{t('what is erc')}</Card.Title>
            <Card.Body>{t('erc description')}</Card.Body>
          </Card>
          <Card
            image="/images/card/urcnedir-min.jpg"
            link="http://urc.marssociety.org/"
            imgPos="left"
          >
            <Card.Title>{t('what is urc')}</Card.Title>
            <Card.Body>{t('urc description')}</Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Cards;
