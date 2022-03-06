import cssClasses from "../../../../styles/Steps.module.css";
import Boxes from "./Boxes";
import Top from "./Top";

const Steps = () => {
  return (
    <section className={cssClasses.steps}>
      <div className={`${cssClasses.container} innerContainer`}>
        <Top />
        <Boxes />
      </div>
    </section>
  );
};

export default Steps;
