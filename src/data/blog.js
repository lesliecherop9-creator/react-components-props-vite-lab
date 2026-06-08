import logo from "../assets/logo";

const blogData = {
  name: "Leslie's Blog",
  image: logo,
  about: "Welcome to my blog!! I am a Uni student who enjoys learning new things.In this blog,  I will be posting about life, my thoughts and what I am up to too. Stay tuned for more!!",
  posts: [
    {
      id: 1,
      title: "Learning to Balance Everything",
      date: "December 15, 2020",
      preview: "Between Uni, projects and personal goals, finding balance has been one of my biggest challenges lately",
      minutes: 5,
    },
    {
      id: 2,
      title: "What I am working on currently",
      date: "December 11, 2020",
      preview: "I am currently learning React from Moringa School and learning C and Java in Uni. ",
      minutes: 15,
    },
    {
      id: 3,
      title: "Small Progress is Still Progress",
      preview: "Sometimes I feel like verything is moving so fast and it feels like a race but I have really learnt that it is important to celebrate small wins and progress because it is still progress.",
      minutes: 47,
    },
  ],
};

export default blogData;
