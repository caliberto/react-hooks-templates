export const checkResponseStatus = (response) => {
  return (
  response.status === 200 ||
  response.status === 201 ||
  response.status === 204
    ? Promise.resolve(response.json())
    : Promise.reject(new Error('backend returned an error'))
  );
};
