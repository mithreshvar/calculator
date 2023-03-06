import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Input from "../Components/Input.jsx";
import CollapsibleBox from "@/Components/CollapsibleBox.jsx";
import RelatedCalculator from "@/Components/RelatedCalculator.jsx";

export default function Home() {
  const [monthlySalary, setMonthlySalary] = useState(70000);
  const [years, setYears] = useState(10);

  const [output, setOutput] = useState("4,03,846");

  function calculate() {
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
          "relative [@media(max-width:470px)]:p-5 [@media(max-width:1280px)]:p-10 xl:p-20 w-full overflow-x-hidden flex-col justify-between text-neutral-700 "
        }
      >
        <div>
          {/* Heading */}
          <div
            className={
              "text-zinc-900 text-5xl font-semibold text-center leading-tigh  [@media(max-width:300px)]:text-3xl"
            }
          >
            <span className={"text-blue-600"}>Gratuity</span> Calculator
          </div>
          {/* Subheading */}
          <p
            className={
              "text-neutral-700 mt-3 text-lg text-center  [@media(max-width:300px)]:text-sm lg:text-lg"
            }
          >
            Gratuity is a benefit given by an employer to an employee as a token
            of appreciation for their service and loyalty. It is typically
            calculated as a certain percentage of an employee’s salary, based on
            the number of years they have worked for the company. The gratuity
            amount is paid to the employee upon the completion of a certain
            period of service or upon retirement, and is meant to provide
            financial security for the employee in their later years.
          </p>
        </div>

        {/* Calculator and side pannel */}
        <div
          className={
            "xl:flex max-xl:flex-col flex-wrap w-full xl:max-h-[315px]  mt-[50px] [@media(max-width:400px)]:mt-[20px] justify-between"
          }
        >
          {/* Calculator and output (WRAPPER) */}
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
                  {/*Monthly salary block*/}
                  <div>Monthly salary(Basic+DA)</div>
                  <Input
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
                  <Input
                    id="years"
                    min={5}
                    max={50}
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

            {/* Output wrapper */}
            <div className={"lg:w-[50%] text-center self-center leading-9"}>
              <div className={"font-bold text-4xl "}>{output}</div>
              <div className="font-semibold">Payable Gratuity</div>
            </div>
          </div>

          {/* Side Pannel */}
          <div
            className={
              " max-h-[inherit]  xl:w-[23%] px-[20px] py-[22px] max-xl:mt-[30px]  border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px] overflow-y-scroll "
            }
          >
            <div className={"font-bold "}>How to use this calculator?</div>
            <CollapsibleBox
              heading={"Gratuity"}
              content={
                "Gratuity is a benefit given by an employer to an employee as a token of appreciation for their service and loyalty."
              }
            />
            <CollapsibleBox
              heading={"Benefits of Gratuity"}
              content={
                "Gratuity is considered a long-term benefit, as it provides financial support to employees after they leave the company. It is usually paid in addition to any other benefits, such as severance pay, pension, or retirement benefits."
              }
            />
            <CollapsibleBox
              heading={"Uses of this calculator"}
              content={
                "Calculating your gratuity can help with retirement planning, financial security, understanding your benefits, negotiating employment terms, and budgeting."
              }
            />

            <CollapsibleBox
              heading={"Tax implications of gratuity"}
              content={
                <div>
                  <div>
                    Gratuity paid by the government to government employees is
                    fully exempt from tax while others are taxed as follows
                  </div>
                  <div>The least of the following is exempt from tax:</div>
                  <ul>
                    <li>
                      Last salary (basic + DA)* number of years of employment*
                      15/26;
                    </li>
                    <li>
                      Rs. 20 lakhs (which has been hiked from Rs. 10 Lakh as per
                      the amendment);
                    </li>
                    <li>Gratuity Actually received</li>
                  </ul>
                </div>
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
            heading={"What is Gratuity?"}
            headingBold={true}
            content={
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
              </>
            }
          />

          <CollapsibleBox
            heading={"Why should I calculate Gratuity?"}
            headingBold={true}
            content={
              <>
                <div>
                  Calculating your gratuity can provide important information
                  about your financial future and help you make informed
                  decisions about your employment and financial planning.
                  Calculating Gratuity can help in the following ways,
                </div>
                <ul>
                  <li>
                    Retirement planning: Gratuity can provide a significant
                    source of income for employees during their retirement
                    years, so it's important to calculate the amount you're
                    eligible for and factor it into your retirement planning.
                  </li>
                  <li>
                    Financial security: Gratuity is paid to employees upon
                    retirement or completion of a certain period of service, and
                    can provide financial security during a time when regular
                    income may have ceased.
                  </li>
                  <li>
                    Understanding your benefits: Calculating your gratuity can
                    help you understand your total employee benefits package and
                    how much you will receive when you retire or leave the
                    company.
                  </li>
                  <li>
                    Negotiating employment terms: If you're considering a job
                    offer, calculating your potential gratuity can help you
                    determine the total compensation package and make an
                    informed decision about the offer.
                  </li>
                  <li>
                    Budgeting: Calculating your gratuity can help you plan your
                    budget and ensure that you have enough money to meet your
                    financial obligations, both now and in the future.
                  </li>
                </ul>
              </>
            }
          />

          <CollapsibleBox
            heading={"How does the Gratuity calculator work?"}
            headingBold={true}
            content={
              <>
                <div>It uses the following logic</div>
                <ul>
                  <li>
                    The amount of gratuity for employees whose employer is
                    covered under the Gratuity Act can be calculated using the
                    formula:
                    <div>Gratuity = n*b*15 / 26</div>
                    <div>
                      Where n = Tenure of service completed in the company
                    </div>
                    <div>b = Last drawn basic salary + dearness allowance</div>
                    As per the Gratuity Act, the amount of gratuity cannot be
                    more than Rs 20 lakh. Any excesses would be treated as
                    ex-gratia.{" "}
                    <div>
                      If the number of years you have worked in the last year of
                      employment is more than six months, then it will be
                      rounded to the nearest figure. Suppose your tenure of
                      service is 16 years 7 months, then you receive the
                      gratuity for 17 years. Otherwise, its for 16 years if it
                      happens to be 16 years 4 months.
                    </div>
                  </li>
                  <li>
                    For employees whose employer is not covered under the
                    Gratuity Act, the gratuity amount would be calculated as per
                    the half-month salary on each completed year of service.
                  </li>
                </ul>
                <div>
                  The formula is: (15 * Your last drawn salary * the working
                  tenure) / 30.
                </div>
              </>
            }
          />

          <CollapsibleBox
            heading={"How to use FundsIndia Gratuity Calculator?"}
            headingBold={true}
            content={
              "FundsIndia Gratuity calculator is very intuitive and does not require any technical knowledge. Just plug in your monthly salary and tenure of service and the calculator will give you your precise gratuity amount."
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
              name={"CAGR Calculator"}
              path={"/"}
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
