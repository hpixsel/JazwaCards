import React from "react"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrapper ${styles.footer__wrapper}`}>
        <div className={styles.footer__copyright}>
          <div className={styles.footer__copyright_svg}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27 24"
              fill="none"
            >
              <path
                d="M3.53884 15.0885L12.6533 11.0862C13.1859 10.8523 13.8074 10.8647 14.3285 11.1196L23.7086 15.7072C25.0642 16.3702 25.0152 18.1736 23.6254 18.7734L14.35 22.7761C13.8154 23.0068 13.1936 22.9904 12.6742 22.7319L3.45499 18.1438C2.11521 17.4771 2.16419 15.6921 3.53884 15.0885Z"
                stroke="#EDF0F8"
                strokeWidth="2"
              />
              <path
                d="M3.30605 10.3741L12.4205 6.37182C12.9531 6.13795 13.5746 6.15034 14.0957 6.40521L23.4758 10.9929C24.8314 11.6559 24.7824 13.4592 23.3926 14.059L14.1172 18.0618C13.5826 18.2925 12.9608 18.2761 12.4414 18.0176L3.2222 13.4295C1.88242 12.7627 1.9314 10.9778 3.30605 10.3741Z"
                stroke="#D6C395"
                strokeWidth="2"
              />
              <path
                d="M3.30605 5.23131L12.4205 1.22901C12.9531 0.995127 13.5746 1.00751 14.0957 1.26238L23.4758 5.85008C24.8314 6.51304 24.7824 8.31642 23.3926 8.91621L14.1172 12.9189C13.5826 13.1496 12.9608 13.1333 12.4414 12.8748L3.2222 8.28668C1.88242 7.61991 1.9314 5.83495 3.30605 5.23131Z"
                stroke="#EDF0F8"
                strokeWidth="2"
              />
            </svg>
          </div>
          <p>© copyright 2023 | JaźwaHost</p>
        </div>
        <div className={styles.authors}>
          <div className={styles.author}>
            <div className="author_text">
              <p>
                <b>Kacper Adamus -</b> frontend
              </p>
              <p>adamusdev@gmail.com</p>
            </div>
            <div className={styles.author_links}>
              <a
                href="https://github.com/hpixsel?tab=repositories"
                target="_blank"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_11_74)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_11_74">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
              <a href="https://adamusdev.netlify.app" target="_blank">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_11_72)">
                      <path
                        d="M12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0V0ZM16.6133 15.9333C16.6133 17.8933 15.5467 20.3333 11.2 22.2C11.6 16.64 7.84 17.28 6.93333 15.5333C7.01591 14.8107 7.27903 14.1205 7.69845 13.5264C8.11788 12.9322 8.68011 12.4531 9.33333 12.1333C7.26423 11.7784 5.33457 10.8552 3.76 9.46667C3.82667 10.0933 4.132 10.672 4.61333 11.08C3.57055 10.6869 2.66954 9.99028 2.02667 9.08C2.66237 6.98187 3.93376 5.13283 5.6653 3.7882C7.39685 2.44357 9.50313 1.66966 11.6933 1.57333C10.5733 3.41333 9.69333 7.08 11.6933 9C9.64 9.33333 8.34667 6.66667 7.21333 7.72C5.70667 9.13333 7.65333 11.0667 11.7733 11.8267C16.16 12.6133 16.6533 13.9333 16.6133 15.9333ZM18.4 10.6C17.9733 9.12 19.2267 7.62667 20.6533 6.41333C21.5443 7.69763 22.1115 9.17833 22.3065 10.7292C22.5015 12.2801 22.3186 13.8551 21.7733 15.32C20.7467 12.8 18.88 12.2267 18.4 10.56V10.6Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_11_72">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.author}>
            <div className="author_text">
              <p>
                <b>Kacper Janusz -</b> backend
              </p>
              <p>yanushevitz@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>
            <div className={styles.author_links}>
              <a
                href="https://github.com/yanushevitz?tab=repositories"
                target="_blank"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_11_74)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_11_74">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
              <a href="http://judasz.ddns.net" target="_blank">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_11_72)">
                      <path
                        d="M12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0V0ZM16.6133 15.9333C16.6133 17.8933 15.5467 20.3333 11.2 22.2C11.6 16.64 7.84 17.28 6.93333 15.5333C7.01591 14.8107 7.27903 14.1205 7.69845 13.5264C8.11788 12.9322 8.68011 12.4531 9.33333 12.1333C7.26423 11.7784 5.33457 10.8552 3.76 9.46667C3.82667 10.0933 4.132 10.672 4.61333 11.08C3.57055 10.6869 2.66954 9.99028 2.02667 9.08C2.66237 6.98187 3.93376 5.13283 5.6653 3.7882C7.39685 2.44357 9.50313 1.66966 11.6933 1.57333C10.5733 3.41333 9.69333 7.08 11.6933 9C9.64 9.33333 8.34667 6.66667 7.21333 7.72C5.70667 9.13333 7.65333 11.0667 11.7733 11.8267C16.16 12.6133 16.6533 13.9333 16.6133 15.9333ZM18.4 10.6C17.9733 9.12 19.2267 7.62667 20.6533 6.41333C21.5443 7.69763 22.1115 9.17833 22.3065 10.7292C22.5015 12.2801 22.3186 13.8551 21.7733 15.32C20.7467 12.8 18.88 12.2267 18.4 10.56V10.6Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_11_72">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
