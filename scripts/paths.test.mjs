import test from 'node:test';
import assert from 'node:assert/strict';
import { sitePath } from '../src/lib/paths.js';
import { characters, site } from '../src/data/site.js';
test('root hosting paths', () => {
  assert.equal(sitePath('/'), '/');
  assert.equal(sitePath('/', 'world/'), '/world/');
});
test('GitHub repository subpath hosting paths', () => {
  assert.equal(sitePath('/negai-site', 'characters/'), '/negai-site/characters/');
  assert.equal(sitePath('/negai-site/', '/images/niimaro.png'), '/negai-site/images/niimaro.png');
  assert.equal(sitePath('/negai-site/'), '/negai-site/');
});
test('character identifiers and editable content', () => {
  assert.equal(new Set(characters.map(character => character.slug)).size, characters.length);
  for (const character of characters) {
    assert.match(character.slug, /^[a-z0-9-]+$/);
    assert.ok(character.name && character.description);
    assert.match(character.color, /^#[0-9a-f]{6}$/i);
  }
  assert.ok(!site.readUrl || /^https:\/\//.test(site.readUrl));
});
