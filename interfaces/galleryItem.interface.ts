export default interface IGalleryItem {
  id: string;
  sort: number;
  name: string;
  slug: string;
  description: string;
  images: Record<string, any>[];
  tags: string[];
  thumbnail: {
    id: string;
    width: string;
    height: string;
  };
}
