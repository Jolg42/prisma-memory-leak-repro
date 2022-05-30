# prisma-memory-leak-repro

pnpm i && pnpm t

```
 FAIL  tests/memory.test.ts
  ● Test suite failed to run

    EXPERIMENTAL FEATURE!
    Your test suite is leaking memory. Please ensure all references are cleaned.

    There is a number of things that can leak memory:
      - Async operations that have not finished (e.g. fs.readFile).
      - Timers not properly mocked (e.g. setInterval, setTimeout).
      - Keeping references to the global scope.

      at onResult (node_modules/.pnpm/@jest+core@28.1.0/node_modules/@jest/core/build/TestScheduler.js:188:18)
      at node_modules/.pnpm/@jest+core@28.1.0/node_modules/@jest/core/build/TestScheduler.js:300:17
      at node_modules/.pnpm/emittery@0.10.2/node_modules/emittery/index.js:311:13
          at Array.map (<anonymous>)
      at Emittery.emit (node_modules/.pnpm/emittery@0.10.2/node_modules/emittery/index.js:309:23)
```
