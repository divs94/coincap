import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

export default function CoinApp() {
  const [coinData, setCoinData] = useState([]);
  // const url = "https://api.coincap.io/v2/assets";

  useEffect(() => {
    const url = "https://api.coincap.io/v2/assets";
    // console.log(img)
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log("coin res::", json.data);
        setCoinData(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="coin_card">
          <Table striped bordered hover responsive="md, lg" className="card_body">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Price</th>
                <th></th>
                <th>Market Cap</th>
                <th>VWAP(24Hr)</th>
                <th>Supply </th>
                <th>Volume(24Hr)</th>
                <th>Change(24Hr)</th>
              </tr>
            </thead>
            {coinData.slice(0, 50).map((data, index) => {
              // console.log(data)
              return (
                <tbody key={index}>
                  <tr>
                    <td>{data.rank}</td>
                    <td className="coinName">
                      <span className="coinImg_section">
                        <img
                          src="https://assets.coincap.io/assets/icons/btc@2x.png"
                          alt="icon"
                        />
                        <span className="coin_name">{data.name}</span>
                      </span>
                    </td>
                    <td>{data.priceUsd}</td>
                    <td>{data.price}</td>
                    <td>{data.marketCapUsd}</td>
                    <td>{data.volumeUsd24Hr}</td>
                    <td>{data.supply}</td>
                    <td>{data.vwap24Hr}</td>
                    <td className="coinhrs">{data.changePercent24Hr}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>

        {/* mobile view */}
      
      </div>
    </>
  );
}
