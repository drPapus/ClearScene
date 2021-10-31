import { AxesHelper, GridHelper } from 'three';

function createAxesHelper() {
  const helper = new AxesHelper(30);
  helper.position.set(-3.5, 0, -3.5);
  return helper;
}

function createGridHelper() {
  const helper = new GridHelper(60);
  return helper;
}

export { createAxesHelper, createGridHelper };
