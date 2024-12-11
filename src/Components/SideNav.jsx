import React from "react";
function SideNav() {
  return (
    <>
      <div className="sideNav bg-white py-[22px] rounded-[22px] px-[6px] h-full flex flex-col w-[90px]  ">
        <img
          src="https://res.cloudinary.com/daofwwdxl/image/upload/v1733913083/Frame_5_yseuus.svg"
          alt=""
          className="w-[50px] h-[47px] mb-[20px]"
        />

        <div className="flex flex-col justify-between h-full border-t-[1px]  border-[#E7E7E7]">
          <ul className="grid items-start justify-items-center gap-[30px] pt-[30px] ">
            <li className="border-[1px] border-[#EBEBEB] rounded-[12px] p-[13px] bg-[#F8F8F8] cursor-pointer">
              <Img1 />
            </li>
            <li className="border-[1px] border-[#EBEBEB] rounded-[12px] p-[13px] bg-[#F8F8F8] cursor-pointer">
              <Img2 />
            </li>
            <li className="border-[1px] border-[#EBEBEB] rounded-[12px] p-[13px] bg-[#F8F8F8] cursor-pointer">
              <Img3 />
            </li>
          </ul>

          <div className="grid gap-[19px]">
            <div className="border-t-[1px]  border-[#E7E7E7]"></div>
            <div className="userLogo font-poppins font-bold text-[32px] flex justify-center items-center bg-[#2E4FE157] rounded-[12px]">
              S
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;

export function Img1() { 
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.02 5.97C2.75 7.65 2 9.74 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
export function Img2() {
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
        fill="black"
      />
      <path
        d="M23 18C23 18.5523 22.5523 19 22 19C21.4477 19 21 18.5523 21 18C21 17.4477 21.4477 17 22 17C22.5523 17 23 17.4477 23 18Z"
        fill="black"
      />
      <path
        d="M3 6C3 6.55228 2.55228 7 2 7C1.44772 7 1 6.55228 1 6C1 5.44772 1.44772 5 2 5C2.55228 5 3 5.44772 3 6Z"
        fill="black"
      />
      <path
        d="M7 2C7 2.55228 6.55228 3 6 3C5.44772 3 5 2.55228 5 2C5 1.44772 5.44772 1 6 1C6.55228 1 7 1.44772 7 2Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 6.48292L11.3478 9.17257C11.0871 10.2477 10.2477 11.0871 9.17257 11.3478L6.48292 12L9.17257 12.6522C10.2477 12.9129 11.0871 13.7523 11.3478 14.8274L12 17.5171L12.6522 14.8274C12.9129 13.7523 13.7523 12.9129 14.8274 12.6522L17.5171 12L14.8274 11.3478C13.7523 11.0871 12.9129 10.2477 12.6522 9.17257L12 6.48292ZM13.3052 5.02656C12.9733 3.65781 11.0267 3.65781 10.6948 5.02656L9.78151 8.79277C9.66301 9.28146 9.28146 9.66301 8.79277 9.78151L5.02656 10.6948C3.65781 11.0267 3.65781 12.9733 5.02656 13.3052L8.79277 14.2185C9.28146 14.337 9.66301 14.7185 9.78151 15.2072L10.6948 18.9734C11.0267 20.3422 12.9733 20.3422 13.3052 18.9734L14.2185 15.2072C14.337 14.7185 14.7185 14.337 15.2072 14.2185L18.9734 13.3052C20.3422 12.9733 20.3422 11.0267 18.9734 10.6948L15.2072 9.78151C14.7185 9.66301 14.337 9.28146 14.2185 8.79277L13.3052 5.02656Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.00462 22.3147C8.83081 22.7804 8.31241 23.017 7.84673 22.8432C4.8303 21.7173 2.40732 19.3801 1.16973 16.4228C0.977847 15.9643 1.194 15.4371 1.65252 15.2452C2.11105 15.0533 2.63831 15.2694 2.8302 15.728C3.8762 18.2274 5.92654 20.2052 8.47615 21.1568C8.94183 21.3306 9.17843 21.849 9.00462 22.3147Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.3153 9.02077C21.8498 9.19493 21.3312 8.95873 21.157 8.49319C20.1979 5.92954 18.1971 3.87072 15.6693 2.83251C15.2095 2.64366 14.9899 2.11784 15.1787 1.65806C15.3676 1.19827 15.8934 0.978632 16.3532 1.16748C19.3427 2.39533 21.7076 4.82798 22.8429 7.86246C23.0171 8.32801 22.7809 8.8466 22.3153 9.02077Z"
        fill="black"
      />
    </svg>
  );
}
export function Img3() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11.1328H22"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M11.4991 22V1"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
