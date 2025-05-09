const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 15, suffix: "+", label: "Satisfied Clients" },
    { value: 20, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    // {
    //   name: "Python Developer",
    //   imgPath: "/images/logos/python.svg",
    // },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    // {
    //   name: "Project Manager",
    //   imgPath: "/images/logos/git.svg",
    // },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    // {
    //   name: "Python Developer",
    //   modelPath: "/models/python-transformed.glb",
    //   scale: 0.8,
    //   rotation: [0, 0, 0],
    // },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    // {
    //   name: "Project Manager",
    //   modelPath: "/models/git-svg-transformed.glb",
    //   scale: 0.05,
    //   rotation: [0, -Math.PI / 4, 0],
    // },
  ];
  
  const expCards = [
    {
      review: "Husnain Ali consistently demonstrated exceptional dedication, professionalism, and a strong work ethic throughout his internship. He actively contributed to key projects, gaining valuable experience and showcasing solid skills in React development. His commitment and performance make him a promising asset in any development team.",
      imgPath: "/images/codexcue.png",
     logoPath: "/images/codexcue.png",
      title: "React Developer (Intern)",
      date: "1st November 2024 to 30th November 2024",
      responsibilities: [
        "Developed and maintained responsive front-end features using React.js and Tailwind CSS.",
        "Collaborated with UI/UX designers to deliver smooth and consistent user experiences.",
        "Improved performance through optimized state management and lazy loading.",
      ],
    },
    {
      review: "Husnain delivered impressive performance during his internship, making valuable contributions to our team. He demonstrated strong analytical skills, quickly adapted to new technologies, and maintained high productivity. His collaborative nature and willingness to help others stood out. We confidently recommend him as a dedicated and capable professional for any future opportunity.",
      imgPath: "/images/codealpha.png",
      logoPath: "/images/codealpha.png",
      title: "Front-End Web Developer (Intern)",
      date: "1st October 2024 to 30th October 2024",
      responsibilities: [
        "Developed responsive and user-friendly web interfaces using React.js, enhancing the overall UI/UX of client projects.",
        "Collaborated with the development team to implement new features, fix bugs, and maintain clean, reusable code.",
        "Contributed to optimizing website performance and ensuring cross-browser compatibility across multiple devices.",
      ],
    },
    {
      review: "Husnain made excellent use of DevelopersHub to stay organized and efficient. He managed projects, tracked tasks, and maintained clear documentation with consistency. His structured approach and attention to detail made him a reliable and proactive team member.",
      imgPath: "/images/developershub.png",
      logoPath:"/images/developershub.png",
      title: "Front-End Web Developer (Intern)",
      date: "1st September 2024 to 15th October 2024",
      responsibilities: [
        "Built structured and responsive UIs using React.js while ensuring clean, maintainable code for long-term scalability.",
        "Effectively managed tasks and project timelines using tools like DevelopersHub, ensuring consistent progress and delivery.",
        "Maintained clear documentation and followed a detail-oriented approach, contributing to smooth team collaboration and code handoffs.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
    },
    // {
    //   name: "x",
    //   imgPath: "/images/x.png",
    // },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };