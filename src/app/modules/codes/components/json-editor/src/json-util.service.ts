import {Injectable} from "@angular/core";


@Injectable()
export class JsonUtilService {
  constructor() {
  }

  public defaultPrettify(json: any, spacing: number): string {
    return this._syntaxHighlight(json, this.getSerializer(), spacing);
  }

  private _syntaxHighlight(json: any, serializer: any, spacing: number): string {
    if (!json) {
      return '';
    }

    if (typeof json != 'string') {
      json = JSON.stringify(json, serializer, spacing);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      (match: string) => {
        var cls = 'number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key';
          } else {
            cls = 'string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean';
        } else if (/null/.test(match)) {
          cls = 'null';
        }
        return `<span class="${cls}"> ${match} </span>`;
      });

  }

  private getSerializer() {
    const stack: any[] = [];
    const keys: string[] = [];

    const cycleReplacer = (key: string, value: any): string => {
      if (stack[0] === value) {
        return "[Circular ~]";
      }
      return `Circular ~.${keys.slice(0, stack.indexOf(value)).join(".")}]`
    };

    return function (this: any, key: string, value: any) {
      if (stack.length > 0) {
        const thisPos = stack.indexOf(this);
        ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
        ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
        if (~stack.indexOf(value)) {
          value = cycleReplacer.call(this, key, value);
        }
      } else {
        stack.push(value);
      }
      return value;
    };
  }
}
