import MainCard from "./MainCard";
import MessagesBox from "./MessagesBox";

const RightSide = () => {
  return (
    <MainCard
      border={false}
      boxShadow>
      <MessagesBox />
    </MainCard>
  );
};

export default RightSide;
