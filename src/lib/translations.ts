import messages from '../../messages/en.json';

type NestedMessages = Record<string, unknown>;
type TranslationValues = Record<string, string | number>;

function resolve(root: unknown, path: string): unknown {
  const parts = path.split('.');
  let val: unknown = root;
  for (const part of parts) {
    if (val === undefined || val === null) return undefined;
    val = (val as NestedMessages)[part];
  }
  return val;
}

function interpolate(template: string, values: TranslationValues): string {
  // Replace `{name}` style placeholders. Mirrors next-intl's basic ICU
  // substitution. Unknown placeholders are left intact.
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : match,
  );
}

export interface TranslateFn {
  (key: string, values?: TranslationValues): string;
  raw: (key: string) => unknown;
}

/**
 * Drop-in replacement for next-intl's `useTranslations` for a single-locale
 * (EN-only) build. Returns a function `t(key, values?)` that resolves dotted
 * keys relative to the given namespace and falls back to the key on miss.
 *
 * Also exposes `t.raw(key)` to mirror next-intl's escape hatch for arrays /
 * complex objects (used in Hero, Features, Footer, etc).
 */
export function getTranslations(namespace: string): TranslateFn {
  const nsValue = resolve(messages, namespace);

  function t(key: string, values?: TranslationValues): string {
    const val = resolve(nsValue, key);
    if (typeof val !== 'string') return key;
    return values ? interpolate(val, values) : val;
  }

  t.raw = function raw(key: string): unknown {
    return resolve(nsValue, key);
  };

  return t as TranslateFn;
}
