import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>gaaamiiのホームページ</title>
        <meta name="description" content="gaaamiiのホームページです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid place-content-center h-screen px-4">
        <h1 className="sm:text-3xl text-xl font-bold flex gap-4 items-center">
          <Image
            src="/profile.png"
            alt="がーみーのプロフィール画像"
            width="60"
            height="60"
            className="rounded-full"
          />
          gaaamiiのホームページ
        </h1>
        <section className="mt-8">
          <h2 className="font-bold">自己紹介</h2>
          <p className="mt-2">東京都在住のソフトウェア開発者です。</p>
          <p>仕事や趣味でウェブアプリを作っています。</p>
        </section>
        <section className="mt-10">
          <h2 className="font-bold">リンク集</h2>
          <ul className="mt-2 flex gap-4">
            <li>
              <a
                href="https://blog.gaaamii.jp"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                ブログ
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/gaaamii"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gaaamii"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://codepen.com/gaaamii"
                target="_blank"
                rel="noreferrer"
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
