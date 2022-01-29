import React from 'react';
import { addNewSponsor } from './utils';
import { useSnackbar } from 'react-simple-snackbar';
import './NewImage.css';
import { ID } from '../../utils';

export const NewImage = ({ onNewImage, defaults, dbPath }) => {
  const [openSnackbar, closeSnackbar] = useSnackbar();

  const onFileChange = (event) => {
    const image = event.target.files[0];
    openSnackbar('Please wait: Image is uploading to database...', 20000);
    addNewSponsor(image, defaults, dbPath).then((s) => {
      onNewImage(s);
      closeSnackbar();
      openSnackbar('Image is uploaded', 1000);
    });
  };

  const id = `file-upload-${ID()}`;

  return (
    <>
      <div>
        <label htmlFor={id} class="custom-file-upload">
          <i class="fa fa-cloud-upload"></i> Upload
        </label>
        <input id={id} type="file" accept="image/*" onChange={onFileChange} />
      </div>
    </>
  );
};
