import { useEffect } from 'react';
import './App.css';
import SceneInit from './components/SceneInit';
import * as THREE from 'three';

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const points = [];
    points.push(new THREE.Vector3(-20, 0, 0));
    points.push(new THREE.Vector3(0, 20, 0));
    points.push(new THREE.Vector3(20, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    test.scene.add(line);
    test.scene.add(boxMesh);
  }, []);

  return (
    <div>
      <canvas id='myThreeJsCanvas'></canvas>
    </div>
  );
}

export default App;
