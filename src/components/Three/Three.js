import React, { Suspense } from 'react';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

function Build() {

    const controls = React.useRef();
    useFrame(({ clock }) => {

    controls.current.rotation.x = clock.getElapsedTime()/2;
    controls.current.rotation.y = clock.getElapsedTime();
    controls.current.rotation.z = clock.getElapsedTime();

    })

    const texture_1 = useLoader(TextureLoader, "/assets/cubeimgs/react.png");
    const texture_2 = useLoader(TextureLoader, "/assets/cubeimgs/html5.png");
    const texture_3 = useLoader(TextureLoader, "/assets/cubeimgs/node.png");
    const texture_4 = useLoader(TextureLoader, "/assets/cubeimgs/css.png");
    const texture_5 = useLoader(TextureLoader, "/assets/cubeimgs/bootstrap.png");
    const texture_6 = useLoader(TextureLoader, "/assets/cubeimgs/metamask.png");

    return (
                <mesh ref={controls}>
                    <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    <meshStandardMaterial map={texture_1} attachArray="material" />
                    <meshStandardMaterial map={texture_2} attachArray="material" />
                    <meshStandardMaterial map={texture_3} attachArray="material" />
                    <meshStandardMaterial map={texture_4} attachArray="material" />
                    <meshStandardMaterial map={texture_5} attachArray="material" />
                    <meshStandardMaterial map={texture_6} attachArray="material" />
                </mesh>
    )

}

export default function Three() {

    return (
        <div style={{height: '100%', zIndex: 0}}>
            <Canvas>
                <Stars />
                <ambientLight intensity={0.4} position={[20, 10, 10]} />;
                <spotLight intensity={0.8} position={[10,-10,10]} angle={0.2}></spotLight>
                <Suspense fallback={null}>
                    <Build />
                </Suspense>
            </Canvas>
        </div>
    )
}