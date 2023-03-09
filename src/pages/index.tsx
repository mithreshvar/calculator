import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import Heading from "../Components/Heading.jsx";
import Subheading from "../Components/Subheading.jsx";
import CalculatorAndSidePannel from "../Components/CalculatorAndSidePannel.jsx";
import CalculatorWrapper from "../Components/CalculatorWrapper.jsx";
import Calculator from "../Components/Calculator.jsx";
import InputBoxWrapper from "../Components/InputBoxWrapper.jsx";
import ChartToggle from "../Components/ChartToggle.jsx";
import InfoBox from "../Components/InfoBox.jsx";
import ChartFooterElement from "../Components/ChartFooterElement.jsx";

import SliderInput from "../Components/SliderInput.jsx";
import UnorderedList from "../Components/UnorderedList.jsx";
import LineChart from "../Components/LineChart.jsx";
import DoughnutChart from "@/Components/DoughnutChart.jsx";
import RelatedCalculators from "@/Components/RelatedCalculators.jsx";

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
      Number(Math.round(((finalAmount - initialAmount) * 100) / initialAmount))
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
          "relative [@media(max-width:470px)]:p-5 [@media(max-width:1280px)]:p-10 xl:p-20 w-full overflow-x-hidden flex-col justify-between text-[#464143] font-['poppins']"
        }
      >
        <div>
          {/* Heading */}
          <Heading blue={"Compound Annual Growth Rate"} />

          {/* Subheading */}
          <Subheading>
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
          </Subheading>
        </div>

        {/* Calculator and side pannel */}
        <CalculatorAndSidePannel>
          {/* Calculator and graph (WRAPPER) */}
          <CalculatorWrapper>
            {/* Calculator */}
            <Calculator calculate={calculate}>
              {/* Input box wrapper */}
              <InputBoxWrapper>
                {/* Input box */}
                <div>
                  {/*Initial investment block*/}
                  <div>Initial investment</div>
                  <SliderInput
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
                  <SliderInput
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
                  <SliderInput
                    id="years"
                    min={1}
                    max={40}
                    value={years}
                    setValue={setYears}
                  />
                </div>
              </InputBoxWrapper>
            </Calculator>

            {/* Charts/Graph wrapper */}
            <div className={"lg:w-[50%]"}>
              {/* Toggle Button */}
              <ChartToggle isLineChart={isLineChart} setCheck={setCheck} />

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
                      <ChartFooterElement
                        id={"invested"}
                        label={"Invested"}
                        value={initialAmount.toLocaleString("en-In")}
                      />
                      <ChartFooterElement
                        id={"gains"}
                        label={"Gains"}
                        value={(finalAmount - initialAmount).toLocaleString(
                          "en-In"
                        )}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Output box */}
              <div className={"flex-col "}>
                {/*CARG output*/}
                <ChartFooterElement
                  id={"CAGR_output"}
                  label={"CAGR"}
                  value={output + "%"}
                />

                <ChartFooterElement
                  id={"absoluteReturns"}
                  label={"Absolute Returns"}
                  value={absoluteReturns + "%"}
                  last={true}
                />
              </div>
            </div>
          </CalculatorWrapper>

          {/* Side Pannel */}
          <div className="xl:max-h-[404.2px]  xl:w-[23%] ">
            <InfoBox
              type={"sidePannel"}
              contents={[
                [
                  "Compound Annual Growth Rate",
                  "CAGR stands for Compound Annual Growth Rate, which is a commonly used financial metric to measure the average growth rate of an investment over a specified period of time.",
                ],
                [
                  "Uses of CAGR",
                  "CAGR is the best formula for evaluating how different investments have performed over time.Investors can compare the CAGR to evaluate how well one stock performed against other stocks.",
                ],
                [
                  "How can CAGR  help me?",
                  "CAGR lets you know the compounded returns you earn on an annual basis irrespective of the individual yearly performances of the fund. So you can compare the performance of different investments.",
                ],
              ]}
            />
          </div>
        </CalculatorAndSidePannel>

        {/* FAQ box */}
        <InfoBox
          type={"faq"}
          contents={[
            [
              "What is CAGR?",
              "CAGR stands for Compound Annual Growth Rate, which is a commonly used financial metric to measure the average growth rate of an investment over a specified period of time. It's calculated as the average rate of return that would have to be compounded annually to reach the final value from the initial value over the given time period.",
            ],
            [
              "Why should I calculate CAGR?",
              "CAGR is expressed as a percentage and it is useful in comparing the growth of different investments. It provides a more accurate picture of the growth of an investment than simple average returns, as it takes into account the compounding effect of reinvested returns. CAGR provides a standardised way to compare the performance of different investments over the same time period, which makes it easier to determine which investments have performed better or worse.",
            ],
            [
              "How does the calculator work?",
              <>
                <div>It uses the following logic</div>
                <br />
                <Image
                  alt="CAGR formula"
                  src={"/CAGRformula.png"}
                  width={200}
                  height={150}
                />
              </>,
            ],
            [
              "What are the advantages of calculating CAGR?",
              <UnorderedList
                content={[
                  "Future projections: By using the CAGR of an investment, you can make projections about what the future value of your investment might be, based on past performance. This can be helpful in making investment decisions or setting financial goals.",
                  "Investment performance evaluation: CAGR helps you to evaluate the performance of your investment over a specified period of time. It provides a clear picture of the growth or decline of your investment, which can help you make informed decisions about your investments.",
                  "Portfolio analysis: CAGR can be used to analyze the performance of your portfolio as a whole, which can be helpful in making adjustments to your investment strategy.",
                ]}
              />,
            ],
            [
              "How to use CAGR calculator?",
              "FundsIndia CAGR calculator is an intuitive tool that calculates the CAGR easily. Just plug in the Initial, Final Investment values along with the tenure of the investment and FundsIndia Calculator will give you the accurate CAGR of your investment.",
            ],
          ]}
        />

        {/* Related Calculators */}
        <RelatedCalculators
          contents={[
            ["Gratuity Calculator", "/gratuity"],
            ["SWP Calculator", ""],
            ["SWP Calculator", ""],
            ["SWP Calculator", ""],
            ["SWP Calculator", ""],
            ["SWP Calculator", ""],
            ["SWP Calculator", ""],
            ["SWP Calculator", ""],
          ]}
        />
      </main>
    </>
  );
}
