import { OrbitControls } from 'drei';
import React, { Component } from 'react';
import { Canvas } from "react-three-fiber";

function Box() {
    return (
        <mesh>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

export default function Three() {
    return (
        <Canvas>
            <OrbitControls />
            <Box></Box>
        </Canvas>
    )
}