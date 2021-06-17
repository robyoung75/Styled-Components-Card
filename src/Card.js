import styled from "styled-components";

const StyledCard = styled.div`
  ${(props) => props.isFlex && props.flexStyles};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
`;

const Card = ({
  children,
  isFlex,
  flexStyles,
  justifyContent,
  alignItems,
  flexDirection,
  background,
  backgroundColor,
  color,
  width,
  minWidth,
  height,
  minHeight,
  padding,
  margin,
  border,
  borderRadius
}) => {
  return (
    <StyledCard
      isFlex={isFlex}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      background={background}
      backgroundColor={backgroundColor}
      color={color}
      width={width}
      minWidth={minWidth}
      height={height}
      minHeight={minHeight}
      padding={padding}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
      flexStyles={flexStyles}
    >
      {children}
    </StyledCard>
  );
};

Card.defaultProps = {
  flexDirection: "row",
  alignItems: "start",
  justifyContent: "start",
  background: "lightgrey",
  backgroundColor: "lightgrey",
  color: "white",
  width: "50%",
  minWidth: "275px",
  height: "50%",
  minHeight: "400px",
  padding: "0",
  margin: "0",
  border: "none",
  borderRadius: "none"
};

export default Card;
