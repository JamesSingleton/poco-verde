import { getLayout } from "@/components/Layout/PortfolioLayout";

const PortfolioItem = (props) => {
  return (
    <>
      <div>
        <h1>Firepits</h1>
      </div>
    </>
  );
};

PortfolioItem.getLayout = getLayout;

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
export const getStaticPaths = ({ locales }) => {
  return {
    paths: [
      { params: { slug: "turf" }, locale: "en" },
      { params: { slug: "bbq" }, locale: "en" },
      { params: { slug: "commercial-projects" }, locale: "en" },
      { params: { slug: "concrete-pavers" }, locale: "en" },
      { params: { slug: "courtyards" }, locale: "en" },
      { params: { slug: "deco-wall" }, locale: "en" },
      { params: { slug: "firepits" }, locale: "en" },
      { params: { slug: "front-yard-desert" }, locale: "en" },
      { params: { slug: "fireplaces" }, locale: "en" },
      { params: { slug: "granite-colors" }, locale: "en" },
      { params: { slug: "pools" }, locale: "en" },
      { params: { slug: "ramada" }, locale: "en" },
      { params: { slug: "recreational-areas" }, locale: "en" },
      { params: { slug: "spas" }, locale: "en" },
      { params: { slug: "travertine-pavers" }, locale: "en" },
      { params: { slug: "water-features" }, locale: "en" },
    ],
    fallback: true,
  };
};

export default PortfolioItem;
