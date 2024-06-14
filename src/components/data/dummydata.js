import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "JULIA LAURIE",
    post: "WEB DESIGNER",
    design: "UI / UX DESIGNER",
    desc: "Olá! Sou desenvolvedora e web designer com formação em Engenharia de Software. Crio soluções digitais inovadoras e funcionais, unindo estética e eficiência. Confira meus trabalhos e entre em contato para discutir projetos e colaborações.",
  },
]
export const about = [
  {
    desc: "Meu nome é Julia Laurie, sou formada em engenharia de software, pós graduada em gestão de projetos e tenho como paixão a construção e desenvolvimento de sites e layoutes através de metodologias atuas de UX/UI, desenvolvo site majoritariamente em React com Next e prefiro estilizar através do tailwind",
    desc1: "",
    cover: "./images/woman.png",
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Ofereço serviços de criação de template para transformar suas ideias em realidade",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Desenvolvo códigos limpos e organizados para que seu projeto funcione de forma eficiente",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Criando websites e aplicativos com layouts responsivos que se adaptam a qualquer dispositivo.",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Next.js Development	",
    desc: "Faço uso do Next.js para aproveitar ao máximo sua otimização de desempenho.",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Utilizo os ícones do Material UI para um toque extra de estilo e funcionalidade aos projetos.",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: "Garanto suporte durante todo andamento do projeto",
  },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LIENS OF CODE",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.png",
    name: "Demonstrativo",
    category: "React",
    title: "Portfolio",
    url: "https://portfolio-roxo-three.vercel.app/",
  },
  {
    id: 2,
    cover: "../images/port/port2.jpg",
    name: "Agencia",
    category: "Boostrap",
    title: "Digital",
    url: "https://julia.totika.com.br/agencyParallax/index-ad-agency.html",
  },
  {
    id: 3,
    cover: "../images/port/port3.jpg",
    name: "Agendamento",
    category: "React",
    title: "Barbearia",
    url: "https://barber-web-fullstack-9ynx6pbtq-julialauries01.vercel.app/",
  },
  {
    id: 4,
    cover: "../images/port/port4.jpg",
    name: "Beleza",
    category: "Boostrap",
    title: "Salão",
    url: "https://julia.totika.com.br/HairParallax/index-barber.html",
  },
  {
    id: 5,
    cover: "../images/port/port5.jpg",
    name: "de interiores",
    category: "Boostrap",
    title: "Design",
    url: "https://julia.totika.com.br/InterioresParallax/index-interior.html",
  },
  {
    id: 6,
    cover: "../images/port/port6.jpg",
    name: "Design",
    category: "Boostrap",
    title: "Nails",
    url: "https://julia.totika.com.br/skincareParallax/index-skincare.html",
  },
]
export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-1.png",
    name: "Julia Laurie ",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-2.png",
    name: "Alex Ander",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "React Developer",
  },
]
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Ribeirão Preto",
    text2: "São Paulo, Brasil",
  },
  {
    icon: <PhoneIphone />,
    text1: "(016) 99340-4241",
    text2: "(016) 99703-3229",
  },
  {
    icon: <EmailOutlined />,
    text1: "julialauries@gmail.com",
    text2: "",
  },
]
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]
