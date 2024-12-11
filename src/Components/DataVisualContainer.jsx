import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";

function DataVisualContainer() {
  const [progress, setProgress] = useState(0);
  const validity = 6;
  const maxTarget = 8;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const score = 65;
  const rating = "Good";

  // SVG path for the gauge curve
  const createArc = (startAngle, endAngle, radius) => {
    const start = polarToCartesian(radius, startAngle);
    const end = polarToCartesian(radius, endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      1,
      end.x,
      end.y,
    ].join(" ");
  };

  const polarToCartesian = (radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 180) * Math.PI) / 180.0;
    return {
      x: 100 + radius * Math.cos(angleInRadians),
      y: 100 + radius * Math.sin(angleInRadians),
    };
  };

  // Calculate pointer rotation based on score
  const pointerRotation = -180 + score * 1.8; // 180 degrees total rotation for 0-100

  const total = 88; // Total percentage
  const success = 60; // Success percentage
  const failed = 25; // Failed percentage
  const skipped = 15; // Skipped percentage

  // Convert percentages to angles (360 degrees)
  const successAngle = success * 3.6;
  const failedAngle = failed * 3.6;
  const skippedAngle = skipped * 3.6;

  // Gap between each segment (in degrees)
  const gap = 10;
  return (
    <>
      <div className="bg-white pb-[16px] pt-[24px] px-[34px] rounded-[22px] w-full relative overflow-auto">
        <div className="header flex items-center justify-between">
          <div className="flex items-center gap-[15px]">
            <h2 className="font-poppins font-semibold text-[28px]">
              Data Visual
            </h2>
          </div>
        </div>
        <div className="border-[1px] border-[#E7E7E7] mt-[20px]"></div>

        <h3 className="mt-[25px]">Data Overview</h3>

        <div className="border-[2px] border-[#F0F5FF5C] mt-[10px] mb-[17px]"></div>
        <div className="grid grid-cols-3">
          <div className="grid">
            <div className="px-[13px] py-[10px]">
              <div className="px-[9px] py-[12px] bg-[#F9F9F9] rounded-12px flex bg-[#F9F9F9] rounded-[20px] gap-[25px]">
                <div className="w-[40PX] h-[37PX]  bg-white rounded-[12px] flex  items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/daofwwdxl/image/upload/v1733921965/Group_1437253232_pexdkn.svg"
                    alt=""
                  />
                </div>

                <div className="grid gap-[6px]">
                  <p className="text-capitalize text-[#001F63] text-poppins text-[12px]">
                    Total Number of rows
                  </p>
                  <span className="font-bold text-[14px]">34.1M</span>
                </div>
              </div>
            </div>
            <div className="px-[13px] py-[10px]">
              <div className="px-[9px] py-[12px] bg-[#F9F9F9]  rounded-12px bg-[#F9F9F9] flex rounded-[20px] gap-[25px]">
                <div className="w-[40PX] h-[37PX]  bg-white rounded-[12px] flex  items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/daofwwdxl/image/upload/v1733922002/Group_1437253232_1_dh7nqm.svg"
                    alt=""
                  />
                </div>
                <div className="grid">
                  <p className="text-capitalize text-[#001F63] text-poppins text-[12px]">
                    Total Number of Columns
                  </p>
                  <span className="font-bold text-[14px]">2</span>
                </div>
              </div>
            </div>
          </div>
          <div className="metadata bg-[#F9F9F9] rounded-[20px] py-[17px] px-[25px] ">
            <h3 className="text-[#001F63] font-poppins font-semibold text-[12px]  mb-[10px]">
              Metadata
            </h3>
            <table className="w-full text-[12px]">
              <tr className=" grid grid-cols-2  ">
                <td className="text-[#84919A]  text-[12px]">Name</td>
                <td className="text-[#252C32 "> Samples</td>
              </tr>
              <tr className=" grid grid-cols-2 ">
                <td className="text-[#84919A] ">Created at</td>
                <td className="text-[#252C32]"> 20 July 2022</td>
              </tr>
              <tr className=" grid grid-cols-2  ">
                <td className="text-[#84919A] ">Relates to </td>
                <td className="text-[#252C32]"> dim_books</td>
              </tr>
              <tr className=" grid grid-cols-2  ">
                <td className="text-[#84919A] ">Connection</td>
                <td className="text-[#252C32]"> Postgresql</td>
              </tr>
            </table>
          </div>
          <div className="progressbar bg-[#F9F9F9] rounded-[20px] py-[17px] px-[25px] ml-[12px] w-full">
            <p className="text-[#001F63] font-semibold text-uppercase text-[12px] mb-[8px] w-full ">
              SLA
            </p>

            <div className="bar w-full grid grid-cols-[1fr_20px] gap-x-4 items-center justify-items-center">
              <div className="bg-white w3-round-xlarge rounded-full w-full">
                <div
                  className="w3-container w3-blue w3-round-xlarge"
                  style={{ width: "100%" }}
                >
                  <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                    <div className="w-full h-full bg-white-200 absolute"></div>
                    <div
                      className="h-full bg-green-500 absolute transition-all ease-out duration-1000"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <span className="w-full text-[#84919A] text-[12px]">5/5</span>
            </div>
            <div className="w-full flex justify-between mt-[20px]">
              <p className="text-[#001F63] font-semibold text-uppercase text-[12px] mb-[8px] w-full ">
                Test report
              </p>
              <button className="text-[#2A64C5] text-[12px] w-full flex justify-end">
                See all
              </button>
            </div>

            <div className="bar w-full">
              <div className="w-full flex justify-between">
                <p className="text-[#001F63] font-semibold text-uppercase text-[10px] mb-[8px] w-full ">
                  100% Score
                </p>
                <button className="text-[#84919A] text-[10px] w-full flex justify-end">
                  5 Test
                </button>
              </div>
              <div className="bg-white w3-round-xlarge rounded-full w-full">
                <div
                  className="w3-container w3-blue w3-round-xlarge"
                  style={{ width: "100%" }}
                >
                  <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                    <div className="w-full h-full bg-white-200 absolute"></div>
                    <div
                      className="h-full bg-green-500 absolute transition-all ease-out duration-1000"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="font-poppins font-semibold text-[28px] mt-[50px]">
          Data Quality
        </h2>
        <div className="border-[2px] border-[#F0F5FF5C] mt-[10px] mb-[17px]"></div>
        <div className="grid grid-cols-2 gap-[16px]">
          <div className=" bg-[#F9F9F9] rounded-[20px] py-[17px] px-[25px] ">
            <div className="">
              <h2 className="text-[#323C4D] text-[14px] font-poppins mb-[40px] font-semibold">
                Data Quality Score
              </h2>

              <div className="w-full flex items-center justify-center">
                <div className="relative w-44">
                  <svg viewBox="0 0 200 150" className="w-full">
                    <path
                      d={createArc(0, 60, 80)}
                      fill="none"
                      stroke="#FF7676"
                      strokeWidth="10"
                      className="rounded-full"
                    />

                    <path
                      d={createArc(60, 120, 80)}
                      fill="none"
                      stroke="#FFB946"
                      strokeWidth="10"
                      className="rounded-full"
                    />

                    <path
                      d={createArc(120, 180, 80)}
                      fill="none"
                      stroke="#4CAF50"
                      strokeWidth="10"
                      className="rounded-full"
                    />

                    <path
                      d={createArc(0, 180, 55)}
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="1"
                      className="rounded-full"
                    />

                    <g transform={`rotate(${pointerRotation} 100 100)`}>
                      <path
                        d="M100 45 L95 60 L100 57 L105 60 Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="1"
                      />
                    </g>

                    <text
                      x="100"
                      y="85"
                      textAnchor="middle"
                      className="text-2xl font-bold"
                    >
                      {score}%
                    </text>
                    <text
                      x="100"
                      y="105"
                      textAnchor="middle"
                      className="text-lg"
                    >
                      {rating}
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-[#F9F9F9] rounded-[20px]  p-[25px] relative ">
            <h3 className="text-[#323C4D] text-[14px] font-poppins mb-[40px] font-semibold">
              Rules against target
            </h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Validity</span>
              <span className="text-sm font-bold text-gray-700">
                {validity}
              </span>
            </div>
            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${
                  validity / maxTarget > 0.75
                    ? "bg-green-500"
                    : validity / maxTarget > 0.5
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${(validity / maxTarget) * 100}%` }}
              ></div>

              {[1, 2, 3, 4, 5, 6, 7].map((step) => (
                <div
                  key={step}
                  className="absolute top-0 h-[38px] w-px bg-gray-400 "
                  style={{ left: `${(step / maxTarget) * 100}%` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-500 absolute w-[90%] gap-[25px] bottom-[20px] left-1/2 transform -translate-x-1/2 ">
              <span className="text-green-500 flex items-center gap-[5px]">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#08830D" />
                </svg>
                Good
              </span>
              <span className="text-yellow-500  flex items-center gap-[5px]">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#F3B633" />
                </svg>
                Acceptable
              </span>
              <span className="text-red-500  flex items-center gap-[5px]">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#E32E01" />
                </svg>
                Not Acceptable
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-[10px] mt-6  md:grid-cols-2 2xl:grid-cols-3 ">
          <div className="flex flex-col flex-1 w-[200px]">
            <div className="bg-[#F9F9F9] rounded-[22px] ">
              <div className=" rounded-lg p-[16px]  mx-auto text-center">
                {/* Title */}
                <h3 className="text-[14px] font-semibold text-gray-700 mb-6">
                  Table Health
                </h3>

                {/* Pie Chart with Circular Gap */}
                <div className="relative  w-[120px] h-[120px]  mx-auto">
                  {/* Outer Circle: Pie chart with conic gradient and circular gap */}
                  <div
                    className="absolute w-full h-full rounded-full"
                    style={{
                      background: `conic-gradient(
              #3b82f6 ${successAngle}deg,
              transparent ${successAngle + gap}deg,
              #10b981 ${successAngle + gap}deg ${
                        successAngle + gap + failedAngle
                      }deg,
              transparent ${successAngle + gap + failedAngle}deg,
              #facc15 ${successAngle + gap + failedAngle}deg ${
                        successAngle + gap + failedAngle + skippedAngle
                      }deg,
              transparent ${successAngle + gap + failedAngle + skippedAngle}deg
            )`,
                    }}
                  ></div>

                  {/* Inner Circle (Creating the gap effect) */}
                  <div className="absolute  w-[90px] h-[90px] rounded-full bg-white top-[15px] left-[15px]"></div>

                  {/* Total Table */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <div className="grid">
                      <div className="text-[10px] font-semibold text-[#84919A]">
                        Total Table
                      </div>
                      <div className="text-4xl font-extrabold text-[#0A0A0A]">
                        {total}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Labels */}
              </div>
            </div>
            <div className="mt-4 flex gap-[10px] text-sm text-gray-600  ">
              <div className="flex items-center text-[10px] ">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2 "></span>
                Skipped
              </div>
              <div className="flex items-center  text-[10px]">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2 "></span>
                Success
              </div>
              <div className="flex items-center text-[10px]">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2 "></span>
                Failed
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 w-[200px]">
            <div className="bg-[#F9F9F9] rounded-[22px] ">
              <div className=" p-[16px] mx-auto text-center">
                {/* Title */}
                <h3 className="text-[14px] font-semibold text-gray-700 mb-6">
                  Test Results Breakdown
                </h3>

                <div className="relative w-[120px] h-[120px] mx-auto">
                  <div
                    className="absolute w-full h-full rounded-full"
                    style={{
                      background: `conic-gradient(
              #1A39C3 ${successAngle}deg,
              transparent ${successAngle + gap}deg,
              #FD623B ${successAngle + gap}deg ${
                        successAngle + gap + failedAngle
                      }deg,
              transparent ${successAngle + gap + failedAngle}deg,
              #009306 ${successAngle + gap + failedAngle}deg ${
                        successAngle + gap + failedAngle + skippedAngle
                      }deg,
              transparent ${successAngle + gap + failedAngle + skippedAngle}deg
            )`,
                    }}
                  ></div>

                  {/* Inner Circle (Creating the gap effect) */}
                  <div className="absolute w-[90px] h-[90px] rounded-full bg-white top-[15px] left-[15px]"></div>

                  {/* Total Table */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <div className="grid">
                      <div className="text-[10px] font-semibold text-[#84919A]">
                        Total Table
                      </div>
                      <div className="text-4xl font-extrabold text-[#0A0A0A]">
                        {total}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Labels */}
              </div>
            </div>
            <div className="mt-4 flex gap-[10px] text-sm text-gray-600">
              <div className="flex items-center text-[10px]">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                Broken
              </div>
              <div className="flex items-center text-[10px]">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Aborted
              </div>
              <div className="flex items-center text-[10px]">
                <span className="w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
                Unknown
              </div>
            </div>
          </div>
          <div className="flex flex-col  flex-1 w-[200px]">
            <div className="bg-[#F9F9F9] rounded-[22px]">
              <div className=" rounded-lg p-[16px]  mx-auto text-center">
                {/* Title */}
                <h3 className="text-[14px] font-semibold text-gray-700 mb-6">
                  Monitored Tables
                </h3>

                <div className="relative w-[120px] h-[120px] mx-auto">
                  {/* Outer Circle: Pie chart with conic gradient and circular gap */}
                  <div
                    className="absolute w-full h-full rounded-full"
                    style={{
                      background: `conic-gradient(
              #464646 ${successAngle}deg,
              transparent ${successAngle + gap}deg,
              #1A39C3 ${successAngle + gap}deg ${
                        successAngle + gap + failedAngle
                      }deg,
              transparent ${successAngle + gap + failedAngle}deg,
              #1A39C3 ${successAngle + gap + failedAngle}deg ${
                        successAngle + gap + failedAngle + skippedAngle
                      }deg,
              transparent ${successAngle + gap + failedAngle + skippedAngle}deg
            )`,
                    }}
                  ></div>

                  {/* Inner Circle (Creating the gap effect) */}
                  <div className="absolute w-[90px] h-[90px] rounded-full bg-white top-[15px] left-[15px]"></div>
                  {/* Total Table */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <div className="grid">
                      <div className="text-[10px] font-semibold text-[#84919A]">
                        Total Table
                      </div>
                      <div className="text-4xl font-extrabold text-[#0A0A0A]">
                        {total}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-[20px] text-sm text-gray-600">
              <div className="flex items-center justify-center w-full gap-[15px]">
                <div className="flex items-center text-[10px]">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Monitored
                </div>
                <div className="flex items-center  text-[10px]">
                  <span className="w-3 h-3 bg-gray-00 rounded-full mr-2"></span>
                  Unmonitored
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataVisualContainer;

export function LogoAI() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 22C19 22.5523 18.5523 23 18 23C17.4477 23 17 22.5523 17 22C17 21.4477 17.4477 21 18 21C18.5523 21 19 21.4477 19 22Z"
        fill="#2043DF"
      />
      <path
        d="M23 18C23 18.5523 22.5523 19 22 19C21.4477 19 21 18.5523 21 18C21 17.4477 21.4477 17 22 17C22.5523 17 23 17.4477 23 18Z"
        fill="#2043DF"
      />
      <path
        d="M3 6C3 6.55228 2.55228 7 2 7C1.44772 7 1 6.55228 1 6C1 5.44772 1.44772 5 2 5C2.55228 5 3 5.44772 3 6Z"
        fill="#2043DF"
      />
      <path
        d="M7 2C7 2.55228 6.55228 3 6 3C5.44772 3 5 2.55228 5 2C5 1.44772 5.44772 1 6 1C6.55228 1 7 1.44772 7 2Z"
        fill="#2043DF"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 6.48292L11.3478 9.17257C11.0871 10.2477 10.2477 11.0871 9.17257 11.3478L6.48292 12L9.17257 12.6522C10.2477 12.9129 11.0871 13.7523 11.3478 14.8274L12 17.5171L12.6522 14.8274C12.9129 13.7523 13.7523 12.9129 14.8274 12.6522L17.5171 12L14.8274 11.3478C13.7523 11.0871 12.9129 10.2477 12.6522 9.17257L12 6.48292ZM13.3052 5.02656C12.9733 3.65781 11.0267 3.65781 10.6948 5.02656L9.78151 8.79277C9.66301 9.28146 9.28146 9.66301 8.79277 9.78151L5.02656 10.6948C3.65781 11.0267 3.65781 12.9733 5.02656 13.3052L8.79277 14.2185C9.28146 14.337 9.66301 14.7185 9.78151 15.2072L10.6948 18.9734C11.0267 20.3422 12.9733 20.3422 13.3052 18.9734L14.2185 15.2072C14.337 14.7185 14.7185 14.337 15.2072 14.2185L18.9734 13.3052C20.3422 12.9733 20.3422 11.0267 18.9734 10.6948L15.2072 9.78151C14.7185 9.66301 14.337 9.28146 14.2185 8.79277L13.3052 5.02656Z"
        fill="#2043DF"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.00462 22.3147C8.83081 22.7804 8.31241 23.017 7.84673 22.8432C4.8303 21.7173 2.40732 19.3801 1.16973 16.4228C0.977847 15.9643 1.194 15.4371 1.65252 15.2452C2.11105 15.0533 2.63831 15.2694 2.8302 15.728C3.8762 18.2274 5.92654 20.2052 8.47615 21.1568C8.94183 21.3306 9.17843 21.849 9.00462 22.3147Z"
        fill="#2043DF"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.3153 9.02077C21.8498 9.19493 21.3312 8.95873 21.157 8.49319C20.1979 5.92954 18.1971 3.87072 15.6693 2.83251C15.2095 2.64366 14.9899 2.11784 15.1787 1.65806C15.3676 1.19827 15.8934 0.978632 16.3532 1.16748C19.3427 2.39533 21.7076 4.82798 22.8429 7.86246C23.0171 8.32801 22.7809 8.8466 22.3153 9.02077Z"
        fill="#2043DF"
      />
    </svg>
  );
}

export function ArrowDown() {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.15302 7.45474L0.983845 0.382891L11.1957 0.292144L6.15302 7.45474Z"
        fill="black"
      />
    </svg>
  );
}
