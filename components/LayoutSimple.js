import Layout from "components/Layout";

export default function LayoutSimple({ title, children }) {
  return (
    <Layout>
      <div className="gradient">{children}</div>
    </Layout>
  );
}
