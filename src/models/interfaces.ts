export interface FormData {
  name: string;
}

export interface Colle {
  colleId: string;
  colleName: string;
  colleCoverImage: string;
  colleContent: ColleContent[];
}

export interface ColleContent {
  id: string;
  title: string;
  coverImage: string;
}
