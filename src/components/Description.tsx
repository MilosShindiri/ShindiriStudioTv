import { Wrapper } from "./Description.styled";

export const Description = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{description}</p>
    </Wrapper>
  );
};
