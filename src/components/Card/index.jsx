import React from "react"
import styles from "./card.module.css"

export default function Card({ name }) {
  return (
    <div className={styles.card}>
      <p className={styles.card__text}>{name}</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 222 169">
        <g clipPath="url(#clip0_73_2)">
          <g filter="url(#filter0_d_73_2)">
            <path
              fill="#EDF0F8"
              d="M209.468 31.831L21.932 8.502a2.032 2.032 0 00-2.267 1.767L3.875 137.425a2.034 2.034 0 001.765 2.269l187.537 23.331a2.033 2.033 0 002.267-1.768l15.79-127.156a2.033 2.033 0 00-1.766-2.27z"
            ></path>
          </g>
          <g filter="url(#filter1_d_73_2)">
            <path
              fill="#D6C395"
              d="M204.36 16.86H15.38c-1.122 0-2.032.911-2.032 2.034V147.03c0 1.123.91 2.034 2.032 2.034h188.98a2.033 2.033 0 002.032-2.034V18.894c0-1.123-.91-2.034-2.032-2.034z"
            ></path>
          </g>
          <g filter="url(#filter2_d_73_2)">
            <path
              fill="#EDF0F8"
              d="M190.723 2.185L4.426 33.94a2.034 2.034 0 00-1.662 2.347l21.493 126.316a2.032 2.032 0 002.345 1.663l186.297-31.756a2.035 2.035 0 001.662-2.347L193.068 3.848a2.033 2.033 0 00-2.345-1.663z"
            ></path>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_73_2"
            width="223.391"
            height="170.556"
            x="1.859"
            y="6.485"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="6" dy="6"></feOffset>
            <feGaussianBlur stdDeviation="4"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_73_2"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_73_2"
              result="shape"
            ></feBlend>
          </filter>
          <filter
            id="filter1_d_73_2"
            width="209.043"
            height="148.203"
            x="11.348"
            y="14.86"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="6" dy="6"></feOffset>
            <feGaussianBlur stdDeviation="4"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_73_2"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_73_2"
              result="shape"
            ></feBlend>
          </filter>
          <filter
            id="filter2_d_73_2"
            width="227.855"
            height="178.141"
            x="0.735"
            y="0.156"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="6" dy="6"></feOffset>
            <feGaussianBlur stdDeviation="4"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_73_2"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_73_2"
              result="shape"
            ></feBlend>
          </filter>
          <clipPath id="clip0_73_2">
            <path fill="#fff" d="M0 0H222V169H0z"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
