# Poseidon Hash over bn254 with Typescript

[![MIT License](https://img.shields.io/github/license/inverse-technology/poseidon-ts?style=flat-square)](https://github.com/inverse-technology/poseidon-ts/blob/master/LICENSE)
[![Language](https://img.shields.io/badge/language-TypeScript-blue.svg?style=flat-square)](https://www.typescriptlang.org) ![npm version](https://badge.fury.io/js/poseidon-h.svg) [![CI Check](https://github.com/inverse-technology/poseidon-ts/actions/workflows/index.yml/badge.svg)](https://github.com/inverse-technology/poseidon-ts/actions/workflows/index.yml)

A [poseidon hash](https://eprint.iacr.org/2019/458.pdf) implementation over BN254. Circom circuit and Groth16 tests.

**Use at your own risk**.

## Install

```shell
$ npm i poseidon-h
```

## Usage

```ts
import { poseidon, randomFieldElement } from "poseidon-h";
const wasm = require("circom_tester").wasm;

const hash = poseidon([1n, 2n]);
const hash2 = poseidon([randomFieldElement(), randomFieldElement()]);
const circuit = await wasm(path.join("circuit", "poseidon.circom"));
const witness = await circuit.calculateWitness({ inputs });
const hash = poseidon(inputs);

await circuit.assertOut(witness, { out: hash });
```

## Test

```shell
$ yarn test
```

## Groth16

```shell
$ yarn groth16
```
