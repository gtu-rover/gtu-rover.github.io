import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';
import JustifiedGrid from 'react-justified-grid';
import 'lightgallery.js/dist/css/lightgallery.css';
import './style.css';

const images = [
  {
    src: '/images/erc21/20210910_172617-min.jpg',
    width: 4032,
    height: 3024
  },
  {
    src: '/images/erc21/20210910_174734-min.jpg',
    width: 4032,
    height: 3024
  },
  {
    src: '/images/erc21/20210910_175633-min.jpg',
    width: 4032,
    height: 3024
  },
  {
    src: '/images/erc21/20210910_175807-min.jpg',
    width: 3024,
    height: 4032
  },
  {
    src: '/images/erc21/20210912_093153-min.jpg',
    width: 4032,
    height: 3024
  },
  {
    src: '/images/erc21/20210912_160008-min.jpg',
    width: 4032,
    height: 3024
  },
  {
    src: '/images/erc21/20210912_171418-min.jpg',
    width: 4032,
    height: 3024
  },
  {
    src: '/images/erc21/DSC03686-min.jpg',
    width: 6000,
    height: 4000
  },
  {
    src: '/images/erc21/DSC03692-min.jpg',
    width: 4000,
    height: 6000
  },
  {
    src: '/images/erc21/DSC03693-min.jpg',
    width: 6000,
    height: 4000
  },
  {
    src: '/images/erc21/DSC03709-min.jpg',
    width: 4000,
    height: 6000
  },
  {
    src: '/images/erc21/DSC03732-min.jpg',
    width: 4000,
    height: 6000
  },
  {
    src: '/images/erc21/DSC03739-min.jpg',
    width: 6000,
    height: 4000
  },
  {
    src: '/images/erc21/DSC03742-min.jpg',
    width: 6000,
    height: 4000
  },
  {
    src: '/images/erc21/DSC03764-min.jpg',
    width: 6000,
    height: 4000
  },
  {
    src: '/images/erc21/DSC03813-min.jpg',
    width: 6000,
    height: 4000
  },
  {
    src: '/images/erc21/DSC03821-min.jpg',
    width: 6000,
    height: 4000
  },
  {
    src: '/images/erc21/DSC03854-min.jpg',
    width: 4000,
    height: 6000
  },
  {
    src: '/images/erc21/DSC03875-min.jpg',
    width: 6000,
    height: 4000
  },
  {
    src: '/images/erc21/DSC03893-min.jpg',
    width: 4000,
    height: 6000
  },
  {
    src: '/images/erc21/IMG_20210914_074306_651-min.jpg',
    width: 1280,
    height: 720
  }
];

const Gallery = () => {
  return (
    <>
      <div
        style={{ backgroundColor: '#f1f2f4' }}
        class="gallery-container-wrapper"
      >
        <h1 class="purple text-center display-4 h1-fourth-div font-windlesham">
          Yarışmadan ve çalışmalarımızdan kareler
        </h1>
        <div class="row justify-content-center">
          <div class="col col-md-9">
            <LightgalleryProvider
              plugins={['lg-thumbnail.js', 'lg-zoom.js']}
              lightgallerySettings={{
                mode: 'lg-fade',
                zoom: true
              }}
              //   galleryClassName="my_custom_classname"
            >
              <JustifiedGrid images={images} maxRowHeight={180} gutter={5}>
                {(processedImages) =>
                  processedImages.map((image) => {
                    const { src, width, height, left, top, originalData } =
                      image;
                    return (
                      <LightgalleryItem group="any" src={src}>
                        <div
                          style={{
                            position: 'absolute',
                            top: top,
                            left: left
                          }}
                        >
                          <img src={src} width={width} height={height} />
                        </div>
                      </LightgalleryItem>
                    );
                  })
                }
              </JustifiedGrid>
            </LightgalleryProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
