import { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import { useQuery } from "@apollo/client";

const phunkIpfsBaseUrl =
  "https://middlemarch.mypinata.cloud/ipfs/QmcvdPd7Jai74e595Mgx2u6D8QZZ1TGSFC2EQQNayQVJL8/";
const phunksToShow = 8;

const GET_PHUNKS = gql`
  {
    accounts(first: 5) {
      id
      tokenBalanceRaw
      tokenBalance
      totalTokensHeldRaw
    }
    phunks(first: 5) {
      id
      owner {
        id
      }
      activeBid {
        id
      }
      activeListing {
        id
      }
    }
  }
`;

const PhunkBoard = () => {
  const [phunks, setPhunks] = useState<number[]>([]);
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  const { loading, error, data } = useQuery(GET_PHUNKS);

  useEffect(() => {
    const phunkList = [];
    for (let i = 0; i < phunksToShow; i++) {
      phunkList.push(getRandomInt(10000));
    }
    setPhunks(phunkList);
  }, []);

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  return (
    <section className="container mx-auto my-7 md:my-24">
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
    </section>
  );
};

export default PhunkBoard;
