import React, { useState, useEffect } from 'react';
import Style from 'style-it';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { useTranslation } from 'react-i18next';
import { ModalContext } from './Modal/modalContext';
import StyleEditor from 'react-style-editor';
import {
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  addDoc
} from 'firebase/firestore';
import { db } from '../utils/firebase';
import { Label, Input } from '@rebass/forms';
import { Box, Button } from 'rebass';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const sponsors = [
  {
    main: [
      {
        image: 'ulker.svg',
        link: null,
        css: 'img { width: 50% !important; margin: 50px; }'
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

const SponsorImage = ({ image, border = false, src = false }) => (
  <img
    src={src || `/images/sponsors/${image}`}
    style={border ? { border: '1px red solid' } : null}
    class="img-sponsor-div2 img-first-div animate__animated animate__zoomIn"
  />
);

const EditableImage = ({ defaultCss = 'img { }', ...rest }) => {
  let { handleModal } = React.useContext(ModalContext);
  const [css, setCss] = useState(defaultCss);
  const [link, setLink] = useState('');
  const imageUrl = rest?.src;

  const saveCss = async () => {
    console.log({ imageUrl });
    console.log({ css });
    console.log({ link });

    const list = collection(db, 'sponsors/main/list');
    addDoc(list, {
      image: imageUrl || '',
      css: css,
      link: link
    });
    // TODO: close modal

    // const docs = await getDocs(query(list));
    // docs.forEach((doc) => console .log(doc.data()));

    // const mainDoc = doc(db, 'sponsors', 'main');
    // console.log({ mainDoc });
    // const list = mainDoc.collection('list').get();
    // console.log({ list });
    // await setDoc(doc(db, 'sponsors', 'main'), {
    //   name: 'Los Angeles',
    //   state: 'CA',
    //   country: 'USA'
    // });
    // TODO: save css db
  };

  const ModalBody = ({ css, setCss, link, setLink }) => {
    return (
      <>
        <StyleEditor
          defaultValue={css}
          onChange={(updatedCss) => setCss(updatedCss)}
        />
        <Box>
          <Label htmlFor="link">Link</Label>
          <input
            id="link"
            name="link"
            type="url"
            defaultValue={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </Box>

        <Button
          onClick={saveCss}
          m={2}
          backgroundColor="green"
          style={{ float: 'right' }}
        >
          Save
        </Button>
      </>
    );
  };

  return (
    <Style>
      {css || ''}
      <a
        class="text-center"
        onClick={() =>
          handleModal(
            <ModalBody
              css={css}
              link={link}
              setCss={setCss}
              setLink={setLink}
            />
          )
        }
      >
        <SponsorImage {...rest} editable border />
      </a>
    </Style>
  );
};

const NewImage = () => {
  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(false);
  const onFileChange = (event) => {
    const image = event.target.files[0];
    const imageRef = ref(getStorage(), `sponsors/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        setDownloadUrl(downloadURL);
        const list = collection(db, 'sponsors/main/list');
        addDoc(list, {
          image: downloadURL || '',
          css: 'img { }',
          link: ''
        });
      });
    });
    setFile(image);
  };

  useEffect(() => {
    if (file) setImageUrl(URL.createObjectURL(file));
  }, [file]);

  return (
    <>
      {downloadUrl && <EditableImage src={downloadUrl} />}
      <div>
        <input type="file" accept="image/*" onChange={onFileChange} />
      </div>
    </>
  );
};

const Sponsors = ({ editable = false }) => {
  const { t } = useTranslation();

  const sponsorList = sponsors.map((s) => {
    const key = Object.keys(s)[0];
    const group = s[key];
    if (!group) return null;
    return (
      <>
        <div
          class="container text-center"
          style={{ marginTop: 40, marginBottom: 40 }}
        >
          <h1 class="text-center h1-fourth-div-2">{t([key])}</h1>
          {group.map((sponsor) =>
            editable ? (
              <EditableImage defaultCss={sponsor.css} image={sponsor.image} />
            ) : (
              <a
                class="text-center"
                target="_blank"
                href={`${sponsor.link || '#'}`}
              >
                <SponsorImage editable image={sponsor.image} />
              </a>
            )
          )}
          {editable && <NewImage />}
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
