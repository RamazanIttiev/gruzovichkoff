import { PageText } from './pageText';

const App = ({ data }) => (
  <PageText data={data} count={0}>
    I'm text from a component
  </PageText>
);

export const getServerSideProps = () => {
  const data = 'Hello from SSR';
  return { props: { data } };
};

export default App;
