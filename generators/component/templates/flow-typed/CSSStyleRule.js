/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

declare class CSSStyleRule extends CSSRule {
  style: CSSStyleDeclaration;
  selectorText: string;
}

declare class CSSRuleList {
  length: number;
  item(index: number): CSSStyleRule;
}
