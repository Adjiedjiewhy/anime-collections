export interface FormData {
  name: string;
}

export interface Colle {
  id: string;
  name: string;
  image: string;
  data: ColleContent[];
}

export interface ColleContent {
  id: string;
  title: string;
  coverImage: string;
}
