document.addEventListener("DOMContentLoaded",function(){var a=ace.edit("edit"),b=ace.edit("output");a.setOptions({mode:"ace/mode/html",theme:"ace/theme/tomorrow_night_eighties",tabSize:2,showPrintMargin:!1,wrap:!0,useWorker:!0,fontSize:12,showInvisibles:!1,behavioursEnabled:!0,useSoftTabs:!0,highlightActiveLine:!1,showGutter:!0,showFoldWidgets:!0,readOnly:!1}),b.setOptions({mode:"ace/mode/html",theme:"ace/theme/tomorrow_night_eighties",tabSize:2,showPrintMargin:!1,wrap:!0,useWorker:!0,fontSize:12,showInvisibles:!1,behavioursEnabled:!0,useSoftTabs:!0,highlightActiveLine:!1,showGutter:!0,showFoldWidgets:!0,readOnly:!1});var c=(document.querySelector("#action-settings"),document.querySelector("#action-spaces")),d=document.querySelector("#action-prettify"),e=(document.querySelector("#settings"),document.querySelector("select[name=lang]")),f=document.querySelector("select[name=tabs]");c.addEventListener("click",function(){a.setOption("useSoftTabs",c.checked),b.setOption("useSoftTabs",c.checked)}),e.addEventListener("change",function(){a.setOption("mode","ace/mode/"+e.value),b.setOption("mode","ace/mode/"+e.value)}),f.addEventListener("change",function(){a.setOption("tabSize",f.value),b.setOption("tabSize",f.value)}),d.addEventListener("click",function(){var c,d=a.getValue();if("js"===e.value)try{c=js_beautify(d)}catch(f){console.log(f)}else if("javascript"===e.value)try{c=js_beautify(d)}catch(f){console.log(f)}else if("html"===e.value)try{c=html_beautify(d)}catch(f){console.log(f)}else{if("css"!==e.value)throw new Error("Unsupported or invalid language selected");try{c=css_beautify(d)}catch(f){console.log(f)}}b.setValue(c),a.clearSelection(),b.clearSelection()})});