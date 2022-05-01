import Head from "next/head";
import Image from "next/image";
import avatar from "../../public/img/avatar.jpg";
import logo from "../../public/img/united-kingdom.png";
import {
  faWhatsapp,
  faTelegram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Olga Zorin – English Teacher and Freelancer</title>
        <meta
          name="description"
          content="Olga Zorin English teacher and freelancer"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="container">
        <header>
          <div className="logo">
            <Image
              src={logo}
              alt="logo"
              width={64}
              height={64}
              layout="responsive"
            />
          </div>
          <nav>
            <a className="website" href="https://olgaz.ru">
              olgaz.ru
            </a>
          </nav>
        </header>

        <main>
          <div className="image-container">
            <Image
              src={avatar}
              alt="avatar"
              width={200}
              height={200}
              objectFit="cover"
              layout="responsive"
            />
          </div>
          <h1 className="title">Olga Zorina</h1>

          <h3 className="subtitle">
            Professional English 🇬🇧 teacher and freelancer based in Saint
            Petersburg 🇷🇺
          </h3>

          <p className="description">
            👋 Hi , I’m Olga. I’m a <em>self-taught English teacher</em> 👩‍💼,
            mainly pre-school and minor school education in Russia. I’m single.
            I like chatting 💬. I am sometimes energetic . Very like to be
            involved in anything.
          </p>
          <a
            className="button"
            href="https://wa.me/+79522679380"
            target="_blank"
          >
            Contact me
          </a>
        </main>

        <footer>
          <address className="phone">
            <a href="tel://+79522679380" target="_blank">
              +7 (952) 267-93-80
            </a>
          </address>
          <div className="social">
            <a href="https://wa.me/+79522679380" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="https://tg.me/olgazorina88" target="_blank">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
            <a href="https://vk.com/olgazorina85" target="_blank">
              <FontAwesomeIcon icon={faVk} size="2x" />
            </a>
          </div>
          <address className="address">
            <a
              href="https://yandex.ru/maps/?text=%D0%A8%D1%83%D0%B2%D0%B0%D0%BB%D0%BE%D1%81%D0%BA%D0%B8%D0%B9+74%2F2"
              target="_blank"
            >
              Shuvalovskiy Prospect 74/2
            </a>
          </address>
        </footer>
      </div>
    </>
  );
}
