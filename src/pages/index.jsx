import asyncComponent from "../utility/asyncComponent";

const IndexPage = asyncComponent(() => import('../modules/Index'));

const Index = () => {
  return <IndexPage />
}

export default Index;