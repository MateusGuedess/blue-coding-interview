import React from "react";
import { Container } from "./style";

interface Props {
  gifs: GIF[];
}

interface GIF {
  id: string;
  username: string;
  images: Images;
}

interface Images {
  original: {
    height: string;
    size: string;
    url: string;
    width: string;
    mp4: string;
  };
}

function List({ gifs }: Props) {
  if (!gifs) return <></>;

  return (
    <Container>
      {gifs?.map((item) => (
        <img
          key={item?.images?.original?.url}
          alt={item?.images?.original?.url}
          width="200px"
          src={item?.images?.original?.url}
          loading="lazy"
        />
      ))}
    </Container>
  );
}

export default List;
