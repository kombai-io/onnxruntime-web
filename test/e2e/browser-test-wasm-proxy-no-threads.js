// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

it('Browser E2E testing - WebAssembly backend (proxy, no threads)', async function () {
  ort.env.wasm.numThreads = 1;
  ort.env.wasm.proxy = true;
  await testFunction(ort, { executionProviders: ['wasm'] });
});
