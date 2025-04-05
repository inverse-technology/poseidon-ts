# Poseidon Hash with Typescript

A [poseidon hash](https://eprint.iacr.org/2019/458.pdf) implementation over BN254 and Circom circuit test.

## Install

```shell
$ npm i poseidon-h
```

## Usage

```ts
import { poseidon } from "poseidon-h";

const hash = poseidon([1n, 2n]);
```

## Groth16

```shell
$ yarn groth16
```
