import { useEffect, useState } from "react";
import { data } from "../collections/tech.jsx";
import LogoGroup from "./Logogroup.jsx";

const LogoRotating = () => {
  const [logos, setLogos] = useState(data);

  useEffect(() => {
    const sleep = (number) => new Promise((res) => setTimeout(res, number));

    const rotateLogos = async () => {
      for (let i = 0; i < logos.length; i++) {
        await sleep(1400 * i);

        setLogos((prevLogos) => {
          const updatedLogos = [...prevLogos];
          let temp = updatedLogos[i][0][2];
          updatedLogos[i][0][2] = updatedLogos[i][1][2];
          updatedLogos[i][1][2] = updatedLogos[i][2][2];
          updatedLogos[i][2][2] = temp;

          return updatedLogos;
        });
      }
    };

    const intervalId = setInterval(() => {
      rotateLogos();
    }, 5600);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [logos]);

  return (
    <div className="bg-[#0f0f0f] pt-[7rem]">
      <h1 className="text-center  text-5xl text-slate-200 font-bold">
        What I Like
      </h1>
      <div className="logos min-h-[40vh] flex flex-wrap justify-around items-center text-3xl">
        {logos.map((logos, index) => (
          <LogoGroup key={index} logos={logos} />
        ))}
      </div>
    </div>
  );
};

export default LogoRotating;
