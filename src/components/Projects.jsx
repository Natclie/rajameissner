const projects = [
    {
      title: "MARTI FISCHER - SOAD",
      date: "April, 2024",
      description: "I supported Marti Fischer with his new video 'The Sound of SYSTEM OF A DOWN'! We wrote a song a la SOAD and then recorded it.",
      video: "https://www.youtube.com/embed/v5q30VphHzg"
    },
    {
      title: "MIKE SHINODA - ALREADY OVER SESSIONS",
      date: "January, 2024",
      description: "I had the great honor of working with Mike Shinoda! Mike is one of the most creative people I know and is such a good producer, musician and has such a great personality.",
      video: "https://www.youtube.com/embed/kt-1Ddhe8W0"
    },
    {
      title: "EU - Tour with BÖSE FUCHS",
      date: "November, 2023",
      description: "We were on the road the whole of November 2023, 19 cities, 7 countries! This tour showed me once again that I LOVE playing live!",
      image: "../img/PRO-2.jpg"
    },
    {
      title: "OELDE OPENAIR",
      date: "September, 2023",
      description: "I had the honor of hosting the Oelde Openair. It was an exhilarating experience as I had never done anything like it before.",
      image: "../img/oelde.jpg"
    },
    {
      title: "COBRA SPELL",
      date: "May, 2022",
      description: "I spontaneously jumped in on Cobra Spell's tour because they were looking for a drummer.",
      images: [
        { src: "../img/essen.jpg", caption: "05.05.2022 ESSEN" },
        { src: "../img/rotterdam.jpg", caption: "06.05.2022 ROTTERDAM" },
        { src: "../img/munchen.jpg", caption: "20.05.2022 MÜNCHEN" }
      ]
    },
    {
      title: "SIMON WILL",
      date: "September, 2022",
      description: "I had the pleasure of accompanying my good friend Simon Will on a trip to Milan.",
      video: "https://www.youtube.com/embed/oNHOpS-vKRQ"
    },
    {
      title: "PSYCHO VILLAGE",
      date: "May, 2017",
      description: "I was 'booked' for the first time to go on tour with Psycho Village from Vienna.",
      image: "../img/psycho.jpg"
    }
  ];
  
    return (
      <section id="projects" className="max-w-6xl mx-auto px-4 space-y-16 items-center justify-center w-full">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="max-w-md text-center md:text-left" data-aos="fade-right">
              <h3 className="text-2xl font-bold">
                {project.title} <span className="font-normal text-3xl">{project.date}</span>
              </h3>
              <p>{project.description}</p>
            </div>
            {project.video ? (
              <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl aspect-video">
                <iframe className="w-[89%] mx-auto h-full" src={project.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen data-aos="fade-left"></iframe>
              </div>
            ) : project.image ? (
              <img className="w-[560px] h-[315px] object-cover" src={project.image} alt={project.title} data-aos="fade-left" />
            ) : project.images ? (
              <div className="flex flex-wrap gap-8 justify-center">
                {project.images.map((img, imgIndex) => (
                  <div key={imgIndex} data-aos="fade-up" className="flex flex-col gap-2">
                    <img className="w-[350px] h-[220px] object-cover" src={img.src} alt={img.caption} />
                    <span className="flex justify-center">{img.caption}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </section>
    );
    export default Projects