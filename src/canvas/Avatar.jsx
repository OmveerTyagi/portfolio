import { useGLTF } from '@react-three/drei';

const Avatar = () => {
  const { scene } = useGLTF('https://models.babylonjs.com/CesiumMan/glTF/CesiumMan.gltf');
  return <primitive object={scene} scale={1.5} position={[0, -1.2, 0]} />;
};

export default Avatar;
