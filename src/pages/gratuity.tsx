import Head from "next/head";
import { useState } from "react";
import Heading from "../Components/Heading.jsx";

import SliderInput from "../Components/SliderInput.jsx";
import Subheading from "../Components/Subheading.jsx";
import CalculatorAndSidePannel from "../Components/CalculatorAndSidePannel.jsx";
import CalculatorWrapper from "../Components/CalculatorWrapper.jsx";
import Calculator from "../Components/Calculator.jsx";
import InputBoxWrapper from "../Components/InputBoxWrapper.jsx";
import InfoBox from "../Components/InfoBox.jsx";

import UnorderedList from "../Components/UnorderedList.jsx";
import RelatedCalculators from "@/Components/RelatedCalculators.jsx";
import Input from "../Components/SliderInput.jsx";

export default function Home() {
  const [monthlySalary, setMonthlySalary] = useState(70000);
  const [years, setYears] = useState(10);

  const [output, setOutput] = useState("4,03,846");

  function calculate() {
    console.log(monthlySalary);
    setOutput(
      Math.round((15 * monthlySalary * years) / 26).toLocaleString("en-In")
    );
  }

  return (
    <>
      <Head>
        <title>Gratuity calculator</title>
        <link rel="icon" href="./logo.png" />
        <link href="/dist/output.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          as="font"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp;family=Rubik:wght@400;500;600&amp;display=swap"
        />
        <meta name="description" content="Gratuity Calculator" />
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
          <Heading blue={"Gratuity"} />

          {/* Subheading */}
          <Subheading>
            Gratuity is a benefit given by an employer to an employee as a token
            of appreciation for their service and loyalty. It is typically
            calculated as a certain percentage of an employee’s salary, based on
            the number of years they have worked for the company. The gratuity
            amount is paid to the employee upon the completion of a certain
            period of service or upon retirement, and is meant to provide
            financial security for the employee in their later years.
          </Subheading>
        </div>

        {/* Calculator and side pannel */}
        <CalculatorAndSidePannel>
          {/* Calculator and output (WRAPPER) */}
          <CalculatorWrapper>
            {/* Calculator */}
            <Calculator calculate={calculate}>
              {/* Input box wrapper */}
              <InputBoxWrapper>
                {/* Input box */}
                <div>
                  {/*Monthly salary block*/}
                  <div>Monthly salary(Basic+DA)</div>
                  <SliderInput
                    id="monthlySalary"
                    type="rupees"
                    min={10000}
                    max={10000000}
                    step={20000}
                    value={monthlySalary}
                    setValue={setMonthlySalary}
                  />
                </div>

                <div>
                  {/*Years of service block*/}
                  <div>Years of service</div>
                  <SliderInput
                    id="years"
                    min={5}
                    max={50}
                    value={years}
                    setValue={setYears}
                  />
                </div>
              </InputBoxWrapper>
            </Calculator>

            {/* Output wrapper */}
            <div className={"lg:w-[50%] text-center self-center leading-9"}>
              <div className={"font-bold text-4xl "}>{output}</div>
              <div className="font-semibold">Payable Gratuity</div>
            </div>
          </CalculatorWrapper>

          {/* Side Pannel */}
          <div className="xl:max-h-[311.2px]  xl:w-[23%] ">
            <InfoBox
              type="sidePannel"
              contents={[
                [
                  "Gratuity",
                  "Gratuity is a benefit given by an employer to an employee as a token of appreciation for their service and loyalty.",
                ],
                [
                  "Benefits of Gratuity",
                  "Gratuity is considered a long-term benefit, as it provides financial support to employees after they leave the company. It is usually paid in addition to any other benefits, such as severance pay, pension, or retirement benefits.",
                ],
                [
                  "Uses of this calculator",
                  "Calculating your gratuity can help with retirement planning, financial security, understanding your benefits, negotiating employment terms, and budgeting.",
                ],
                [
                  "Tax implications of gratuity",
                  <div className={" space-y-3"}>
                    <div>
                      Gratuity paid by the government to government employees is
                      fully exempt from tax while others are taxed as follows
                    </div>
                    <div>The least of the following is exempt from tax:</div>
                    <UnorderedList
                      content={[
                        "Last salary (basic + DA)* number of years of employment*15/26;",
                        "Rs. 20 lakhs (which has been hiked from Rs. 10 Lakh as per the amendment);",
                        "Gratuity Actually received",
                      ]}
                    />
                  </div>,
                ],
              ]}
            />
          </div>
        </CalculatorAndSidePannel>

        {/* FAQ box */}
        <InfoBox
          type="faq"
          contents={[
            [
              "What is Gratuity?",
              <>
                <div>
                  Gratuity is a benefit given by an employer to an employee as a
                  token of appreciation for their service and loyalty. It is
                  typically calculated as a certain percentage of an employee's
                  salary, based on the number of years they have worked for the
                  company. The gratuity amount is paid to the employee upon the
                  completion of a certain period of service or upon retirement,
                  and is meant to provide financial security for the employee in
                  their later years.
                </div>
                <div>
                  Gratuity is considered a long-term benefit, as it provides
                  financial support to employees after they leave the company.
                  It is usually paid in addition to any other benefits, such as
                  severance pay, pension, or retirement benefits.
                </div>
              </>,
            ],
            [
              "Why should I calculate Gratuity?",
              <>
                <div>
                  Calculating your gratuity can provide important information
                  about your financial future and help you make informed
                  decisions about your employment and financial planning.
                  Calculating Gratuity can help in the following ways,
                </div>
                <UnorderedList
                  content={[
                    "Retirement planning: Gratuity can provide a significant source of income for employees during their retirement years, so it's important to calculate the amount you're eligible for and factor it into your retirement planning.",
                    "Financial security: Gratuity is paid to employees upon retirement or completion of a certain period of service, and can provide financial security during a time when regular income may have ceased.",
                    "Understanding your benefits: Calculating your gratuity can help you understand your total employee benefits package and how much you will receive when you retire or leave the company.",
                    "Negotiating employment terms: If you're considering a job offer, calculating your potential gratuity can help you determine the total compensation package and make an informed decision about the offer.",
                    "Budgeting: Calculating your gratuity can help you plan your budget and ensure that you have enough money to meet your financial obligations, both now and in the future.",
                  ]}
                />
              </>,
            ],
            [
              "How does the Gratuity calculator work?",
              <div className="space-y-2">
                <div>It uses the following logic</div>
                <UnorderedList
                  content={[
                    <div className="flex-col space-y-2">
                      <div>
                        The amount of gratuity for employees whose employer is
                        covered under the Gratuity Act can be calculated using
                        the formula:
                      </div>
                      <div className="flex justify-center">
                        <div className="text-left">
                          <div className="font-bold">
                            Gratuity = n*b*15 / 26
                          </div>
                          <div>
                            Where n = Tenure of service completed in the company
                          </div>
                          <div>
                            b = Last drawn basic salary + dearness allowance
                          </div>
                        </div>
                      </div>
                      <div>
                        As per the Gratuity Act, the amount of gratuity cannot
                        be more than Rs 20 lakh. Any excesses would be treated
                        as ex-gratia.{" "}
                      </div>
                      <div>
                        If the number of years you have worked in the last year
                        of employment is more than six months, then it will be
                        rounded to the nearest figure. Suppose your tenure of
                        service is 16 years 7 months, then you receive the
                        gratuity for 17 years. Otherwise, its for 16 years if it
                        happens to be 16 years 4 months.
                      </div>
                    </div>,

                    "For employees whose employer is not covered under the Gratuity Act, the gratuity amount would be calculated as per the half-month salary on each completed year of service.",
                  ]}
                />
                <div className="flex justify-center">
                  <div className="font-semibold text-left">
                    The formula is: (15 * Your last drawn salary * the working
                    tenure) / 30.
                  </div>
                </div>
              </div>,
            ],
            [
              "How to use FundsIndia Gratuity Calculator?",
              "FundsIndia Gratuity calculator is very intuitive and does not require any technical knowledge. Just plug in your monthly salary and tenure of service and the calculator will give you your precise gratuity amount.",
            ],
          ]}
        />

        {/* Related Calculators */}
        <RelatedCalculators
          contents={[
            ["CAGR Calculator", "/"],
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
