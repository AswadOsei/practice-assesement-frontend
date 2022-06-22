import axios from "axios";
import { spaceFetched } from "./slice";
import { apiUrl } from "../../config/constants";

export async function fetchSpaces(dispatch, getState) {
  try {
    const response = await axios.get(`${apiUrl}/spaces`);

    const spaces = response.data;
    console.log("do i get spaces?", spaces);
    dispatch(spaceFetched(spaces));
  } catch (e) {
    console.log(e.message);
  }
}
