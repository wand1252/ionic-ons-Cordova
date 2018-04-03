/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {
  interface HTMLFooterBarElement extends HTMLStencilElement {

  }
  var HTMLFooterBarElement: {
    prototype: HTMLFooterBarElement;
    new (): HTMLFooterBarElement;
  };
  interface HTMLElementTagNameMap {
    'footer-bar': HTMLFooterBarElement;
  }
  interface ElementTagNameMap {
    'footer-bar': HTMLFooterBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'footer-bar': JSXElements.FooterBarAttributes;
    }
  }
  namespace JSXElements {
    export interface FooterBarAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLHeaderBarElement extends HTMLStencilElement {

  }
  var HTMLHeaderBarElement: {
    prototype: HTMLHeaderBarElement;
    new (): HTMLHeaderBarElement;
  };
  interface HTMLElementTagNameMap {
    'header-bar': HTMLHeaderBarElement;
  }
  interface ElementTagNameMap {
    'header-bar': HTMLHeaderBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'header-bar': JSXElements.HeaderBarAttributes;
    }
  }
  namespace JSXElements {
    export interface HeaderBarAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLIconSearchElement extends HTMLStencilElement {

  }
  var HTMLIconSearchElement: {
    prototype: HTMLIconSearchElement;
    new (): HTMLIconSearchElement;
  };
  interface HTMLElementTagNameMap {
    'icon-search': HTMLIconSearchElement;
  }
  interface ElementTagNameMap {
    'icon-search': HTMLIconSearchElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'icon-search': JSXElements.IconSearchAttributes;
    }
  }
  namespace JSXElements {
    export interface IconSearchAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLLandingPageElement extends HTMLStencilElement {

  }
  var HTMLLandingPageElement: {
    prototype: HTMLLandingPageElement;
    new (): HTMLLandingPageElement;
  };
  interface HTMLElementTagNameMap {
    'landing-page': HTMLLandingPageElement;
  }
  interface ElementTagNameMap {
    'landing-page': HTMLLandingPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'landing-page': JSXElements.LandingPageAttributes;
    }
  }
  namespace JSXElements {
    export interface LandingPageAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
