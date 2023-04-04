import React, { lazy, useEffect } from 'react';
import { FirstPage, Container } from './components';
import { useSearchParams } from 'react-router-dom';
import { MainProps } from '../../types/main/fourthPage/type';
const SecondPage = lazy(() =>
  import('./components').then(({ SecondPage }) => ({ default: SecondPage })),
);
const ThirdPage = lazy(() =>
  import('./components').then(({ ThirdPage }) => ({ default: ThirdPage })),
);
const FourthPage = lazy(() =>
  import('./components').then(({ FourthPage }) => ({ default: FourthPage })),
);

function Main({ snapPageNumber, setSnapPageNumber }: MainProps) {
  const contents = [
    <FirstPage />,
    <SecondPage />,
    <ThirdPage />,
    <FourthPage />,
  ];
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams('');
    return () => {
      setSnapPageNumber(0);
    };
  }, []);

  return (
    <Container
      snapPageNumber={snapPageNumber}
      setSnapPageNumber={setSnapPageNumber}
      contents={contents}
    />
  );
}

export default Main;
