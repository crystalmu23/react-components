import logo from "../assets/logo";

const blogData = {
  name: "Under the React Tree",
  image: "https://via.placeholder.com/215",
  about: "A blog about learning the basics of React components and props.",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2025",
      preview: "Setting up your first functional component.",
    },
    {
      id: 2,
      title: "The Power of Props",
      date: "January 5, 2026",
      preview: "How to pass data from parents to children.",
    },
    {
      id: 3,
      title: "JSX Magic",
      preview: "Why writing HTML in JS isn't as scary as it sounds.",
      // Note: Date is intentionally left out to test default prop value in Article component
    },
  ],
};

export default blogData;
