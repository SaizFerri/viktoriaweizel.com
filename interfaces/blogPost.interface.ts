export default interface IBlogPost {
  title: string;
  subtitle: string;
  date_created: string;
  thumbnail: Record<string, any>;
  body: string;
  tags: string[];
}
