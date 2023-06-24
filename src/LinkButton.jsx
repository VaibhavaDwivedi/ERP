const LinkButton = (OriginalComponent) => {
  function NewComponent(props) {
    //render OriginalComponent and pass on its props.
    return <OriginalComponent />;
  }
  return NewComponent;
};
export default LinkButton; //will use this in future to combine both buton and navlink in a HOC
