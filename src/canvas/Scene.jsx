import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Avatar from './Avatar.jsx';

const Scene = () => {
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 1, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <Avatar />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Scene;