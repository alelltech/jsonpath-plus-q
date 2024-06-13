import { JSONPath, JSONPathOptions } from 'jsonpath-plus'
import * as yaml from 'js-yaml'
import { xml2js } from 'xml-js';

function fixQuery(query: string){
  let p = query;
  if (p.startsWith('.')) p = `$${p}`;
  if (!p.startsWith('$.')) p = `$.${p}`;

  p = `$..${p.replace(/^\$\.+/g, '')}`;
  return p
}

/**
 * Parse and query on json using jsonpath-plus
 * @param path jsonpath-plus query
 * @param content json content
 * @param options
 * @returns
 */
export function jq (
  path: string,
  content: string | Buffer | Record<any, any>,
  options?: {
    /**
     * Default is JSON.parse
     * @param content
     * @returns
     */
    parse?: (content: string) => object,
    queryOptions?: JSONPathOptions,
  }
) {
  const {
    parse,
    queryOptions
  } = options || {
    parse: JSON.parse,
    queryOptions: {
      flatten: true,
      autostart: true,
    }
  };

  let parsed: object = null

  if(content instanceof Buffer ) {
    parsed = parse(content.toString('utf-8'));
  } if(typeof content === 'string') {
    parsed = parse(content);
  } else {
    parsed = content
  }

  return JSONPath({
    ...queryOptions,
    json: parsed,
    path: fixQuery(path)
  })
}

/**
 * Parse and query on yaml using jsonpath-plus
 * @param path jsonpath-plus query
 * @param content yaml content
 * @param options
 * @returns
 */
export function yq (
  path: string,
  content: string | Buffer | Record<any, any>,
  options?: {
    /**
     * Default is `js-yaml.loadAll`
     * @param content
     * @returns
     */
    parse?: (content: string) => object,
    queryOptions?: JSONPathOptions,
  }
) {
  const {
    parse,
    queryOptions
  } = options || {
    parse: yaml.loadAll,
    queryOptions: {
      flatten: true,
      autostart: true,
    }
  };

  let parsed: object = null

  if(content instanceof Buffer ) {
    parsed = parse(content.toString('utf-8'));
  } if(typeof content === 'string') {
    parsed = parse(content);
  } else {
    parsed = content
  }

  return JSONPath({
    flatten: true,
    autostart: true,
    json: parsed,
    path: fixQuery(path)
  })
}

/**
 * Parse and query on yaml using jsonpath-plus
 * @param path jsonpath-plus query
 * @param content xml content
 * @param options
 * @returns
 */
export function xq (
  path: string,
  content: string | Buffer | Record<any, any>,
  options?: {
    /**
     * Default is `xml2js`
     * @param content
     * @returns
     */
    parse?: (content: string) => object,
    queryOptions?: JSONPathOptions,
  }
) {
  const {
    parse,
    queryOptions
  } = options || {
    parse: (content) => xml2js(content, {compact: true}),
    queryOptions: {
      flatten: true,
      autostart: true,
    }
  };

  let parsed: object = null

  if(content instanceof Buffer ) {
    parsed = parse(content.toString('utf-8'));
  } if(typeof content === 'string') {
    parsed = parse(content);
  } else {
    parsed = content
  }

  return JSONPath({
    flatten: true,
    autostart: true,
    json: parsed,
    path: fixQuery(path)
  })
}
