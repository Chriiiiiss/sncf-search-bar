import { ReactComponent as ArrowSvg } from "@/assets/arrow.svg";
import "@css/card.css";

interface ICard {
  imgUrl: string;
  title: string;
  description: string;
  ctaLabel: string;
}

const Card: React.FC<ICard> = ({ title, imgUrl, ctaLabel, description }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg cardContainer">
      <img className="rounded-t-lg" src={imgUrl} />
      <div className="flex flex-col gap-10">
        <div className="p-4">
          <h3 className="font-bold text-md avenirBoldFont mb-2">{title}</h3>
          <p className="avenirFont text-slate-600">{description}</p>
        </div>
        <div className="linkCta">
          <span className="separator" />
          <a
            className="flex items-center gap-2 justify-center pb-4 px-4"
            href="#"
          >
            <span className="text-xs">{ctaLabel}</span>
            <span>
              <ArrowSvg className="transform rotate-90" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
