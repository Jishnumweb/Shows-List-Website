import Carousel from "react-bootstrap/Carousel";

const AutoMoveCarousel = () => {
  return (
    <Carousel interval={1500} controls={false} indicators={true} className="mainmaincrcl">
      <Carousel.Item className="crclmain">
        <img src="https://wallpapercave.com/wp/wp4817629.jpg" alt="First slide" className="movieimages" />
        <div className="crclcpt col-md-6 col-sm-12 d-flex gap-3">
          <div className="jisimages ">
            <img src="https://wallpaperaccess.com/full/2052705.jpg" alt="" className="jissimge" />
          </div>
          <div className="jisimagescontent">
            <h1>THE WITCHER</h1>
            <p>The Witcher is a fantasy book series written by Polish author Andrzej Sapkowski. The series follows Geralt of Rivia, a "Witcher" — a mutated monster hunter for hire, who is skilled in swordsmanship and magic. Set in a medieval-inspired world, the series is known for its complex characters, moral ambiguity, and exploration of themes like destiny, free will, and the nature of humanity.</p>
          </div>

        </div>
      </Carousel.Item>

      <Carousel.Item className="crclmain">
        <img src="images/1605492.jpg" alt="Second slide" className="movieimages" />
        <div className="crclcpt col-md-6 d-flex gap-3">
          <div className="jisimages ">
            <img src="https://wallpaperaccess.com/full/1605481.png" alt="" className="jissimge" />
          </div>
          <div className="jisimagescontent">
            <h1>DARK</h1>
            <p className="jisjisp">"Dark" is a brilliant, mind-bending series that combines deep philosophical themes with an intricately woven, time-twisting narrative. It’s a show that requires viewers to pay attention to every detail, and it rewards those who engage with its complex world-building. If you're a fan of time travel, mystery, and complex storytelling, "Dark" is a must-watch. <br /> -dark</p>

          </div>

        </div>
      </Carousel.Item>


      <Carousel.Item className="crclmain">
        <img src="https://wallpaperaccess.com/full/381122.png" alt="Third slide" className="movieimages" />
        <div className="crclcpt col-md-6 d-flex gap-3">
          <div className="jisimages ">
            <img src="https://wallpaperaccess.com/full/116442.jpg" alt="" className="jissimge" />
          </div>
          <div className="jisimagescontent">
            <h1>GAME OF THRONES</h1>
            <p>"Game of Thrones" is a landmark in modern television history, blending fantasy, political drama, and character-driven storytelling. It has left a lasting legacy, influencing the TV landscape and providing a rich universe for future expansions in both television and literature. <br />- Game of thrones</p>

          </div>


        </div>
      </Carousel.Item>

      <Carousel.Item className="crclmain">
        <img src="images/1262051.jpg" alt="Second slide" className="movieimages" />
        <div className="crclcpt col-md-6 d-flex gap-3">
          <div className="jisimages ">
            <img src="https://wallpaperaccess.com/full/1262056.jpg" alt="" className="jissimge" />
          </div>
          <div className="jisimagescontent">
            <h1>PRISON BREAK</h1>
            <p>"Prison Break" is a high-stakes, action-packed drama that combines psychological thrills with heart-pounding escape sequences and complex characters. It's a show about family, loyalty, and the price of freedom, and it remains a favorite among fans of intense crime dramas. <br />- Prison break</p>

          </div>

        </div>
      </Carousel.Item>

      <Carousel.Item className="crclmain">
        <img src="https://wallpaperaccess.com/full/1741906.jpg" alt="Second slide" className="movieimages" />
        <div className="crclcpt col-md-6 d-flex gap-3">
        <div className="jisimages ">
            <img src="https://wallpaperaccess.com/full/2849561.jpg" alt="" className="jissimge" />
          </div>
          <div className="jisimagescontent">
          <h1>BREAKING BAD</h1>
          <p>"Breaking Bad" is widely regarded as one of the greatest television series of all time, praised for its writing, character development, and performances. It has influenced a generation of television creators and is often credited with helping usher in the Golden Age of TV. The series has been analyzed in various ways, from its depiction of the antihero to its exploration of the American dream and the consequences of crime.</p>

            </div>

        </div>
      </Carousel.Item>

    </Carousel>
  );
};

export default AutoMoveCarousel;