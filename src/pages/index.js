import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Olga Zorin english teacher and freelancer</title>
        <meta
          name="description"
          content="Olga Zorin english teacher and freelancer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <header>
          <nav>
            <a href="https://olgaz.ru">olgaz.ru</a>
          </nav>
        </header>

        <main className="main">
          <h1 className="title">Olga Zorina</h1>

          <h3 className="subtitle">
            Professional English 🇬🇧 teacher and freelancer based in Saint
            Petersburg 🇷🇺
          </h3>

          <p className="description">
            👋 Hi , I’m Olga. I’m a self-taught English teacher 👩‍💼, mainly
            pre-school and minor school education in Russia. I’m single. I like
            chatting 💬. I am sometimes energetic .
          </p>
          <a className="contact-button" href="https://tg.me/olgazorina">
            Contact
          </a>
        </main>

        <footer className="footer">
          Telegram WhatsApp
          <address></address>
        </footer>
      </div>
    </>
  );
}
