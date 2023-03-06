import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Input from "../Components/Input.jsx";
import LineChart from "../Components/LineChart.jsx";
import DoughnutChart from "@/Components/DoughnutChart.jsx";
import CollapsibleBox from "@/Components/CollapsibleBox.jsx";
import RelatedCalculator from "@/Components/RelatedCalculator.jsx";

import { FaChartPie, FaChartLine } from "react-icons/fa";
import { MdOutlineShowChart } from "react-icons/md";

export default function Home() {
  const [initialAmount, setInitialAmount] = useState(100000);
  const [finalAmount, setFinalAmount] = useState(1000000);
  const [years, setYears] = useState(10);

  let CAGR = 25.89;
  const [absoluteReturns, setAbsoluteReturns] = useState(900);
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
    setAbsoluteReturns(
      Number(((finalAmount - initialAmount) * 100) / initialAmount)
    );
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
          "relative [@media(max-width:470px)]:p-5 [@media(max-width:1280px)]:p-10 xl:p-20 w-full overflow-x-hidden flex-col justify-between text-neutral-700 "
        }
      >
        <div>
          {/* Heading */}
          <div
            className={
              "text-zinc-900 text-5xl font-semibold text-center leading-tight  [@media(max-width:300px)]:text-3xl"
            }
          >
            <span className={"text-blue-600"}>Compound Annual Growth Rate</span>{" "}
            Calculator
          </div>
          {/* Subheading */}
          <p
            className={
              "text-neutral-700 mt-3 text-lg text-center  [@media(max-width:300px)]:text-sm lg:text-lg"
            }
          >
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
        <div
          className={
            "xl:flex max-xl:flex-col flex-wrap w-full xl:max-h-[403px]  mt-[50px] [@media(max-width:400px)]:mt-[20px] justify-between"
          }
        >
          {/* Calculator and graph (WRAPPER) */}
          <div
            className={
              "lg:flex max-md:flex-col p-[30px] xl:w-[75%]  max-lg:space-y-7  border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]"
            }
          >
            {/* Calculator */}
            <div className={"text-left text-lg lg:w-[50%] "}>
              {/* Input box wrapper */}
              <div
                className={
                  "flex-col justify-evenly font-medium max-sm:space-y-3  xl:space-y-[10px] lg:space-y-[15px]"
                }
              >
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
                  <div>Duration of investment</div>
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
                className={
                  "flex flex-warp justify-center mt-[40px] cursor-pointer "
                }
              >
                {/* Control boxes */}
                <div
                  className={
                    " border-[0.1rem] border-dashed border-[#36b366] p-[4px] rounded-[35px] w-[65%]"
                  }
                >
                  <div
                    className={
                      "text-center text-white font-semibold rounded-[35px] p-[0.4rem]   shadow-lg shadow-[#36b3665d] bg-[#00d382]"
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
                " -my-4 mx-5 w-0  max-lg:h-0 max-lg:w-auto max-lg:-mx-2   rounded-[50px] border-2 border-solid border-[#7070701A]"
              }
            ></div>

            {/* Charts/Graph wrapper */}
            <div className={"lg:w-[50%]"}>
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
                  <>
                    <LineChart points={graphPoints} />
                    <div className={"mb-3"}>
                      Investment of{" "}
                      <span className={"font-semibold"}>
                        Rs.{initialAmount.toLocaleString("en-In")}
                      </span>{" "}
                      grew to{" "}
                      <span className={"font-semibold"}>
                        Rs.{finalAmount.toLocaleString("en-In")}
                      </span>{" "}
                      at the end of{" "}
                      <span className={"font-semibold"}>{years}</span> years.
                    </div>
                  </>
                ) : (
                  <>
                    <DoughnutChart
                      initialInvestment={initialAmount}
                      finalInvestment={finalAmount}
                      dependency={output}
                    />
                    <div>
                      <div className={"flex justify-between font-medium mb-3"}>
                        <div>Invested</div>
                        <div className={"font-semibold"}>
                          {initialAmount.toLocaleString("en-In")}
                        </div>
                      </div>
                      <div className={"flex justify-between font-medium mb-3"}>
                        <div>Gains</div>
                        <div className={"font-semibold"}>
                          {(finalAmount - initialAmount).toLocaleString(
                            "en-In"
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Output box */}
              <div className={"flex-col "}>
                {/*CARG output*/}
                <div className={"flex justify-between font-medium mb-3"}>
                  <div id="CAGR_output">CAGR</div>
                  <div className={"font-semibold"}>{output}%</div>
                </div>
                <div className={"flex justify-between "}>
                  <div id="absoluteReturns">Absolute Returns</div>
                  <div className={"font-semibold"}>{absoluteReturns}%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Pannel */}
          <div
            className={
              " max-h-[inherit]    xl:w-[23%] px-[20px] py-[22px] max-xl:mt-[30px]  border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px] overflow-y-scroll "
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
              last={true}
            />
          </div>
        </div>

        {/* FAQ box */}
        <div
          className={
            " px-[25px] py-[10px] mt-[50px] border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]"
          }
        >
          <CollapsibleBox
            heading={"What is CAGR?"}
            headingBold={true}
            content={
              "CAGR stands for Compound Annual Growth Rate, which is a commonly used financial metric to measure the average growth rate of an investment over a specified period of time. It's calculated as the average rate of return that would have to be compounded annually to reach the final value from the initial value over the given time period."
            }
          />

          <CollapsibleBox
            heading={"Why should I calculate CAGR?"}
            headingBold={true}
            content={
              "CAGR is expressed as a percentage and it is useful in comparing the growth of different investments. It provides a more accurate picture of the growth of an investment than simple average returns, as it takes into account the compounding effect of reinvested returns. CAGR provides a standardised way to compare the performance of different investments over the same time period, which makes it easier to determine which investments have performed better or worse."
            }
          />

          <CollapsibleBox
            heading={"How does the calculator work?"}
            headingBold={true}
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
            headingBold={true}
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
            headingBold={true}
            content={
              "FundsIndia CAGR calculator is an intuitive tool that calculates the CAGR easily. Just plug in the Initial, Final Investment values along with the tenure of the investment and FundsIndia Calculator will give you the accurate CAGR of your investment."
            }
            last={true}
          />
        </div>

        {/* Related Calculators */}
        <div className={"my-[30px] "}>
          <div className={"font-bold mb-[14px] text-[#464143]"}>
            Related Calculators
          </div>

          <div className={"overflow-x-scroll flex -mx-20  "}>
            <RelatedCalculator
              name={"Gratuity Calculator"}
              path={"/gratuity"}
              first={true}
            />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />

            <RelatedCalculator name={"SWP Calculator"} path={"#"} />
          </div>
        </div>
      </main>
    </>
  );
}
