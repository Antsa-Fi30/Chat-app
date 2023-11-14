import AtomicSpinner from "atomic-spinner";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="Loader">
      <AtomicSpinner
        atomSize={250}
        displayNucleus={true}
        electronSize={1.8}
        electronSpeed={0.6}
        nucleusParticleBorderWidth={0.4}
        nucleusLayerCount={1}
        nucleusParticlesPerLayer={1}
        nucleusParticleSize={5.6}
        electronPathColor={"#2965ff"}
        nucleusParticleFillColor={"#4375f4"}
        nucleusParticleBorderColor="#4375f4"
      />
    </div>
  );
};

export default Loader;
