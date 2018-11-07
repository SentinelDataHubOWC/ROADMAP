"use strict";const ShadyCSS=window.ShadyCSS;window.registerSVGElement=()=>{const LOCAL_NAME="svg-in-shadow",TEMPLATE=document.querySelector(`template#${LOCAL_NAME}`);ShadyCSS.prepareTemplate(TEMPLATE,LOCAL_NAME);class SVGInShadow extends window.HTMLElement{connectedCallback(){ShadyCSS.styleElement(this);this.attachShadow({mode:"open"});this.shadowRoot.appendChild(document.importNode(TEMPLATE.content,!0))}get svg(){return this.shadowRoot.querySelector("svg")}addCircle(){var _Mathfloor=Math.floor;const circle=document.createElementNS("http://www.w3.org/2000/svg","circle"),x=10+_Mathfloor(80*Math.random()),y=10+_Mathfloor(80*Math.random());circle.setAttribute("cx",x+"");circle.setAttribute("cy",y+"");circle.setAttribute("r","10");this.svg.appendChild(circle);return circle}}window.customElements.define(LOCAL_NAME,SVGInShadow)};