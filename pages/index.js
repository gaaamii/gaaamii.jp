import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>gaaamiiのウェブサイト</title>
        <meta name="description" content="gaaamiiのウェブサイトです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid place-content-center h-screen">
        <h1 className="text-3xl font-bold">gaaamiiのウェブサイト</h1>
        <section className="mt-8">
          <h2 className="font-bold">自己紹介</h2>
          <p className="mt-2">東京都在住のソフトウェア開発者です。</p>
          <p>
            仕事や趣味でウェブアプリの画面作ったりREST風API作ったりしています。
          </p>
        </section>
        <section className="mt-10">
          <h2 className="font-bold">リンク集</h2>
          <ul className="mt-2 flex gap-4">
            <li>
              <a
                href="https://blog.gaaamii.jp"
                target="_blank"
                className="underline"
              >
                ブログ
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/gaaamii"
                target="_blank"
                className="underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gaaamii"
                target="_blank"
                className="underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://codepen.com/gaaamii"
                target="_blank"
                className="underline"
              >
                CodePen
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
