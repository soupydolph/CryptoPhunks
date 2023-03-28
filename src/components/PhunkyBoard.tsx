import { useState, useEffect } from "react";

const config = {
  phunksToShow: 8,
  phunksBaseUrl: "https://phunks.s3.us-east-2.amazonaws.com/images/phunk",
};

const PhunkyBoard = () => {
  const [phunks, setPhunks] = useState<number[]>([]);

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const getRandomPhunks = () => {
    const phunkList = [];
    for (let i = 0; i < config.phunksToShow; i++) {
      phunkList.push(getRandomInt(10000));
    }
    setPhunks(phunkList);
  };

  const getRecentlySoldPhunks = () => {};

  useEffect(() => {
    getRandomPhunks();
  }, []);

  return (
    <>
      <div className="flex place-content-between w-3/5 m-auto">
        <button
          onClick={() => getRandomPhunks()}
          className="rounded-full border-primary border-2 hover:bg-primary text-primary hover:text-white font-bold w-40 h-16"
        >
          Random
        </button>
        <button
          onClick={() => getRecentlySoldPhunks()}
          className="rounded-full border-primary border-2 hover:bg-primary text-primary hover:text-white font-bold w-40 h-16"
        >
          Recently Sold
        </button>
        <button className="rounded-full border-primary border-2 hover:bg-primary text-primary hover:text-white font-bold w-40 h-16">
          Id
        </button>
        <button className="rounded-full border-primary border-2 hover:bg-primary text-primary hover:text-white font-bold w-40 h-16">
          Floor
        </button>
      </div>

      <section className="container mx-auto my-7 md:my-24">
        <div className="grid grid-cols-4 gap-4">
          {phunks.map((phunk, idx) => {
            return (
              <div key={`phunk-image-${idx}`}>
                <img
                  className="aspect-square"
                  src={`${config.phunksBaseUrl}${phunk}.png`}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default PhunkyBoard;
