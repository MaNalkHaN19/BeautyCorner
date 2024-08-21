import React from "react";
import Link from "next/link";
import styles from "./page.module.css"; // Import the CSS module
import { link } from "fs";
import path from "path";

export default function Page() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <h2 className={styles.heading}>Company</h2>
            <ul>
              <li className={styles.item}>
                <Link href="/about" className={styles.link}>
                  About Us
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/careers" className={styles.link}>
                  Careers
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/press" className={styles.link}>
                  Press
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/blog" className={styles.link}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.heading}>Resources</h2>
            <ul>
              <li className={styles.item}>
                <Link href="/docs" className={styles.link}>
                  Documentation
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/tutorials" className={styles.link}>
                  Tutorials
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/case-studies" className={styles.link}>
                  Case Studies
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/community" className={styles.link}>
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.heading}>Support</h2>
            <ul>
              <li className={styles.item}>
                <Link href="/contact" className={styles.link}>
                  Contact Us
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/faqs" className={styles.link}>
                  FAQs
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/help" className={styles.link}>
                  Help Center
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/live-chat" className={styles.link}>
                  Live Chat
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.heading}>Follow Us</h2>
            <div className={styles.socials}>
              <Link href="https://facebook.com" className={styles.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#3F51B5"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                  ></path>
                </svg>
              </Link>
              <Link href="https://twitter.com" className={styles.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                </svg>
              </Link>
              <Link href="https://linkedin.com" className={styles.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  ></path>
                </svg>
              </Link>
              <Link href="https://instagram.com" className={styles.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                    cx="19.38"
                    cy="42.035"
                    r="44.899"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#fd5"></stop>
                    <stop offset=".328" stopColor="#ff543f"></stop>
                    <stop offset=".348" stopColor="#fc5245"></stop>
                    <stop offset=".504" stopColor="#e64771"></stop>
                    <stop offset=".643" stopColor="#d53e91"></stop>
                    <stop offset=".761" stopColor="#cc39a4"></stop>
                    <stop offset=".841" stopColor="#c837ab"></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                    cx="11.786"
                    cy="5.54"
                    r="29.813"
                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#4168c9"></stop>
                    <stop
                      offset=".999"
                      stopColor="#4168c9"
                      stopOpacity="0"
                    ></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                  ></path>
                  <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          &copy; 2024 BeautyCorner. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
