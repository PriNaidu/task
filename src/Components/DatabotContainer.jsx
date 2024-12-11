import React from "react";
import { useState, useEffect, useRef } from "react";

function DatabotContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    setIsOpen((prev) => !prev);
    e.stopPropagation();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const data = [
    { request: "Give me the summary of the data Source." },
    { request: "User duration engagement change vs last week?" },
    { request: "Provide an overview of this week's IAP Revenue performance." },
    { request: "What are the factors of drop in our Sales Revenue this week?" },
  ];
  return (
    <>
      <div className="bg-white pb-[16px] pt-[24px] px-[34px] rounded-[22px] w-full relative">
        <div className="header flex items-center justify-between">
          <div className="flex items-center gap-[15px]">
            <h2 className="font-poppins font-semibold text-[28px]">Databot</h2>
            <LogoAI />
          </div>
          <div className="flex gap-[10px] items-center">
            <h3 className="font-poppins text-[16px]">
              Connected Data: &nbsp;
              <span className="text-[#2043DF]">Clothing Sales</span>
            </h3>
            <div
              className="relative cursor-pointer"
              onClick={(e) => toggleDropdown(e)}
              ref={dropdownRef}
            >
              <ArrowDown />
              {isOpen && (
                <div className="dropdown border-[#0000001A] border-[1px] rounded-[16px] shadow-custom absolute w-[250px] h[216px] right-[0] top-[20px] bg-white p-[16px]">
                  <input
                    type="text"
                    className="h-[30px] w-full rounded-[16px] border-[#0000001A] border-[1px] px-[12px]"
                    placeholder="Search Data"
                  />

                  <ul className="mt-[10px]">
                    <li className="py-[6px] px-[8px] flex cursor-pointer border border-transparent rounded-[16px]  hover:bg-[#0000000D] justify-between group transform transition-transform duration-300 hover:translate-x-2">
                      SUPPLIER_references
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <path
                          d="M17.9422 6.0672L7.94219 16.0672C7.88414 16.1253 7.81521 16.1714 7.73934 16.2029C7.66346 16.2343 7.58214 16.2505 7.5 16.2505C7.41787 16.2505 7.33654 16.2343 7.26066 16.2029C7.18479 16.1714 7.11586 16.1253 7.05781 16.0672L2.68281 11.6922C2.56554 11.5749 2.49965 11.4159 2.49965 11.25C2.49965 11.0842 2.56554 10.9251 2.68281 10.8078C2.80009 10.6905 2.95915 10.6247 3.125 10.6247C3.29085 10.6247 3.44991 10.6905 3.56719 10.8078L7.5 14.7414L17.0578 5.18282C17.1751 5.06555 17.3341 4.99966 17.5 4.99966C17.6659 4.99966 17.8249 5.06555 17.9422 5.18282C18.0595 5.3001 18.1253 5.45916 18.1253 5.62501C18.1253 5.79086 18.0595 5.94992 17.9422 6.0672Z"
                          fill="black"
                        />
                      </svg>
                    </li>
                    <li className="py-[4px] px-[8px] flex cursor-pointer border border-transparent rounded-[16px]  hover:bg-[#0000000D] justify-between group transform transition-transform duration-300 hover:translate-x-2">
                      NATION_references_ REGION
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <path
                          d="M17.9422 6.0672L7.94219 16.0672C7.88414 16.1253 7.81521 16.1714 7.73934 16.2029C7.66346 16.2343 7.58214 16.2505 7.5 16.2505C7.41787 16.2505 7.33654 16.2343 7.26066 16.2029C7.18479 16.1714 7.11586 16.1253 7.05781 16.0672L2.68281 11.6922C2.56554 11.5749 2.49965 11.4159 2.49965 11.25C2.49965 11.0842 2.56554 10.9251 2.68281 10.8078C2.80009 10.6905 2.95915 10.6247 3.125 10.6247C3.29085 10.6247 3.44991 10.6905 3.56719 10.8078L7.5 14.7414L17.0578 5.18282C17.1751 5.06555 17.3341 4.99966 17.5 4.99966C17.6659 4.99966 17.8249 5.06555 17.9422 5.18282C18.0595 5.3001 18.1253 5.45916 18.1253 5.62501C18.1253 5.79086 18.0595 5.94992 17.9422 6.0672Z"
                          fill="black"
                        />
                      </svg>
                    </li>
                    <li className="py-[4px]  px-[8px] flex cursor-pointer border border-transparent rounded-[16px]  hover:bg-[#0000000D] justify-between group transform transition-transform duration-300 hover:translate-x-2">
                      ORDERS_references_CUS TOMER
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <path
                          d="M17.9422 6.0672L7.94219 16.0672C7.88414 16.1253 7.81521 16.1714 7.73934 16.2029C7.66346 16.2343 7.58214 16.2505 7.5 16.2505C7.41787 16.2505 7.33654 16.2343 7.26066 16.2029C7.18479 16.1714 7.11586 16.1253 7.05781 16.0672L2.68281 11.6922C2.56554 11.5749 2.49965 11.4159 2.49965 11.25C2.49965 11.0842 2.56554 10.9251 2.68281 10.8078C2.80009 10.6905 2.95915 10.6247 3.125 10.6247C3.29085 10.6247 3.44991 10.6905 3.56719 10.8078L7.5 14.7414L17.0578 5.18282C17.1751 5.06555 17.3341 4.99966 17.5 4.99966C17.6659 4.99966 17.8249 5.06555 17.9422 5.18282C18.0595 5.3001 18.1253 5.45916 18.1253 5.62501C18.1253 5.79086 18.0595 5.94992 17.9422 6.0672Z"
                          fill="black"
                        />
                      </svg>
                    </li>
                    <li className="py-[4px] px-[8px] flex cursor-pointer border border-transparent rounded-[16px]  hover:bg-[#0000000D]  justify-between group transform transition-transform duration-300 hover:translate-x-2">
                      data_lake
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <path
                          d="M17.9422 6.0672L7.94219 16.0672C7.88414 16.1253 7.81521 16.1714 7.73934 16.2029C7.66346 16.2343 7.58214 16.2505 7.5 16.2505C7.41787 16.2505 7.33654 16.2343 7.26066 16.2029C7.18479 16.1714 7.11586 16.1253 7.05781 16.0672L2.68281 11.6922C2.56554 11.5749 2.49965 11.4159 2.49965 11.25C2.49965 11.0842 2.56554 10.9251 2.68281 10.8078C2.80009 10.6905 2.95915 10.6247 3.125 10.6247C3.29085 10.6247 3.44991 10.6905 3.56719 10.8078L7.5 14.7414L17.0578 5.18282C17.1751 5.06555 17.3341 4.99966 17.5 4.99966C17.6659 4.99966 17.8249 5.06555 17.9422 5.18282C18.0595 5.3001 18.1253 5.45916 18.1253 5.62501C18.1253 5.79086 18.0595 5.94992 17.9422 6.0672Z"
                          fill="black"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="border-[1px] border-[#E7E7E7] mt-[20px]"> </div>
        <div className="px-[65px]  mt-[88px] flex flex-col  items-center gap-[10px]">
          <h1 className="font-poppins text-[30px]">
            {" "}
            <span className="text-[#2043DF]">AI Conversational</span> Data
            Analyst
          </h1>
          <p className="font-poppins text-[12px] text-center w-[87%]">
            Your personal AI data assistant. Seamlessly integrate your database
            for rapid, informed decision-making. Get instant analysis and
            answers, optimizing growth metrics daily. Ask anything, get
            analyst-grade responses.
          </p>
        </div>

        <div className="suggestions grid grid-cols-2 gap-x-[20px] gap-y-[15px] mt-[50px] mb-[65px]">
          {data.map((item, index) => (
            <div className="flex border-[#DADADA] border-[1px] px-[14px] py-[12px] rounded-[12px] justify-between items -center gap-[30px]">
              <p key={index}>{item.request}</p>
              <button className=" flex items-center">
                <Golink />
              </button>
            </div>
          ))}
        </div>
        <div className="data-source bg-[#F9F9F9] "></div>
        <div className="flex bg-[#F8F8F8] border-[#E7E7E7] border-[1px] rounded-[45px] w-[calc(100%-65px)] justify-between py-[10px] px-[14px] absolute bottom-[16px]">
          <input
            type="text"
            placeholder="Ask your AI for data summary......."
            className="w-[100%] focus:outline-none  bg-[#F8F8F8] rounded-[45px]"
          />
          <button className="flex bg-[#000000] text-white font-poppins gap-[10px] rounded-[45px] items-center justify-center w-[141px] h-[50px]">
            {" "}
            <BrightIcon />
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default DatabotContainer;

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

export function Golink() {
  return (
    <svg
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="24.2913"
        height="24"
        rx="5.5"
        fill="white"
        stroke="#DADADA"
      />
      <path
        d="M17.701 7.97357C17.6865 7.6994 17.45 7.48898 17.1727 7.50358L12.6531 7.74143C12.3757 7.75603 12.1626 7.99012 12.177 8.26429C12.1915 8.53845 12.428 8.74888 12.7053 8.73428L16.7227 8.52285L16.9318 12.4943C16.9462 12.7684 17.1827 12.9788 17.4601 12.9642C17.7374 12.9497 17.9505 12.7156 17.9361 12.4414L17.701 7.97357ZM8.4675 18.3323L17.5724 8.33234L16.8252 7.66766L7.72037 17.6677L8.4675 18.3323Z"
        fill="#606060"
      />
    </svg>
  );
}

export function BrightIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.43949 3.83408C6.70916 2.72197 8.29084 2.72197 8.56051 3.83408L9.30252 6.89413C9.3988 7.29118 9.70882 7.6012 10.1059 7.69748L13.1659 8.43949C14.278 8.70916 14.278 10.2908 13.1659 10.5605L10.1059 11.3025C9.70882 11.3988 9.3988 11.7088 9.30252 12.1059L8.56051 15.1659C8.29084 16.278 6.70916 16.278 6.43949 15.1659L5.69748 12.1059C5.6012 11.7088 5.29118 11.3988 4.89413 11.3025L1.83408 10.5605C0.721973 10.2908 0.721972 8.70916 1.83408 8.43949L4.89413 7.69748C5.29118 7.6012 5.6012 7.29118 5.69748 6.89413L6.43949 3.83408Z"
        fill="#FBAF57"
      />
      <path
        d="M15.3474 14.5133C15.5133 13.8289 16.4867 13.8289 16.6526 14.5133L17.1092 16.3964C17.1685 16.6407 17.3593 16.8315 17.6036 16.8908L19.4867 17.3474C20.1711 17.5133 20.1711 18.4867 19.4867 18.6526L17.6036 19.1092C17.3593 19.1685 17.1685 19.3593 17.1092 19.6036L16.6526 21.4867C16.4867 22.1711 15.5133 22.1711 15.3474 21.4867L14.8908 19.6036C14.8315 19.3593 14.6407 19.1685 14.3964 19.1092L12.5133 18.6526C11.8289 18.4867 11.8289 17.5133 12.5133 17.3474L14.3964 16.8908C14.6407 16.8315 14.8315 16.6407 14.8908 16.3964L15.3474 14.5133Z"
        fill="#FBAF57"
      />
      <path
        d="M18.5717 3.71184C18.6806 3.26272 19.3194 3.26272 19.4283 3.71184L19.7279 4.94763C19.7668 5.10798 19.892 5.23318 20.0524 5.27206L21.2882 5.57172C21.7373 5.68062 21.7373 6.31938 21.2882 6.42828L20.0524 6.72794C19.892 6.76682 19.7668 6.89202 19.7279 7.05237L19.4283 8.28816C19.3194 8.73728 18.6806 8.73728 18.5717 8.28816L18.2721 7.05237C18.2332 6.89202 18.108 6.76682 17.9476 6.72794L16.7118 6.42828C16.2627 6.31938 16.2627 5.68062 16.7118 5.57172L17.9476 5.27206C18.108 5.23318 18.2332 5.10798 18.2721 4.94763L18.5717 3.71184Z"
        fill="#FBAF57"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 3.93109L18.7554 4.93972C18.6577 5.34288 18.3429 5.65766 17.9397 5.75542L16.9311 6L17.9397 6.24458C18.3429 6.34234 18.6577 6.65712 18.7554 7.06029L19 8.06891L19.2446 7.06029C19.3423 6.65712 19.6571 6.34234 20.0603 6.24458L21.0689 6L20.0603 5.75542C19.6571 5.65766 19.3423 5.34288 19.2446 4.93972L19 3.93109ZM19.4895 3.38496C19.365 2.87168 18.635 2.87168 18.5105 3.38496L18.1681 4.79729C18.1236 4.98055 17.9805 5.12363 17.7973 5.16807L16.385 5.51054C15.8717 5.635 15.8717 6.365 16.385 6.48947L17.7973 6.83193C17.9805 6.87637 18.1236 7.01945 18.1681 7.20271L18.5105 8.61504C18.635 9.12832 19.365 9.12832 19.4895 8.61504L19.8319 7.20271C19.8764 7.01945 20.0195 6.87637 20.2027 6.83193L21.615 6.48947C22.1283 6.365 22.1283 5.635 21.615 5.51054L20.2027 5.16807C20.0195 5.12363 19.8764 4.98055 19.8319 4.79729L19.4895 3.38496Z"
        fill="#FBAF57"
      />
      <path
        d="M7 23C6.44772 23 6 22.5523 6 22C6 21.4477 6.44772 21 7 21C7.55228 21 8 21.4477 8 22C8 22.5523 7.55228 23 7 23Z"
        fill="#FBAF57"
      />
      <path
        d="M2 19C1.44772 19 1 18.5523 1 18C1 17.4477 1.44772 17 2 17C2.55228 17 3 17.4477 3 18C3 18.5523 2.55228 19 2 19Z"
        fill="#FBAF57"
      />
      <path
        d="M13 3C12.4477 3 12 2.55228 12 2C12 1.44772 12.4477 1 13 1C13.5523 1 14 1.44772 14 2C14 2.55228 13.5523 3 13 3Z"
        fill="#FBAF57"
      />
      <path
        d="M22 14C21.4477 14 21 13.5523 21 13C21 12.4477 21.4477 12 22 12C22.5523 12 23 12.4477 23 13C23 13.5523 22.5523 14 22 14Z"
        fill="#FBAF57"
      />
    </svg>
  );
}
