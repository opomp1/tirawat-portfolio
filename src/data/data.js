import Colmar from "../assets/projects/colmar-academy.jpg";
import Food from "../assets/projects/restaurant-website.jpg";
import MERN from "../assets/projects/place-desktop.png";
import DogGoDesktop from "../assets/projects/dog-go-desktop2.png";
import ChitChat from "../assets/projects/chitchat-desktop.png";
import ECom from "../assets/projects/e-com-desktop.png";

export const data = [
  {
    id: 1,
    name: "Dog Go",
    image: DogGoDesktop,
    description:
      "A responsive fitness tracker that allows users to manage workouts, calculate BMI, and visualize activity using a calendar and dashboard. Developed collaboratively in an Agile team during a coding bootcamp.",
    github: "https://github.com/opomp1/dog-go-project.git",
    live: "https://dog-go-frontend.vercel.app/",
  },
  {
    id: 2,
    name: "E-Commerce",
    image: ECom,
    description:
      "A full-featured e-commerce platform with product management, Stripe payment integration, and real-time sales analytics. Includes an admin dashboard, featured products, and secure image upload using Cloudinary.",
    github: "https://github.com/opomp1/e-commerce.git",
    live: "https://e-commerce-8w6v.onrender.com",
  },
  {
    id: 3,
    name: "ChitChat",
    image: ChitChat,
    description:
      "A real-time messaging app with image sharing and 32 unique themes. Built with Socket.io for live communication, Cloudinary for media uploads, and secure user authentication with JWT.",
    github: "https://github.com/opomp1/chat-app.git",
    live: "https://chat-app-hdy2.onrender.com",
  },
  {
    id: 4,
    name: "MyPlace",
    image: MERN,
    description:
      "A location-logging app where users can save, review, and visualize places they’ve visited using Google Maps API and street view. Includes secure auth, CRUD functionality, and image upload via Multer.",
    github: "https://github.com/opomp1/react-mern-project.git",
    live: "https://tirawat-react-mern-project.vercel.app/",
  },
  {
    id: 4,
    name: "Food Delivery",
    image: Food,
    description:
      "A food-themed landing page, a clean UI and fully responsive. Designed to demonstrate front-end styling, responsiveness, and attention to visual detail.",
    github: "https://github.com/opomp1/project-food-website",
    live: "https://tirawat-food-website.vercel.app/",
  },
  {
    id: 5,
    name: "Colmar Academy",
    image: Colmar,
    description: "An acdemy website with fully responsive design.",
    github: "https://github.com/opomp1/31_owen-colmar",
    live: "https://31-owen-colmar.vercel.app/",
  },
];
