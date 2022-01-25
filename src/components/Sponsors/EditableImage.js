import React, { useState, useEffect, useCallback } from 'react';
import { ModalContext } from '../Modal/modalContext';
import StyleEditor from 'react-style-editor';
import { Box, Button } from 'rebass';
import { Label, Input } from '@rebass/forms';
import Style from 'style-it';
import SponsorImage from './SponsorImage';
import { setSponsor } from './utils';
import { useSnackbar } from 'react-simple-snackbar';

const ModalBody = ({ data, onCssChange, onChange }) => {
  const [imageData, setImageData] = useState(data);
  const [openSnackbar, closeSnackbar] = useSnackbar();

  return (
    <>
      <Label htmlFor="style-editor">Style Editor</Label>
      <StyleEditor
        id="style-editor"
        defaultValue={imageData.css}
        onChange={(updatedCss) => {
          setImageData({ ...data, css: updatedCss });
          onCssChange(updatedCss);
        }}
      />
      <Box>
        <Label htmlFor="link">Link</Label>
        <Input
          id="link"
          name="link"
          type="url"
          defaultValue={imageData.link}
          onChange={(e) => setImageData({ ...data, link: e.target.value })}
        />
      </Box>
      <Button
        onClick={() => {
          openSnackbar('Saving image data...', 15000);
          setSponsor(imageData).then(() => {
            openSnackbar('Saved');
            onChange();
          });
        }}
        m={2}
        mr={0}
        backgroundColor="green"
        style={{ float: 'right' }}
      >
        Save
      </Button>
      <Button
        onClick={() => console.log(data.id)}
        m={2}
        backgroundColor="red"
        style={{ float: 'right' }}
      >
        Delete
      </Button>
    </>
  );
};

export const EditableImage = ({ data, onChange }) => {
  let { handleModal } = React.useContext(ModalContext);
  const [css, setCss] = useState(data.css);

  return (
    <Style>
      {css || ''}
      <a
        class="text-center"
        onClick={() =>
          handleModal(
            <ModalBody
              data={data}
              onCssChange={(updatedCss) => setCss(updatedCss)}
              onChange={onChange}
            />
          )
        }
      >
        <SponsorImage src={data.image} border />
      </a>
    </Style>
  );
};
