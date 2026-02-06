import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const DNAHelix = (props) => {
    const ref = useRef();

    // Procedural DNA generation
    const particles = useMemo(() => {
        const count = 200; // Number of base pairs
        const positions = new Float32Array(count * 2 * 3); // 2 points per base pair
        const colors = new Float32Array(count * 2 * 3);

        // Clinical Palette Colors
        const color1 = new THREE.Color('#0284c7'); // brand-600
        const color2 = new THREE.Color('#0ea5e9'); // brand-500

        for (let i = 0; i < count; i++) {
            const t = i / count;
            const angle = t * Math.PI * 10; // Total twists
            const radius = 1.2;
            const height = (t - 0.5) * 15; // Vertical spread

            // Strand 1
            positions[i * 6] = Math.cos(angle) * radius;
            positions[i * 6 + 1] = height;
            positions[i * 6 + 2] = Math.sin(angle) * radius;

            // Strand 2 (Offset by PI)
            positions[i * 6 + 3] = Math.cos(angle + Math.PI) * radius;
            positions[i * 6 + 4] = height;
            positions[i * 6 + 5] = Math.sin(angle + Math.PI) * radius;

            // Colors
            color1.toArray(colors, i * 6);
            color2.toArray(colors, i * 6 + 3);
        }

        return { positions, colors };
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.2; // Slow rotation
            ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1; // Gentle wobble
        }
    });

    return (
        <group {...props} rotation={[0, 0, Math.PI / 6]}>
            <Points ref={ref} positions={particles.positions} colors={particles.colors} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
};

export default DNAHelix;
