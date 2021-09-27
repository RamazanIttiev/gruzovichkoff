// useState, useEffect, Grid и styled импортируются не по дефолту
import React, { useState, useEffect } from 'react';
import { Grid, styled } from '@mui/material';

const Title = styled('h1')({
  color: 'red',
});

// MyWonderfulComponent не совсем верное название
export const PageText = ({ count, children, data }) => {
  /*
    const { count } = other;  - не обязательно объявлять переменную для получения параметров
  
    const { summ, setSumm } = useState(count);
    1. Переменные должны быть в квдратных скобках
    2. Не корректное название (вторая 'm' лишняя)
   */
  const [sum, setSum] = useState(count);

  // data хранит в себе строку, которую я получил с сервера
  console.log(data);

  useEffect(() => {
    /*
    Не совсем пойму суть данной проверки, так как пропс options - не объект и не имеет никаких свойств

      if (id && options 
        && options.params 
        && options.params.fields 
        && options.params.fields.isDynamic) {
      setSumm(summ + 1);
    }

      Вместо проверки было бы логичнее добавить сюда кнопку и по клику увеличивать счетчик,
      либо хотя бы увеличивать его каждую секунду
    */

    setTimeout(() => {
      setSum(sum + 1);
    }, 1000);

    // [data, sum] - useEffect вызывается при изменении элементов в массиве зависимостей
  }, [data, sum]);

  return (
    /*
      У react компонента должен быть только один родительский тег

      <h1>Hello World!</h1>
      <Grid>
        <Grid xs={12}>{children}</Grid>
        <Grid>{ summ }</Grid>
      </Grid>
    */
    <>
      <Title>Hello World!</Title>
      <Grid container>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          Count - {sum}
        </Grid>
      </Grid>
    </>
  );
};
