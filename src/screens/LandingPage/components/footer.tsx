import { Fade } from "react-awesome-reveal";
import MapPin from "../../../assets/img/MapPin.svg";
import InstagramLogo from "../../../assets/img/InstagramLogo.svg";
import Phone from "../../../assets/img/Phone.svg";
export const Footer = () => {
  return (
    <footer className="flex flex-row gap-8 bg-[#7ed957] p-4 text-white">
      <Fade>
        <div className="flex flex-row items-center">
          <img src={MapPin} alt={"map pin"} />
          <p className="p1 ml-2">R.Pedro Beneton - Centro, Criciúma - SC</p>
        </div>

        <a
          href="https://www.instagram.com/abracosensivel"
          className="flex cursor-pointer flex-row items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InstagramLogo} alt={"Instagram logo"} />
          <p className="p1 ml-2">abracosensivel</p>
        </a>
        <div className="flex flex-row items-center">
          <img src={Phone} alt={"map pin"} />
          <p className="p1 ml-2">(48) 99675 - 2911</p>
        </div>
      </Fade>
    </footer>
  );
};
