import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const images = [
  {
    image: '/imgs/1_create_title.png',
    legend: 'Erstellung eines neuen Beitrags',
  },
  {
    image: '/imgs/2_smart_input.png',
    legend: 'Intelligente Vorschläge anhand von erstelltem Beitrag',
  },
  {
    image: '/imgs/2.1-1-select_content.png',
    legend: 'Auswahl eines Vorschlags',
  },
  {
    image: '/imgs/3-timeline.png',
    legend: 'Wechsel auf die Timeline-Ansicht',
  },
  {
    image: '/imgs/4-notification.png',
    legend: 'Die Timeline aktualisiert sich live.',
  },
];

export default function CarouselGallery(props) {
  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index} className="max-h-96">
            <img src={image.image} />
            <p className="legend">{image.legend}</p>
        </div>
      ))}
    </Carousel>
  )
}
