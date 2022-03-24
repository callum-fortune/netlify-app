import React from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';


function Build() {

    const controls = React.useRef();
    useFrame(({ clock }) => {
    controls.current.rotation.x = clock.getElapsedTime();
    controls.current.rotation.y = clock.getElapsedTime();
    })

    return (
                <mesh ref={controls}>
                    <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    <meshStandardMaterial color='hotpink' />
                </mesh>
    )

}

export default function Three() {

    return (
        <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.5} position={[20, 10, 10]} />;
            <spotLight intensity={0.6} position={[30,-30,10]} angle={0.2}></spotLight>
            <Build />
        </Canvas>
    )
}