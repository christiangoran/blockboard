import { cryptoIcons } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="mb-6 text-center tagline text-n-1/50">
        Connecting crypto bro's and their favorite currency
      </h5>
      <ul className="flex">
        {cryptoIcons.map((logo, index) => (
          <li
            key={index}
            className="flex item-center justify-center flex-1 h-[8.5rem]"
          >
            <img src={logo} width={52} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
