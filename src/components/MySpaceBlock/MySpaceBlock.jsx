const MySpaceBlock = (props) => {
  const { content, title, createdAt, description } = props.space;
  return (
    <div>
      <p>{content}</p>
      <p>{createdAt}</p>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default MySpaceBlock;
