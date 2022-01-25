import React, { useState, useEffect, useCallback } from 'react';
import { ModalContext } from '../Modal/modalContext';
import StyleEditor from 'react-style-editor';
import { Box, Button } from 'rebass';
import { Label, Input } from '@rebass/forms';
import Style from 'style-it';
import SponsorImage from './SponsorImage';

export const EditableImage = ({ defaultCss = 'img { }', ...rest }) => {
  let { handleModal } = React.useContext(ModalContext);
  const [css, setCss] = useState(defaultCss);
  const [link, setLink] = useState('');
  const imageUrl = rest?.src;

  const saveCss = async () => {
    console.log({ imageUrl });
    console.log({ css });
    console.log({ link });

    // const list = collection(db, 'sponsors/main/list');
    // TODO: setDoc
    // addDoc(list, {
    //   image: imageUrl || '',
    //   css: css,
    //   link: link
    // });
    // TODO: close modal

    // const mainDoc = doc(db, 'sponsors', 'main');
    // console.log({ mainDoc });
    // const list = mainDoc.collection('list').get();
    // console.log({ list });
    // await setDoc(doc(db, 'sponsors', 'main'), {
    //   name: 'Los Angeles',
    //   state: 'CA',
    //   country: 'USA'
    // });
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
        <SponsorImage {...rest} border />
      </a>
    </Style>
  );
};
