import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
// import styles from '@/styles/Home.module.css';
import Input from "../Components/Input.jsx";
import LineChart from "../Components/LineChart.jsx";
import DoughnutChart from "@/Components/DoughnutChart.jsx";
import CollapsibleBox from "@/Components/CollapsibleBox.jsx";

import { FaChartPie, FaChartLine } from "react-icons/fa";
import { MdOutlineShowChart } from "react-icons/md";

export default function Home() {
  const [initialAmount, setInitialAmount] = useState(100000);
  const [finalAmount, setFinalAmount] = useState(1000000);
  const [years, setYears] = useState(10);

  let CAGR = 25.89;
  const [absoluteReturns, setAbsoluteReturns] = useState(9000);
  const [output, setOutput] = useState("25.89");

  const [isLineChart, setCheck] = useState(true);
  const [graphPoints, setGraphPoints] = useState([
    100000, 125890, 158482.921, 199514.1492469, 251168.36248692241,
    316195.85153478663, 398058.9574971429, 501116.42159315315,
    630855.4631436205, 794183.9425515039, 1000000,
  ]);

  function calculate() {
    CAGR = (Math.pow(finalAmount / initialAmount, 1 / years) - 1) * 100;
    if (CAGR === Infinity || isNaN(CAGR)) {
      setOutput("-");
    } else {
      setOutput(CAGR.toFixed(2));
    }
    setAbsoluteReturns(Number((finalAmount - initialAmount) / 100));
    calculateGraphPoints();
  }

  function calculateGraphPoints() {
    let points = [];
    let cumulativeAmount = initialAmount;
    for (let i = 0; i <= years; i++) {
      points.push(cumulativeAmount);
      cumulativeAmount = cumulativeAmount + (cumulativeAmount * CAGR) / 100;
    }
    setGraphPoints(points);
  }

  return (
    <>
      <Head>
        <title>CAGR calculator</title>
        <link rel="icon" href="./logo.png" />
        <link href="/dist/output.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          as="font"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp;family=Rubik:wght@400;500;600&amp;display=swap"
        />
        <meta name="description" content="CAGR Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Background image */}
      <div
        className={
          "bg-bg_image w-full h-full bg-center bg-cover object-cover fixed"
        }
      />

      <main
        className={
          "relative p-20 w-full overflow-x-hidden flex-col justify-between text-neutral-700 "
        }
      >
        <div>
          {/* Heading */}
          <div
            className={
              "text-zinc-900 text-5xl font-semibold text-center leading-tight"
            }
          >
            <span className={"text-blue-600"}>Compound Annual Growth Rate</span>{" "}
            Calculator
          </div>
          {/* Subheading */}
          <p className={"text-neutral-700 mt-3 text-lg text-center"}>
            CAGR stands for Compound Annual Growth Rate, which is a commonly
            used financial metric to measure the average growth rate of an
            investment over a specified period of time. It’s calculated as the
            average rate of return that would have to be compounded annually to
            reach the final value from the initial value over the given time
            period. CAGR is expressed as a percentage and it is useful in
            comparing the growth of different investments. It provides a more
            accurate picture of the growth of an investment than simple average
            returns, as it takes into account the compounding effect of
            reinvested returns.
          </p>
        </div>

        {/* Calculator and side pannel */}
        <div className={"flex flex-wrap w-full mt-[50px] justify-between"}>
          {/* Calculator and graph (WRAPPER) */}
          <div
            className={
              "flex p-[30px] w-[75%] border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]"
            }
          >
            {/* Calculator */}
            <div className={"text-left text-lg w-[50%] "}>
              {/* Input box wrapper */}
              <div className={"flex-col justify-evenly font-medium "}>
                {/* Input box */}
                <div>
                  {/*Initial investment block*/}
                  <div>Initial investment</div>
                  <Input
                    id="initialInvestment"
                    type="rupees"
                    min={1000}
                    max={10000000}
                    step={100}
                    value={initialAmount}
                    setValue={setInitialAmount}
                  />
                </div>

                <div>
                  {/*Final investment block*/}
                  <div>Final investment</div>
                  <Input
                    id="finalInvestment"
                    type="rupees"
                    min={1000}
                    max={10000000}
                    step={100}
                    value={finalAmount}
                    setValue={setFinalAmount}
                  />
                </div>

                <div>
                  {/*Duration of investment block*/}
                  <div>Duration of investment(Years)</div>
                  <Input
                    id="years"
                    min={1}
                    max={40}
                    value={years}
                    setValue={setYears}
                  />
                </div>
              </div>

              {/* Control Box Wrapper */}
              <div
                className={"flex flex-warp justify-center m-4 cursor-pointer"}
              >
                {/* Control boxes */}
                <div
                  className={
                    " border-[0.1rem] border-dashed border-[#36b366] p-[4px] rounded-[35px] w-[65%]"
                  }
                >
                  <div
                    className={
                      "text-center text-white font-semibold rounded-[35px] p-[0.3rem]   shadow-lg shadow-[#36b3665d] bg-[#00d382]"
                    }
                    onClick={calculate}
                  >
                    Calculate
                  </div>
                </div>
              </div>
            </div>

            {/* vertical line */}
            <div
              className={
                " -my-4 mx-5 w-0 rounded-[50px] border-2 border-solid border-[#7070701A]"
              }
            ></div>

            {/* Charts/Graph wrapper */}
            <div className={"w-[50%]"}>
              {/* Toggle Button */}
              <div
                className={
                  " absolute flex flex-wrap z-10 place-content-center  w-[61px] h-[33px]  rounded-[30px] border-2 border-solid border-white bg-[#505C6227] shadow-md shadow-[#505C6227] backdrop-blur-[30px] m-0"
                }
              >
                <button
                  className={
                    isLineChart
                      ? " w-[23px] h-[23px] rounded-[50px] text-white bg-[#0161FF] border-2 border-solid border-white p-[2px] mx-[1px]"
                      : " w-[23px] h-[23px] rounded-[50px] p-[2px] text-[#909090] mx-[1px]"
                  }
                  onClick={() => {
                    setCheck(true);
                  }}
                >
                  <MdOutlineShowChart />
                </button>
                <button
                  className={
                    isLineChart
                      ? " w-[23px] h-[23px] rounded-[50px] p-[2px] text-[#909090] mx-[1px]"
                      : " w-[23px] h-[23px] rounded-[50px] text-white bg-[#0161FF] border-2 border-solid border-white p-[2px] mx-[1px]"
                  }
                  onClick={() => {
                    setCheck(false);
                  }}
                >
                  <FaChartPie />
                </button>
              </div>

              {/* Charts/Graph */}
              <div className={" relative object-right-top"}>
                {isLineChart ? (
                  <LineChart points={graphPoints} />
                ) : (
                  <DoughnutChart
                    initialInvestment={initialAmount}
                    finalInvestment={finalAmount}
                    dependency={output}
                  />
                )}
              </div>

              {/* Output box */}
              <div className={"flex-col "}>
                {/*CARG output*/}
                <div className={"flex justify-between font-medium"}>
                  <div id="CAGR_output">CAGR</div>
                  <div className={"font-semibold"}>{output}%</div>
                </div>
                <div className={"flex justify-between"}>
                  <div id="absoluteReturns">Absolute Returns</div>
                  <div className={"font-semibold"}>{absoluteReturns}%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Pannel */}
          <div
            className={
              " w-[23%] px-[20px] py-[22px] border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px] overflow-y-scroll "
            }
          >
            <div className={"font-bold "}>How to use this calculator?</div>
            <CollapsibleBox
              heading={"Compound Annual Growth Rate"}
              content={
                "CAGR stands for Compound Annual Growth Rate, which is a commonly used financial metric to measure the average growth rate of an investment over a specified period of time."
              }
            />
            <CollapsibleBox
              heading={"Uses of CAGR"}
              content={
                "CAGR is the best formula for evaluating how different investments have performed over time.Investors can compare the CAGR to evaluate how well one stock performed against other stocks."
              }
            />
            <CollapsibleBox
              heading={"How can CAGR  help me?"}
              content={
                "CAGR lets you know the compounded returns you earn on an annual basis irrespective of the individual yearly performances of the fund. So you can compare the performance of different investments."
              }
            />
          </div>
        </div>

        <div
          className={
            " px-[25px] py-[10px] mt-[50px] border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]"
          }
        >
          <CollapsibleBox
            heading={"What is CAGR?"}
            content={
              "CAGR stands for Compound Annual Growth Rate, which is a commonly used financial metric to measure the average growth rate of an investment over a specified period of time. It's calculated as the average rate of return that would have to be compounded annually to reach the final value from the initial value over the given time period."
            }
          />

          <CollapsibleBox
            heading={"Why should I calculate CAGR?"}
            content={
              "CAGR is expressed as a percentage and it is useful in comparing the growth of different investments. It provides a more accurate picture of the growth of an investment than simple average returns, as it takes into account the compounding effect of reinvested returns. CAGR provides a standardised way to compare the performance of different investments over the same time period, which makes it easier to determine which investments have performed better or worse."
            }
          />

          <CollapsibleBox
            heading={"How does the calculator work?"}
            content={
              <>
                <div>It uses the following logic</div>
                <br />
                <Image
                  alt="CAGR formula"
                  src={"/CAGRformula.png"}
                  width={200}
                  height={150}
                />
              </>
            }
          />

          <CollapsibleBox
            heading={"What are the advantages of calculating CAGR?"}
            content={
              <ul>
                <li>
                  Future projections: By using the CAGR of an investment, you
                  can make projections about what the future value of your
                  investment might be, based on past performance. This can be
                  helpful in making investment decisions or setting financial
                  goals.
                </li>
                <li>
                  Investment performance evaluation: CAGR helps you to evaluate
                  the performance of your investment over a specified period of
                  time. It provides a clear picture of the growth or decline of
                  your investment, which can help you make informed decisions
                  about your investments.
                </li>
                <li>
                  Portfolio analysis: CAGR can be used to analyse the
                  performance of your portfolio as a whole, which can be helpful
                  in making adjustments to your investment strategy.
                </li>
              </ul>
            }
          />

          <CollapsibleBox
            heading={"How to use CAGR calculator?"}
            content={
              "FundsIndia CAGR calculator is an intuitive tool that calculates the CAGR easily. Just plug in the Initial, Final Investment values along with the tenure of the investment and FundsIndia Calculator will give you the accurate CAGR of your investment."
            }
          />
        </div>

        <div className={"mt-[30px]"}>
          <div className={"font-bold mb-[14px]"}>Related Calculators</div>
        </div>
      </main>
    </>
  );
}
