import React from "react";
import { Container } from "./style";

interface Props {
  gifs: GIF[];
}

interface GIF {
  id: string;
  username: string;
  images: Images;
  title: string;
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
      {gifs?.map((item) => {
        const gifShortHand = item?.images?.original;

        return (
          <img
            key={gifShortHand?.url}
            alt={item?.title}
            width="200px"
            src={gifShortHand?.url}
            loading="lazy"
          />
        );
      })}
    </Container>
  );
}

export default List;
