import "./testimonials.scss";

export default function Testmonials() {
  const data = [
    {
      id: 1,
      name: "Kanish Gupta",
      title: "Senior Developer",
      img: "assets/man1.webp",
      icon: "assets/twitter.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adispissincing elit Recusandae",
    },
    {
      id: 2,
      name: "Mankirat Sidhu",
      title: "Molecular Engineer",
      img: "assets/girl.jpg",
      icon: "assets/youtube.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adispissincing elit Recusandae",
      featured: true,
    },
    {
      id: 3,
      name: "Srishti Singla",
      title: "Senior Writer",
      img: "assets/girl1.jpg",
      icon: "assets/writing.png",
      desc: "Lorem ipsum dolor sit amet consectetur adispissincing elit Recusandae",
      featured: true,
    },

    {
      id: 4,
      name: "Samridh Makkar",
      title: "Software Engineer",
      img: "assets/man2.jpg",
      icon: "assets/twitter.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adispissincing elit Recusandae",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right.png" className="left" alt=""></img>
              <img src={d.img} className="user"></img>
              <img src={d.icon} className="right"></img>
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
