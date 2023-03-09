import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import Heading from "../Components/Heading.jsx";
import Subheading from "../Components/Subheading.jsx";
import CalculatorAndSidePannel from "../Components/CalculatorAndSidePannel.jsx";
import CalculatorWrapper from "../Components/CalculatorWrapper.jsx";
import Calculator from "../Components/Calculator.jsx";

import SliderInput from "../Components/SliderInput.jsx";
import Dropdown from "../Components/Dropdown.jsx";
import DoughnutChart from "@/Components/DoughnutChart.jsx";
import CollapsibleBox from "@/Components/CollapsibleBox.jsx";
import RelatedCalculators from "@/Components/RelatedCalculators.jsx";

export default function Home() {
  const [initialAmount, setInitialAmount] = useState(100000);
  const [finalAmount, setFinalAmount] = useState(1000000);
  const [years, setYears] = useState(10);

  const [dropValue, setDropValue] = useState("a");

  const [output, setOutput] = useState("25.89");

  function calculate() {}

  return (
    <>
      <Head>
        <title>NSC calculator</title>
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
          <Heading blue={"National Savings Certificate"} />

          {/* Subheading */}
          <Subheading>
            National Savings Certificate (NSC) is a savings scheme offered by
            the Government of India that is aimed at encouraging small savings
            among Indian citizens. NSC is a fixed income investment that offers
            a guaranteed return on investment.
          </Subheading>
        </div>

        {/* Calculator and side pannel */}
        <CalculatorAndSidePannel height={457}>
          {/* Calculator and graph (WRAPPER) */}
          <CalculatorWrapper>
            {/* Calculator */}
            <Calculator calculate={calculate}>
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

                <div>
                  <Dropdown
                    heading={"Compounding Frequency"}
                    value={dropValue}
                    setValue={setDropValue}
                  ></Dropdown>
                </div>
              </div>
            </Calculator>

            {/* Charts/Graph wrapper */}
            <div className={"lg:w-[50%]"}>
              {/* Charts/Graph */}
              <div className={" relative object-right-top"}>
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
                        {(finalAmount - initialAmount).toLocaleString("en-In")}
                      </div>
                    </div>
                  </div>
                </>
              </div>

              {/* Output box */}
              <div className={"flex-col "}>
                {/*CARG output*/}
                <div className={"flex justify-between font-medium mb-3"}>
                  <div id="CAGR_output">CAGR</div>
                  <div className={"font-semibold"}>{output}%</div>
                </div>
              </div>
            </div>
          </CalculatorWrapper>

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
        </CalculatorAndSidePannel>

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
