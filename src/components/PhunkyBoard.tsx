import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import { requestRecentSales, requestFloorPhunks } from "../api";

const config = {
  phunksToShow: 8,
  phunksBaseUrl: "https://phunks.s3.us-east-2.amazonaws.com/images/phunk",
};

const PhunkyBoard = () => {
  const [phunks, setPhunks] = useState<number[]>([]);
  const [floor, setFloor] = useState(0);

  const recentylSoldQuery = useQuery(["recentlySold"], async () => {
    return requestRecentSales();
  });

  const floorPhunksQuery = useQuery(["floorPhunks"], async () => {
    return requestFloorPhunks();
  });

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

  const getRecentlySoldPhunks = () => {
    const recentlySoldPhunks = recentylSoldQuery?.data?.data.sales.map(
      (sale: Object) => {
        // @ts-ignore
        return sale.token.tokenId;
      }
    );

    setPhunks(recentlySoldPhunks);
  };

  const getAscendingPhunks = () => {
    const ascendingPhunks = Array(config.phunksToShow)
      .fill(0)
      .map((x, i) => i);
    setPhunks(ascendingPhunks);
  };

  const getFloorPhunks = () => {
    const floorPhunks = floorPhunksQuery?.data?.data.tokens.map(
      // @ts-ignore
      (token: Object) => token.token.tokenId
    );
    setPhunks(floorPhunks);
  };

  useEffect(() => {
    getRandomPhunks();
  }, []);

  useEffect(() => {
    if (floorPhunksQuery.isSuccess) {
      const lowestFloor =
        floorPhunksQuery.data.data.tokens[0].market.floorAsk.price.amount
          .decimal;
      setFloor(lowestFloor);
      console.log(floor);
    }
  }, [floorPhunksQuery.isSuccess]);

  return (
    <>
      <div className="flex place-content-between w-4/5 m-auto">
        <button
          onClick={() => getRandomPhunks()}
          className="rounded-full border-primary border-2 hover:bg-primary text-primary hover:text-white text-xs md:text-base font-medium md:font-bold w-16 sm:w-24 md:w-40 h-12 md:h-16"
        >
          Random
        </button>
        <button
          onClick={() => getRecentlySoldPhunks()}
          className="rounded-full border-primary border-2 hover:bg-primary text-primary hover:text-white text-xs md:text-base font-medium md:font-bold w-16 sm:w-24 md:w-40 h-12 md:h-16"
        >
          Recently Sold
        </button>
        <button
          onClick={() => getAscendingPhunks()}
          className="rounded-full border-primary border-2 hover:bg-primary text-primary hover:text-white text-xs md:text-base font-medium md:font-bold w-16 sm:w-24 md:w-40 h-12 md:h-16"
        >
          Id
        </button>
        <button
          onClick={() => getFloorPhunks()}
          className="rounded-full border-primary border-2 hover:bg-primary text-primary hover:text-white text-xs md:text-base font-medium md:font-bold w-16 sm:w-24 md:w-40 h-12 md:h-16"
        >
          Floor ({floor})
        </button>
      </div>

      <section className="container mx-auto my-7 md:my-24">
        <div className="grid grid-cols-4 gap-4">
          {phunks.map((phunk, idx) => {
            if (phunk < 10) {
              // @ts-ignore
              phunk = `00${phunk}` as const;
            } else if (phunk < 100) {
              // @ts-ignore
              phunk = `0${phunk}`;
            }
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
