import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import Heading from "../Components/Heading.jsx";
import Subheading from "../Components/Subheading.jsx";
import CalculatorAndSidePannel from "../Components/CalculatorAndSidePannel.jsx";
import CalculatorWrapper from "../Components/CalculatorWrapper.jsx";
import Calculator from "../Components/Calculator.jsx";
import InputBoxWrapper from "../Components/InputBoxWrapper.jsx";
import InfoBox from "../Components/InfoBox.jsx";
import Dropdown from "../Components/Dropdown.jsx";
import ChartFooterElement from "../Components/ChartFooterElement.jsx";
import InputDisabled from "../Components/InputDisabled.jsx";
import Table from "../Components/Table.jsx";

import SliderInput from "../Components/SliderInput.jsx";
import UnorderedList from "../Components/UnorderedList.jsx";
import RelatedCalculators from "@/Components/RelatedCalculators.jsx";

export default function Home() {
  const [totalInvestmentAmount, setTotalInvestmentAmount] = useState(100000);
  const [compoundingFrequency, setCompoundingFrequency] =
    useState("Half-Yearly");

  let CAGR = 25.89;

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
        <meta name="description" content="NSC Calculator" />
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
                    step={1000}
                    value={totalInvestmentAmount}
                    setValue={setTotalInvestmentAmount}
                  />
                </div>

                <InputDisabled heading={"Interest rate"} value={"7%"} />
                <InputDisabled heading={"Time Period (Yrs)"} value={"5 Yrs"} />

                <Dropdown
                  heading={"Compounding Frequency"}
                  options={["Half-Yearly", "Yearly"]}
                  value={compoundingFrequency}
                  setValue={setCompoundingFrequency}
                />
              </InputBoxWrapper>
            </Calculator>

            {/* Charts/Graph wrapper */}
            <div className={"lg:w-[50%]"}>
              {/* Charts/Graph */}
              <div className={" relative object-right-top"}>
                {/* <DoughnutChart
                  initialInvestment={initialAmount}
                  finalInvestment={finalAmount}
                  dependency={output}
                /> */}
              </div>

              {/* Output box */}
              <div className={"flex-col "}>
                {/*CARG output*/}
                <ChartFooterElement
                  id={"invested"}
                  label={"Invested"}
                  value={totalInvestmentAmount}
                />

                {/* <ChartFooterElement
                  id={"totalInterest"}
                  label={"Total Interest"}
                  value={}
                />
                <ChartFooterElement
                  id={"totalAmount"}
                  label={"Total Amount"}
                  value={}
                  last={true}
                /> */}
              </div>
            </div>
          </CalculatorWrapper>

          {/* Side Pannel */}
          <div className="xl:max-h-[413.2px]  xl:w-[23%] ">
            <InfoBox
              type={"sidePannel"}
              height={403}
              contents={[
                [
                  "National Savings Certificate",
                  "National Savings Certificate (NSC) is a savings scheme offered by the Government of India that is aimed at encouraging small savings among Indian citizens.",
                ],
                [
                  "Maturity",
                  "NSC VIII issues mature at the completion of 5th year of deposit.",
                ],
                [
                  "Lock-in period of NSC",
                  "NSC cannot be withdrawn before maturity. Only in case of death of the account holder, withdrawal is allowed.",
                ],
                [
                  "Interest rates",
                  <Table
                    heading={["Date Range", "Interest Rate (% per annum)"]}
                    content={[
                      ["01-Jan-2023 to 31-Mar-2023", "7.0%"],
                      ["01-Oct-2022 to 31-Dec-2022", "6.8%"],
                      ["01-Jul-2022 to 30-Sep-2022", "6.8%"],
                      ["01-Apr-2022 to 30-Jun-2022", "6.8%"],
                      ["01-Jan-2022 to 31-Mar-2022", "6.8%"],
                      ["01-Oct-2021 to 31-Dec-2021", "6.8%"],
                      ["01-Jul-2021 to 30-Sep-2021", "6.8%"],
                      ["01-Apr-2021 to 30-Jun-2021", "6.8%"],
                      ["01-Jan-2021 to 31-Mar-2021", "6.8%"],
                      ["01-Oct-2020 to 31-Dec-2020", "6.8%"],
                      ["01-Jul-2020 to 30-Sep-2020", "6.8%"],
                      ["01-Apr-2020 to 30-Sep-2020", "6.8%"],
                      ["01-Oct-2019 to 31-Mar-2020", "7.9%"],
                      ["01-Jul-2019 to 30-Sep-2019", "7.9%"],
                      ["01-Jan-2019 to 30-Jun-2019", "8.0%"],
                      ["01-Oct-2018 to 31-Dec-2018", "8.0%"],
                      ["01-Jan-2018 to 30-Sep-2018", "7.6%"],
                      ["01-Jul-2017 to 31-Dec-2017", "7.8%"],
                      ["01-Apr-2017 to 30-Jun-2017", "7.9%"],
                      ["01-Oct-2016 to 31-Mar-2017", "8.0%"],
                      ["01-Apr-2016 to 30-Sep-2016", "8.1%"],
                      ["01-Apr-2013 to 31-Mar-2016", "8.5%"],
                    ]}
                  />,
                ],
                [
                  "Tax implications",
                  "NSC qualifies for tax benefits under Section 80C.The interest earned on NSC investments is taxable.Refer FAQs for more information.",
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
