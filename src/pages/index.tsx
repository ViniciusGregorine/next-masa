import Link from "next/link";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <h1 className="bg-red text-opacity-0 ">Hello aa Next.js 👋</h1>
    <p>
      <p>teste</p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
