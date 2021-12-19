import { useState } from 'react';

export const useFunction = (obj) => {
  const [style, setStyle] = useState(false);
  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState('');
  const [onColor, setOnColor] = useState(false);
  const [checkBold, setCheckBold] = useState(false);

  const [checkItalic, setCheckItalic] = useState(false);
  const [onBgColor, setOnBgColor] = useState(false);
  const [text, setText] = useState(`
    <p>React</p>
      <p>Redux</p>
      <p>WebPack</p>
      <p>NodeJs</p>
      <p>TypeScript</p>
  `);
  const [textarea, setTextArea] = useState(text);
  const [textStyle, setTextStyle] = useState({
    fontSize: '',
    fontFamily: '',
    color: '',
    fontStyle: 'normal',
    fontWeight: 'normal'
  });
  const [containerColor, setContainerColor] = useState('');

  const checkItalicHandler = (event) => {
    setCheckItalic(!checkItalic);
    {
      !checkItalic
        ? setTextStyle({
            ...textStyle,
            [event.target.name]: event.target.value
          })
        : setTextStyle({ ...textStyle, [event.target.name]: 'normal' });
    }
  };

  const checkBoldHandler = (event) => {
    setCheckBold(!checkBold);
    {
      !checkBold
        ? setTextStyle({
            ...textStyle,
            [event.target.name]: event.target.value
          })
        : setTextStyle({ ...textStyle, [event.target.name]: 'normal' });
    }
  };

  const changeHandlerText = (event) => {
    setTextArea(event.target.value);
  };

  const onChangeText = () => {
    setText(`${textarea}`);
  };

  const onBtnColor = () => {
    setOnColor(!onColor);
    setOnBgColor(false);
  };

  const onBtnBgColor = () => {
    setOnBgColor(!onBgColor);
    setOnColor(false);
  };

  const changeBgColor = (event) => {
    setContainerColor(event.target.style.background);
  };

  const changeColor = (event) => {
    setTextStyle({
      ...textStyle,
      [event.target.className]: event.target.style.background
    });
  };

  const onEdit = () => {
    setEdit(!edit);
    setStyle(false);
  };

  const onStyle = () => {
    setStyle(!style);
    setEdit(false);
  };

  const selectChange = (event) => {
    setSelected(event.target.value);
    setTextStyle({ ...textStyle, [event.target.name]: event.target.value });
  };

  const changeHandler = (event) => {
    setTextStyle({
      ...textStyle,
      [event.target.name]: event.target.value
    });
  };
  obj = {
    textStyle,
    containerColor,
    checkBold,
    text,
    checkItalic,
    edit,
    textarea,
    style,
    selected,
    onColor,
    onBgColor,
    onEdit,
    onStyle,
    onBtnBgColor,
    checkItalicHandler,
    changeBgColor,
    checkBoldHandler,
    onChangeText,
    changeHandlerText,
    selectChange,
    changeHandler,
    onBtnColor,
    changeColor
  };
  return obj;
};
