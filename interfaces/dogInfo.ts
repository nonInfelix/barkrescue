enum dogCategory {
  klein = "kleine Hunde",
  mittel = "mittelgroße Hunde",
  groß = "große hunde",
}

export default interface dogInfo {
  id: string;
  name: string;
  img: string;
  size: string;
  weight: string;
  fci_group: string;
  section: string;
  origin_country: string;
  color: string;
  lifespan: string;
  role: string;
  sports: string;
  character: string;
  category: dogCategory;
}
export default interface DogSearchInfo {
  text: string;
  value: string;
}
