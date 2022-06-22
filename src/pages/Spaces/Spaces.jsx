import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import HeroBanner from "../../components/HeroBanner";
import { selectSpaces } from "../../store/spaces/selectors";
import { fetchSpaces } from "../../store/spaces/actions";
import SpaceBlock from "../../components/SpaceBlock/SpaceBlock";

export default function Spaces() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);

  console.log("Are we getting there?", spaces);
  useEffect(() => {
    dispatch(fetchSpaces);
  }, [dispatch]);
  return (
    <div>
      <HeroBanner />
      {spaces.map((space) => {
        return (
          <SpaceBlock
            key={space.id}
            title={space.title}
            description={space.description}
          />
        );
      })}
    </div>
  );
}
