import { Fade } from "react-awesome-reveal";
import MapPin from "../../../assets/img/MapPin.svg";
import InstagramLogo from "../../../assets/img/InstagramLogo.svg";
import Phone from "../../../assets/img/Phone.svg";

export const Footer = () => {
  return (
    <footer className="flex flex-row gap-8 bg-[#7ed957] p-4 text-white">
      <Fade>
        <a
          href="https://www.google.com/maps/search/?api=1&query=R.Pedro+Beneton+-+Centro,+Criciúma+-+SC"
          className="flex cursor-pointer flex-row items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={MapPin} alt={"map pin"} />
          <p className="p1 ml-2">R.Pedro Beneton - Centro, Criciúma - SC</p>
        </a>

        <a
          href="https://www.instagram.com/abracosensivel"
          className="flex cursor-pointer flex-row items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InstagramLogo} alt={"Instagram logo"} />
          <p className="p1 ml-2">abracosensivel</p>
        </a>

        <a
          href="tel:+5548996752911"
          className="flex cursor-pointer flex-row items-center"
        >
          <img src={Phone} alt={"phone icon"} />
          <p className="p1 ml-2">(48) 99675 - 2911</p>
        </a>
      </Fade>
    </footer>
  );
};
