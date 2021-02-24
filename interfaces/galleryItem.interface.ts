export default interface IGalleryItem {
  id: string;
  sort: number;
  name: string;
  slug: string;
  thumbnail: {
    id: string;
    width: number;
    height: number;
  };
}
