import {Canvas} from '@react-three/fiber';

export function FirstLessonThreeJS(): JSX.Element {
    return (
        <div>
            <Canvas camera={{fov: 50, near: 0.4, far: 1000, position: [3, 7, 5]}} >
                <mesh visible userData={{hello: 'world'}} position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
                    <sphereGeometry args={[1, 16, 16]}/>
                    <meshStandardMaterial color="hotpink" transparent/>
                </mesh>
                {/*<ambientLight intensity={0.05}/>*/}
                {/*<directionalLight color="red" position={[3, 7, 5]}/>*/}
            </Canvas>
        </div>
    )
}
