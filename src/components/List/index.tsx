import React from "react";
import { Container } from "./style";
import { Props, GIF, Images } from "./types";

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
