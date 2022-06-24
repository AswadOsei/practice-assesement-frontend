import axios from "axios";
import { spaceFetched, spaceDetailsFetched } from "./slice";
import { apiUrl } from "../../config/constants";

export async function fetchSpaces(dispatch, getState) {
  try {
    const response = await axios.get(`${apiUrl}/spaces`);

    const spaces = response.data;
    // console.log("do i get spaces?", spaces);
    dispatch(spaceFetched(spaces));
  } catch (e) {
    console.log(e.message);
  }
}

export function fetchSpaceDetails(id) {
  return async function stories(dispatch, getState) {
    try {
      const response = await axios.get(`${apiUrl}/spaces/${id}`);

      const spaceDetails = response.data;
      console.log("do i get spacesDetails?", spaceDetails);
      dispatch(spaceDetailsFetched(spaceDetails));
    } catch (e) {
      console.log(e.message);
    }
  };
}
