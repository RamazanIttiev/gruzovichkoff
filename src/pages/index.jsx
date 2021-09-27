import { PageText } from './pageText';

// Разделил код на 2 страницы для лучшей читаемости
const App = ({ data }) => (
  /* 
    count="count" так как count увеличивается на 1, есть смысл сделать его числом

    id="id" options="options" count="count" color="color" data="data"

    Не совсем понятен смысл данных пропсов
  */

  <PageText data={data} count={0}>
    I'm text from a component
  </PageText>
);

export const getServerSideProps = () => {
  const data = 'Hello from SSR';
  return { props: { data } };
};

export default App;
