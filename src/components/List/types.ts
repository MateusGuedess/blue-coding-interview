export interface Props {
  gifs: GIF[];
}

export interface GIF {
  id: string;
  username: string;
  images: Images;
  title: string;
}

export interface Images {
  original: {
    height: string;
    size: string;
    url: string;
    width: string;
    mp4: string;
  };
}
