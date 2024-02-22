const OddEvenResult = ({ count }) => {
  console.log(count);
  return (
    <div>
      {count}는 {count % 2 === 0 ? "짝수" : "홀수"}
    </div>
  );
};

export default OddEvenResult;
