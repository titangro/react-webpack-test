export const parseJSON = (JSONstring) => {
  try {
    return JSON.parse(JSONstring);
  } catch (error) {
    console.error('Error with path stating');
    return JSONstring;
  }
};
