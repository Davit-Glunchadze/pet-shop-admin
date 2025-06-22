import {
  Spinner,
  SpinnerText,
  SpinnerWrapper,
} from "./styles/LoadingSpinner.Styled";

const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
      <SpinnerText>Loading...</SpinnerText>
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
