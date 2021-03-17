export default interface IBlogPost {
  title: string;
  subtitle: string;
  date_created: string;
  slug: string;
  thumbnail: {
    id: string;
    width: string;
    height: string;
  };
  body: string;
  tags: string[];
}
