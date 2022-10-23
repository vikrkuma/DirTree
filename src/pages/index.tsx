import type { NextPage } from "next";
import styles from "styles/Home.module.scss";

import useRotationMethod from "hooks/useRotationMethod";
import MaxWellDisk from "components/MaxWellDisk";
import DiskRotationOptions from "components/DiskRotationOptions";

const Home: NextPage = () => {
  const [rotationMethod, speedInMs, setRotationMethod, setSpeedInMs] = useRotationMethod();
  return (
    <div className={styles.container}>
      <MaxWellDisk rotationMethod={rotationMethod} speedInMs={speedInMs} />
      <DiskRotationOptions
        rotationMethod={rotationMethod}
        speedInMs={speedInMs}
        onRotationMethodChange={setRotationMethod}
        onSpeedChange={setSpeedInMs}
      />
    </div>
  );
};

export default Home;
