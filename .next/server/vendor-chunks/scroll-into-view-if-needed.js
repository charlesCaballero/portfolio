"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/scroll-into-view-if-needed";
exports.ids = ["vendor-chunks/scroll-into-view-if-needed"];
exports.modules = {

/***/ "(ssr)/./node_modules/scroll-into-view-if-needed/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/scroll-into-view-if-needed/dist/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ t)\n/* harmony export */ });\n/* harmony import */ var compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! compute-scroll-into-view */ \"(ssr)/./node_modules/compute-scroll-into-view/dist/index.js\");\n\nconst o = (e)=>!1 === e ? {\n        block: \"end\",\n        inline: \"nearest\"\n    } : ((e)=>e === Object(e) && 0 !== Object.keys(e).length)(e) ? e : {\n        block: \"start\",\n        inline: \"nearest\"\n    };\nfunction t(t, n) {\n    if (!t.isConnected || !((e)=>{\n        let o = e;\n        for(; o && o.parentNode;){\n            if (o.parentNode === document) return !0;\n            o = o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;\n        }\n        return !1;\n    })(t)) return;\n    if (((e)=>\"object\" == typeof e && \"function\" == typeof e.behavior)(n)) return n.behavior((0,compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__.compute)(t, n));\n    const r = \"boolean\" == typeof n || null == n ? void 0 : n.behavior;\n    for (const { el: i, top: a, left: l } of (0,compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__.compute)(t, o(n)))i.scroll({\n        top: a,\n        left: l,\n        behavior: r\n    });\n}\n //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRDtBQUFBLE1BQU1FLElBQUVELENBQUFBLElBQUcsQ0FBQyxNQUFJQSxJQUFFO1FBQUNFLE9BQU07UUFBTUMsUUFBTztJQUFTLElBQUUsQ0FBQ0gsQ0FBQUEsSUFBR0EsTUFBSUksT0FBT0osTUFBSSxNQUFJSSxPQUFPQyxJQUFJLENBQUNMLEdBQUdNLE1BQU0sRUFBRU4sS0FBR0EsSUFBRTtRQUFDRSxPQUFNO1FBQVFDLFFBQU87SUFBUztBQUFFLFNBQVNJLEVBQUVBLENBQUMsRUFBQ0MsQ0FBQztJQUFFLElBQUcsQ0FBQ0QsRUFBRUUsV0FBVyxJQUFFLENBQUMsQ0FBQ1QsQ0FBQUE7UUFBSSxJQUFJQyxJQUFFRDtRQUFFLE1BQUtDLEtBQUdBLEVBQUVTLFVBQVUsRUFBRTtZQUFDLElBQUdULEVBQUVTLFVBQVUsS0FBR0MsVUFBUyxPQUFNLENBQUM7WUFBRVYsSUFBRUEsRUFBRVMsVUFBVSxZQUFZRSxhQUFXWCxFQUFFUyxVQUFVLENBQUNHLElBQUksR0FBQ1osRUFBRVMsVUFBVTtRQUFBO1FBQUMsT0FBTSxDQUFDO0lBQUMsR0FBR0gsSUFBRztJQUFPLElBQUcsQ0FBQ1AsQ0FBQUEsSUFBRyxZQUFVLE9BQU9BLEtBQUcsY0FBWSxPQUFPQSxFQUFFYyxRQUFRLEVBQUVOLElBQUcsT0FBT0EsRUFBRU0sUUFBUSxDQUFDZCxpRUFBQ0EsQ0FBQ08sR0FBRUM7SUFBSSxNQUFNTyxJQUFFLGFBQVcsT0FBT1AsS0FBRyxRQUFNQSxJQUFFLEtBQUssSUFBRUEsRUFBRU0sUUFBUTtJQUFDLEtBQUksTUFBSyxFQUFDRSxJQUFHQyxDQUFDLEVBQUNDLEtBQUlDLENBQUMsRUFBQ0MsTUFBS0MsQ0FBQyxFQUFDLElBQUdyQixpRUFBQ0EsQ0FBQ08sR0FBRU4sRUFBRU8sSUFBSVMsRUFBRUssTUFBTSxDQUFDO1FBQUNKLEtBQUlDO1FBQUVDLE1BQUtDO1FBQUVQLFVBQVNDO0lBQUM7QUFBRTtBQUFzQixrQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQvZGlzdC9pbmRleC5qcz85NjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydHtjb21wdXRlIGFzIGV9ZnJvbVwiY29tcHV0ZS1zY3JvbGwtaW50by12aWV3XCI7Y29uc3Qgbz1lPT4hMT09PWU/e2Jsb2NrOlwiZW5kXCIsaW5saW5lOlwibmVhcmVzdFwifTooZT0+ZT09PU9iamVjdChlKSYmMCE9PU9iamVjdC5rZXlzKGUpLmxlbmd0aCkoZSk/ZTp7YmxvY2s6XCJzdGFydFwiLGlubGluZTpcIm5lYXJlc3RcIn07ZnVuY3Rpb24gdCh0LG4pe2lmKCF0LmlzQ29ubmVjdGVkfHwhKGU9PntsZXQgbz1lO2Zvcig7byYmby5wYXJlbnROb2RlOyl7aWYoby5wYXJlbnROb2RlPT09ZG9jdW1lbnQpcmV0dXJuITA7bz1vLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290P28ucGFyZW50Tm9kZS5ob3N0Om8ucGFyZW50Tm9kZX1yZXR1cm4hMX0pKHQpKXJldHVybjtpZigoZT0+XCJvYmplY3RcIj09dHlwZW9mIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUuYmVoYXZpb3IpKG4pKXJldHVybiBuLmJlaGF2aW9yKGUodCxuKSk7Y29uc3Qgcj1cImJvb2xlYW5cIj09dHlwZW9mIG58fG51bGw9PW4/dm9pZCAwOm4uYmVoYXZpb3I7Zm9yKGNvbnN0e2VsOmksdG9wOmEsbGVmdDpsfW9mIGUodCxvKG4pKSlpLnNjcm9sbCh7dG9wOmEsbGVmdDpsLGJlaGF2aW9yOnJ9KX1leHBvcnR7dCBhcyBkZWZhdWx0fTsvLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdLCJuYW1lcyI6WyJjb21wdXRlIiwiZSIsIm8iLCJibG9jayIsImlubGluZSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0IiwibiIsImlzQ29ubmVjdGVkIiwicGFyZW50Tm9kZSIsImRvY3VtZW50IiwiU2hhZG93Um9vdCIsImhvc3QiLCJiZWhhdmlvciIsInIiLCJlbCIsImkiLCJ0b3AiLCJhIiwibGVmdCIsImwiLCJzY3JvbGwiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/scroll-into-view-if-needed/dist/index.js\n");

/***/ })

};
;