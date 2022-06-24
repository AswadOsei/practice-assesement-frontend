import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaceDetails } from "../../store/spaces/actions";
import { selectSpaceDetails } from "../../store/spaces/selectors";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SpaceDetails from "../../components/SpaceDetails/SpaceDetails";
import HeroBanner from "../../components/HeroBanner";

export default function SpaceDetailsPages() {
  const dispatch = useDispatch();
  const spacesDetails = useSelector(selectSpaceDetails);
  const { id } = useParams();

  console.log("space with details?", id);
  useEffect(() => {
    dispatch(fetchSpaceDetails(id));
  }, [dispatch, id]);

  if (!spacesDetails) return <h3>Loading...</h3>;

  return (
    <div>
      <HeroBanner />
      <SpaceDetails
        space={spacesDetails}
        style={{
          backgroundColor: spacesDetails.backgroundColor,
          color: spacesDetails.color,
        }}
      ></SpaceDetails>
      {spacesDetails.stories.map((story) => {
        return (
          <>
            <p>{story.name}</p>
            <div>{story.content}</div>
            <div>
              (<img src={story.imageUrl} alt={story.id} width={"500px"}></img>)
            </div>
          </>
        );
      })}
    </div>
  );
}
