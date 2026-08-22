const test = require('node:test');
const assert = require('node:assert');
const { WatchHandler } = require('../src/features/feature-watch-1.js');

test('watch regression guard ' + '1', async () => {
 const result = await new WatchHandler({ retries: 1 }).run('sample-1');
 assert.strictEqual(result.ok, true);
});