// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.

const core = globalThis.Deno.core;
const internals = globalThis.__bootstrap.internals;

function enableJupyter() {
  const {
    op_jupyter_broadcast,
  } = core.ensureFastOps();

  globalThis.Deno.jupyter = {
    async broadcast(msgType, content, { metadata = {} } = {}) {
      await op_jupyter_broadcast(msgType, content, metadata);
    },
  };
}

internals.enableJupyter = enableJupyter;
