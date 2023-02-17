import { useState, useEffect } from "react";
import { gql } from "@apollo/client";

import { useQuery } from "@apollo/client";

const phunkIpfsBaseUrl =
  "https://middlemarch.mypinata.cloud/ipfs/QmcvdPd7Jai74e595Mgx2u6D8QZZ1TGSFC2EQQNayQVJL8/";
const phunksToShow = 8;

// TODO: get list of ids sorted by recently sold
const GET_PHUNKS = gql`
  {
    phunks(first: 1000) {
      activeListing {
        id
      }
    }
  }
`;

const PhunkBoard = () => {
  const [phunks, setPhunks] = useState<number[]>([]);
  const { loading, error, data } = useQuery(GET_PHUNKS);

  // Phunks data received from the graph
  useEffect(() => {
    if (data && !loading) {
      setPhunks(
        data.phunks.reduce((accumulator: any, phunk: any, index: number) => {
          if (phunk["activeListing"] && accumulator.length < phunksToShow) {
            console.log(`accumulator: ${accumulator}, phunk`);
            console.log(phunk);
            return [...accumulator, phunk["activeListing"]["id"]];
          } else return accumulator;
        }, [])
      );
    }
  }, [data]);

  const renderPhunkBoard = () => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {phunks.map((phunk, idx) => {
          return (
            <div key={`phunk-image-${idx}`}>
              <img
                className="aspect-square"
                src={`${phunkIpfsBaseUrl}${phunk}.png`}
                alt=""
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="container mx-auto my-7 md:my-24">
      {/* <div className="grid grid-cols-4 gap-4"> */}
      {data ? renderPhunkBoard() : ""}
      {/* </div> */}
    </section>
  );
};

export default PhunkBoard;
