'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";

const TEXTURE_PATH = "https://linear-vaporwave-three-js.vercel.app/grid-6.png";
const DISPLACEMENT_PATH = "https://linear-vaporwave-three-js.vercel.app/displacement-7.png";
const METALNESS_PATH = "https://linear-vaporwave-three-js.vercel.app/metalness-2.png";

const RetroGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    // Set the scene
    const scene = new THREE.Scene();
    const fog = new THREE.Fog("#000000", 1, 2.5);
    scene.fog = fog;

    // Create the object(s) that appears in the scene
    const geometry = new THREE.PlaneGeometry(1, 2, 24, 24);
    const textureLoader = new THREE.TextureLoader();
    const gridTexture = textureLoader.load(TEXTURE_PATH);
    const terrainTexture = textureLoader.load(DISPLACEMENT_PATH);
    const metalnessTexture = textureLoader.load(METALNESS_PATH);
    const material = new THREE.MeshStandardMaterial({
      map: gridTexture,
      displacementMap: terrainTexture,
      displacementScale: 0.2,
      metalnessMap: metalnessTexture,
      metalness: 0.96,
      roughness: 0.5,
    });

    const plane1 = new THREE.Mesh(geometry, material);
    plane1.rotation.x = -Math.PI * 0.5;
    plane1.position.y = 0.0;
    plane1.position.z = 0.15;
    scene.add(plane1);

    const plane2 = new THREE.Mesh(geometry, material);
    plane2.rotation.x = -Math.PI * 0.5;
    plane2.position.y = 0.0;
    plane2.position.z = -1.85;
    scene.add(plane2);

    const ambientLight = new THREE.AmbientLight("#ffffff", 10);
    scene.add(ambientLight);

    const spotlight1 = new THREE.SpotLight('#9873B7', 50, 25, Math.PI * 0.1, 0.25);
    spotlight1.position.set(0.5, 0.75, 2.2);
    spotlight1.target.position.x = -0.25;
    spotlight1.target.position.y = 0.25;
    spotlight1.target.position.z = 0.25;
    scene.add(spotlight1);
    scene.add(spotlight1.target);

    const spotlight2 = new THREE.SpotLight('#9873B7', 50, 25, Math.PI * 0.1, 0.25);
    spotlight2.position.set(-0.5, 0.75, 2.2);
    spotlight2.target.position.x = 0.25;
    spotlight2.target.position.y = 0.25;
    spotlight2.target.position.z = 0.25;
    scene.add(spotlight2);
    scene.add(spotlight2.target);

    // Define the camera which represents the POV in the scene
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      20
    );
    camera.position.x = 0;
    camera.position.y = 0.06;
    camera.position.z = 1.1;

    // Defines the renderer which displays the camera's view on our page
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentContainer.appendChild(renderer.domElement);

    // Define the effect composer
    const effectComposer = new EffectComposer(renderer);
    effectComposer.setSize(window.innerWidth, window.innerHeight);
    effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const renderPass = new RenderPass(scene, camera);
    effectComposer.addPass(renderPass);

    const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader);
    effectComposer.addPass(gammaCorrectionPass);

    const rgbShiftPass = new ShaderPass(RGBShiftShader);
    rgbShiftPass.uniforms['amount'].value = 0.003;
    effectComposer.addPass(rgbShiftPass);

    // Event listener to handle screen resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      effectComposer.setSize(window.innerWidth, window.innerHeight);
      effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    const timer = new THREE.Timer();
    const tick = (timestamp: number) => {
      timer.update(timestamp);
      const elapsedTime = timer.getElapsed();

      plane1.position.z = (elapsedTime * 0.1) % 2;
      plane2.position.z = ((elapsedTime * 0.1) % 2) - 2;

      effectComposer.render();
      window.requestAnimationFrame(tick);
    };

    // Start the loop
    window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', handleResize);

      renderer.dispose();
      geometry.dispose();
      material.dispose();

      if (currentContainer && renderer.domElement) {
        currentContainer.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-100vw h-100vh"
    />
  );
};

export default RetroGrid;
