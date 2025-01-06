import { HeadLarge, HeadMedium } from "../../../ui/index";

function SwiperCart({head,altText,media}) {
  return (
    <div className="sign-swiper-card">
      <div className="sign-card-title">
        <HeadLarge variant={`medium`} title={`${head},`} />
        <HeadMedium variant={`medium`} title={`${altText}`} />
      </div>
      <div className="sign-card-picture">
        <img src={media} alt="" />
      </div>
    </div>
  );
}

export default SwiperCart;
