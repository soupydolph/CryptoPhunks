import { useState, useEffect } from "react";
import { gql } from "@apollo/client";

import { useQuery } from "@apollo/client";

const phunkIpfsBaseUrl =
  "https://middlemarch.mypinata.cloud/ipfs/QmcvdPd7Jai74e595Mgx2u6D8QZZ1TGSFC2EQQNayQVJL8/";

// Graph Queries
const GET_PHUNKS = gql`
  {
    phunks(first: 1000) {
      activeListing {
        id
      }
    }
  }
`;

const PhunkyBoard = (props: { phunksToShow: number }) => {
  const [phunks, setPhunks] = useState<number[]>([]);
  const { loading, error, data } = useQuery(GET_PHUNKS);

  const filterByActiveListing = (accumulator: number[], phunk: any) => {
    if (phunk["activeListing"] && accumulator.length < props.phunksToShow) {
      return [...accumulator, phunk["activeListing"]["id"]];
    } else return accumulator;
  };

  useEffect(() => {
    if (data && !loading) {
      setPhunks(data.phunks.reduce(filterByActiveListing, []));
    }
  }, [data]);

  const renderPhunkyBoard = () => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {phunks.map((phunk, idx) => {
          return (
            <div key={`phunk-image-${idx}`}>
              <img
                className="aspect-square"
                src={`${phunkIpfsBaseUrl}${phunk}.png`}
                alt={`Image for Phunk token id: ${phunk}`}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="container mx-auto my-7 md:my-24">
      {data ? renderPhunkyBoard() : ""}
    </section>
  );
};

export default PhunkyBoard;
