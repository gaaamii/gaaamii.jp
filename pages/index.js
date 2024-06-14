import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
              <Link href="https://blog.gaaamii.jp" className="underline">
                ブログ
              </Link>
            </li>
            <li>
              <Link href="https://x.com/gaaamii" className="underline">
                X
              </Link>
            </li>
            <li>
              <Link href="https://github.com/gaaamii" className="underline">
                GitHub
              </Link>
            </li>
            <li>
              <Link href="https://codepen.com/gaaamii" className="underline">
                CodePen
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
