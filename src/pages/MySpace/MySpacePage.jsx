import React from "react";
import { useSelector } from "react-redux";
import { selectUserSpace } from "../../store/user/selectors";
import HeroBanner from "../../components/HeroBanner";
import MySpaceBlock from "../../components/MySpaceBlock/MySpaceBlock";

export default function MySpacePage() {
  //cross slice selectors?
  //why is this null/undefined?
  const mySpace = useSelector(selectUserSpace);
  console.log("do we see MySpace?", mySpace);

  if (!mySpace) return <h3>Loading...</h3>;

  return (
    <div>
      <HeroBanner />
      <MySpaceBlock
        space={mySpace}
        style={{
          backgroundColor: mySpace.backgroundColor,
          color: mySpace.color,
        }}
      ></MySpaceBlock>
      {/* {mySpace.stories.map((story) => {
        return (
          <>
            <p>{story.name}</p>
            <div>{story.content}</div>
            <div>
              (<img src={story.imageUrl} alt={story.id} width={"500px"}></img>)
            </div>
          </>
        );
      })} */}
    </div>
  );
}
