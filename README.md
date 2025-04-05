# Poseidon Hash with Typescript ![npm version](https://badge.fury.io/js/poseidon-h.svg) [![CI Check](https://github.com/inverse-technology/poseidon-ts/actions/workflows/index.yml/badge.svg)](https://github.com/inverse-technology/poseidon-ts/actions/workflows/index.yml)

A [poseidon hash](https://eprint.iacr.org/2019/458.pdf) implementation over BN254 and Circom circuit test.

**Use at your own risk**.

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
