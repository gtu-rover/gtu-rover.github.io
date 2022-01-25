import React, { useState, useEffect } from 'react';
import Sponsors from '.';
import { EditableImage } from './EditableImage';
import { addNewSponsor, sortSponsors } from './utils';

export const NewImage = () => {
  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(false);
  const onFileChange = (event) => {
    const image = event.target.files[0];
    addNewSponsor(image).then(url => setDownloadUrl(url));
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
