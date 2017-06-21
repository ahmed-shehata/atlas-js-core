import test from 'ava';
import { mergePlainOptsWithDefault } from '../utils';


test('Should throw an error when no options or no default opts', t => {
  t.is(t.throws(() => {
    mergePlainOptsWithDefault(null, null);
  }, Error).message, 'options and default options values are mandatory');

  t.is(t.throws(() => {
    mergePlainOptsWithDefault({}, null);
  }, Error).message, 'options and default options values are mandatory');

  t.is(t.throws(() => {
    mergePlainOptsWithDefault(null, {});
  }, Error).message, 'options and default options values are mandatory');
});

test('Should merge options without path', t => {
  const { reco_id, tracking_string } = mergePlainOptsWithDefault(
    { reco_id: '123', tracking_string: 'TRACK' },
    { reco_id: '', tracking_string: '' });

  t.is(reco_id, '123');
  t.is(tracking_string, 'TRACK');
});

test('Should merge options without path and get one value from defaults', t => {
  const { reco_id, tracking_string } = mergePlainOptsWithDefault(
    { reco_id: '123' },
    { reco_id: '', tracking_string: '' });

  t.is(reco_id, '123');
  t.is(tracking_string, '');
});

test('Should merge options with path', t => {
  const { cdn, resolutions } = mergePlainOptsWithDefault(
    {
      media: {
        cdn: 'cdn2',
        resolutions: ['large', 'small']
      }
    },
    {
      cdn: 'cdn1',
      resolutions: ['small']
    },
    'media');

  t.is(cdn, 'cdn2');
  t.deepEqual(resolutions, ['large', 'small']);
});

test('Should merge options with path and get one value from defaults', t => {
  const { cdn, resolutions } = mergePlainOptsWithDefault(
    {
      media: {
        cdn: 'cdn2'
      }
    },
    {
      cdn: 'cdn1',
      resolutions: ['small']
    },
    'media');

  t.is(cdn, 'cdn2');
  t.deepEqual(resolutions, ['small']);
});


