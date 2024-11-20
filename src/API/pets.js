import instance from "./index";

async function getAllPets() {
  const response = await instance.get(
    "/pets"
  );
  console.log(response);
  return response;
}

async function getPetById(id) {
  const response = await instance.get(
    `/pets/${id}`
  );
  console.log(response);
  return response;
}

export { getAllPets, getPetById };
