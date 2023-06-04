export interface DogMdData {
  id: string;
  title: string;
  file: string;
  icon: string;
  excerpt: string;
  link?: string;
}

export interface DogData {
  id: string;
  title: string;
  icon: string;
  md: DogMdData[];
}
