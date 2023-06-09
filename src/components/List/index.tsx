import React from "react";
import { Container } from "./style";
import { Props, GIF, Images } from "./types";

function List({ gifs }: Props) {
  if (!gifs) return <></>;

  return (
    <Container>
      {gifs?.map((item) => {
        const image = item?.images?.original;

        return (
          <img
            key={image?.url}
            alt={item?.title}
            width="200px"
            src={image?.url}
            loading="lazy"
          />
        );
      })}
    </Container>
  );
}

export default List;
